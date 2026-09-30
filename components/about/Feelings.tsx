import Link from 'next/link'
import { buttonClass } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Tag } from '@/components/ui/Tag'
import type { FeelingPost } from '@/lib/feelings'
import { cn } from '@/lib/utils'

/** Mood filter for the feeling entries (shared by the My Info blog tab and /blog). */
export const moods = [
  { label: 'All', value: 'all' },
  { label: 'Happy', value: 'Happy' },
  { label: 'Reflective', value: 'Reflective' },
  { label: 'Grateful', value: 'Grateful' },
  { label: 'Challenging', value: 'Challenging' },
  { label: 'Hopeful', value: 'Hopeful' },
]

export function MoodFilter({
  active,
  onChange,
  className,
}: {
  active: string
  onChange?: (mood: string) => void
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {moods.map(mood => (
        <button
          key={mood.value}
          type="button"
          onClick={() => onChange?.(mood.value)}
          aria-pressed={active === mood.value}
          className={buttonClass(active === mood.value ? 'main' : 'neutral', 'px-3 py-1.5 text-sm sm:text-sm')}
        >
          {mood.label}
        </button>
      ))}
    </div>
  )
}

/** Stacked cards linking to /blog/<slug>, or an empty note when a mood has no entries. */
export function FeelingList({
  posts,
  titleAs: TitleTag = 'h3',
  className,
}: {
  posts: FeelingPost[]
  titleAs?: 'h2' | 'h3'
  className?: string
}) {
  if (posts.length === 0) {
    return (
      <Card className={cn('py-12 text-center sm:py-12', className)}>
        <p className="text-lg">No entries for this mood yet.</p>
      </Card>
    )
  }

  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {posts.map(post => (
        <Link key={post.id} href={`/blog/${post.slug}`} className="neo neo-press reveal-on-scroll flex gap-4 bg-bw p-4 text-fg sm:p-5">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="neo h-16 w-16 flex-shrink-0 bg-main object-cover"
              loading="lazy"
            />
          ) : (
            <span
              className="neo flex h-16 w-16 flex-shrink-0 items-center justify-center bg-main text-3xl"
              aria-hidden="true"
            >
              {post.emoji}
            </span>
          )}
          <span className="block min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-x-2 text-xs">
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span className="font-heading">{post.category}</span>
            </span>
            <TitleTag className="mt-1 font-heading text-lg sm:text-xl">{post.title}</TitleTag>
            <span className="mt-2 line-clamp-3 block text-sm sm:text-base">{post.body}</span>
            <span className="mt-3 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </span>
          </span>
        </Link>
      ))}
    </div>
  )
}
