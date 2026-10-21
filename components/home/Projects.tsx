'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { useData } from '@/lib/data'

/** Personal projects, newest first (the order comes from lib/data). */
export function Projects() {
  const { experiences } = useData()
  const { t } = useI18n()

  return (
    <Section
      id="personal-projects"
      title={t('experience.title')}
      aside={
        <Link href="/experience" className="font-heading underline">
          {t('skills.seeMore')}
        </Link>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {experiences.slice(0, 8).map(experience => (
          <Link
            key={experience.id}
            href={experience.path ?? `/experience/${experience.id}`}
            className="neo neo-press reveal-on-scroll group flex flex-col bg-main p-3.5 sm:p-4 text-main-fg h-full"
          >
            {experience.images?.[0] && (
              <div className="neo mb-4 aspect-video overflow-hidden bg-bw">
                <img
                  src={experience.images[0]}
                  alt={t(`experience.${experience.id}.role`)}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            <h3 className="font-heading text-base sm:text-lg leading-snug">{t(`experience.${experience.id}.role`)}</h3>
            <p className="mt-1 text-xs opacity-90 truncate">
              {t(`experience.${experience.id}.company`)} · <span className="font-heading">{experience.period}</span>
            </p>

            <p className="mt-2.5 line-clamp-3 text-xs leading-relaxed flex-grow">{t(`experience.${experience.id}.description`)}</p>

            <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
              {experience.technologies.slice(0, 3).map(technology => (
                <Tag key={technology} className="px-1.5 py-0.5 text-[11px]">{technology}</Tag>
              ))}
              {experience.technologies.length > 3 && (
                <span className="text-[11px] font-heading">+{experience.technologies.length - 3}</span>
              )}
              <ArrowUpRight
                className="ml-auto h-4 w-4 flex-shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
