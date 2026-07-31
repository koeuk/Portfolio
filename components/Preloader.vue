<template>
  <Transition name="preloader">
    <div v-if="visible" class="preloader" role="status" aria-live="polite" aria-label="Loading portfolio">
      <div class="preloader-card">
        <!-- Brand -->
        <div class="pl-brand">
          <span class="pl-dot" aria-hidden="true"></span>
          <span class="pl-name">Koeuk KOS</span>
        </div>

        <!-- Big count -->
        <div class="pl-count">
          <span class="pl-num">{{ padded }}</span>
          <span class="pl-pct">%</span>
        </div>

        <!-- Progress range -->
        <div class="pl-track">
          <div class="pl-fill" :style="{ width: pct + '%' }"></div>
        </div>

        <!-- Footer -->
        <div class="pl-foot">
          <span>Loading portfolio</span>
          <span>{{ statusLabel }}</span>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{ done: [] }>()

const visible = ref(true)
const pct = ref(0)
const timers: ReturnType<typeof setTimeout>[] = []

const padded = computed(() => String(pct.value).padStart(3, '0'))
const statusLabel = computed(() => {
  if (pct.value < 35) return 'Warming up'
  if (pct.value < 70) return 'Fetching assets'
  if (pct.value < 100) return 'Almost there'
  return 'Ready'
})

function tick() {
  if (pct.value >= 100) {
    // brief hold on 100%, then reveal the site
    timers.push(setTimeout(() => {
      visible.value = false
      timers.push(setTimeout(() => emit('done'), 650))
    }, 320))
    return
  }
  // ease-out feel: big steps early, small steps near the end
  const remaining = 100 - pct.value
  const step = Math.max(1, Math.round(remaining * 0.14) + Math.floor(Math.random() * 3))
  pct.value = Math.min(100, pct.value + step)
  timers.push(setTimeout(tick, 55 + Math.random() * 75))
}

onMounted(() => {
  document.documentElement.style.overflow = 'hidden'
  timers.push(setTimeout(tick, 260))
})

watch(visible, (v) => {
  if (!v) document.documentElement.style.overflow = ''
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: #ffffff;
}

:global(.dark) .preloader,
:global(html.dark) .preloader {
  background: #0a0a0a;
}

.preloader-card {
  width: 100%;
  max-width: 30rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(13, 13, 13, 0.12);
  background: #ffffff;
  padding: 1.75rem;
}

:global(.dark) .preloader-card,
:global(html.dark) .preloader-card {
  background: #0e0e10;
  border-color: rgba(255, 255, 255, 0.12);
}

/* Brand row */
.pl-brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #0d0d0d;
}

.pl-dot {
  width: 7px;
  height: 7px;
  border-radius: 9999px;
  background: #22c55e;
  animation: pl-pulse 1.6s ease-out infinite;
}

@keyframes pl-pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
  70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

/* Big number */
.pl-count {
  display: flex;
  align-items: baseline;
  gap: 0.15rem;
  margin: 1.5rem 0 1.1rem;
  font-family: 'Archivo', sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0d0d0d;
  line-height: 1;
}

.pl-num {
  font-size: clamp(3.2rem, 9vw, 4.75rem);
  font-variant-numeric: tabular-nums;
}

.pl-pct {
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  color: rgba(13, 13, 13, 0.4);
}

/* Progress range */
.pl-track {
  position: relative;
  height: 4px;
  border-radius: 9999px;
  background: rgba(13, 13, 13, 0.1);
  overflow: hidden;
}

.pl-fill {
  height: 100%;
  border-radius: 9999px;
  background: #22c55e;
  transition: width 0.18s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Footer */
.pl-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.85rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(13, 13, 13, 0.42);
}

/* Dark text */
:global(.dark) .pl-brand,
:global(.dark) .pl-count { color: #fafafa; }
:global(.dark) .pl-pct { color: rgba(250, 250, 250, 0.4); }
:global(.dark) .pl-track { background: rgba(255, 255, 255, 0.1); }
:global(.dark) .pl-foot { color: rgba(250, 250, 250, 0.42); }

/* Reveal transition — slide the whole overlay up */
.preloader-leave-active {
  transition: transform 0.65s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.65s ease;
}
.preloader-leave-to {
  transform: translateY(-100%);
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .pl-dot,
  .pl-fill { animation: none; transition: none; }
  .preloader-leave-active { transition: opacity 0.3s ease; }
  .preloader-leave-to { transform: none; opacity: 0; }
}
</style>
