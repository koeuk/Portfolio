<template>
  <section id="experience" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-primary dark:text-white section-title">
        {{ t('experience.title') }}
      </h2>

      <div class="relative max-w-3xl mx-auto section-content">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="relative pl-12 md:pl-20 pb-12 last:pb-0"
        >
          <!-- Timeline dot -->
          <div class="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary dark:bg-white border-2 border-primary dark:border-white"></div>

          <!-- Card -->
          <div class="bg-gray-50 dark:bg-primary-light rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
            <span class="inline-block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              {{ exp.period }}
            </span>
            <h3 class="text-xl font-bold text-primary dark:text-white mb-1">
              {{ t(`experience.${exp.id}.role`) }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 font-medium mb-3">
              {{ t(`experience.${exp.id}.company`) }}
            </p>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {{ t(`experience.${exp.id}.description`) }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="px-3 py-1 text-xs font-medium rounded-full bg-gray-200 dark:bg-primary text-gray-700 dark:text-gray-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
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
  transition-delay: 0.15s;
}
</style>
