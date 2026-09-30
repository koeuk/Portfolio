import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Technology / category chip. */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-base border-2 border-border bg-bw px-2 py-0.5 text-xs font-heading text-fg',
        className,
      )}
    >
      {children}
    </span>
  )
}
