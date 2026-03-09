<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="section">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
        {{ t('blog.title') }}
      </h1>

      <p class="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        {{ t('blog.subtitle') }}
      </p>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          @click="activeTab = 'all'"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeTab === 'all'
              ? 'bg-primary text-white dark:bg-white dark:text-primary shadow-md'
              : 'bg-gray-100 text-gray-600 dark:bg-primary-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-light/80'
          ]"
        >
          {{ t('blog.tab.all') }}
        </button>
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.slug"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
            activeTab === tab.slug
              ? 'bg-primary text-white dark:bg-white dark:text-primary shadow-md'
              : 'bg-gray-100 text-gray-600 dark:bg-primary-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-light/80'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="post.is_external ? post.external_url : `/blog/${post.slug}`"
          :external="post.is_external || false"
          :target="post.is_external ? '_blank' : undefined"
          class="card p-6 group cursor-pointer block"
        >
          <div class="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white/20 text-2xl font-bold">{{ post.category?.name }}</span>
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ formatDate(post.date) }}</div>
          <h2 class="text-lg font-bold text-primary dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
            {{ post.excerpt }}
          </p>
          <div class="flex gap-2 mt-4">
            <span
              v-for="tag in post.tags"
              :key="tag.id"
              class="px-2 py-1 bg-gray-100 dark:bg-primary-light text-xs rounded-full text-gray-600 dark:text-gray-300"
            >
              {{ tag.name }}
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Pagination -->
      <div v-if="meta && meta.last_page > 1" class="flex justify-center gap-2 mt-12">
        <button
          v-for="p in meta.last_page"
          :key="p"
          @click="page = p"
          class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          :class="page === p
            ? 'bg-primary text-white dark:bg-white dark:text-primary'
            : 'bg-gray-100 text-gray-600 dark:bg-primary-light dark:text-gray-300'"
        >
          {{ p }}
        </button>
      </div>

      <!-- No results for filter -->
      <div v-if="posts.length === 0" class="text-center py-20">
        <p class="text-gray-500 dark:text-gray-400 text-lg">{{ t('blog.noResults') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { getBlogTabs } = useApi()
const { locale } = useAppLocale()

useHead({
  title: 'Blog - Koeuk Dev'
})

// Tabs
const { data: tabsData } = await getBlogTabs()
const tabs = computed(() => (tabsData.value as any)?.data || [])

// Filters
const route = useRoute()
const router = useRouter()

const activeTab = computed({
  get: () => (route.query.tab as string) || 'all',
  set: (val: string) => {
    page.value = 1
    router.replace({ query: val === 'all' ? {} : { tab: val } })
  }
})

const page = ref(1)

// Posts
const config = useRuntimeConfig()
const apiBase = config.public.apiBase as string

const { data: postsData } = await useAsyncData(
  'blog-posts',
  () => $fetch(`${apiBase}/blog/posts`, {
    params: {
      ...(activeTab.value !== 'all' ? { tab: activeTab.value } : {}),
      page: page.value,
      locale: locale.value
    }
  }),
  { watch: [activeTab, page, locale] }
)

const posts = computed(() => (postsData.value as any)?.data || [])
const meta = computed(() => (postsData.value as any)?.meta)

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
</script>
