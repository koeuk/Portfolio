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
const { t } = useI18n()

useHead({
  title: 'Blog - Koeuk Dev'
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

const posts = [
  {
    id: 1,
    title: 'Getting Started with Vue 3 Composition API',
    excerpt: 'Learn how to use the Composition API in Vue 3 to build more maintainable and reusable components.',
    date: 'Jan 15, 2026',
    category: 'Vue',
    tags: ['Vue', 'JavaScript'],
    slug: '/blog/vue-composition-api'
  },
  {
    id: 2,
    title: 'Building Responsive Layouts with Tailwind CSS',
    excerpt: 'A comprehensive guide to creating beautiful responsive designs using Tailwind CSS utility classes.',
    date: 'Jan 10, 2026',
    category: 'CSS',
    tags: ['Tailwind', 'CSS'],
    slug: '/blog/tailwind-responsive-layouts'
  },
  {
    id: 3,
    title: 'TypeScript Best Practices for 2026',
    excerpt: 'Discover the latest TypeScript patterns and practices to write cleaner, more type-safe code.',
    date: 'Jan 5, 2026',
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript'],
    slug: '/blog/typescript-best-practices'
  },
  {
    id: 4,
    title: 'Laravel Basic Setup Project',
    excerpt: 'Learn Laravel from scratch — installation, configuration, routing, controllers, models, and your first CRUD application.',
    date: 'Dec 28, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-setup'
  },
  {
    id: 5,
    title: 'Full-Stack App with Laravel & Vue',
    excerpt: 'Create a modern full-stack application combining Laravel as the backend API with Vue.js on the frontend.',
    date: 'Dec 20, 2025',
    category: 'Laravel & Vue',
    tags: ['Laravel', 'Vue'],
    slug: '/blog/laravel-vue-fullstack'
  },
  {
    id: 7,
    title: 'Laravel Eloquent Relationships',
    excerpt: 'Learn all Eloquent relationships — hasOne, hasMany, belongsTo, many-to-many, polymorphic, and eager loading.',
    date: 'Dec 10, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-relationships'
  },
  {
    id: 6,
    title: 'Laravel Eloquent ORM',
    excerpt: 'Master Eloquent ORM — models, CRUD operations, query scopes, mutators, accessors, and advanced query techniques.',
    date: 'Dec 15, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-eloquent'
  },
  {
    id: 8,
    title: 'Laravel Authentication',
    excerpt: 'Implement user authentication — login, registration, guards, providers, and protecting routes with middleware.',
    date: 'Dec 5, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-authentication'
  },
  {
    id: 9,
    title: 'Laravel Authorization',
    excerpt: 'Control user access with Gates and Policies — define who can perform what actions in your application.',
    date: 'Dec 1, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-authorization'
  },
  {
    id: 10,
    title: 'Laravel Email Verification',
    excerpt: 'Add email verification to your app — verify users after registration and protect routes for verified users only.',
    date: 'Nov 28, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-verification'
  },
  {
    id: 11,
    title: 'Laravel Encryption',
    excerpt: 'Secure sensitive data with Laravel encryption — encrypt, decrypt, and understand how Laravel protects your data.',
    date: 'Nov 25, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-encryption'
  },
  {
    id: 12,
    title: 'Laravel Hashing',
    excerpt: 'Hash passwords and sensitive data — bcrypt, argon2, and how Laravel handles secure password hashing.',
    date: 'Nov 22, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-hashing'
  },
  {
    id: 13,
    title: 'Laravel Password Reset',
    excerpt: 'Implement password reset — send reset emails, handle reset tokens, and customize the reset flow.',
    date: 'Nov 20, 2025',
    category: 'Laravel',
    tags: ['Laravel', 'PHP'],
    slug: '/blog/laravel-passwords'
  },
  {
    id: 14,
    title: 'Laravel Interview Questions',
    excerpt: 'Prepare for your next Laravel interview with commonly asked questions covering routing, Eloquent, middleware, and more.',
    date: 'Mar 1, 2026',
    category: 'Interview',
    tags: ['Laravel', 'Interview'],
    slug: '/blog/interview-laravel'
  },
  {
    id: 15,
    title: 'Vue.js Interview Questions',
    excerpt: 'Master Vue.js interview questions — reactivity, lifecycle hooks, Composition API, Vuex/Pinia, and component patterns.',
    date: 'Feb 25, 2026',
    category: 'Interview',
    tags: ['Vue', 'Interview'],
    slug: '/blog/interview-vue'
  },
  {
    id: 16,
    title: 'MySQL Interview Questions',
    excerpt: 'Common MySQL interview questions — indexes, joins, transactions, optimization, stored procedures, and replication.',
    date: 'Feb 20, 2026',
    category: 'Interview',
    tags: ['MySQL', 'Interview'],
    slug: '/blog/interview-mysql'
  },
  {
    id: 17,
    title: 'SQL Database Interview Questions',
    excerpt: 'Essential SQL interview questions — SELECT queries, subqueries, aggregation, normalization, and database design.',
    date: 'Feb 15, 2026',
    category: 'Interview',
    tags: ['SQL', 'Interview'],
    slug: '/blog/interview-sql'
  },
  {
    id: 18,
    title: 'TypeScript Interview Questions',
    excerpt: 'Top TypeScript interview questions — types vs interfaces, generics, utility types, type guards, and advanced patterns.',
    date: 'Feb 10, 2026',
    category: 'Interview',
    tags: ['TypeScript', 'Interview'],
    slug: '/blog/interview-typescript'
  },
  {
    id: 19,
    title: 'Database Basics: From Zero to Real Tables',
    excerpt: 'Learn database fundamentals from scratch — data types, CREATE TABLE, primary keys, foreign keys, INSERT, SELECT, JOIN, and build a real e-commerce database.',
    date: 'Mar 6, 2026',
    category: 'Database',
    tags: ['Database', 'SQL'],
    slug: '/blog/database-basics'
  }
]

const filteredPosts = computed(() => {
  if (activeTab.value === 'all') return posts
  return posts.filter(post => post.category === activeTab.value)
})
</script>
