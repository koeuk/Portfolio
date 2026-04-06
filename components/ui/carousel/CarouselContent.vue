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
  if (!ctx) throw new Error('CarouselContent must be used within Carousel')
})

const isHorizontal = computed(() => (ctx?.orientation.value ?? 'horizontal') === 'horizontal')
</script>

<template>
  <div v-if="ctx" :ref="ctx.viewportRef" class="overflow-hidden">
    <div
      :class="cn(
        'flex',
        isHorizontal ? '-ml-4' : '-mt-4 flex-col',
        props.class,
      )"
    >
      <slot />
    </div>
  </div>
</template>

