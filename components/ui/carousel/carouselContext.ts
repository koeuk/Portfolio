import type { EmblaCarouselType } from 'embla-carousel'
import type { InjectionKey, Ref } from 'vue'

export type CarouselApi = Ref<EmblaCarouselType | undefined>

export interface CarouselContextValue {
  api: CarouselApi
  viewportRef: Ref<HTMLElement | undefined>
  orientation: Ref<'horizontal' | 'vertical'>
}

export const carouselContextKey = Symbol('carousel') as InjectionKey<CarouselContextValue>

