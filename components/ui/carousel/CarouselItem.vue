<script setup lang="ts">
import { computed, inject, onMounted } from 'vue'
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'
import { carouselContextKey } from './carouselContext'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const ctx = inject(carouselContextKey)

onMounted(() => {
  if (!ctx) throw new Error('CarouselItem must be used within Carousel')
})

const isHorizontal = computed(() => (ctx?.orientation.value ?? 'horizontal') === 'horizontal')
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      isHorizontal ? 'pl-4' : 'pt-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>

