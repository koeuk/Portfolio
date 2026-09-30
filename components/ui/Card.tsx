import type { ElementType, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Bordered, shadowed box. `main` is the orange card the template uses for
 * projects; `bw` is the plain white / near-black surface.
 */
export function Card({
  as: Tag = 'div',
  tone = 'bw',
  press = false,
  className,
  children,
  ...props
}: {
  as?: ElementType
  tone?: 'main' | 'bw'
  /** Sink into the shadow on hover — for cards that are links */
  press?: boolean
  className?: string
  children: ReactNode
  [prop: string]: unknown
}) {
  return (
    <Tag
      className={cn(
        'neo p-4 sm:p-5',
        tone === 'main' ? 'bg-main text-main-fg' : 'bg-bw text-fg',
        press && 'neo-press',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
