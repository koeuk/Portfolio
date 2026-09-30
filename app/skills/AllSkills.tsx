'use client'

import Link from 'next/link'
import { useI18n } from '@/components/providers/I18nProvider'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
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

const categories: { key: Skill['category']; emoji: string }[] = [
  { key: 'frontend', emoji: '🎨' },
  { key: 'backend', emoji: '🖥' },
  { key: 'tools', emoji: '🛠' },
]

export function AllSkills() {
  const { skills } = useData()
  const { t } = useI18n()
  const { getIcon } = useSkillIcons()

  return (
    <div className="[&>*:last-child]:mb-0">
      <PageHeader backHref="/#skills" backLabel={t('skills.backHome')} title={t('skills.all')} />

      {categories.map(category => {
        const categorySkills = skills.filter(skill => skill.category === category.key)
        if (categorySkills.length === 0) return null

        return (
          <Section
            key={category.key}
            title={
              <span className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-main text-lg"
                  aria-hidden="true"
                >
                  {category.emoji}
                </span>
                {t(`skills.${category.key}`)}
              </span>
            }
          >
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {categorySkills.map(skill => (
                <Link
                  key={skill.name}
                  href={skillLinkMap[skill.name] ?? '/read-more'}
                  className="neo neo-press flex flex-col items-center gap-3 bg-bw p-4 text-center sm:p-5"
                >
                  <span
                    className="h-12 w-12 [&_svg]:h-full [&_svg]:w-full"
                    aria-hidden="true"
                    dangerouslySetInnerHTML={{ __html: getIcon(skill.name) }}
                  />
                  <span className="font-heading">{skill.name}</span>
                  <Tag className="bg-main text-main-fg">{t(`skills.${skill.category}`)}</Tag>
                </Link>
              ))}
            </div>
          </Section>
        )
      })}
    </div>
  )
}
