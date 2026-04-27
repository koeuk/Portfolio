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
          <div
            class="h-40 rounded-lg mb-4 flex flex-col items-center justify-center gap-3 transition-transform group-hover:scale-[1.02]"
            :style="{ background: categoryGradient(post.category) }"
          >
            <svg
              class="w-14 h-14 drop-shadow-2xl"
              viewBox="0 0 24 24"
              :fill="categoryIconColor(post.category)"
              aria-hidden="true"
            >
              <path :d="categoryIconPath(post.category)" />
            </svg>
            <span class="text-white text-lg font-bold tracking-wide drop-shadow-lg">{{ post.category }}</span>
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

type CategoryMeta = { path: string; color: string; gradient: [string, string] }

const categoryMeta: Record<string, CategoryMeta> = {
  HTML: {
    path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.59.001.231-2.622L5.679 4.41l.7 8.118h9.585l-.323 3.342-3.342.882-3.327-.88-.213-2.382H5.687l.413 4.69 5.943 1.658L18.05 18.5l.768-8.75z',
    color: '#FFFFFF',
    gradient: ['#E34F26', '#F06529'],
  },
  CSS: {
    path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
    color: '#FFFFFF',
    gradient: ['#1572B6', '#33A9DC'],
  },
  JavaScript: {
    path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
    color: '#000000',
    gradient: ['#F7DF1E', '#F0DB4F'],
  },
  TypeScript: {
    path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444.191.14.423.276.696.41.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
    color: '#FFFFFF',
    gradient: ['#3178C6', '#235A97'],
  },
  Vue: {
    path: 'M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z',
    color: '#FFFFFF',
    gradient: ['#42B883', '#35495E'],
  },
  Laravel: {
    path: 'M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.025.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.022-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.086 14.63 6.178v4.283l4.323 2.491v-4.61zM9.74 23.156l5.51-3.146 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z',
    color: '#FFFFFF',
    gradient: ['#FF2D20', '#B91C1C'],
  },
  'Laravel & Vue': {
    path: 'M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.025.033.011.02.018.04.024.06.006.01.012.021.015.032z',
    color: '#FFFFFF',
    gradient: ['#FF2D20', '#42B883'],
  },
  Tailwind: {
    path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
    color: '#FFFFFF',
    gradient: ['#06B6D4', '#0E7490'],
  },
  Nuxt: {
    path: 'M13.5 19h7.05a1.926 1.926 0 0 0 1.687-.974 1.948 1.948 0 0 0 .013-1.948L17.515 6.974a1.926 1.926 0 0 0-1.687-.974 1.926 1.926 0 0 0-1.687.974L12.75 9.21l-2.474-4.255a1.926 1.926 0 0 0-1.688-.974 1.926 1.926 0 0 0-1.687.974L.249 16.078a1.948 1.948 0 0 0 .013 1.948A1.926 1.926 0 0 0 1.949 19h4.426c1.755 0 3.05-.776 3.94-2.288l2.16-3.713 1.158-1.987 3.474 5.7H12.75L10.59 19h2.91zm-7.124-2.001l-3.087.001 4.633-7.95 2.313 3.974-1.55 2.659C7.7 16.682 7.04 17 6.376 17z',
    color: '#FFFFFF',
    gradient: ['#00DC82', '#108775'],
  },
  Git: {
    path: 'M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187',
    color: '#FFFFFF',
    gradient: ['#F05032', '#B9381F'],
  },
  Database: {
    path: 'M12 2C7.582 2 4 3.343 4 5v14c0 1.657 3.582 3 8 3s8-1.343 8-3V5c0-1.657-3.582-3-8-3zm0 2c3.866 0 6 1.045 6 1s-2.134 1-6 1-6-.955-6-1 2.134-1 6-1zm-6 4.236C7.378 8.706 9.578 9 12 9s4.622-.294 6-.764V11.5c0 .045-2.134 1.5-6 1.5s-6-1.455-6-1.5V8.236zm0 5.5c1.378.47 3.578.764 6 .764s4.622-.294 6-.764V17c0 .045-2.134 1.5-6 1.5s-6-1.455-6-1.5v-3.264z',
    color: '#FFFFFF',
    gradient: ['#6366F1', '#4338CA'],
  },
  Tools: {
    path: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1 .1-1.4z',
    color: '#FFFFFF',
    gradient: ['#64748B', '#334155'],
  },
  Interview: {
    path: 'M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10v2H7V9zm6 5H7v-2h6v2zm4-6H7V6h10v2z',
    color: '#FFFFFF',
    gradient: ['#1F2937', '#0F172A'],
  },
}

const fallbackMeta: CategoryMeta = {
  path: 'M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 16H5V5h14v14zm-5-7h-3v3H9v-3H6v-2h3V9h2v3h3v2z',
  color: '#FFFFFF',
  gradient: ['#1F2937', '#374151'],
}

function metaFor(category: string): CategoryMeta {
  return categoryMeta[category] ?? fallbackMeta
}

function categoryIconPath(category: string) {
  return metaFor(category).path
}

function categoryIconColor(category: string) {
  return metaFor(category).color
}

function categoryGradient(category: string) {
  const [from, to] = metaFor(category).gradient
  return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`
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
