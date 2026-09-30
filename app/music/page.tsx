import type { Metadata } from 'next'
import { Music } from 'lucide-react'
import { MusicContent } from '@/components/about/MusicContent'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'

export const metadata: Metadata = {
  title: 'Music | Koeuk Dev',
  description: "Things I'm listening to.",
}

export default function MusicPage() {
  return (
    <Container>
      <PageHeader
        title={
          <span className="flex items-center gap-4">
            <span className="neo flex h-12 w-12 flex-shrink-0 items-center justify-center bg-main text-main-fg sm:h-14 sm:w-14">
              <Music className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden />
            </span>
            Music
          </span>
        }
        subtitle="Things I'm listening to"
      />
      <MusicContent />
    </Container>
  )
}
