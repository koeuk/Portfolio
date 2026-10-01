'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { useTheme } from '@/components/providers/ThemeProvider'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', section: 'home', label: 'nav.home' },
  { href: '/#skills', section: 'skills', label: 'nav.skills' },
  { href: '/#personal-projects', section: 'personal-projects', label: 'nav.personalProjects' },
  { href: '/#work-experience', section: 'work-experience', label: 'nav.workExperience' },
  { href: '/#about', section: 'about', label: 'nav.about' },
]

/** Which home-page section is under the navbar, for the active pill. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (!enabled) return

    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        setActive('about')
        return
      }
      const position = window.scrollY + 150
      for (let index = navLinks.length - 1; index > 0; index--) {
        const element = document.getElementById(navLinks[index].section)
        if (element && element.offsetTop <= position) {
          setActive(navLinks[index].section)
          return
        }
      }
      setActive('home')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [enabled])

  return active
}

export function Navbar() {
  const pathname = usePathname()
  const { t, currentLang, setLanguage, languages } = useI18n()
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const isHome = pathname === '/'
  const activeSection = useActiveSection(isHome)

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (section: string) => isHome && activeSection === section

  // Two languages are enabled, so the switch is a single toggle showing the next one.
  const nextLanguage = languages[(languages.findIndex(language => language.code === currentLang) + 1) % languages.length]

  const linkClass = (section: string) =>
    cn(
      'rounded-base border-2 px-2 py-1 transition-colors hover:border-border',
      isActive(section) ? 'border-border' : 'border-transparent',
    )

  const controls = (
    <>
      <button
        type="button"
        onClick={() => setLanguage(nextLanguage.code)}
        className="rounded-base border-2 border-transparent px-2 py-1 font-heading transition-colors hover:border-border"
        aria-label={`${t('common.language')}: ${nextLanguage.name}`}
      >
        {nextLanguage.code.toUpperCase()}
      </button>
      <button type="button" onClick={toggleTheme} aria-label={t('common.theme')} className="px-1">
        {isDark ? <Sun className="h-5 w-5 sm:h-6 sm:w-6" /> : <Moon className="h-5 w-5 sm:h-6 sm:w-6" />}
      </button>
    </>
  )

  return (
    <div className="fixed left-0 top-5 z-50 w-full px-5">
      <nav className="neo mx-auto flex w-full items-center gap-4 bg-main p-2.5 px-5 text-sm font-base text-main-fg sm:text-base md:w-max md:max-w-full lg:gap-5">
        {/* Desktop: every link in the pill */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={linkClass(link.section)}>
              {t(link.label)}
            </Link>
          ))}
        </div>

        {/* Mobile: brand + menu toggle */}
        <Link href="/" className="mr-auto font-heading md:hidden">
          Koeuk
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">{controls}</div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(open => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? t('common.close') : t('common.menu')}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="neo mx-auto mt-3 flex flex-col gap-1 bg-main p-3 text-main-fg md:hidden">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={linkClass(link.section)}>
              {t(link.label)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
