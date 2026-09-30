'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { buttonClass } from '@/components/ui/Button'
import { Lightbox, type GalleryImage } from '@/components/ui/Lightbox'
import { Transition } from '@/components/ui/Transition'
import { cn } from '@/lib/utils'

export type { GalleryImage }

const iconButton = (extra?: string) => buttonClass('neutral', cn('h-10 w-10 flex-shrink-0 px-0 py-0 sm:h-11 sm:w-11', extra))

/**
 * Screenshot carousel: the current image with prev / next, a thumbnail strip,
 * auto-advance every `interval` ms (held while hovered, touched or open
 * fullscreen), and a click on the image opens the lightbox.
 */
export function Gallery({
  images,
  interval = 4000,
  className,
}: {
  images: GalleryImage[]
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const stripRef = useRef<HTMLDivElement>(null)
  const count = images.length

  const step = (delta: number) => setIndex(current => (current + delta + count) % count)
  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  // Restarts on every change, so a manual step also gets the full interval.
  useEffect(() => {
    if (paused || lightboxOpen || count < 2) return
    const timer = setTimeout(() => setIndex(current => (current + 1) % count), interval)
    return () => clearTimeout(timer)
  }, [index, paused, lightboxOpen, count, interval])

  // Centre the active thumbnail — scrolls the strip only, never the page.
  useEffect(() => {
    const strip = stripRef.current
    const thumb = strip?.children[index] as HTMLElement | undefined
    if (!strip || !thumb) return
    strip.scrollTo({ left: thumb.offsetLeft - strip.offsetWidth / 2 + thumb.offsetWidth / 2, behavior: 'smooth' })
  }, [index])

  const scrollStrip = (direction: 1 | -1) => stripRef.current?.scrollBy({ left: direction * 300, behavior: 'smooth' })

  if (count === 0) return null
  const current = Math.min(index, count - 1)
  const image = images[current]

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="neo relative aspect-video overflow-hidden bg-bw">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute inset-0 block h-full w-full cursor-zoom-in"
          title="View fullscreen"
        >
          <Transition name="fade">
            <img key={current} src={image.src} alt={image.alt} className="h-full w-full object-contain" />
          </Transition>
        </button>

        {count > 1 && (
          <>
            {/* Wrappers carry the centring so the buttons' press effect keeps its own transform */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <button type="button" onClick={() => step(-1)} className={iconButton()} aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <button type="button" onClick={() => step(1)} className={iconButton()} aria-label="Next image">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-base border-2 border-border bg-bw px-2 py-0.5 text-xs font-heading tabular-nums">
              {current + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-5 flex items-center gap-3">
          <button type="button" onClick={() => scrollStrip(-1)} className={iconButton()} aria-label="Scroll thumbnails left">
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Bottom/right padding leaves room for the thumbnails' shadow and press offset */}
          <div
            ref={stripRef}
            className="relative flex min-w-0 flex-1 snap-x gap-3 overflow-x-auto pb-2 pr-2 pt-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((thumb, thumbIndex) => (
              <button
                key={`${thumb.src}-${thumbIndex}`}
                type="button"
                onClick={() => setIndex(thumbIndex)}
                aria-label={thumb.alt}
                aria-current={thumbIndex === current}
                className={cn(
                  'neo h-16 w-28 flex-shrink-0 snap-center overflow-hidden bg-bw transition-all duration-150 sm:h-20 sm:w-32',
                  thumbIndex === current
                    ? 'translate-x-boxShadowX translate-y-boxShadowY shadow-none'
                    : 'opacity-60 hover:opacity-100',
                )}
              >
                <img src={thumb.src} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
              </button>
            ))}
          </div>

          <button type="button" onClick={() => scrollStrip(1)} className={iconButton()} aria-label="Scroll thumbnails right">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      <Lightbox
        images={images}
        index={lightboxOpen ? current : null}
        onIndexChange={setIndex}
        onClose={closeLightbox}
      />
    </div>
  )
}

/**
 * Grid of screenshots that open in a lightbox the page owns (so one lightbox
 * can step through several grids). `onOpen` gets the index within `images`.
 * `narrow` is for portrait (phone) shots.
 */
export function ScreenshotGrid({
  images,
  onOpen,
  narrow = false,
  className,
}: {
  images: GalleryImage[]
  onOpen: (index: number) => void
  narrow?: boolean
  className?: string
}) {
  return (
    <div className={cn('grid items-start gap-5', narrow ? 'grid-cols-2 sm:grid-cols-3' : 'sm:grid-cols-2', className)}>
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          onClick={() => onOpen(index)}
          className="neo neo-press block w-full cursor-zoom-in overflow-hidden bg-bw text-left"
        >
          <img src={image.src} alt={image.alt} className="block h-auto w-full" loading="lazy" />
          {image.caption && <span className="block border-t-2 border-border px-3 py-2 text-sm">{image.caption}</span>}
        </button>
      ))}
    </div>
  )
}
