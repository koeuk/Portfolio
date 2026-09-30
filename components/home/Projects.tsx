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
      <div className="grid gap-6 sm:grid-cols-2">
        {experiences.slice(0, 8).map(experience => (
          <Link
            key={experience.id}
            href={experience.path ?? `/experience/${experience.id}`}
            className="neo neo-press group flex flex-col bg-main p-4 text-main-fg sm:p-5"
          >
            {experience.images?.[0] && (
              <div className="neo mb-5 aspect-video overflow-hidden bg-bw">
                <img
                  src={experience.images[0]}
                  alt={t(`experience.${experience.id}.role`)}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            )}

            <h3 className="font-heading text-lg sm:text-xl">{t(`experience.${experience.id}.role`)}</h3>
            <p className="mt-1 text-sm">
              {t(`experience.${experience.id}.company`)} · <span className="font-heading">{experience.period}</span>
            </p>

            <p className="mt-3 line-clamp-3">{t(`experience.${experience.id}.description`)}</p>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
              {experience.technologies.slice(0, 4).map(technology => (
                <Tag key={technology}>{technology}</Tag>
              ))}
              {experience.technologies.length > 4 && (
                <span className="text-xs font-heading">+{experience.technologies.length - 4}</span>
              )}
              <ArrowUpRight
                className="ml-auto h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}
