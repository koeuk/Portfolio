import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** A titled block inside a page column, spaced like the template's sections. */
export function Section({
  id,
  title,
  aside,
  className,
  children,
}: {
  id?: string
  title: ReactNode
  /** Small note or link shown at the right of the title */
  aside?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={cn('mb-16', className)}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-heading text-xl sm:text-2xl">{title}</h2>
        {aside && <div className="text-sm">{aside}</div>}
      </div>
      {children}
    </section>
  )
}
