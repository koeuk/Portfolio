'use client'

import { useEffect, useState } from 'react'
import { FileText, MapPin } from 'lucide-react'
import { CvViewer } from '@/components/home/CvViewer'
import { ViewCount } from '@/components/home/ViewCount'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { useI18n } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'
import { Transition } from '@/components/ui/Transition'
import { useData } from '@/lib/data'

// Shown one at a time in the orange role box
const roleKeys = ['hero.roles.mobile', 'hero.roles.webDesign', 'hero.roles.frontend', 'hero.roles.backend', 'hero.roles.fullstack']

export function Hero() {
  const { personalInfo } = useData()
  const { t } = useI18n()
  const [roleIndex, setRoleIndex] = useState(0)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex(index => (index + 1) % roleKeys.length), 2600)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="reveal mb-20">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-heading text-3xl sm:text-5xl">{personalInfo.name}</h1>
          <p className="mt-2 text-lg sm:text-xl">{t('hero.role')}</p>
          <p className="mt-3 flex items-center gap-1.5 text-sm">
            <MapPin className="h-4 w-4" aria-hidden />
            {t('hero.location')}
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm">
            {/* Dot centred in an icon-sized box so the text lines up with the location above */}
            <span className="flex h-4 w-4 items-center justify-center" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full border-2 border-border bg-[oklch(72%_0.19_145)]" />
            </span>
            {t('hero.available')}
          </p>
          <LocalTime />
        </div>

        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="neo aspect-square w-full max-w-xs flex-shrink-0 self-center bg-main object-cover sm:h-36 sm:w-36 sm:self-auto"
        />
      </div>

      <p className="mt-8 text-base leading-relaxed sm:text-lg">{t('hero.blurb')}</p>

      <div className="neo neo-press mt-8 flex items-center justify-between gap-4 bg-main p-4 text-main-fg">
        <span className="whitespace-nowrap text-xs font-heading uppercase tracking-widest">{t('hero.rolesEyebrow')}</span>
        <span className="relative overflow-hidden text-right font-heading sm:text-lg" aria-live="polite">
          <Transition name="fade">
            <span key={roleIndex} className="block">
              {t(roleKeys[roleIndex])}
            </span>
          </Transition>
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button variant="main" onClick={() => setCvOpen(true)}>
          <FileText className="h-4 w-4" />
          {t('hero.viewCv')}
        </Button>
        <ViewCount />
      </div>

      <SocialLinks className="mt-12" />

      <CvViewer open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  )
}
