import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * The centred column. `page` (750px) is the template's width and the default;
 * `wide` (1000px) is for screenshot galleries and dense grids.
 */
export function Container({
  as: Tag = 'div',
  wide = false,
  className,
  children,
}: {
  as?: ElementType
  wide?: boolean
  className?: string
  children: ReactNode
}) {
  return (
    <Tag className={cn('mx-auto w-full px-5', wide ? 'max-w-wide' : 'max-w-page', className)}>{children}</Tag>
  )
}
