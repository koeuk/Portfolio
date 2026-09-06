<template>
  <Transition name="visitor-appear">
    <p v-if="views !== null" class="visitor-badge" :title="t('hero.viewsTitle')">
      <span class="visitor-dot" aria-hidden="true"></span>
      <span class="visitor-count">{{ formatted }}</span>
      <span class="visitor-label">{{ t(views === 1 ? 'hero.view' : 'hero.views') }}</span>
    </p>
  </Transition>
</template>

<script setup lang="ts">
const { t } = useI18n()

const views = ref<number | null>(null)
const formatted = computed(() => views.value?.toLocaleString('en-US') ?? '')

/**
 * Marks this visit as counted. sessionStorage rather than localStorage is the
 * whole point: the flag dies with the tab, so hammering refresh adds nothing,
 * but coming back to the site later counts as another view.
 */
const COUNTED_KEY = 'koeuk:viewed'

function alreadyCounted() {
  try {
    return sessionStorage.getItem(COUNTED_KEY) === '1'
  } catch {
    // Storage can be blocked outright; treat that as a fresh view.
    return false
  }
}

function rememberCounted() {
  try {
    sessionStorage.setItem(COUNTED_KEY, '1')
  } catch {
    // Nothing to do — the view still counted, it just cannot be remembered.
  }
}

async function ask(method: 'GET' | 'POST') {
  const result = await $fetch<{ views: number | null }>('/api/views', { method })
  return typeof result?.views === 'number' && result.views > 0 ? result.views : null
}

onMounted(async () => {
  const counted = alreadyCounted()

  try {
    let total = await ask(counted ? 'GET' : 'POST')

    // An empty counter means it was reset since this browser was last counted,
    // so the flag is stale — count again rather than reading an empty total
    // forever, which would leave the badge hidden until a new visitor arrived.
    if (counted && total === null) total = await ask('POST')

    if (total !== null) {
      views.value = total
      rememberCounted()
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
