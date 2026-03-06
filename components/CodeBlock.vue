<template>
  <div class="code-block group/code relative">
    <div class="code-header flex items-center justify-between">
      <span>{{ title }}</span>
      <button
        @click="copyCode"
        class="flex items-center gap-1 text-xs px-2 py-1 rounded-md transition-all duration-200"
        :class="copied
          ? 'text-green-500 bg-green-500/10'
          : 'text-gray-400 hover:text-white hover:bg-white/10 opacity-0 group-hover/code:opacity-100'"
      >
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        {{ copied ? 'Copied!' : 'Copy' }}
      </button>
    </div>
    <pre ref="codeRef"><code v-if="code" v-html="code"></code><code v-else><slot /></code></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; code?: string }>()

const codeRef = ref<HTMLPreElement | null>(null)
const copied = ref(false)

function copyCode() {
  const text = codeRef.value?.textContent || ''
  navigator.clipboard.writeText(text)
  copied.value = true
  setTimeout(() => { copied.value = false }, 2000)
}
</script>

<style scoped>
.code-block {
  @apply rounded-xl overflow-hidden mb-4 border border-gray-200 dark:border-gray-700;
}
.code-header {
  @apply px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700;
}
.code-block pre {
  @apply p-4 bg-gray-50 dark:bg-[#1a1a2e] overflow-x-auto;
}
.code-block code {
  @apply text-sm text-gray-800 dark:text-gray-200 font-mono leading-relaxed whitespace-pre;
}
</style>
