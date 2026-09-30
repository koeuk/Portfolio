import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Container } from '@/components/ui/Container'
import { BlogEntries, BlogEntriesView, BlogHeader } from './BlogIndex'

export const metadata: Metadata = {
  title: 'Blog | Koeuk Dev',
  description: 'Thoughts, feelings, and moments captured along the way.',
}

export default function BlogPage() {
  return (
    <Container>
      <BlogHeader />
      {/* The mood filter lives in ?tab=, which is only known in the browser */}
      <Suspense fallback={<BlogEntriesView />}>
        <BlogEntries />
      </Suspense>
    </Container>
  )
}
