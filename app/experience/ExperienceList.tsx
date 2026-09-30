'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { buttonClass } from '@/components/ui/Button'
import { PageHeader } from '@/components/ui/PageHeader'
import { Tag } from '@/components/ui/Tag'
import { useData } from '@/lib/data'

// Only projects from these years are listed, and each gets a filter tab.
const allowedYears = ['2026', '2025', '2024']
const ALL = 'All'

/** All personal projects, newest first (the order comes from lib/data), with a year filter. */
export function ExperienceList() {
  const { experiences } = useData()
  const { t } = useI18n()
  const [selectedYear, setSelectedYear] = useState(ALL)

  const listed = experiences.filter(experience => allowedYears.some(year => experience.period.includes(year)))
  const years = allowedYears.filter(year => listed.some(experience => experience.period.includes(year)))
  const shown = selectedYear === ALL ? listed : listed.filter(experience => experience.period.includes(selectedYear))

  return (
    <>
      <PageHeader
        backHref="/#personal-projects"
        title={t('experience.title')}
        lead="A journey through my professional career and the technologies I've mastered along the way."
      />

      <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filter by year">
        {[ALL, ...years].map(year => (
          <button
            key={year}
            type="button"
            onClick={() => setSelectedYear(year)}
            aria-pressed={selectedYear === year}
            className={buttonClass(selectedYear === year ? 'main' : 'neutral', 'px-4 py-1.5 font-heading')}
          >
            {year === ALL ? 'All Experiences' : year}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {shown.map(experience => (
          <Link
            key={experience.id}
            href={experience.path ?? `/experience/${experience.id}`}
            className="neo neo-press group block bg-main p-4 text-main-fg sm:p-5"
          >
            {experience.images?.[0] && (
              <div className="neo mb-5 aspect-[71/26] overflow-hidden bg-bw">
                <img
                  src={experience.images[0]}
                  alt={t(`experience.${experience.id}.role`)}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl sm:text-2xl">{t(`experience.${experience.id}.role`)}</h2>
                <p className="mt-1">{t(`experience.${experience.id}.company`)}</p>
              </div>
              <span className="flex-shrink-0 font-heading">{experience.period}</span>
            </div>

            <p className="mt-3 line-clamp-3">{t(`experience.${experience.id}.description`)}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {experience.technologies.map(technology => (
                <Tag key={technology}>{technology}</Tag>
              ))}
              <ArrowUpRight
                className="ml-auto h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
