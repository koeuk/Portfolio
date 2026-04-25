<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs rounded-full font-medium">Nuxt</span>
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn Nuxt.js: The Vue Meta-Framework
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 4, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          Nuxt is to Vue what Next.js is to React: a full framework that takes care of routing, SSR, data fetching,
          and a thousand other details so you can focus on the app.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. File-Based Routing</h2>
          <p class="mb-4 leading-relaxed">Drop a <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">.vue</code> file in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">pages/</code> — that's a route.</p>
          <CodeBlock language="text" :code="routesCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Auto Imports</h2>
          <p class="leading-relaxed">
            Components in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">components/</code> and composables in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">composables/</code> are imported automatically. So are Vue's reactive APIs (<code class="px-1 bg-gray-100 dark:bg-primary-light rounded">ref</code>, <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">computed</code>, etc).
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Data Fetching</h2>
          <p class="mb-4 leading-relaxed">Use <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">useFetch</code> or <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">useAsyncData</code>. They run on the server during SSR and hydrate on the client.</p>
          <CodeBlock language="vue" :code="fetchCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Server Routes</h2>
          <p class="mb-4 leading-relaxed">Need a backend? Drop a file in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">server/api/</code>.</p>
          <CodeBlock language="typescript" :code="serverCode" />
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Nuxt removes the boilerplate from Vue apps. Pages, layouts, server routes, SSR — all configured for you.
            Start with <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">npx nuxi init</code> and build something.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn Nuxt.js - Koeuk Dev' })

const routesCode = `pages/
  index.vue           -> /
  about.vue           -> /about
  blog/index.vue      -> /blog
  blog/[slug].vue     -> /blog/:slug`

const fetchCode = `<script setup>
const { data: posts } = await useFetch('/api/posts')
<\/script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>`

const serverCode = `// server/api/posts.get.ts
export default defineEventHandler(async () => {
  return [{ id: 1, title: 'Hello Nuxt' }]
})`
</script>
