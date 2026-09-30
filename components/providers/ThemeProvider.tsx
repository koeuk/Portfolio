'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { THEME_STORAGE_KEY } from '@/lib/theme'

interface ThemeContextValue {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(isDark: boolean) {
  document.documentElement.classList.toggle('dark', isDark)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light')
  } catch {
    // Storage can be blocked; the theme still applies for this visit.
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  // The inline script in the root layout has already put the class on <html>
  // before paint; this only syncs React state with it.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = useCallback(() => {
    setIsDark(previous => {
      applyTheme(!previous)
      return !previous
    })
  }, [])

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside <ThemeProvider>')
  return context
}
