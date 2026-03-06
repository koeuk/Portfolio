<template>
  <section id="experience" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <h2 class="text-4xl md:text-5xl lg:text-7xl font-bold text-primary dark:text-white section-title">
          {{ t('experience.title') }}
        </h2>
        <NuxtLink 
          to="/experience"
          class="group inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest section-title-link"
        >
          View All Experience
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 section-content">
        <NuxtLink
          v-for="(exp, index) in experiences.slice(0, 6)"
          :key="exp.id"
          :to="`/experience/${exp.id}`"
          class="group card p-8 flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        >
          <div class="mb-6 flex justify-between items-start">
            <span class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary dark:group-hover:text-white transition-colors">
              {{ exp.period }}
            </span>
            <div class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              v-for="tech in exp.technologies.slice(0, 3)"
              :key="tech"
              class="px-2 py-1 text-[10px] font-semibold rounded-full bg-gray-50 dark:bg-primary border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors"
            >
              {{ tech }}
            </span>
            <span v-if="exp.technologies.length > 3" class="text-[10px] font-bold text-gray-400 self-center">
              +{{ exp.technologies.length - 3 }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { experiences } = useData()
const { t } = useI18n()
const { isVisible, elementRef } = useScrollAnimation()
</script>

<style scoped>
.section-title,
.section-title-link,
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

.section-visible .section-title-link {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  transition-delay: 0.1s;
}

.section-visible .section-content {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  transition-delay: 0.2s;
}

/* Glass effect for the cards */
.card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(5px);
}
</style>
