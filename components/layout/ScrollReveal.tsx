'use client'

import { useEffect } from 'react'

// Cards that arrive in the same frame fade in one after another, capped so a
// long grid never waits more than MAX_STAGGER steps.
const STAGGER_MS = 80
const MAX_STAGGER = 5

/**
 * Fades `.reveal-on-scroll` elements up the first time they scroll into view
 * (styles in globals.css). Renders nothing; mounted once in AppShell.
 */
export function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries
          .filter(entry => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          )
          .forEach((entry, index) => {
            const element = entry.target as HTMLElement
            observer.unobserve(element)
            element.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER) * STAGGER_MS}ms`)
            // A data attribute, not a class: React rewrites className on re-render and would drop it
            element.dataset.revealed = ''
          })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    let frame = 0
    const scan = () => {
      frame = 0
      document
        .querySelectorAll<HTMLElement>('.reveal-on-scroll:not([data-revealed])')
        .forEach(element => observer.observe(element))
    }

    scan()
    // Route changes and client-rendered lists add cards after the first scan
    const mutations = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(scan)
    })
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(frame)
      mutations.disconnect()
      observer.disconnect()
    }
  }, [])

  return null
}
