<template>
  <section id="blog" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-primary dark:text-white section-title">
          {{ t('blog.title') }}
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto section-content">
          {{ t('blog.subtitle') }}
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-content">
          <NuxtLink
            v-for="post in latestPosts"
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

        <!-- Read More -->
        <div class="flex justify-center mt-12 section-content">
          <NuxtLink
            to="/read-more"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-primary font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
          >
            {{ t('blog.readMore') }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
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
const { isVisible, elementRef } = useScrollAnimation()

const latestPosts = computed(() => posts.slice(0, 3))
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
