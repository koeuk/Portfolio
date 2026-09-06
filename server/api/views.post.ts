import { createHash } from 'node:crypto'
import type { H3Event } from 'h3'

/**
 * Unique-visitor counter.
 *
 * Identity is a SHA-256 of IP + user agent, so nothing that identifies a person
 * is ever stored — only the digest lands in Redis. Uniqueness is enforced by the
 * set itself: SADD reports whether the visitor was new, SCARD returns the total.
 */
const VISITORS_KEY = 'portfolio:visitors'

// Crawlers and link unfurlers would quietly inflate the number, so they are
// allowed to read the count but never join the set.
const BOT_PATTERN = /bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headlesschrome|monitor|curl|wget/i

interface UpstashReply {
  result?: unknown
  error?: string
}

interface ViewsResponse {
  configured: boolean
  visitors: number | null
}

function credentials(event: H3Event) {
  const config = useRuntimeConfig(event)

  // Vercel's Upstash integration injects UPSTASH_*; older KV stores use KV_*.
  const url =
    config.upstashRedisUrl ||
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL
  const token =
    config.upstashRedisToken ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN

  if (!url || !token) return null
  return { url: url.replace(/\/+$/, ''), token }
}

function fingerprint(event: H3Event) {
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown-ip'
  const agent = getRequestHeader(event, 'user-agent') || 'unknown-agent'

  return createHash('sha256').update(`${ip}|${agent}|koeuk-portfolio`).digest('hex')
}

export default defineEventHandler(async (event): Promise<ViewsResponse> => {
  const store = credentials(event)

  // Without a store there is no honest number to show, so the badge stays hidden.
  if (!store) return { configured: false, visitors: null }

  const agent = getRequestHeader(event, 'user-agent') || ''
  const isBot = BOT_PATTERN.test(agent)

  const commands = isBot
    ? [['SCARD', VISITORS_KEY]]
    : [
        ['SADD', VISITORS_KEY, fingerprint(event)],
        ['SCARD', VISITORS_KEY],
      ]

  try {
    const replies = await $fetch<UpstashReply[]>(`${store.url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${store.token}` },
      body: commands,
      timeout: 3000,
    })

    const total = replies?.[replies.length - 1]
    if (total?.error) throw new Error(total.error)

    const visitors = Number(total?.result)
    if (!Number.isFinite(visitors)) throw new Error('Unexpected response from Upstash')

    return { configured: true, visitors }
  } catch (error) {
    console.error('[views] could not record the visit:', error)
    return { configured: true, visitors: null }
  }
})
