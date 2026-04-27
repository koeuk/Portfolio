<template>
  <div class="bg-white dark:bg-primary">
    <div class="section">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
        {{ t('nav.readMore') }}
      </h1>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        {{ t('blog.subtitle') }}
      </p>

      <!-- Search with Chip Dropdown -->
      <div class="max-w-2xl mx-auto mb-12 px-4">
        <div class="relative" ref="dropdownRef">
          <!-- Search Input -->
          <div class="relative">
            <svg class="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              v-model="searchQuery"
              @focus="isOpen = true"
              type="text"
              placeholder="Search posts..."
              class="w-full pr-12 py-3 rounded-full bg-gray-50 dark:bg-primary-light border-2 border-gray-100 dark:border-gray-800 text-sm text-primary dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary dark:focus:border-white focus:bg-white dark:focus:bg-primary-light/80 transition-all"
              style="padding-left: 3.25rem;"
            />
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-400 dark:text-gray-500 transition-colors"
              aria-label="Clear search"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Dropdown Panel -->
          <Transition name="dropdown">
            <div
              v-if="isOpen"
              class="absolute left-0 right-0 mt-2 bg-white dark:bg-primary-light rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-20 p-6"
            >
              <!-- Categories Section -->
              <div class="mb-5">
                <p class="text-sm font-bold text-primary dark:text-white mb-3">Categories</p>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="tab in tabs"
                    :key="tab.value"
                    @click="selectTab(tab.value)"
                    class="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                    :class="activeTab === tab.value
                      ? 'bg-primary text-white dark:bg-white dark:text-primary shadow-sm'
                      : 'bg-gray-100 text-gray-700 dark:bg-primary dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-primary/70'"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>

              <!-- Suggested Posts -->
              <div v-if="suggestedPosts.length > 0">
                <p class="text-sm font-bold text-primary dark:text-white mb-3">All Posts</p>
                <div class="flex flex-wrap gap-2 max-h-56 overflow-y-auto">
                  <NuxtLink
                    v-for="post in suggestedPosts"
                    :key="post.id"
                    :to="post.slug"
                    @click="isOpen = false"
                    class="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-700 dark:bg-primary dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-primary/70 transition-all"
                  >
                    {{ post.title }}
                  </NuxtLink>
                </div>
              </div>

              <div v-else class="text-center py-6">
                <p class="text-sm text-gray-500 dark:text-gray-400">No posts match "{{ searchQuery }}"</p>
              </div>
            </div>
          </Transition>
        </div>
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
          <div class="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex flex-col items-center justify-center gap-2">
            <span class="text-5xl drop-shadow-lg" aria-hidden="true">{{ categoryIcon(post.category) }}</span>
            <span class="text-white/30 text-xl font-bold tracking-wide">{{ post.category }}</span>
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

const tabs = computed(() => [
  { label: t('blog.tab.all'), value: 'all' },
  { label: t('blog.tab.html'), value: 'HTML' },
  { label: t('blog.tab.css'), value: 'CSS' },
  { label: t('blog.tab.javascript'), value: 'JavaScript' },
  { label: t('blog.tab.typescript'), value: 'TypeScript' },
  { label: t('blog.tab.vue'), value: 'Vue' },
  { label: t('blog.tab.laravel'), value: 'Laravel' },
  { label: t('blog.tab.laravelVue'), value: 'Laravel & Vue' },
  { label: t('blog.tab.interview'), value: 'Interview' },
  { label: t('blog.tab.database'), value: 'Database' },
  { label: t('blog.tab.tools'), value: 'Tools' },
])

const categoryIconMap: Record<string, string> = {
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '⚡',
  TypeScript: '🔷',
  Vue: '💚',
  Laravel: '🅻',
  'Laravel & Vue': '🔥',
  Interview: '💬',
  Database: '🗄️',
  Tools: '🛠️',
  Git: '🌿',
  Nuxt: '🟢',
  Tailwind: '🌊',
}

function categoryIcon(category: string) {
  return categoryIconMap[category] ?? '📄'
}

const route = useRoute()
const router = useRouter()

const activeTab = computed({
  get: () => (route.query.tab as string) || 'all',
  set: (val: string) => {
    router.replace({ query: { ...route.query, tab: val === 'all' ? undefined : val } })
  }
})

const searchQuery = ref('')
const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function selectTab(value: string) {
  activeTab.value = value
  const tab = tabs.value.find(t => t.value === value)
  searchQuery.value = value === 'all' ? '' : (tab?.label ?? '')
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const filteredPosts = computed(() => {
  let result = posts
  if (activeTab.value !== 'all') {
    result = result.filter(post => post.category === activeTab.value)
  }
  const query = searchQuery.value.trim().toLowerCase()
  if (query) {
    result = result.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }
  return result
})

const suggestedPosts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return posts.slice(0, 12)
  return posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.tags.some(tag => tag.toLowerCase().includes(query))
  ).slice(0, 12)
})
</script>

<style scoped>
.dropdown-enter-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-leave-active {
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  filter: blur(4px);
  transform: translateY(-8px) scale(0.95);
}
</style>
