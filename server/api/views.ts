/**
 * Page-view counter.
 *
 * The total lives on Abacus (abacus.jasoncameron.dev), a free no-account counter,
 * so the portfolio needs no database of its own. The call is proxied through this
 * route rather than made from the browser: visitors never talk to a third party,
 * and the counter key stays out of the shipped JavaScript.
 *
 * ViewCount.vue decides what counts as a view: it marks the tab once counted and
 * then asks to read (GET) instead of increment (POST), so refreshes add nothing
 * while a later return visit counts again.
 */

// Crawlers and link unfurlers may read the number, but never add to it.
const BOT_PATTERN = /bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headlesschrome|monitor|curl|wget/i

const COUNTER_ORIGIN = 'https://abacus.jasoncameron.dev'

interface ViewsResponse {
  views: number | null
}

// A counter nobody has hit yet does not exist, which is a 404 rather than a fault.
function isMissingCounter(error: unknown) {
  return (error as { statusCode?: number })?.statusCode === 404
}

export default defineEventHandler(async (event): Promise<ViewsResponse> => {
  const { visitorCounterNamespace: namespace, visitorCounterKey: key } = useRuntimeConfig(event)
  if (!namespace || !key) return { views: null }

  const agent = getRequestHeader(event, 'user-agent') || ''

  // Local development reads the live number but never adds to it, so working on
  // the site does not inflate the count real visitors see.
  const shouldIncrement = event.method === 'POST' && !BOT_PATTERN.test(agent) && !import.meta.dev
  const action = shouldIncrement ? 'hit' : 'get'

  try {
    const reply = await $fetch<{ value?: number }>(`${COUNTER_ORIGIN}/${action}/${namespace}/${key}`, {
      timeout: 4000,
    })

    const views = Number(reply?.value)
    return { views: Number.isFinite(views) ? views : null }
  } catch (error) {
    if (!isMissingCounter(error)) console.error('[views] counter unavailable:', error)

    // Null keeps the badge hidden rather than showing a number that is not real.
    return { views: null }
  }
})
