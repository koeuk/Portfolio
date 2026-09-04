<template>
  <Teleport to="body">
    <Transition name="cv-fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
        @click="close"
        aria-hidden="true"
      ></div>
    </Transition>

    <Transition name="cv-slide">
      <aside
        v-if="open"
        class="fixed inset-y-0 right-0 z-[9999] w-full sm:w-[min(92vw,900px)] flex flex-col bg-white dark:bg-primary border-l border-gray-200 dark:border-gray-800 shadow-2xl"
        role="dialog"
        aria-modal="true"
        :aria-label="t('cv.title')"
      >
        <!-- Header -->
        <header class="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <div class="min-w-0">
            <p class="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500">{{ t('cv.eyebrow') }}</p>
            <h2 class="text-lg sm:text-xl font-bold text-primary dark:text-white truncate">{{ t('cv.title') }}</h2>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <a
              :href="cvUrl"
              download="KOS_Koeuk_Junior_Full_Stack_Developer.pdf"
              class="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary dark:bg-white text-white dark:text-primary text-sm font-semibold hover:opacity-90 transition-all hover:scale-105"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
              {{ t('cv.download') }}
            </a>
            <a
              :href="cvUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:border-gray-400 transition-colors"
              :title="t('cv.openTab')"
              :aria-label="t('cv.openTab')"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
            <button
              type="button"
              class="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:border-gray-400 transition-colors"
              :title="t('cv.close')"
              :aria-label="t('cv.close')"
              @click="close"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </header>

        <!-- PDF -->
        <div class="flex-1 min-h-0 bg-gray-100 dark:bg-black">
          <iframe
            :src="`${cvUrl}#view=FitH`"
            :title="t('cv.title')"
            class="w-full h-full border-0"
          ></iframe>
        </div>

        <!-- Mobile footer (PDF viewers on phones often refuse to render inside an iframe) -->
        <footer class="sm:hidden flex gap-2 p-3 border-t border-gray-200 dark:border-gray-800">
          <a
            :href="cvUrl"
            download="KOS_Koeuk_Junior_Full_Stack_Developer.pdf"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-primary text-sm font-semibold"
          >
            {{ t('cv.download') }}
          </a>
          <a
            :href="cvUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-primary dark:text-white text-sm font-semibold"
          >
            {{ t('cv.openTab') }}
          </a>
        </footer>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'update:open', value: boolean): void }>()

const { t } = useI18n()
const cvUrl = '/resume.pdf'

function close() {
  emit('update:open', false)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.open) close()
}

watch(
  () => props.open,
  (isOpen) => {
    if (!import.meta.client) return
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.cv-fade-enter-active,
.cv-fade-leave-active {
  transition: opacity 0.3s ease;
}
.cv-fade-enter-from,
.cv-fade-leave-to {
  opacity: 0;
}

.cv-slide-enter-active {
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.cv-slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.cv-slide-enter-from,
.cv-slide-leave-to {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .cv-slide-enter-active,
  .cv-slide-leave-active,
  .cv-fade-enter-active,
  .cv-fade-leave-active {
    transition: none;
  }
}
</style>
