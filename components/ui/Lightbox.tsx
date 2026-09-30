'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useI18n } from '@/components/providers/I18nProvider'
import { buttonClass } from '@/components/ui/Button'
import { Portal, useModalBehaviour } from '@/components/ui/Portal'
import { Transition } from '@/components/ui/Transition'

export interface GalleryImage {
  src: string
  alt: string
  /** Shown under the image (grid tiles and the lightbox) */
  caption?: string
}

interface Stage {
  images: GalleryImage[]
  index: number
  step: (delta: number) => void
  close: () => void
}

// <Transition> keeps rendering the element it was first given while it fades
// out, so the stage reads the image from context instead of from props: that
// way the last image viewed (not the one first opened) stays up during the fade.
const StageContext = createContext<Stage | null>(null)

const iconButton = (extra?: string) => buttonClass('neutral', `h-11 w-11 px-0 py-0 ${extra ?? ''}`)

/**
 * Fullscreen image viewer. Controlled: `index` is the image on show, or null
 * when closed. Buttons and the arrow keys step through `images` (wrapping);
 * Escape, the close button or a click outside the image closes it.
 */
export function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: {
  images: GalleryImage[]
  index: number | null
  onIndexChange: (index: number) => void
  /** Keep this stable (useCallback) — it is an effect dependency */
  onClose: () => void
}) {
  const count = images.length
  const open = index !== null && count > 0

  // Remembered so the image stays on screen while the lightbox fades out.
  const [lastIndex, setLastIndex] = useState(0)
  if (index !== null && index !== lastIndex) setLastIndex(index)

  useModalBehaviour(open, onClose)

  useEffect(() => {
    if (index === null || count < 2) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + count) % count)
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % count)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [index, count, onIndexChange])

  const stage: Stage = {
    images,
    index: Math.min(index ?? lastIndex, count - 1),
    step: delta => {
      if (index !== null) onIndexChange((index + delta + count) % count)
    },
    close: onClose,
  }

  return (
    <StageContext.Provider value={stage}>
      <Portal>
        <Transition name="fade" show={open}>
          <div className="fixed inset-0 z-[9999] bg-overlay" role="dialog" aria-modal="true" aria-label="Image viewer">
            <LightboxStage />
          </div>
        </Transition>
      </Portal>
    </StageContext.Provider>
  )
}

function LightboxStage() {
  const stage = useContext(StageContext)
  const { t } = useI18n()
  const image = stage?.images[stage.index]
  if (!stage || !image) return null

  const { images, index, step, close } = stage
  const many = images.length > 1

  return (
    <>
      {/* A click anywhere outside the image closes */}
      <div className="absolute inset-0" onClick={close} aria-hidden="true" />

      <figure className="pointer-events-none absolute inset-0 m-0 flex flex-col items-center gap-4 px-4 pb-24 pt-20 sm:px-24 sm:pb-10">
        <div className="relative min-h-0 w-full flex-1">
          <img
            src={image.src}
            alt={image.alt}
            className="neo pointer-events-auto absolute inset-0 m-auto max-h-full max-w-full bg-bw"
          />
        </div>
        <figcaption className="neo pointer-events-auto max-w-full bg-bw px-3 py-1.5 text-center text-sm">
          {image.caption && <>{image.caption} · </>}
          <span className="font-heading tabular-nums">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={close}
        className={iconButton('absolute right-4 top-4 sm:right-6 sm:top-6')}
        title={t('common.close')}
        aria-label={t('common.close')}
        autoFocus
      >
        <X className="h-5 w-5" />
      </button>

      {many && (
        <>
          {/* Wrappers carry the positioning so the buttons' press effect keeps its own transform */}
          <div className="absolute bottom-5 left-4 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2">
            <button type="button" onClick={() => step(-1)} className={iconButton()} aria-label="Previous image">
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute bottom-5 right-4 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2">
            <button type="button" onClick={() => step(1)} className={iconButton()} aria-label="Next image">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      )}
    </>
  )
}
