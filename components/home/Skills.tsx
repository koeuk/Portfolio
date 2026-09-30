'use client'

import Link from 'next/link'
import { useI18n } from '@/components/providers/I18nProvider'
import { Section } from '@/components/ui/Section'
import { useData, type Skill } from '@/lib/data'
import { useSkillIcons } from '@/lib/skill-icons'

const categories: Skill['category'][] = ['frontend', 'backend', 'tools']

export function Skills() {
  const { skills } = useData()
  const { t } = useI18n()
  const { getIcon } = useSkillIcons()

  return (
    <Section
      id="skills"
      title={t('skills.title')}
      aside={
        <Link href="/skills" className="font-heading underline">
          {t('skills.seeMore')}
        </Link>
      }
    >
      <p className="-mt-4 mb-8">{t('skills.subtitle')}</p>

      {categories.map(category => (
        <div key={category} className="mb-10 last:mb-0">
          <h3 className="mb-4 font-heading text-lg sm:text-xl">{t(`skills.${category}`)}</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <div key={skill.name} className="neo neo-press flex flex-col gap-2.5 bg-bw px-3 py-2.5 text-sm">
                  <span className="flex items-center gap-2">
                    <span
                      className="h-6 w-6 flex-shrink-0 [&_svg]:h-full [&_svg]:w-full"
                      aria-hidden="true"
                      dangerouslySetInnerHTML={{ __html: getIcon(skill.name) }}
                    />
                    <span className="min-w-0 truncate">{skill.name}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="block h-3 flex-1 overflow-hidden rounded-base border-2 border-border bg-bg"
                    >
                      <span className="block h-full border-r-2 border-border bg-main" style={{ width: `${skill.level}%` }} />
                    </span>
                    <span className="w-8 text-right text-xs font-heading">{skill.level}%</span>
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
