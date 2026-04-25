<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="section">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
        {{ t('blog.title') }}
      </h1>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Thoughts, feelings, and moments captured along the way.
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

      <!-- Feelings Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in filteredPosts"
          :key="post.id"
          :to="`/blog/${post.slug}`"
          class="card p-6 group cursor-pointer block hover:-translate-y-1 transition-transform"
        >
          <div class="h-40 rounded-lg mb-4 overflow-hidden flex items-center justify-center"
            :class="post.image ? '' : `bg-gradient-to-br ${post.gradient}`">
            <img v-if="post.image" :src="post.image" :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <span v-else class="text-5xl">{{ post.emoji }}</span>
          </div>
          <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <span>{{ post.date }}</span>
            <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
            <span class="font-semibold">{{ post.category }}</span>
          </div>
          <h2 class="text-lg font-bold text-primary dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {{ post.body }}
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
        <p class="text-gray-500 dark:text-gray-400 text-lg">No entries for this mood yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Blog - Koeuk Dev'
})

const tabs = [
  { label: 'All', value: 'all' },
  { label: 'Happy', value: 'Happy' },
  { label: 'Reflective', value: 'Reflective' },
  { label: 'Grateful', value: 'Grateful' },
  { label: 'Challenging', value: 'Challenging' },
  { label: 'Hopeful', value: 'Hopeful' },
]

const route = useRoute()
const router = useRouter()

const activeTab = computed({
  get: () => (route.query.tab as string) || 'all',
  set: (value: string) => {
    router.replace({ query: value === 'all' ? {} : { tab: value } })
  }
})

const { posts } = useFeelings()

const filteredPosts = computed(() => {
  if (activeTab.value === 'all') return posts
  return posts.filter(post => post.category === activeTab.value)
})
</script>
