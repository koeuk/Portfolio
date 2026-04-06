<script setup lang="ts">
import { provide, ref, toRef, watchEffect } from 'vue'
import type { HTMLAttributes } from 'vue'
import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import emblaCarouselVue from 'embla-carousel-vue'
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

const opts = ref<EmblaOptionsType>({
  axis: orientation.value === 'horizontal' ? 'x' : 'y',
  ...(props.opts ?? {}),
})

const plugins = ref<EmblaPluginType[]>(props.plugins ?? [])

watchEffect(() => {
  opts.value = {
    axis: orientation.value === 'horizontal' ? 'x' : 'y',
    ...(props.opts ?? {}),
  }
  plugins.value = props.plugins ?? []
})

const [viewportRef, api] = emblaCarouselVue(opts, plugins)

provide(carouselContextKey, {
  api,
  viewportRef,
  orientation,
})

watchEffect(() => {
  if (api.value) emit('init-api', api)
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

