declare module 'embla-carousel-autoplay' {
  import type { CreatePluginType } from 'embla-carousel'

  interface AutoplayOptions {
    delay?: number
    stopOnInteraction?: boolean
    stopOnMouseEnter?: boolean
    stopOnFocusIn?: boolean
    playOnInit?: boolean
    rootNode?: (emblaRoot: HTMLElement) => HTMLElement
  }

  type AutoplayType = CreatePluginType<
    'autoplay',
    {
      play: () => void
      stop: () => void
      reset: () => void
      isPlaying: () => boolean
    },
    AutoplayOptions
  >

  export default function Autoplay(options?: AutoplayOptions): AutoplayType
}

