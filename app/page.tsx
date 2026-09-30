import { About } from '@/components/home/About'
import { Hero } from '@/components/home/Hero'
import { Projects } from '@/components/home/Projects'
import { Skills } from '@/components/home/Skills'
import { WorkExperience } from '@/components/home/WorkExperience'
import { Container } from '@/components/ui/Container'

export default function HomePage() {
  return (
    <Container>
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience />
      <About />
    </Container>
  )
}
