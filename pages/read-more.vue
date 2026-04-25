<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="section">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
        {{ t('nav.readMore') }}
      </h1>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        {{ t('blog.subtitle') }}
      </p>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="activeTab = tab.value"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeTab === tab.value
              ? 'bg-primary text-white dark:bg-white dark:text-primary shadow-md'
              : 'bg-gray-100 text-gray-600 dark:bg-primary-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-light/80'
          ]"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in filteredPosts"
          :key="post.id"
          :to="post.slug || '#'"
          :external="post.external || false"
          :target="post.external ? '_blank' : undefined"
          class="card p-6 group cursor-pointer block"
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
        </NuxtLink>
      </div>

      <!-- No results for filter -->
      <div v-if="filteredPosts.length === 0" class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ t('blog.noResults') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

const { t } = useI18n()
const { posts } = useBlog()

useHead({
  title: 'Read More - Koeuk Dev'
})

const tabs = computed(() => [
  { label: t('blog.tab.all'), value: 'all' },
  { label: t('blog.tab.laravel'), value: 'Laravel' },
  { label: t('blog.tab.vue'), value: 'Vue' },
  { label: t('blog.tab.typescript'), value: 'TypeScript' },
  { label: t('blog.tab.laravelVue'), value: 'Laravel & Vue' },
  { label: t('blog.tab.interview'), value: 'Interview' },
  { label: t('blog.tab.database'), value: 'Database' },
])

const route = useRoute()
const router = useRouter()

const activeTab = computed({
  get: () => (route.query.tab as string) || 'all',
  set: (val: string) => {
    router.replace({ query: val === 'all' ? {} : { tab: val } })
  }
})

const filteredPosts = computed(() => {
  if (activeTab.value === 'all') return posts
  return posts.filter(post => post.category === activeTab.value)
})
</script>
