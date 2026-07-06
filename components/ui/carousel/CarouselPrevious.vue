<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'
import { useCarousel } from './useCarousel'

interface Props {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const { canScrollPrev, scrollPrev } = useCarousel()
</script>

<template>
  <button
    type="button"
    :disabled="!canScrollPrev"
    aria-label="Previous slide"
    :class="cn(
      'absolute left-2 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border transition disabled:opacity-40 disabled:pointer-events-none',
      'border-black/10 bg-white/80 text-primary backdrop-blur hover:bg-white',
      'dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15',
      props.class,
    )"
    @click="scrollPrev"
  >
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
</template>

