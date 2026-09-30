import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <Container className="reveal py-20 text-center">
      <p className="font-heading text-7xl">404</p>
      <p className="mt-4 text-lg">This page doesn&apos;t exist.</p>
      <Button href="/" variant="main" className="mt-8">
        Go home
      </Button>
    </Container>
  )
}
