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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map(experience => (
          <Link
            key={experience.id}
            href={experience.path ?? `/experience/${experience.id}`}
            className="neo neo-press reveal-on-scroll group flex flex-col bg-main p-4 text-main-fg sm:p-5 h-full"
          >
            {experience.images?.[0] && (
              <div className="neo mb-4 aspect-[16/10] overflow-hidden bg-bw">
                <img
                  src={experience.images[0]}
                  alt={t(`experience.${experience.id}.role`)}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h2 className="font-heading text-lg sm:text-xl leading-snug">{t(`experience.${experience.id}.role`)}</h2>
                <p className="mt-1 text-xs sm:text-sm line-clamp-1">{t(`experience.${experience.id}.company`)}</p>
              </div>
              <span className="flex-shrink-0 text-xs sm:text-sm font-heading">{experience.period}</span>
            </div>

            <p className="mt-3 line-clamp-3 text-xs sm:text-sm leading-relaxed flex-grow">
              {t(`experience.${experience.id}.description`)}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-1">
              {experience.technologies.map(technology => (
                <Tag key={technology} className="px-2 py-0.5 text-xs">
                  {technology}
                </Tag>
              ))}
              <ArrowUpRight
                className="ml-auto h-5 w-5 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
