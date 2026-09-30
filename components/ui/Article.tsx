import type { ReactNode } from 'react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Tag } from '@/components/ui/Tag'

/**
 * Layout for the read-more articles. Write the body as plain h2 / h3 / p /
 * ul / ol / table / blockquote / <code> elements with no classes; the
 * `.article` styles in globals.css handle the typography.
 */
export function Article({
  title,
  date,
  tags = [],
  backHref = '/about-me/my-info?section=rean',
  children,
}: {
  title: ReactNode
  date?: string
  tags?: string[]
  backHref?: string
  children: ReactNode
}) {
  return (
    <Container>
      <PageHeader
        backHref={backHref}
        title={title}
        subtitle={
          (tags.length > 0 || date) && (
            <span className="flex flex-wrap items-center gap-2 text-sm">
              {tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {date && <span className="ml-1">{date}</span>}
            </span>
          )
        }
      />
      <article className="article">{children}</article>
    </Container>
  )
}
