/**
 * Unique-visitor counter.
 *
 * The total lives on Abacus (abacus.jasoncameron.dev), a free no-account counter,
 * so the portfolio needs no database of its own. The call is proxied through this
 * route rather than made from the browser: visitors never talk to a third party,
 * and the counter key stays out of the shipped JavaScript.
 *
 * Uniqueness is decided by the browser — VisitorCount.vue remembers that it has
 * already been counted and then asks to read (GET) instead of increment (POST).
 */

// Crawlers and link unfurlers may read the number, but never add to it.
const BOT_PATTERN = /bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headlesschrome|monitor|curl|wget/i

const COUNTER_ORIGIN = 'https://abacus.jasoncameron.dev'

interface ViewsResponse {
  visitors: number | null
}

// A counter nobody has hit yet does not exist, which is a 404 rather than a fault.
function isMissingCounter(error: unknown) {
  return (error as { statusCode?: number })?.statusCode === 404
}

export default defineEventHandler(async (event): Promise<ViewsResponse> => {
  const { visitorCounterNamespace: namespace, visitorCounterKey: key } = useRuntimeConfig(event)
  if (!namespace || !key) return { visitors: null }

  const agent = getRequestHeader(event, 'user-agent') || ''
  const shouldIncrement = event.method === 'POST' && !BOT_PATTERN.test(agent)
  const action = shouldIncrement ? 'hit' : 'get'

  try {
    const reply = await $fetch<{ value?: number }>(`${COUNTER_ORIGIN}/${action}/${namespace}/${key}`, {
      timeout: 4000,
    })

    const visitors = Number(reply?.value)
    return { visitors: Number.isFinite(visitors) ? visitors : null }
  } catch (error) {
    if (!isMissingCounter(error)) console.error('[views] counter unavailable:', error)

    // Null keeps the badge hidden rather than showing a number that is not real.
    return { visitors: null }
  }
})
