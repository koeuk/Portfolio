import Link from 'next/link'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'main' | 'neutral'

const base =
  'neo neo-press inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2 text-center text-sm font-base sm:text-base disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  main: 'bg-main text-main-fg',
  neutral: 'bg-bw text-fg',
}

export const buttonClass = (variant: Variant = 'neutral', className?: string) => cn(base, variants[variant], className)

/**
 * A button, or a link styled as one when `href` is given. External links
 * (http…, mailto:, files) open in a new tab.
 */
export function Button({
  href,
  variant = 'neutral',
  className,
  children,
  ...props
}: {
  href?: string
  variant?: Variant
  className?: string
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'button'>, 'className' | 'children'>) {
  const classes = buttonClass(variant, className)

  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href) || /\.(pdf|zip)$/.test(href)
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
