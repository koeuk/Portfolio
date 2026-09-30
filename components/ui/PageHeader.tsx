import type { ReactNode } from 'react'
import { BackLink } from '@/components/ui/BackLink'

/**
 * Top of every inner page: back button, heading, optional subtitle, lead and
 * a row of actions. Sits inside the page column (AppShell adds the top gap).
 */
export function PageHeader({
  backHref = '/',
  backLabel,
  title,
  subtitle,
  lead,
  actions,
}: {
  backHref?: string
  /** Defaults to the translated "Back"; pass `null` to hide the back button */
  backLabel?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  lead?: ReactNode
  actions?: ReactNode
}) {
  return (
    <header className="reveal mb-12">
      {backLabel !== null && (
        <div className="mb-8">
          <BackLink href={backHref}>{backLabel}</BackLink>
        </div>
      )}
      <h1 className="font-heading text-2xl sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-2 text-lg sm:text-xl">{subtitle}</p>}
      {lead && <p className="mt-6 text-base leading-relaxed sm:text-lg">{lead}</p>}
      {actions && <div className="mt-8 flex flex-wrap items-center gap-4">{actions}</div>}
    </header>
  )
}
