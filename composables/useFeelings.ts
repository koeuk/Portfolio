export interface FeelingPost {
  id: number
  slug: string
  title: string
  body: string
  date: string
  category: string
  tags: string[]
  emoji: string
  gradient: string
  image?: string
}

export const useFeelings = () => {
  const posts: FeelingPost[] = [
    {
      id: 1,
      slug: 'quiet-joy-of-shipping',
      title: 'The Quiet Joy of Shipping Something',
      body: `Today I deployed a feature I had been working on for weeks. There is something quietly wonderful about pressing the merge button and watching the pipeline turn green. Not the loud kind of joy — the calm, settled kind.

You spend so long living inside the small problems: an off-by-one here, a flaky test there, a name that feels not quite right. Then one afternoon the pieces snap together and you realize the thing actually works. No fanfare. Just a small smile and a deep breath.

I want to remember this feeling on the days the work feels endless. Progress is real, even when it is slow.`,
      date: 'Apr 22, 2026',
      category: 'Happy',
      tags: ['work', 'flow'],
      emoji: '🌱',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 2,
      slug: 'year-of-building',
      title: 'Looking Back on a Year of Building',
      body: `A year ago I barely knew what a composable was. Tonight I refactored a whole system of them without checking docs once. Growth happens slowly, then all at once.

The thing nobody tells you is that learning to code is mostly learning to be confused for a long time without giving up. The skill is not the syntax — it is the patience.

Looking forward to another year of being confused, just at higher levels.`,
      date: 'Apr 15, 2026',
      category: 'Reflective',
      tags: ['growth', 'learning'],
      emoji: '🌙',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      id: 3,
      slug: 'small-people-big-patience',
      title: 'Small People, Big Patience',
      body: `Spent the afternoon helping a friend understand recursion. Watching the moment it clicks for someone else is its own kind of reward. Teaching teaches you twice.

I forget sometimes how strange these ideas are when you first meet them. A function calling itself? It sounds like a trick. But once you see it solve one real problem cleanly, the magic stays.

Grateful for friends who ask honest questions.`,
      date: 'Apr 8, 2026',
      category: 'Grateful',
      tags: ['friends', 'mentoring'],
      emoji: '💫',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 4,
      slug: 'bug-that-wouldnt-leave',
      title: "The Bug That Wouldn't Leave",
      body: `Three days. One bug. Logs that lied to me. By the time I found it, the fix was four characters. The hard parts of this job are rarely about typing.

What kept me going was the slow elimination — every wrong theory still removes a wrong theory. Even frustration is information.

Note to future me: when stuck, write down what you know to be true. The bug almost always lives in the gap between that list and reality.`,
      date: 'Mar 30, 2026',
      category: 'Challenging',
      tags: ['debugging', 'patience'],
      emoji: '🌧',
      gradient: 'from-slate-500 to-gray-700',
    },
    {
      id: 5,
      slug: 'walk-without-phone',
      title: 'A Walk Without a Phone',
      body: `Left it on the desk on purpose. Noticed how loud the wind was, how slow my thoughts moved when nothing was demanding them. Will do this more.

I think a lot of what I call "tiredness" is actually just noise — too many tabs open, in the browser and in my head. The walk did not solve anything. It just gave me back a little bandwidth.

Small reset. Worth it.`,
      date: 'Mar 20, 2026',
      category: 'Reflective',
      tags: ['rest', 'mindfulness'],
      emoji: '🍃',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      id: 6,
      slug: 'new-year-different-heart',
      title: 'New Year, Same Hands, Different Heart',
      body: `Started the year with a small list — fewer commitments, more depth. Already harder than I thought. But the days feel more mine.

Saying no is a skill I am still bad at, but I am better than last year. The trick, I think, is realizing that every yes is also a quiet no to something else.

Hopeful for what shows up when there is space for it.`,
      date: 'Jan 3, 2026',
      category: 'Hopeful',
      tags: ['goals', 'beginnings'],
      emoji: '✨',
      gradient: 'from-pink-400 to-rose-500',
    },
  ]

  const findBySlug = (slug: string) => posts.find(post => post.slug === slug)

  return { posts, findBySlug }
}
