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
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src={personalInfo.image}
          alt={personalInfo.name}
          className="neo h-40 w-40 flex-shrink-0 bg-main object-cover"
          loading="lazy"
        />
        <div>
          <p className="leading-relaxed sm:text-lg">{t('about.bio')}</p>

          <h3 className="mb-3 mt-8 font-heading">{t('about.keySkills')}</h3>
          <div className="flex flex-wrap gap-2">
            {badgeKeys.map(badge => (
              <Tag key={badge}>{t(badge)}</Tag>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about-me/my-info" variant="main">
              <UserRound className="h-4 w-4" />
              {t('nav.myInfo')}
            </Button>
            <Button href="/resume.pdf">
              <Download className="h-4 w-4" />
              {t('about.downloadResume')}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
