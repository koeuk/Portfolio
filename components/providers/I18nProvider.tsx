'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { isLanguage, LANG_STORAGE_KEY, languages, translate, type Language } from '@/lib/i18n'

interface I18nContextValue {
  currentLang: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  languages: typeof languages
}

const I18nContext = createContext<I18nContextValue | null>(null)

/** The saved language: localStorage, falling back to the cookie the Nuxt site used. */
function readSavedLanguage(): Language | null {
  try {
    const stored = localStorage.getItem(LANG_STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // Storage can be blocked; fall through to the cookie.
  }
  const cookie = document.cookie.match(new RegExp(`(?:^|; )${LANG_STORAGE_KEY}=([^;]*)`))?.[1]
  return isLanguage(cookie) ? cookie : null
}

/**
 * The site is static, so every page is built in English and switches to the
 * saved language once it loads in the browser.
 */
export function I18nProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en')

  useEffect(() => {
    const saved = readSavedLanguage()
    if (saved) setCurrentLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLang(lang)
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang)
    } catch {
      // Not remembered, but still applied for this visit.
    }
  }, [])

  const t = useCallback((key: string) => translate(currentLang, key), [currentLang])

  const value = useMemo(() => ({ currentLang, setLanguage, t, languages }), [currentLang, setLanguage, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used inside <I18nProvider>')
  return context
}
