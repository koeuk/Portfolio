<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="section">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
        {{ t('blog.title') }}
      </h1>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        {{ t('blog.subtitle') }}
      </p>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="post in posts"
          :key="post.id"
          class="card p-6 group cursor-pointer"
        >
          <div class="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white/20 text-2xl font-bold">{{ post.category }}</span>
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ post.date }}</div>
          <h2 class="text-lg font-bold text-primary dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {{ post.excerpt }}
          </p>
          <div class="flex gap-2 mt-4">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-2 py-1 bg-gray-100 dark:bg-primary-light text-xs rounded-full text-gray-600 dark:text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>

      <!-- Coming Soon Message if no posts -->
      <div v-if="posts.length === 0" class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ t('blog.comingSoon') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Blog - Koeuk Dev'
})

const posts = [
  {
    id: 1,
    title: 'Getting Started with Vue 3 Composition API',
    excerpt: 'Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components.',
    date: 'Jan 15, 2026',
    category: 'Vue.js',
    tags: ['Vue', 'JavaScript']
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating beautiful responsive designs using Tailwind CSS utility classes.',
    date: 'Jan 10, 2026',
    category: 'CSS',
    tags: ['Tailwind', 'CSS']
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for 2026',
    excerpt: 'Discover the latest TypeScript patterns and practices to write cleaner, more type-safe code.',
    date: 'Jan 5, 2026',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript']
  }
]
</script>
