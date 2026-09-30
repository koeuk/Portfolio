import { useData } from '@/lib/data'
import { cn } from '@/lib/utils'

/** GitHub / LinkedIn / Telegram / Facebook icons, from lib/data socials. */
export function SocialLinks({ className }: { className?: string }) {
  const { socials } = useData()
  return (
    <div className={cn('flex flex-wrap items-center gap-8', className)}>
      {socials.map(social => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          title={social.tooltip}
          className="transition-transform hover:-translate-y-0.5"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
            <path d={social.path} />
          </svg>
        </a>
      ))}
    </div>
  )
}
