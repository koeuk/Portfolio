'use client'

import { useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Button, buttonClass } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { Gallery } from '@/components/ui/Gallery'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { useData } from '@/lib/data'

const impactPoints = [
  'Developed key user-facing features and modular components.',
  'Optimized application performance and responsiveness.',
  'Collaborated in a cross-functional team using Agile methodologies.',
]

const keyDifferenceColumns = ['feature', 'web', 'admin'] as const

// "/images/experience/1/manage-users.png" → "manage users"
const screenshotName = (src: string) =>
  (src.split('/').pop() ?? src).replace(/\.[a-z]+$/i, '').replace(/[-_]+/g, ' ')

function GitHubIcon() {
  const path = useData().socials.find(social => social.ariaLabel === 'GitHub')?.path
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

/** One personal project: links, demo account, screenshots and the write-up. */
export function ExperienceDetail({ id }: { id: string }) {
  const { experiences } = useData()
  const { t } = useI18n()
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const experience = experiences.find(item => item.id === id)
  if (!experience) return null

  const role = t(`experience.${id}.role`)
  const images = (experience.images ?? []).map(src => ({ src, alt: `${role}: ${screenshotName(src)}` }))
  const demoFields = experience.demoLogin
    ? [
        { key: 'email', value: experience.demoLogin.email },
        { key: 'password', value: experience.demoLogin.password },
      ]
    : []

  const copyDemo = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedField(key)
      setTimeout(() => setCopiedField(current => (current === key ? null : current)), 1500)
    } catch {
      // Clipboard unavailable (e.g. insecure context); the value is still visible to copy by hand.
    }
  }

  return (
    <Container wide className="[&>*:last-child]:mb-0">
      <PageHeader
        backHref="/#personal-projects"
        title={role}
        subtitle={t(`experience.${id}.company`)}
        actions={
          <>
            <span className="neo-chip px-3 py-1.5 font-heading text-sm">
              {experience.period}
            </span>
            {experience.githubUrl && (
              <Button href={experience.githubUrl} variant="main">
                <GitHubIcon />
                GitHub
              </Button>
            )}
            {experience.liveUrl && (
              <Button href={experience.liveUrl} variant="main">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Button>
            )}
            {experience.repos?.map(repo => (
              <Button key={repo.url} href={repo.url}>
                <GitHubIcon />
                {repo.label}
              </Button>
            ))}
          </>
        }
      />

      {experience.demoLogin && (
        <Card as="section" className="mb-16" aria-labelledby="demo-account">
          <h2 id="demo-account" className="font-heading text-lg sm:text-xl">
            {t('experience.demo.title')}
          </h2>
          <p className="mt-2 leading-relaxed">{t('experience.demo.note')}</p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row">
            {demoFields.map(field => (
              <div
                key={field.key}
                className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-base border-2 border-border bg-bg px-3 py-2"
              >
                <div className="min-w-0">
                  <p className="text-xs font-heading uppercase tracking-widest">{t(`experience.demo.${field.key}`)}</p>
                  <p className="truncate font-mono">{field.value}</p>
                </div>
                <button
                  type="button"
                  onClick={() => copyDemo(field.key, field.value)}
                  className={buttonClass('neutral', 'flex-shrink-0 px-3 py-1 text-xs sm:text-sm')}
                >
                  {copiedField === field.key ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedField === field.key ? t('experience.demo.copied') : t('experience.demo.copy')}
                </button>
              </div>
            ))}
          </div>

          {experience.liveUrl && (
            <Button href={experience.liveUrl} variant="main" className="mt-5">
              <ExternalLink className="h-4 w-4" />
              {t('experience.demo.open')}
            </Button>
          )}
        </Card>
      )}

      {images.length > 0 && (
        <section className="mb-16" aria-label="Screenshots">
          <Gallery images={images} />
        </section>
      )}

      <Section title="Role & Responsibility">
        <p className="text-base leading-relaxed sm:text-lg">{t(`experience.${id}.description`)}</p>
      </Section>

      <Section title="Impact & Achievements">
        <ul className="flex flex-col gap-3 leading-relaxed sm:text-lg">
          {impactPoints.map(point => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-[0.45em] h-2.5 w-2.5 flex-shrink-0 border-2 border-border bg-main" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-3">
          {experience.technologies.map(technology => (
            <Tag key={technology} className="px-3 py-1 text-sm">
              {technology}
            </Tag>
          ))}
        </div>
      </Section>

      {experience.categories?.map(section => (
        <Section key={section.id} title={t(`experience.${id}.${section.id}.title`)}>
          <div className="flex flex-col gap-6">
            {section.items.map(category => (
              <Card key={category.id}>
                <h3 className="font-heading text-lg sm:text-xl">
                  {t(`experience.${id}.${section.id}.${category.id}.label`)}
                </h3>
                {category.subheading && (
                  <p className="mt-2 font-heading text-sm leading-relaxed sm:text-base">{category.subheading}</p>
                )}
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed">
                  {category.points.map(point => (
                    <li key={point}>{t(`experience.${id}.${section.id}.${category.id}.${point}`)}</li>
                  ))}
                </ul>
                {category.technologies && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.technologies.map(technology => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Section>
      ))}

      {experience.keyDifferences && (
        <Section title={t(`experience.${id}.key_differences.title`)}>
          <div className="neo overflow-x-auto bg-bw">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm sm:text-base">
              <thead>
                <tr className="bg-main text-main-fg">
                  {keyDifferenceColumns.map(column => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b-2 border-border px-4 py-3 font-heading [&:not(:first-child)]:border-l-2"
                    >
                      {t(`experience.${id}.key_differences.${column}.title`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {experience.keyDifferences.map(row => (
                  <tr key={row.id} className="border-b-2 border-border last:border-b-0">
                    {keyDifferenceColumns.map(column =>
                      column === 'feature' ? (
                        <th key={column} scope="row" className="px-4 py-3 align-top font-heading">
                          {t(`experience.${id}.key_differences.${row.id}.feature`)}
                        </th>
                      ) : (
                        <td key={column} className="border-l-2 border-border px-4 py-3 align-top leading-relaxed">
                          {t(`experience.${id}.key_differences.${row.id}.${column}`)}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}
    </Container>
  )
}
