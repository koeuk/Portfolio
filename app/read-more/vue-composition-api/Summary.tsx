'use client'

import type { ReactNode } from 'react'
import { useI18n } from '@/components/providers/I18nProvider'
import { Card } from '@/components/ui/Card'

/** The closing summary box; its heading follows the site language. */
export function Summary({ children }: { children: ReactNode }) {
  const { t } = useI18n()

  return (
    <Card className="space-y-3">
      <h2 className="!mt-0">{t('blog.summary')}</h2>
      {children}
    </Card>
  )
}
