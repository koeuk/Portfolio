<template>
  <Teleport to="body">
    <Transition name="sheet-backdrop">
      <div
        v-if="open"
        class="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
        @click="$emit('update:open', false)"
        aria-hidden="true"
      />
    </Transition>

    <Transition name="sheet-panel">
      <aside
        v-if="open"
        role="dialog"
        aria-modal="true"
        aria-label="Music"
        class="fixed top-0 right-0 z-[1001] h-full w-full max-w-md bg-white dark:bg-primary border-l border-gray-100 dark:border-gray-800 shadow-2xl flex flex-col"
      >
        <!-- Header -->
        <header class="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
              </svg>
            </div>
            <div>
              <h2 class="text-lg font-bold text-primary dark:text-white">Music</h2>
              <p class="text-xs text-gray-500 dark:text-gray-400">Things I'm listening to</p>
            </div>
          </div>
          <button
            @click="$emit('update:open', false)"
            class="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <!-- Content -->
        <div class="flex-1 overflow-y-auto">
          <MusicContent />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (event: 'update:open', value: boolean): void }>()

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = props.open ? 'hidden' : ''
})

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) emit('update:open', false)
}

onMounted(() => {
  if (typeof document !== 'undefined') document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', handleEscape)
  }
})
</script>

<style scoped>
.sheet-backdrop-enter-active,
.sheet-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.sheet-backdrop-enter-from,
.sheet-backdrop-leave-to {
  opacity: 0;
}

.sheet-panel-enter-active {
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.sheet-panel-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}

.sheet-panel-enter-from,
.sheet-panel-leave-to {
  transform: translateX(100%);
}
</style>
