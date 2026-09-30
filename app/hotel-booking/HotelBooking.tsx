'use client'

import { useCallback, useState } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Card } from '@/components/ui/Card'
import { Container } from '@/components/ui/Container'
import { ScreenshotGrid, type GalleryImage } from '@/components/ui/Gallery'
import { Lightbox } from '@/components/ui/Lightbox'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { Tag } from '@/components/ui/Tag'

const shot = (imageNumber: number): GalleryImage => ({
  src: `/images/hotel-booking/${imageNumber}.png`,
  alt: `Hotel Booking Screenshot ${imageNumber}`,
})

const webUserNumbers = [25, 26, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
const adminNumbers = Array.from({ length: 36 }, (_, index) => index + 4).filter(
  index => ![11, 18].includes(index) && !webUserNumbers.includes(index),
)
const webUserShots = webUserNumbers.map(shot)
const adminShots = adminNumbers.map(shot)
// One lightbox steps through both galleries.
const allShots = [...webUserShots, ...adminShots]

const techStack = [
  'Laravel 12',
  'React 18',
  'Inertia.js',
  'Tailwind CSS',
  'Shadcn UI',
  'MySQL',
  'Sanctum',
  'Vite',
  'Recharts',
  'Leaflet',
]

const stats = [
  { value: '34', label: 'API Endpoints' },
  { value: '12', label: 'DB Tables' },
  { value: '35', label: 'Screenshots' },
  { value: '2', label: 'User Roles' },
]

const features = [
  { icon: '🏨', title: 'Hotel Browsing', description: 'Search and filter hotels by city, country, or keyword with real-time results.' },
  { icon: '🗓', title: 'Room Availability', description: 'Real-time overlap detection for check-in/check-out dates with auto-calculated pricing.' },
  { icon: '💳', title: 'Payment Processing', description: 'Support for Card, Cash, and PayPal methods with full transaction tracking.' },
  { icon: '🎫', title: 'Coupon System', description: 'Percentage-based discount codes with date validity and usage limits.' },
  { icon: '⭐', title: 'Reviews & Ratings', description: 'Rate hotels 1-5 stars after completed bookings with moderation tools.' },
  { icon: '📊', title: 'Admin Dashboard', description: 'Analytics with weekly/monthly/yearly breakdowns, PDF and Excel export.' },
  { icon: '🔐', title: 'Authentication', description: 'Laravel Sanctum + Breeze with Google and Facebook OAuth social login.' },
  { icon: '🔔', title: 'Notifications', description: 'Multi-channel alerts via email, in-app database, and Telegram bot.' },
  { icon: '🗺', title: 'Maps Integration', description: 'Hotel location maps with Leaflet and OpenStreetMap, no API key required.' },
  { icon: '🌙', title: 'Dark Mode', description: 'Persistent theme toggle with system preference detection.' },
]

const tables = [
  'users',
  'hotels',
  'room_types',
  'rooms',
  'bookings',
  'payments',
  'reviews',
  'amenities',
  'hotel_amenities',
  'coupons',
  'settings',
  'notifications',
]

const httpMethods = ['GET', 'POST', 'PUT', 'DELETE']

const integrations = [
  { icon: '🔵', name: 'Google OAuth', description: 'Social login via Google' },
  { icon: '🔷', name: 'Facebook OAuth', description: 'Social login via Facebook' },
  { icon: '✈️', name: 'Telegram Bot', description: 'Admin booking alerts' },
  { icon: '📧', name: 'SMTP Email', description: 'Booking notifications' },
  { icon: '🗺', name: 'OpenStreetMap', description: 'Hotel location maps' },
  { icon: '📄', name: 'PDF/Excel Export', description: 'jsPDF + SheetJS reports' },
]

export function HotelBooking() {
  const { t } = useI18n()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  return (
    <Container wide className="[&>*:last-child]:mb-0">
      <PageHeader
        backHref="/#personal-projects"
        title="Hotel Booking"
        subtitle="Hotel Booking System"
        actions={
          <span className="rounded-base border-2 border-border px-3 py-1.5 font-heading text-sm">2025 - 2026</span>
        }
      />

      <div className="mb-12 flex flex-wrap gap-3">
        {techStack.map(technology => (
          <Tag key={technology} className="px-3 py-1 text-sm">
            {technology}
          </Tag>
        ))}
      </div>

      <dl className="neo mb-16 grid grid-cols-2 gap-[2px] overflow-hidden bg-border sm:grid-cols-4">
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

      <Section title="Database Schema">
        <ul className="flex flex-wrap gap-3">
          {tables.map(table => (
            <li key={table} className="rounded-base border-2 border-border bg-bw px-3 py-1.5 font-mono text-sm">
              {table}
            </li>
          ))}
        </ul>
      </Section>

      <Card as="section" tone="main" className="mb-16" aria-labelledby="hotel-api">
        <div className="flex items-center gap-3">
          <Tag>REST API</Tag>
          <span className="text-sm">v1</span>
        </div>
        <h2 id="hotel-api" className="mt-3 font-heading text-xl sm:text-2xl">
          34 API Endpoints
        </h2>
        <p className="mt-2 leading-relaxed">
          Authentication, Hotels, Rooms, Bookings, Payments, Reviews, Coupons, Notifications, Profile
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {httpMethods.map(method => (
            <Tag key={method} className="font-mono">
              {method}
            </Tag>
          ))}
        </div>
      </Card>

      <Section title="Screenshots — Web User">
        <ScreenshotGrid images={webUserShots} onOpen={index => setLightboxIndex(index)} />
      </Section>

      <Section title="Screenshots — Admin">
        <ScreenshotGrid images={adminShots} onOpen={index => setLightboxIndex(webUserShots.length + index)} />
      </Section>

      <Section title={t('hotel.integrations')}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map(integration => (
            <Card key={integration.name} className="flex items-center gap-4">
              <span className="text-2xl" aria-hidden="true">
                {integration.icon}
              </span>
              <div>
                <p className="font-heading">{integration.name}</p>
                <p className="text-sm">{integration.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Lightbox images={allShots} index={lightboxIndex} onIndexChange={setLightboxIndex} onClose={closeLightbox} />
    </Container>
  )
}
