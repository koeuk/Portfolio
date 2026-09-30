import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useData } from '@/lib/data'
import { translate } from '@/lib/i18n'
import { ExperienceDetail } from './ExperienceDetail'

// Projects with their own `path` (hotel-booking, pos-retail) have dedicated pages.
const detailExperiences = () => useData().experiences.filter(experience => !experience.path)

export const dynamicParams = false

export function generateStaticParams() {
  return detailExperiences().map(experience => ({ id: experience.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  if (!detailExperiences().some(experience => experience.id === id)) return { title: 'Experience | Koeuk Dev' }
  return {
    title: `${translate('en', `experience.${id}.role`)} at ${translate('en', `experience.${id}.company`)} | Koeuk Dev`,
    description: translate('en', `experience.${id}.description`),
  }
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!detailExperiences().some(experience => experience.id === id)) notFound()
  return <ExperienceDetail id={id} />
}
