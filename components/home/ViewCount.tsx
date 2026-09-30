'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'

/**
 * Page-view badge. The total lives on Abacus (abacus.jasoncameron.dev), a free
 * no-account counter; the site is static, so the browser calls it directly.
 *
 * A tab counts once: sessionStorage marks it, so refreshes only read (get)
 * while a later return visit counts (hit) again.
 */
const COUNTER_URL = 'https://abacus.jasoncameron.dev'
const NAMESPACE = 'koeuk-site-b7f3ac91'
const KEY = 'views-live'
const COUNTED_KEY = 'koeuk:viewed'

// Crawlers and link unfurlers may read the number, but never add to it.
const BOT_PATTERN = /bot|crawl|spider|slurp|preview|facebookexternalhit|lighthouse|headlesschrome|monitor/i

function alreadyCounted() {
  try {
    return sessionStorage.getItem(COUNTED_KEY) === '1'
  } catch {
    // Storage can be blocked outright; treat that as a fresh view.
    return false
  }
}

function rememberCounted() {
  try {
    sessionStorage.setItem(COUNTED_KEY, '1')
  } catch {
    // The view still counted, it just cannot be remembered.
  }
}

async function ask(action: 'get' | 'hit') {
  const reply = await fetch(`${COUNTER_URL}/${action}/${NAMESPACE}/${KEY}`, { cache: 'no-store' })
  // A counter nobody has hit yet does not exist (404): nothing to show.
  if (!reply.ok) return null
  const views = Number(((await reply.json()) as { value?: number })?.value)
  return Number.isFinite(views) && views > 0 ? views : null
}

export function ViewCount() {
  const { t } = useI18n()
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const counted = alreadyCounted()
    // Local development and bots read the live number but never add to it.
    const mayCount = process.env.NODE_ENV === 'production' && !BOT_PATTERN.test(navigator.userAgent)

    const run = async () => {
      let total = await ask(counted || !mayCount ? 'get' : 'hit')

      // An empty counter means it was reset since this tab was counted, so the
      // flag is stale — count again rather than hiding the badge forever.
      if (counted && total === null && mayCount) total = await ask('hit')

      if (total !== null) {
        setViews(total)
        if (mayCount) rememberCounted()
      }
    }

    // The counter is decorative — if it cannot be read, the badge never appears.
    run().catch(() => {})
  }, [])

  if (views === null) return null

  return (
    <p className="neo inline-flex items-center gap-2 bg-bw px-3 py-1.5 text-sm" title={t('hero.viewsTitle')}>
      <span className="h-2.5 w-2.5 rounded-full border-2 border-border bg-main" aria-hidden="true" />
      <span className="font-heading tabular-nums">{views.toLocaleString('en-US')}</span>
      <span>{t(views === 1 ? 'hero.view' : 'hero.views')}</span>
    </p>
  )
}
