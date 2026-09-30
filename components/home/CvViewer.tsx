'use client'

import { Download, ExternalLink, X } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { buttonClass } from '@/components/ui/Button'
import { Portal, useModalBehaviour } from '@/components/ui/Portal'
import { Transition } from '@/components/ui/Transition'

const CV_URL = '/resume.pdf'

/** Slide-over panel showing the CV PDF. */
export function CvViewer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useI18n()
  useModalBehaviour(open, onClose)

  return (
    <Portal>
      <Transition name="fade" show={open}>
        <div className="fixed inset-0 z-[9998] bg-overlay" onClick={onClose} aria-hidden="true" />
      </Transition>

      <Transition name="cv-slide" show={open}>
        <aside
          className="fixed inset-y-0 right-0 z-[9999] flex w-full flex-col border-l-2 border-border bg-bg sm:w-[min(92vw,900px)]"
          role="dialog"
          aria-modal="true"
          aria-label={t('cv.title')}
        >
          <header className="flex items-center justify-between gap-3 border-b-2 border-border bg-main px-4 py-4 text-main-fg sm:px-6">
            <div className="min-w-0">
              <p className="text-xs font-heading uppercase tracking-widest">{t('cv.eyebrow')}</p>
              <h2 className="truncate text-lg font-heading sm:text-xl">{t('cv.title')}</h2>
            </div>
            <div className="flex flex-shrink-0 items-center gap-3">
              <a
                href={CV_URL}
                download="KOS_Koeuk_Junior_Full_Stack_Developer.pdf"
                className={buttonClass('neutral', 'hidden sm:inline-flex')}
              >
                <Download className="h-4 w-4" />
                {t('cv.download')}
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass('neutral', 'h-10 w-10 px-0 py-0')}
                title={t('cv.openTab')}
                aria-label={t('cv.openTab')}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className={buttonClass('neutral', 'h-10 w-10 px-0 py-0')}
                title={t('cv.close')}
                aria-label={t('cv.close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div className="min-h-0 flex-1 bg-bw">
            <iframe src={`${CV_URL}#view=FitH`} className="h-full w-full" title={t('cv.title')} />
          </div>
        </aside>
      </Transition>
    </Portal>
  )
}
