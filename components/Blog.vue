<template>
  <section id="blog" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 section-title title-shimmer">
          {{ t('blog.title') }}
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto section-content">
          {{ t('blog.subtitle') }}
        </p>

        <!-- Post / Feeling toggle -->
        <div class="flex justify-center mb-14 section-content">
          <div class="inline-flex items-center gap-1 p-1.5 rounded-full bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-white/10">
            <button
              v-for="view in views"
              :key="view.key"
              @click="activeView = view.key"
              class="relative px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300"
              :class="activeView === view.key
                ? 'text-white dark:text-primary'
                : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white'"
            >
              <span class="relative z-10 flex items-center gap-2">
                <span>{{ view.icon }}</span>{{ view.label }}
              </span>
              <span v-if="activeView === view.key" class="absolute inset-0 bg-primary dark:bg-white rounded-full -z-0"></span>
            </button>
          </div>
        </div>

        <!-- Posts -->
        <div v-if="activeView === 'post'" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-content">
          <NuxtLink
            v-for="post in blogPosts"
            :key="post.id"
            :to="post.slug"
            :external="post.external || false"
            :target="post.external ? '_blank' : undefined"
            class="card p-6 group cursor-pointer block"
          >
            <div class="h-40 bg-gradient-to-br from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
              <span class="text-white/20 text-2xl font-bold">{{ post.category }}</span>
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400 mb-2">{{ post.date }}</div>
            <h3 class="text-lg font-bold text-primary dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {{ post.title }}
            </h3>
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

        <!-- Feelings -->
        <div v-else>
          <!-- Mood filter -->
          <div class="flex flex-wrap justify-center gap-3 mb-12 section-content">
            <button
              v-for="mood in moods"
              :key="mood.value"
              @click="activeMood = mood.value"
              class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              :class="activeMood === mood.value
                ? 'bg-primary text-white dark:bg-white dark:text-primary shadow-md'
                : 'bg-gray-100 text-gray-600 dark:bg-primary-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-light/80'"
            >
              {{ mood.label }}
            </button>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-content">
          <NuxtLink
            v-for="feeling in feelingPosts"
            :key="feeling.id"
            :to="`/blog/${feeling.slug}`"
            class="card p-6 group cursor-pointer block"
          >
            <div
              class="h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden"
              :class="feeling.image ? '' : `bg-gradient-to-br ${feeling.gradient}`"
            >
              <img v-if="feeling.image" :src="feeling.image" :alt="feeling.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <span v-else class="text-5xl">{{ feeling.emoji }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
              <span>{{ feeling.date }}</span>
              <span class="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
              <span class="font-semibold">{{ feeling.category }}</span>
            </div>
            <h3 class="text-lg font-bold text-primary dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {{ feeling.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {{ feeling.body }}
            </p>
            <div class="flex gap-2 mt-4">
              <span
                v-for="tag in feeling.tags"
                :key="tag"
                class="px-2 py-1 bg-gray-100 dark:bg-primary-light text-xs rounded-full text-gray-600 dark:text-gray-300"
              >
                {{ tag }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

const { t } = useI18n()
const { posts } = useBlog()
const { posts: feelings } = useFeelings()
const { isVisible, elementRef } = useScrollAnimation()

const activeView = ref<'post' | 'feeling'>('post')
const views = [
  { key: 'post', label: 'Post', icon: '📝' },
  { key: 'feeling', label: 'Feeling', icon: '💭' },
] as const

const blogPosts = computed(() => posts)
const feelingPosts = computed(() => feelings)
</script>

<style scoped>
.section-title,
.section-content {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(50px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.section-visible .section-title {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
}

.section-visible .section-content {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  transition-delay: 0.15s;
}
</style>
