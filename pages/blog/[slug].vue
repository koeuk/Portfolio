<template>
  <div v-if="post" class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <!-- Back button -->
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <!-- Header -->
      <div class="mb-12">
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="tag in post.tags"
            :key="tag.id"
            class="px-3 py-1 text-xs rounded-full font-medium"
            :class="tagClass(tag.color)"
            :style="tagStyle(tag.color)"
          >
            {{ tag.name }}
          </span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ post.title }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">{{ formatDate(post.date) }}</p>
      </div>

      <!-- Content -->
      <article class="prose-content" v-html="renderedContent"></article>
    </div>
  </div>

  <!-- Not Found -->
  <div v-else-if="!pending" class="min-h-screen flex items-center justify-center bg-white dark:bg-primary">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-primary dark:text-white">{{ t('blog.postNotFound') }}</h1>
      <NuxtLink to="/blog" class="text-gray-500 hover:text-primary dark:hover:text-white underline font-semibold transition-colors">
        {{ t('blog.backToBlog') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { getBlogPost } = useApi()
const slug = route.params.slug as string

const { data: postData, pending } = await getBlogPost(slug)

const post = computed(() => (postData.value as any)?.data)

const renderedContent = computed(() => {
  if (!post.value) return ''

  let content = post.value.content || ''
  const codeBlocks = post.value.code_blocks || []

  // Replace code block placeholders {{CODE_BLOCK_1}}, {{CODE_BLOCK_2}}, etc.
  codeBlocks.forEach((block: any, index: number) => {
    const placeholder = `{{CODE_BLOCK_${index + 1}}}`
    const codeBlockHtml = `
      <div class="code-block group/code relative">
        <div class="code-header flex items-center justify-between">
          <span>${escapeHtml(block.title)}</span>
        </div>
        <pre><code>${escapeHtml(block.code)}</code></pre>
      </div>
    `
    content = content.replace(placeholder, codeBlockHtml)
  })

  return content
})

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function tagStyle(color: string): Record<string, string> {
  if (!color) return {}
  // Support hex colors from API
  if (color.startsWith('#')) {
    return {
      backgroundColor: `${color}20`,
      color: color
    }
  }
  return {}
}

const tagColorMap: Record<string, string> = {
  red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
}

function tagClass(color: string): string {
  if (color?.startsWith('#')) return ''
  return tagColorMap[color] || tagColorMap.blue
}

useHead({
  title: post.value ? `${post.value.title} - Koeuk Dev` : 'Blog - Koeuk Dev',
  meta: [
    { name: 'description', content: post.value?.excerpt || '' }
  ]
})
</script>

<style>
/* Blog content styles — unscoped so they apply to v-html */
.prose-content h2 {
  @apply text-2xl font-bold text-primary dark:text-white mb-4 mt-10;
}

.prose-content h3 {
  @apply text-xl font-semibold text-primary dark:text-white mb-3;
}

.prose-content p {
  @apply text-gray-600 dark:text-gray-300 leading-relaxed mb-4;
}

.prose-content ul {
  @apply space-y-2 text-gray-600 dark:text-gray-300 mb-4;
}

.prose-content ol {
  @apply space-y-2 text-gray-600 dark:text-gray-300 mb-4 list-decimal pl-5;
}

.prose-content li {
  @apply flex items-start gap-2;
}

.prose-content section {
  @apply mb-12;
}

.prose-content .qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}

.prose-content .tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}

.prose-content .inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-red-500 dark:text-red-400;
}

.prose-content .code-block {
  @apply rounded-xl overflow-hidden mb-4 border border-gray-200 dark:border-gray-700;
}

.prose-content .code-header {
  @apply px-4 py-2 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700;
}

.prose-content .code-block pre {
  @apply p-4 bg-gray-50 dark:bg-[#1a1a2e] overflow-x-auto;
}

.prose-content .code-block code {
  @apply text-sm text-gray-800 dark:text-gray-200 font-mono leading-relaxed whitespace-pre;
}

.prose-content table {
  @apply w-full border-collapse mb-6 text-sm;
}

.prose-content th {
  @apply px-4 py-3 bg-gray-100 dark:bg-primary-light text-left font-bold text-primary dark:text-white border border-gray-200 dark:border-gray-700;
}

.prose-content td {
  @apply px-4 py-3 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700;
}

.prose-content a {
  @apply text-blue-600 dark:text-blue-400 hover:underline;
}

.prose-content strong {
  @apply font-bold text-primary dark:text-white;
}

.prose-content blockquote {
  @apply pl-4 border-l-4 border-gray-300 dark:border-gray-600 italic text-gray-500 dark:text-gray-400 my-4;
}
</style>
