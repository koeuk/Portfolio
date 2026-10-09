'use client'

import { useCallback, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { ScreenshotGrid, type GalleryImage } from '@/components/ui/Gallery'
import { Lightbox } from '@/components/ui/Lightbox'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'
import { useData } from '@/lib/data'

const githubUrl = 'https://github.com/koeuk/POS-retail'
const liveUrl = 'https://pos-retail-ui.vercel.app/'

interface Shot {
  file: number
  caption: string
}

interface ShotGroup {
  title: string
  description: string
  shots: Shot[]
  /** Portrait (phone) screenshots */
  narrow?: boolean
}

const galleries: ShotGroup[] = [
  {
    title: 'Point of Sale',
    description:
      'The till: search or scan, pack-size prices, cart, and the three ways a sale can end — paid, on a customer tab, or taken for yourself.',
    shots: [
      { file: 8, caption: 'Putting a sale in debt — pick the customer who owes it' },
      { file: 9, caption: 'Partial payment now, the rest stays on the tab' },
      { file: 7, caption: 'Order history from every till, with debt badges' },
      { file: 5, caption: 'In Debt — what each customer still owes, record payments' },
      { file: 13, caption: 'Myself — stock taken for own use, valued at shelf price' },
    ],
  },
  {
    title: 'Back Office',
    description: 'Dashboard, catalogue and shop settings. Light and dark themes.',
    shots: [
      { file: 2, caption: "Dashboard — today's sales, owed to you, last 7 days" },
      { file: 3, caption: 'Dashboard in dark mode' },
      { file: 11, caption: 'Products with SKU, barcode, per-store stock and status' },
      { file: 1, caption: 'Categories with product counts and change history' },
      { file: 12, caption: 'Shop settings — USD / KHR, exchange rate, logo and favicon' },
    ],
  },
  {
    title: 'Authentication',
    description: 'Staff accounts are created by an administrator. Password reset uses a 6-digit emailed code.',
    shots: [
      { file: 6, caption: 'Log in' },
      { file: 4, caption: 'Forgot password — 6-digit code' },
    ],
  },
  {
    title: 'Public QR Menu',
    description: 'Customers scan a QR code and browse the shelf on their phone, with every pack size and price.',
    narrow: true,
    shots: [{ file: 14, caption: 'Mobile menu grouped by category' }],
  },
]

const toImage = (shot: Shot): GalleryImage => ({
  src: `/images/pos-retail/${shot.file}.png`,
  alt: `POS Retail — ${shot.caption}`,
  caption: shot.caption,
})

const groupImages = galleries.map(group => group.shots.map(toImage))
// One lightbox steps through every gallery; each grid opens at its offset.
const allShots = groupImages.flat()
const groupOffsets = groupImages.map((_, groupIndex) =>
  groupImages.slice(0, groupIndex).reduce((total, images) => total + images.length, 0),
)

const techStack = [
  'Laravel 12',
  'Vue 3',
  'TypeScript',
  'Inertia.js',
  'shadcn-vue',
  'Tailwind CSS',
  'MySQL',
  'Vite',
  'Scribe',
  'PHPUnit + GitHub Actions',
]

const stats = [
  { value: '3', label: 'Roles: Admin, Manager, Cashier' },
  { value: 'KHR / USD', label: 'Dual currency display' },
  { value: 'Offline', label: 'Sales queue and sync' },
  { value: '13', label: 'Screenshots' },
]

const features = [
  { icon: '📴', title: 'Offline-first till', description: 'Sales rung up without a connection are queued on the device and replayed to the server when it is back online.' },
  { icon: '៛', title: 'Riel-native pricing', description: 'Prices are stored in the shop currency with its own minor factor, so Riel never assumes cents. Toggle USD or KHR display with a configurable exchange rate.' },
  { icon: '📦', title: 'Pack sizes as one product', description: 'A can, a six-pack and a case are the same product with different prices, so the grid shows one card with a price range.' },
  { icon: '📒', title: 'Customer debt tabs', description: 'Put all or part of a bill on a named customer. Record payments as money comes in; a debt settles once paid in full.' },
  { icon: '🍽', title: 'Myself', description: 'Stock taken for own use goes down without counting as a sale, valued at shelf price for the week, month and year.' },
  { icon: '📱', title: 'Public QR menu', description: 'A no-login mobile menu customers reach by scanning a QR code, grouped by category with every pack size.' },
  { icon: '🏬', title: 'Per-store stock', description: 'Stock lives per store, not on the product. Order numbers encode store and register (S1-R1-…).' },
  { icon: '🔐', title: 'One permission path', description: 'Every feature is gated by a Permission enum, route middleware and a policy. Roles are only bundles of permissions.' },
  { icon: '🕵️', title: 'Audit trail', description: 'Model changes and money, auth and access events are logged with an explicit field list, so secrets never reach the activity log.' },
  { icon: '📊', title: 'Reports and dashboard', description: 'Today versus yesterday, average basket, sales for the last 7 days, owed to you, and per-cashier activity.' },
  { icon: '🎨', title: 'Branding and dark mode', description: 'Upload a logo and favicon, set the order number prefix, and switch between light and dark themes.' },
  { icon: '🌐', title: 'Khmer and English', description: 'Bilingual product and category names throughout the till, menu and back office.' },
]

const architecture = [
  { title: 'Enums first', description: 'Permission, Role, Action, OrderStatus, PaymentMethod and SaleType define the vocabulary the whole app agrees on.' },
  { title: 'Inertia pages', description: 'Web controllers return Inertia pages mapped straight to resources/js/pages; shared props carry auth.can to every screen.' },
  { title: 'Services', description: 'OrderTotals, OrderSyncService for offline replay, and SalesReporter keep business rules out of controllers.' },
  { title: 'Policies', description: 'Per-model authorisation, all routed through hasPermission, never a role check.' },
  { title: 'shadcn-vue UI', description: 'A primitive component layer under components/ui with typed composables such as usePermissions and useCurrency.' },
  { title: 'Tests and CI', description: 'PHPUnit suite plus lint run on every push to main and develop via GitHub Actions.' },
]

const tables = ['users', 'stores', 'registers', 'products', 'categories', 'stocks', 'orders', 'customers', 'activities', 'settings']

const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

function GitHubIcon() {
  const path = useData().socials.find(social => social.ariaLabel === 'GitHub')?.path
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

export function PosRetail() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  return (
    <Container wide className="[&>*:last-child]:mb-0">
      <PageHeader
        backHref="/#personal-projects"
        title={
          <span className="flex items-center gap-4 sm:gap-5">
            <img
              src="/images/pos-retail/logo.jpg"
              alt=""
              className="neo h-14 w-14 flex-shrink-0 bg-bw object-cover sm:h-20 sm:w-20"
            />
            POS Retail
          </span>
        }
        subtitle="Offline-first Point of Sale & Back Office"
        lead={
          <span className="block max-w-page">
            A point-of-sale and back-office built for a real Cambodian retail shop. Prices are Riel-native, a can, a
            six-pack and a case are sold as one product, customers can run a tab, and the till keeps working without a
            connection, syncing sales back to the server once it is online again.
          </span>
        }
        actions={
          <>
            <span className="neo-chip px-3 py-1.5 font-heading text-sm">2026</span>
            <Button href={liveUrl} variant="main">
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Button>
            <Button href={githubUrl}>
              <GitHubIcon />
              View on GitHub
            </Button>
          </>
        }
      />

      <div className="mb-12 flex flex-wrap gap-3">
        {techStack.map(technology => (
          <Tag key={technology} className="px-3 py-1 text-sm">
            {technology}
          </Tag>
        ))}
      </div>

      <dl className="neo neo-press reveal-on-scroll mb-16 grid grid-cols-2 gap-[2px] overflow-hidden bg-border sm:grid-cols-4">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col-reverse bg-main p-4 text-center text-main-fg sm:p-5">
            <dt className="text-sm">{stat.label}</dt>
            <dd className="font-heading text-2xl sm:text-3xl">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <Section title="Features">
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map(feature => (
            <Card key={feature.title}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-main text-lg"
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className="mt-4 font-heading text-lg sm:text-xl">{feature.title}</h3>
              <p className="mt-2 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Architecture">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {architecture.map(layer => (
            <Card key={layer.title}>
              <h3 className="text-sm font-heading uppercase tracking-widest">{layer.title}</h3>
              <p className="mt-2 leading-relaxed">{layer.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Core Models">
        <ul className="flex flex-wrap gap-3">
          {tables.map(table => (
            <li key={table} className="rounded-base border-2 border-border bg-bw px-3 py-1.5 font-mono text-sm">
              {table}
            </li>
          ))}
        </ul>
      </Section>

      <Card as="section" tone="main" className="mb-16" aria-labelledby="pos-api">
        <div className="flex flex-wrap items-center gap-3">
          <Tag>TOKEN API</Tag>
          <span className="text-sm">documented with Scribe</span>
        </div>
        <h2 id="pos-api" className="mt-3 font-heading text-xl sm:text-2xl">
          REST API for integrators
        </h2>
        <p className="mt-2 max-w-page leading-relaxed">
          The token API reuses the same permission gates as the web app, so there is one authorisation path. Docs
          generate from controller annotations and ship with an integrator walkthrough.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {httpMethods.map(method => (
            <Tag key={method} className="font-mono">
              {method}
            </Tag>
          ))}
        </div>
      </Card>

      {galleries.map((group, groupIndex) => (
        <Section key={group.title} title={`Screenshots — ${group.title}`}>
          <p className="-mt-4 mb-8 max-w-page">{group.description}</p>
          <ScreenshotGrid
            images={groupImages[groupIndex]}
            narrow={group.narrow}
            onOpen={index => setLightboxIndex(groupOffsets[groupIndex] + index)}
          />
        </Section>
      ))}

      <Card as="section" className="flex flex-col justify-between gap-6 md:flex-row md:items-center" aria-labelledby="pos-source">
        <div className="min-w-0">
          <h2 id="pos-source" className="font-heading text-xl sm:text-2xl">
            Source code
          </h2>
          <p className="mt-2 leading-relaxed">
            The full Laravel + Vue codebase, migrations, seeders, tests and API docs are public on GitHub.
          </p>
          <p className="mt-2 break-all font-mono text-sm">{githubUrl.replace('https://', '')}</p>
        </div>
        <Button href={githubUrl} variant="main" className="flex-shrink-0">
          <GitHubIcon />
          Open repository
        </Button>
      </Card>

      <Lightbox images={allShots} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={closeLightbox} />
    </Container>
  )
}
