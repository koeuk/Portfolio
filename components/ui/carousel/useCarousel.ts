import { computed, inject } from 'vue'
import { carouselContextKey } from './carouselContext'

export function useCarousel() {
  const ctx = inject(carouselContextKey)
  if (!ctx) throw new Error('useCarousel must be used within Carousel')

  const canScrollPrev = computed(() => !!ctx.api.value?.canScrollPrev())
  const canScrollNext = computed(() => !!ctx.api.value?.canScrollNext())

  function scrollPrev() {
    ctx.api.value?.scrollPrev()
  }

  function scrollNext() {
    ctx.api.value?.scrollNext()
  }

  return {
    api: ctx.api,
    orientation: ctx.orientation,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  }
}

