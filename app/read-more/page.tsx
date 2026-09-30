import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ReadMore, ReadMoreHeader, ReadMoreList } from '@/components/about/ReadMore'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Read More | Koeuk Dev',
  description: 'Thoughts, tutorials, and insights about web development',
}

export default function ReadMorePage() {
  return (
    <Container>
      <ReadMoreHeader />
      {/* The category filter lives in ?tab=, which is only known in the browser */}
      <Suspense fallback={<ReadMoreList />}>
        <ReadMore />
      </Suspense>
    </Container>
  )
}
