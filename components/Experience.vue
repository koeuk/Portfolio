<template>
  <section id="personal-projects" ref="elementRef" class="section overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 section-title title-shimmer tracking-tight">
        {{ t('experience.title') }}
      </h2>

      <div class="relative max-w-4xl mx-auto px-4 section-content">
        <!-- Vertical center line (left-aligned on mobile) -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800 md:hidden"></div>

        <div
          v-for="(experience, index) in experiences.slice(0, 8)"
          :key="experience.id"
          class="relative flex flex-col md:flex-row items-start mb-12 last:mb-0"
        >
          <!-- Dot on the line -->
          <div class="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 z-10">
            <div class="w-4 h-4 rounded-full bg-primary dark:bg-white border-4 border-white dark:border-primary shadow-lg"></div>
          </div>

          <!-- Even index: card on the right of the line -->
          <div v-if="index % 2 === 0" class="hidden md:block md:w-1/2"></div>

          <div
            class="ml-14 md:ml-0 md:w-1/2"
            :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'"
          >
            <NuxtLink
              :to="`/experience/${experience.id}`"
              class="group card block p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 hover:-translate-y-2"
            >
              <div class="mb-6 flex justify-between items-start">
                <span class="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {{ experience.period }}
                </span>
                <div class="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              <h3 class="text-2xl font-bold text-primary dark:text-white mb-2 group-hover:translate-x-1 transition-transform">
                {{ t(`experience.${experience.id}.role`) }}
              </h3>
              <p class="text-gray-500 dark:text-gray-400 font-semibold mb-6 group-hover:translate-x-1 transition-transform delay-75">
                {{ t(`experience.${experience.id}.company`) }}
              </p>

              <p class="text-gray-600 dark:text-gray-300 mb-8 overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                {{ t(`experience.${experience.id}.description`) }}
              </p>

              <div class="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-gray-800">
                <span
                  v-for="technology in experience.technologies.slice(0, 3)"
                  :key="technology"
                  class="px-2 py-1 text-[10px] font-semibold rounded-full bg-gray-50 dark:bg-primary border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  {{ technology }}
                </span>
                <span v-if="experience.technologies.length > 3" class="text-[10px] font-bold text-gray-400 self-center">
                  +{{ experience.technologies.length - 3 }}
                </span>
              </div>
            </NuxtLink>
          </div>

          <!-- Odd index: card on the left of the line -->
          <div v-if="index % 2 !== 0" class="hidden md:block md:w-1/2"></div>
        </div>
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
  transition-delay: 0.2s;
}

/* Glass effect for the cards */
.card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(5px);
}
</style>
