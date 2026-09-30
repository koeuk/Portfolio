'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Transition } from '@/components/ui/Transition'

export function BackToTop() {
  const { t } = useI18n()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Transition name="fade" show={isVisible}>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={t('common.backToTop')}
        className="neo neo-press fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center bg-main text-main-fg"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </Transition>
  )
}
