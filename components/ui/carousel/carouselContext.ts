import type { EmblaCarouselVueType } from 'embla-carousel-vue'
import type { InjectionKey, Ref } from 'vue'

export type CarouselApi = EmblaCarouselVueType[1]

export interface CarouselContextValue {
  api: Ref<CarouselApi | null>
  viewportRef: Ref<HTMLElement | null>
  orientation: Ref<'horizontal' | 'vertical'>
}

export const carouselContextKey = Symbol('carousel') as InjectionKey<CarouselContextValue>

