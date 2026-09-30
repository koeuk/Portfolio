import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { AllSkills } from './AllSkills'

export const metadata: Metadata = {
  title: 'Skills & Technologies | Koeuk Dev',
  description: 'The tools and technologies I build with.',
}

export default function SkillsPage() {
  return (
    <Container wide>
      <AllSkills />
    </Container>
  )
}
