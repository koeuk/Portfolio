import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'GitHub Profile | Koeuk Dev',
  description: 'GitHub profile and contribution history of Koeuk KOS since 2023.',
}

// Newest first; the current year is highlighted.
const years = [
  { year: '2026', contributions: '1,411', current: true },
  { year: '2025', contributions: '989', current: false },
  { year: '2024', contributions: '421', current: false },
  { year: '2023', contributions: '40', current: false },
]

export default function GitHubPage() {
  return (
    <Container wide>
      <PageHeader backHref="/about-me/my-info" backLabel="Back to My Info" title="GitHub Profile" />

      <div className="neo mb-16 overflow-hidden bg-bw">
        <img src="/images/github/profile.png" alt="GitHub Profile - koeuk kos" className="block w-full" />
      </div>

      <Section title="Contribution History">
        <div className="flex flex-col gap-8">
          {years.map(({ year, contributions, current }) => (
            <div key={year} className="neo overflow-hidden bg-bw">
              <h3 className="flex items-center gap-3 border-b-2 border-border px-4 py-3 font-heading text-lg sm:px-6">
                <span
                  className={cn(
                    'rounded-base border-2 border-border px-2.5 py-0.5 text-sm',
                    current ? 'bg-main text-main-fg' : 'bg-bg text-fg',
                  )}
                >
                  {year}
                </span>
                {contributions} contributions
              </h3>
              <img
                src={`/images/github/contributions-${year}.png`}
                alt={`GitHub Contributions ${year}`}
                className="block w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Section>

      <div className="neo bg-main p-6 text-center text-main-fg">
        <p className="text-lg">Total Contributions</p>
        <p className="mt-2 font-heading text-5xl">2,861</p>
        <p className="mt-2">Since 2023</p>
      </div>
    </Container>
  )
}
