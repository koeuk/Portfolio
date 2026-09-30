import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ExperienceList } from './ExperienceList'

export const metadata: Metadata = {
  title: 'Work Experience | Koeuk Dev',
  description: 'Explore my professional journey and experiences in web development.',
}

export default function ExperiencePage() {
  return (
    <Container>
      <ExperienceList />
    </Container>
  )
}
