import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Tag } from '@/components/ui/Tag'
import { useFeelings } from '@/lib/feelings'
import { BackToBlogLabel } from './BackToBlogLabel'

type Params = Promise<{ slug: string }>

const { posts, findBySlug } = useFeelings()

export const dynamicParams = false

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = findBySlug(slug)
  return {
    title: post ? `${post.title} | Blog | Koeuk Dev` : 'Entry not found | Blog | Koeuk Dev',
    description: post?.body.slice(0, 150) ?? '',
  }
}

export default async function BlogEntryPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = findBySlug(slug)
  if (!post) notFound()

  const paragraphs = post.body.split('\n\n')

  return (
    <Container>
      <PageHeader
        backHref="/about-me/my-info?section=blog"
        backLabel={<BackToBlogLabel />}
        title={post.title}
        subtitle={
          <span className="flex flex-wrap items-center gap-2 text-sm">
            <Tag>{post.category}</Tag>
            <span className="ml-1">{post.date}</span>
          </span>
        }
      />

      <div className="neo mb-10 flex aspect-[2/1] items-center justify-center overflow-hidden bg-main">
        {post.image ? (
          <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        ) : (
          <span className="text-8xl sm:text-9xl" aria-hidden="true">
            {post.emoji}
          </span>
        )}
      </div>

      <article className="article">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}
      </article>

      <div className="mt-12 flex flex-wrap gap-2 border-t-2 border-border pt-8">
        {post.tags.map(tag => (
          <Tag key={tag} className="px-3 py-1 text-sm">
            #{tag}
          </Tag>
        ))}
      </div>
    </Container>
  )
}
