'use client'

import { Container } from '@/components/ui/Container'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { useI18n } from '@/components/providers/I18nProvider'
import { useData } from '@/lib/data'

export function Footer() {
  const { personalInfo } = useData()
  const { t } = useI18n()

  return (
    <footer className="border-t-2 border-border bg-bw py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <p className="font-heading">
            © {new Date().getFullYear()} {personalInfo.name}. {t('footer.rights')}
          </p>
          <p className="mt-1">{t('footer.built')}</p>
        </div>
        <SocialLinks className="gap-6 [&_svg]:h-6 [&_svg]:w-6" />
      </Container>
    </footer>
  )
}
