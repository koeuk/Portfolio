'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { buttonClass } from '@/components/ui/Button'

/** Small pressable "← Back" button. The label defaults to the translated "Back". */
export function BackLink({ href = '/', children }: { href?: string; children?: ReactNode }) {
  const { t } = useI18n()
  return (
    <Link href={href} className={buttonClass('neutral', 'px-3 py-1.5 text-sm sm:text-sm')}>
      <ArrowLeft className="h-4 w-4" aria-hidden />
      {children ?? t('common.back')}
    </Link>
  )
}
