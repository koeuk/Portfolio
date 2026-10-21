'use client'

import { ExternalLink } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'

interface Job {
  key: string
  current: boolean
  image: string
  link?: string
  technologies: string[]
}

const jobs: Job[] = [
  {
    key: 'opsMobileInternship',
    current: true,
    image: '/images/work/ops.png',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Tailwind CSS', 'REST API'],
  },
  {
    key: 'staff',
    current: true,
    image: '/images/work/vehabooking.png',
    link: 'https://vehabooking.com/',
    technologies: ['Vue.js', 'Nuxt.js', 'Shadcn Vue', 'Tailwind CSS', 'Laravel', 'PHP', 'REST API'],
  },
  {
    key: 'internship',
    current: false,
    image: '/images/work/itsolution.svg',
    technologies: ['Laravel', 'Vue.js', 'Vuetify', 'Tailwind CSS', 'Chart.js'],
  },
]

export function WorkExperience() {
  const { t } = useI18n()

  return (
    <Section id="work-experience" title={t('workExperience.title')}>
      <ol className="flex flex-col gap-4 sm:gap-5">
        {jobs.map(job => (
          <Card as="li" key={job.key} tone={job.current ? 'main' : 'bw'} className="reveal-on-scroll p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Left: Logo & Job Details */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="neo h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden bg-white p-1.5 flex items-center justify-center mt-0.5 sm:mt-0">
                  <img
                    src={job.image}
                    alt={t(`workExperience.${job.key}.role`)}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg sm:text-xl leading-snug">
                    {t(`workExperience.${job.key}.role`)}
                  </h3>
                  {job.technologies.length > 0 && (
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      {job.technologies.map(technology => (
                        <Tag key={technology} className="px-2 py-0.5 text-xs">
                          {technology}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Year Period & View Link */}
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-center flex-shrink-0 pt-2 sm:pt-0 border-t border-border/30 sm:border-0">
                <p className="text-sm font-heading whitespace-nowrap">{t(`workExperience.${job.key}.period`)}</p>
                {job.link && (
                  <Button
                    href={job.link}
                    variant={job.current ? 'neutral' : 'main'}
                    className="px-3.5 py-1 text-xs font-heading"
                  >
                    <span>{t('workExperience.view')}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </ol>
    </Section>
  )
}
