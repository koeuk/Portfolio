<template>
  <div class="min-h-screen pt-24 pb-20 bg-white dark:bg-primary transition-colors">
    <div class="max-w-7xl mx-auto px-4 md:px-8">
      <!-- Header -->
      <div class="text-center mb-16 space-y-4">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold text-primary dark:text-white slide-up">
          {{ t('experience.title') }}
        </h1>
        <p class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg slide-up-delay-1">
          A journey through my professional career and the technologies I've mastered along the way.
        </p>
      </div>

      <!-- Experience Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :to="`/experience/${exp.id}`"
          class="group card p-8 flex flex-col h-full hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 slide-up"
          :class="`slide-up-delay-${Math.min(index + 1, 3)}`"
        >
          <div class="mb-6 flex justify-between items-start">
            <span class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary dark:group-hover:text-white transition-colors">
              {{ exp.period }}
            </span>
            <div class="w-10 h-10 rounded-full bg-gray-100 dark:bg-primary border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Arrow-right" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-primary dark:text-white mb-2 group-hover:translate-x-1 transition-transform">
            {{ t(`experience.${exp.id}.role`) }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 font-semibold mb-6 group-hover:translate-x-1 transition-transform delay-75">
            {{ t(`experience.${exp.id}.company`) }}
          </p>

          <p class="text-gray-600 dark:text-gray-300 line-clamp-3 mb-8 flex-grow">
            {{ t(`experience.${exp.id}.description`) }}
          </p>

          <div class="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-gray-800">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="px-3 py-1 text-xs font-semibold rounded-full bg-gray-50 dark:bg-primary border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-all duration-300"
            >
              {{ tech }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { experiences } = useData()
const { t } = useI18n()

useHead({
  title: `Work Experience | Koeuk Dev`,
  meta: [
    { name: 'description', content: 'Explore my professional journey and experiences in web development.' }
  ]
})
</script>

<style scoped>
.card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  backdrop-filter: blur(10px);
}
</style>
