'use client'

import { useState } from 'react'
import { FeelingList, MoodFilter } from '@/components/about/Feelings'
import { useI18n } from '@/components/providers/I18nProvider'
import { buttonClass } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useFeelings } from '@/lib/feelings'

const views = [
  { key: 'post', label: 'Post', icon: '📝' },
  { key: 'feeling', label: 'Feeling', icon: '💭' },
] as const

type View = (typeof views)[number]['key']

/** Blog tab of My Info: posts (none yet) and feeling entries filtered by mood. */
export function Blog() {
  const { t } = useI18n()
  const { posts: feelings } = useFeelings()
  const [activeView, setActiveView] = useState<View>('post')
  const [activeMood, setActiveMood] = useState('all')

  const feelingPosts = activeMood === 'all' ? feelings : feelings.filter(feeling => feeling.category === activeMood)

  return (
    <section id="blog">
      <h2 className="font-heading text-xl sm:text-2xl">{t('blog.title')}</h2>
      <p className="mt-2 sm:text-lg">{t('blog.subtitle')}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {views.map(view => (
          <button
            key={view.key}
            type="button"
            onClick={() => setActiveView(view.key)}
            aria-pressed={activeView === view.key}
            className={buttonClass(activeView === view.key ? 'main' : 'neutral')}
          >
            <span aria-hidden="true">{view.icon}</span>
            {view.label}
          </button>
        ))}
      </div>

      {activeView === 'post' ? (
        <Card className="mt-10 py-16 text-center sm:py-16">
          <p className="text-6xl" aria-hidden="true">
            📝
          </p>
          <p className="mt-6 font-heading text-xl">No posts yet</p>
          <p className="mt-2">New articles are on the way — check back soon.</p>
        </Card>
      ) : (
        <>
          <MoodFilter active={activeMood} onChange={setActiveMood} className="mt-8" />
          <FeelingList posts={feelingPosts} className="mt-10" />
        </>
      )}
    </section>
  )
}
