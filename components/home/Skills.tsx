'use client'

import Link from 'next/link'
import { useI18n } from '@/components/providers/I18nProvider'
import { Section } from '@/components/ui/Section'
import { useData, type Skill } from '@/lib/data'
import { useSkillIcons } from '@/lib/skill-icons'

// Skills with a matching read-more article; the rest link to the article index.
const skillLinkMap: Record<string, string> = {
  HTML5: '/read-more/learn-html5',
  CSS3: '/read-more/learn-css3',
  JavaScript: '/read-more/learn-javascript',
  TypeScript: '/read-more/typescript-best-practices',
  'Vue.js': '/read-more/vue-composition-api',
  'Nuxt.js': '/read-more/learn-nuxt',
  'Tailwind CSS': '/read-more/learn-tailwind',
  Laravel: '/read-more/laravel-setup',
  Git: '/read-more/learn-git',
  'VS Code': '/read-more/learn-vscode',
}

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
          <div className="flex flex-wrap gap-4">
            {skills
              .filter(skill => skill.category === category)
              .map(skill => (
                <Link
                  key={skill.name}
                  href={skillLinkMap[skill.name] ?? '/read-more'}
                  title={skill.name}
                  className="neo neo-press flex items-center gap-2 bg-bw px-3 py-2 text-sm"
                >
                  <span
                    className="h-6 w-6 [&_svg]:h-full [&_svg]:w-full"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: getIcon(skill.name) }}
                  />
                  {skill.name}
                </Link>
              ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
