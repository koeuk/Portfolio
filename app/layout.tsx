import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { AppShell } from '@/components/layout/AppShell'
import { I18nProvider } from '@/components/providers/I18nProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { THEME_STORAGE_KEY } from '@/lib/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Koeuk Dev - Web Developer Portfolio',
  description: 'Portfolio of Koeuk KOS, a web developer in Phnom Penh building with Laravel, Vue and React.',
  icons: { icon: { url: '/images/profile.jpg', type: 'image/jpeg' } },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Applies the saved theme before first paint so dark-mode visitors never see a light flash.
const themeScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='dark')document.documentElement.classList.add('dark')}catch(e){}`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Noto+Sans+Khmer:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <ThemeProvider>
          <I18nProvider>
            <AppShell>{children}</AppShell>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
