<template>
  <section id="skills" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-primary dark:text-white section-title">
        {{ t('skills.title') }}
      </h2>

      <!-- Infinite Scroll Container -->
      <div class="relative section-content">
        <div class="flex animate-scroll">
          <!-- First set -->
          <div class="flex gap-6 pr-6">
            <div
              v-for="skill in skills"
              :key="skill.id"
              class="skill-card flex-shrink-0 dark:bg-primary-light dark:border-gray-700"
            >
              <div class="w-12 h-12 mb-2" v-html="skill.icon_svg"></div>
              <p class="font-semibold text-sm text-gray-700 dark:text-gray-200">{{ skill.name }}</p>
            </div>
          </div>
          <!-- Duplicate for seamless loop -->
          <div class="flex gap-6 pr-6">
            <div
              v-for="skill in skills"
              :key="'dup-' + skill.id"
              class="skill-card flex-shrink-0 dark:bg-primary-light dark:border-gray-700"
            >
              <div class="w-12 h-12 mb-2" v-html="skill.icon_svg"></div>
              <p class="font-semibold text-sm text-gray-700 dark:text-gray-200">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { isVisible, elementRef } = useScrollAnimation()
const { getSkills } = useApi()
const { data: skillsData } = await getSkills()

const skills = computed(() => (skillsData.value as any)?.data || [])
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 25s linear infinite;
  will-change: transform;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

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
