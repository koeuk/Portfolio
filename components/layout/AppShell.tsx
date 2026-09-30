'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {/* Keyed per route so the entrance animation replays on navigation */}
      <main key={pathname} className="flex-1 pb-10 pt-28">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
