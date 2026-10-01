'use client'

import { Download, UserRound } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { useData } from '@/lib/data'

const badgeKeys = [
  'badge.frontend',
  'badge.responsive',
  'badge.typescript',
  'badge.frameworks',
  'badge.uiux',
  'badge.problemSolving',
]

export function About() {
  const { personalInfo } = useData()
  const { t } = useI18n()

  return (
    <Section id="about" title={t('about.title')} className="mb-0">
      {/* Phones: buttons stacked beside the photo, text below. sm+: photo left, text then buttons right. */}
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-8 sm:gap-x-8">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="neo col-start-1 row-start-1 h-28 w-28 bg-main object-cover sm:row-span-2 sm:h-40 sm:w-40"
          loading="lazy"
        />
        <div className="col-span-2 row-start-2 sm:col-span-1 sm:col-start-2 sm:row-start-1">
          <p className="leading-relaxed sm:text-lg">{t('about.bio')}</p>

          <h3 className="mb-3 mt-8 font-heading">{t('about.keySkills')}</h3>
          <div className="flex flex-wrap gap-2">
            {badgeKeys.map(badge => (
              <Tag key={badge}>{t(badge)}</Tag>
            ))}
          </div>
        </div>

        <div className="col-start-2 row-start-1 flex flex-col justify-center gap-4 sm:row-start-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-start">
          <Button href="/about-me/my-info" variant="main" className="px-2 sm:px-4">
            <UserRound className="h-4 w-4" />
            {t('nav.myInfo')}
          </Button>
          <Button href="/resume.pdf" className="px-2 sm:px-4">
            <Download className="h-4 w-4" />
            {t('about.downloadResume')}
          </Button>
        </div>
      </div>
    </Section>
  )
}
