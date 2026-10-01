'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { BookOpen, Mail, PenLine, Phone } from 'lucide-react'
import { Blog } from '@/components/about/Blog'
import { GitHub } from '@/components/about/GitHub'
import { ReadMore, ReadMoreList } from '@/components/about/ReadMore'
import { useI18n } from '@/components/providers/I18nProvider'
import { BackLink } from '@/components/ui/BackLink'
import { Button, buttonClass } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { Transition } from '@/components/ui/Transition'
import { useData } from '@/lib/data'

const GITHUB_PATH =
  'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'

const tabs = [
  { key: 'rean', label: 'nav.readMore' },
  { key: 'blog', label: 'nav.blog' },
  { key: 'github', label: 'nav.github' },
] as const

type TabKey = (typeof tabs)[number]['key']

const isTabKey = (value: string | null): value is TabKey => tabs.some(tab => tab.key === value)

/** Opens a mailto:/tel: link from a button, so the address never shows on hover. */
const openLink = (href: string) => {
  window.location.href = href
}

/** Profile header, bio, quick facts and social links. */
export function MyInfo() {
  const { personalInfo, socials } = useData()
  const { t } = useI18n()

  const facts = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Role', value: personalInfo.role },
    {
      label: 'Email',
      value: (
        <Button variant="main" onClick={() => openLink(`mailto:${personalInfo.email}`)}>
          <Mail className="h-4 w-4 flex-shrink-0" aria-hidden />
          Send Email
        </Button>
      ),
    },
    {
      label: 'Phone',
      value: (
        <Button variant="main" onClick={() => openLink(`tel:${personalInfo.phone.replace(/\s/g, '')}`)}>
          <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
          Call Me
        </Button>
      ),
    },
    { label: 'Location', value: personalInfo.location },
  ]

  const connect = [
    { label: 'GitHub', href: personalInfo.github, handle: '@koeuk' },
    { label: 'LinkedIn', href: personalInfo.linkedin, handle: 'koeuk-kos' },
    { label: 'Telegram', href: personalInfo.telegram, handle: '@koeuk24' },
    { label: 'Facebook', href: personalInfo.facebook, handle: '@koeuk25' },
  ]

  return (
    <>
      <header className="reveal mb-12">
        <div className="mb-8">
          <BackLink href="/">{t('nav.home')}</BackLink>
        </div>
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-heading uppercase tracking-widest">{t('nav.myInfo')}</p>
            <h1 className="mt-3 font-heading text-2xl sm:text-4xl">{personalInfo.name}</h1>
            <p className="mt-2 text-lg sm:text-xl">{personalInfo.role}</p>
          </div>
          <img
            src={personalInfo.image}
            alt={personalInfo.name}
            className="neo h-28 w-28 flex-shrink-0 bg-main object-cover sm:h-36 sm:w-36"
          />
        </div>
      </header>

      <Section title={t('nav.about')}>
        <p className="leading-relaxed sm:text-lg">{personalInfo.bio}</p>
      </Section>

      <Section title="Quick Facts">
        <Card as="dl" className="p-0 sm:p-0">
          {facts.map(fact => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 border-b-2 border-border px-4 py-3 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5"
            >
              <dt className="text-xs font-heading uppercase tracking-widest">{fact.label}</dt>
              <dd className="min-w-0 sm:text-right">{fact.value}</dd>
            </div>
          ))}
        </Card>
      </Section>

      <Section title="Connect">
        <div className="flex flex-wrap gap-4">
          {connect.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="neo neo-press reveal-on-scroll flex min-w-0 items-center gap-3 bg-bw px-4 py-3"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 flex-shrink-0" fill="currentColor" aria-hidden="true">
                <path d={socials.find(social => social.href === link.href)?.path} />
              </svg>
              <span className="block min-w-0">
                <span className="block text-xs font-heading uppercase tracking-widest">{link.label}</span>
                <span className="block truncate text-sm">{link.handle}</span>
              </span>
            </a>
          ))}
        </div>
      </Section>
    </>
  )
}

function TabIcon({ tab }: { tab: TabKey }) {
  if (tab === 'rean') return <BookOpen className="h-4 w-4" aria-hidden />
  if (tab === 'blog') return <PenLine className="h-4 w-4" aria-hidden />
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={GITHUB_PATH} />
    </svg>
  )
}

function TabList({ active, onSelect }: { active: TabKey; onSelect?: (tab: TabKey) => void }) {
  const { t } = useI18n()
  return (
    <div role="tablist" aria-label={t('nav.myInfo')} className="mb-12 flex flex-wrap gap-3">
      {tabs.map(tab => (
        <button
          key={tab.key}
          type="button"
          role="tab"
          id={`my-info-tab-${tab.key}`}
          aria-selected={active === tab.key}
          aria-controls="my-info-panel"
          onClick={() => onSelect?.(tab.key)}
          className={buttonClass(active === tab.key ? 'main' : 'neutral')}
        >
          <TabIcon tab={tab.key} />
          {t(tab.label)}
        </button>
      ))}
    </div>
  )
}

/**
 * Read More / Blog / GitHub tabs. The open tab is the `?section=` query
 * (absent means Read More), replaced in the URL on switch like the Nuxt page.
 * Render inside <Suspense> — it reads the search params.
 */
export function MyInfoTabs() {
  const searchParams = useSearchParams()
  const router = useRouter()
  // Never null under the App Router; the fallbacks only satisfy the types.
  const pathname = usePathname() ?? '/about-me/my-info'
  const section = searchParams?.get('section') ?? null
  const activeTab: TabKey = isTabKey(section) ? section : 'rean'

  const selectTab = (tab: TabKey) => {
    const params = new URLSearchParams(searchParams?.toString())
    if (tab === 'rean') params.delete('section')
    else params.set('section', tab)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  return (
    <section>
      <TabList active={activeTab} onSelect={selectTab} />
      <Transition name="fade">
        <div key={activeTab} role="tabpanel" id="my-info-panel" aria-labelledby={`my-info-tab-${activeTab}`}>
          {activeTab === 'rean' ? <ReadMore heading /> : activeTab === 'blog' ? <Blog /> : <GitHub />}
        </div>
      </Transition>
    </section>
  )
}

/** Static stand-in for MyInfoTabs until the query can be read: the default Read More tab. */
export function MyInfoTabsFallback() {
  return (
    <section>
      <TabList active="rean" />
      <div role="tabpanel" id="my-info-panel" aria-labelledby="my-info-tab-rean">
        <ReadMoreList heading />
      </div>
    </section>
  )
}
