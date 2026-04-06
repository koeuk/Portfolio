<script setup lang="ts">
import { provide, ref, toRef, watchEffect } from 'vue'
import type { HTMLAttributes } from 'vue'
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import { useEmblaCarousel } from 'embla-carousel-vue'
import { cn } from '~/lib/utils'
import { carouselContextKey, type CarouselApi } from './carouselContext'

interface Props {
  class?: HTMLAttributes['class']
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})

const emit = defineEmits<{
  (e: 'init-api', api: CarouselApi): void
}>()

const orientation = toRef(props, 'orientation')

const [viewportRef, api] = useEmblaCarousel(
  () => ({
    axis: orientation.value === 'horizontal' ? 'x' : 'y',
    ...(props.opts ?? {}),
  }),
  () => props.plugins ?? [],
)

provide(carouselContextKey, {
  api,
  viewportRef,
  orientation,
})

watchEffect(() => {
  if (api.value) emit('init-api', api.value)
})
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
  >
    <slot />
  </div>
</template>

