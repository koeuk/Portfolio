<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-32 pb-20 transition-colors">
    <article v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Link -->
      <NuxtLink to="/blog"
        class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </NuxtLink>

      <!-- Hero -->
      <div class="rounded-3xl overflow-hidden mb-10 aspect-[16/9] flex items-center justify-center"
        :class="post.image ? '' : `bg-gradient-to-br ${post.gradient}`">
        <img v-if="post.image" :src="post.image" :alt="post.title"
          class="w-full h-full object-cover" />
        <span v-else class="text-9xl">{{ post.emoji }}</span>
      </div>

      <!-- Meta -->
      <div class="flex items-center gap-3 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
        <span>{{ post.date }}</span>
        <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
        <span>{{ post.category }}</span>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-8 leading-tight">
        {{ post.title }}
      </h1>

      <!-- Body -->
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <p v-for="(paragraph, index) in paragraphs" :key="index"
          class="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
          {{ paragraph }}
        </p>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
        <span v-for="tag in post.tags" :key="tag"
          class="px-3 py-1.5 bg-gray-100 dark:bg-primary-light text-sm rounded-full text-gray-600 dark:text-gray-300">
          #{{ tag }}
        </span>
      </div>
    </article>

    <!-- Not Found -->
    <div v-else class="max-w-3xl mx-auto px-4 text-center py-32">
      <div class="text-6xl mb-4">🔍</div>
      <h1 class="text-3xl font-bold text-primary dark:text-white mb-2">Entry not found</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-8">This blog entry doesn't exist.</p>
      <NuxtLink to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-primary font-semibold hover:opacity-90 transition-all">
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { findBySlug } = useFeelings()

const post = computed(() => findBySlug(route.params.slug as string))

const paragraphs = computed(() => post.value?.body.split('\n\n') ?? [])

useHead({
  title: post.value ? `${post.value.title} | Blog` : 'Entry not found | Blog',
  meta: [
    { name: 'description', content: post.value?.body.slice(0, 150) ?? '' }
  ]
})
</script>
