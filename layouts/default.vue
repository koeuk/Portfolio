<template>
  <div class="page-stage min-h-screen">
    <!-- Static ambient atmosphere layer -->
    <div class="ambient-layers" aria-hidden="true">
      <div class="atmosphere"></div>
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
const route = useRoute()
</script>

<style scoped>
.page-stage {
  position: relative;
  isolation: isolate;
  /* Match the editorial hero surface across every section */
  background: #fff;
}

/* Theme class sits on <html>, so dark variants are written as `html.dark …`.
   Do NOT use `:global(.dark)` — those selectors are dropped by the scoped-CSS
   pipeline and the rule silently never reaches the browser. */
html.dark .page-stage {
  background: #0a0a0a;
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

/* Static atmosphere: dotted grid only. */
.atmosphere {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px);
  background-size: 18px 18px;
}

/* Light dots read better on dark surfaces. */
html.dark .atmosphere {
  background-image: radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 18px 18px;
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
  .page-enter,
  .page-enter > :nth-child(1),
  .page-enter > :nth-child(2),
  .page-enter > :nth-child(3) {
    animation: none;
  }
}
</style>
