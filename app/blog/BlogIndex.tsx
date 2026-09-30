'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FeelingList, MoodFilter } from '@/components/about/Feelings'
import { useI18n } from '@/components/providers/I18nProvider'
import { PageHeader } from '@/components/ui/PageHeader'
import { useFeelings } from '@/lib/feelings'

export function BlogHeader() {
  const { t } = useI18n()
  return <PageHeader title={t('blog.title')} lead="Thoughts, feelings, and moments captured along the way." />
}

/** Mood filter + entries; `onMoodChange` is omitted in the static fallback. */
export function BlogEntriesView({ mood = 'all', onMoodChange }: { mood?: string; onMoodChange?: (mood: string) => void }) {
  const { posts } = useFeelings()
  const filteredPosts = mood === 'all' ? posts : posts.filter(post => post.category === mood)

  return (
    <>
      <MoodFilter active={mood} onChange={onMoodChange} className="mb-10" />
      <FeelingList posts={filteredPosts} titleAs="h2" />
    </>
  )
}

/** Entries filtered by the `?tab=` query. Render inside <Suspense> — it reads the search params. */
export function BlogEntries() {
  const searchParams = useSearchParams()
  const router = useRouter()
  // Never null under the App Router; the fallbacks only satisfy the types.
  const pathname = usePathname() ?? '/blog'
  const mood = searchParams?.get('tab') || 'all'

  const setMood = (value: string) => {
    router.replace(value === 'all' ? pathname : `${pathname}?${new URLSearchParams({ tab: value })}`, { scroll: false })
  }

  return <BlogEntriesView mood={mood} onMoodChange={setMood} />
}
