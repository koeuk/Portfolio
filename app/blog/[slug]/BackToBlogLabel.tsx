'use client'

import { useI18n } from '@/components/providers/I18nProvider'

/** Translated "Back to Blog" for the entry page's back button. */
export function BackToBlogLabel() {
  const { t } = useI18n()
  return <>{t('blog.backToBlog')}</>
}
