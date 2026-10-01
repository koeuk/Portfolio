'use client'

import { useI18n } from '@/components/providers/I18nProvider'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'

const jobs = [
  {
    key: 'opsMobileInternship',
    current: true,
    technologies: [],
  },
  {
    key: 'staff',
    current: true,
    technologies: ['Vue.js', 'Nuxt.js', 'Shadcn Vue', 'Tailwind CSS', 'Laravel', 'PHP', 'REST API'],
  },
  {
    key: 'internship',
    current: false,
    technologies: ['Laravel', 'Vue.js', 'Vuetify', 'Tailwind CSS', 'Chart.js'],
  },
]

export function WorkExperience() {
  const { t } = useI18n()

  return (
    <Section id="work-experience" title={t('workExperience.title')}>
      <ol className="flex flex-col gap-6">
        {jobs.map(job => (
          <Card as="li" key={job.key} tone={job.current ? 'main' : 'bw'}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-lg sm:text-xl">{t(`workExperience.${job.key}.role`)}</h3>
              <p className="text-sm font-heading">{t(`workExperience.${job.key}.period`)}</p>
            </div>
            <p className="mt-3 leading-relaxed">{t(`workExperience.${job.key}.description`)}</p>
            {job.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map(technology => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            )}
          </Card>
        ))}
      </ol>
    </Section>
  )
}
