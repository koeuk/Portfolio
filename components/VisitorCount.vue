<template>
  <Transition name="visitor-appear">
    <p v-if="visitors !== null" class="visitor-badge" :title="t('hero.visitorsTitle')">
      <span class="visitor-dot" aria-hidden="true"></span>
      <span class="visitor-count">{{ formatted }}</span>
      <span class="visitor-label">{{ t(visitors === 1 ? 'hero.visitor' : 'hero.visitors') }}</span>
    </p>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n()

const visitors = ref<number | null>(null)
const formatted = computed(() => visitors.value?.toLocaleString('en-US') ?? '')

// Marks this browser as counted, so refreshes read the total instead of adding to it.
const COUNTED_KEY = 'koeuk:counted'

function alreadyCounted() {
  try {
    return localStorage.getItem(COUNTED_KEY) === '1'
  } catch {
    // Storage can be blocked outright; treat that as a first visit.
    return false
  }
}

function rememberCounted() {
  try {
    localStorage.setItem(COUNTED_KEY, '1')
  } catch {
    // Nothing to do — the visit still counted, it just cannot be remembered.
  }
}

onMounted(async () => {
  const counted = alreadyCounted()

  try {
    const result = await $fetch<{ visitors: number | null }>('/api/views', {
      method: counted ? 'GET' : 'POST',
    })

    if (typeof result?.visitors === 'number' && result.visitors > 0) {
      visitors.value = result.visitors
      if (!counted) rememberCounted()
    }
  } catch {
    // The counter is decorative — if it cannot be read, the badge never appears.
  }
})
</script>

<style scoped>
.visitor-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  height: 2.35rem;
  margin: 0;
  padding: 0 0.95rem;
  border-radius: 9999px;
  border: 1px solid var(--line, rgba(245, 241, 234, 0.12));
  background: rgba(255, 255, 255, 0.03);
  color: var(--ink-muted, rgba(245, 241, 234, 0.62));
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;
  cursor: default;
}

.visitor-dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--gold, #d3b078);
  box-shadow: 0 0 0 0 rgba(211, 176, 120, 0.55);
  animation: visitor-pulse 2.4s ease-out infinite;
}

@keyframes visitor-pulse {
  0% { box-shadow: 0 0 0 0 rgba(211, 176, 120, 0.5); }
  70% { box-shadow: 0 0 0 7px rgba(211, 176, 120, 0); }
  100% { box-shadow: 0 0 0 0 rgba(211, 176, 120, 0); }
}

.visitor-count {
  color: var(--ink, #f5f1ea);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.visitor-appear-enter-active {
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.visitor-appear-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
  .visitor-dot { animation: none; }
  .visitor-appear-enter-active { transition: none; }
}
</style>
