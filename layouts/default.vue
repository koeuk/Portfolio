<template>
  <div
    ref="spotlightWrapper"
    class="spotlight-wrapper min-h-screen"
    :style="wrapperStyle"
  >
    <!-- Ambient background: static atmosphere + cursor-tracked spotlight.
         Separate layers so the moving gradient only repaints its own layer. -->
    <div class="ambient-layers" aria-hidden="true">
      <div class="atmosphere"></div>
      <div class="spotlight"></div>
    </div>

    <main>
      <!-- Keyed per-route so the entrance animation replays on navigation -->
      <div :key="route.fullPath" class="page-enter">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core'

const route = useRoute()

const spotlightWrapper = ref<HTMLElement | null>(null)
const { elementX, elementY, isOutside } = useMouseInElement(spotlightWrapper)

// Drive the spotlight purely through CSS custom properties on the wrapper.
// Only this wrapper re-renders on mousemove; the slotted page (owned by
// app.vue) keeps stable vnodes, so child components never remount.
const wrapperStyle = computed(() => ({
  '--mouse-x': `${elementX.value}px`,
  '--mouse-y': `${elementY.value}px`,
  '--mouse-opacity': isOutside.value ? '0' : '1',
}))
</script>

<style scoped>
.spotlight-wrapper {
  position: relative;
  isolation: isolate;
}

/* Layer wrapper sits behind content, never intercepts pointer events,
   and fades both layers out toward the bottom so cards stay clean. */
.ambient-layers {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: clip;
  -webkit-mask-image: linear-gradient(180deg, #000 0%, #000 60%, transparent 100%);
  mask-image: linear-gradient(180deg, #000 0%, #000 60%, transparent 100%);
}

/* Static atmosphere: dotted grid + two corner tints (warm + sage). */
.atmosphere {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.07), transparent 40%),
    radial-gradient(circle at 100% 0%, rgba(34, 197, 94, 0.07), transparent 42%),
    radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px);
  background-size: auto, auto, 18px 18px;
}

/* Light dots read better on dark surfaces. */
:global(.dark) .atmosphere {
  background-image:
    radial-gradient(circle at 0% 0%, rgba(245, 158, 11, 0.06), transparent 40%),
    radial-gradient(circle at 100% 0%, rgba(34, 197, 94, 0.08), transparent 42%),
    radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: auto, auto, 18px 18px;
}

/* Cursor-tracked spotlight on its own layer. Only opacity transitions —
   gradients can't be interpolated smoothly cross-browser. */
.spotlight {
  position: absolute;
  inset: 0;
  opacity: var(--mouse-opacity, 0);
  transition: opacity 220ms ease-out;
  background: radial-gradient(
    340px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(34, 197, 94, 0.13),
    rgba(34, 197, 94, 0.05) 45%,
    transparent 70%
  );
}

/* Page-load entrance: gentle fade + lift, replayed per route via :key. */
@keyframes lg-page-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-enter {
  animation: lg-page-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

/* Staggered cascade for the first content blocks (hero / tabs / panel). */
.page-enter > :nth-child(1) { animation: lg-page-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both; }
.page-enter > :nth-child(2) { animation: lg-page-in 600ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both; }
.page-enter > :nth-child(3) { animation: lg-page-in 600ms cubic-bezier(0.22, 1, 0.36, 1) 160ms both; }

@media (prefers-reduced-motion: reduce) {
  .spotlight {
    display: none;
  }
  .page-enter,
  .page-enter > :nth-child(1),
  .page-enter > :nth-child(2),
  .page-enter > :nth-child(3) {
    animation: none;
  }
}
</style>
