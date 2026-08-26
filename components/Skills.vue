<template>
  <section id="skills" ref="elementRef" class="section overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 section-title title-shimmer tracking-tight">
        {{ t('skills.title') }}
      </h2>
      <p class="text-center text-gray-500 dark:text-gray-400 mb-16 section-title">
        {{ t('skills.subtitle') }}
      </p>

      <!-- Messy sticker wall -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
        <div class="sticker-wall">
          <NuxtLink
            v-for="(skill, index) in skills"
            :key="skill.name"
            :to="getSkillLink(skill.name)"
            class="sticker"
            :class="stickerSize(index)"
            :style="{ '--r': `${rotation(index)}deg`, '--y': `${offset(index)}px` }"
          >
            <span class="sticker-icon" v-html="getIcon(skill.name)"></span>
            <span class="sticker-name">{{ skill.name }}</span>
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { skills } = useData()
const { t } = useI18n()
const { isVisible, elementRef } = useScrollAnimation()

// Deterministic "messy" placement — tilt, vertical drift and size per index
const rotations = [-7, 5, -3, 8, -5, 3, 7, -8, 4, -2, 6, -4]
const offsets = [6, -10, 14, -4, 10, -14, 4, -8, 12, -2, 8, -12]
const sizes = ['', 'sticker-lg', '', 'sticker-sm', '', 'sticker-lg', '', '', 'sticker-sm', '', 'sticker-lg', '']

const rotation = (index: number) => rotations[index % rotations.length]
const offset = (index: number) => offsets[index % offsets.length]
const stickerSize = (index: number) => sizes[index % sizes.length]

const { getIcon } = useSkillIcons()
const skillLinkMap: Record<string, string> = {
  'HTML5': '/read-more/learn-html5',
  'CSS3': '/read-more/learn-css3',
  'JavaScript': '/read-more/learn-javascript',
  'TypeScript': '/read-more/typescript-best-practices',
  'Vue.js': '/read-more/vue-composition-api',
  'Nuxt.js': '/read-more/learn-nuxt',
  'Tailwind CSS': '/read-more/learn-tailwind',
  'Laravel': '/read-more/laravel-setup',
  'Git': '/read-more/learn-git',
  'VS Code': '/read-more/learn-vscode',
}

function getSkillLink(name: string): string {
  return skillLinkMap[name] || '/read-more'
}
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

/* ===== Messy sticker wall ===== */
.sticker-wall {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.1rem 0.8rem;
  padding: 1.5rem 0 2.5rem;
}

.sticker {
  --r: 0deg;
  --y: 0px;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.7rem 1.15rem;
  border-radius: 9999px;
  background: #fff;
  border: 1px solid rgba(13, 13, 13, 0.12);
  box-shadow: 0 12px 26px -20px rgba(13, 13, 13, 0.55);
  transform: rotate(var(--r)) translateY(var(--y));
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.3s ease,
    background 0.3s ease;
}

/* Straighten up and lift on hover */
.sticker:hover {
  transform: rotate(0deg) translateY(calc(var(--y) - 6px)) scale(1.07);
  border-color: rgba(13, 13, 13, 0.32);
  z-index: 2;
}

html.dark .sticker {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow: none;
}

html.dark .sticker:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.32);
}

.sticker-icon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(31, 41, 55);
}

.sticker-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.sticker-name {
  font-weight: 600;
  font-size: 0.95rem;
  white-space: nowrap;
  color: #111827;
}

html.dark .sticker-icon {
  color: rgb(226, 232, 240);
}

html.dark .sticker-name {
  color: #e4e4e7;
}

/* Mixed sizes for the messy look */
.sticker-lg {
  padding: 0.95rem 1.5rem;
}

.sticker-lg .sticker-icon {
  width: 1.9rem;
  height: 1.9rem;
}

.sticker-lg .sticker-name {
  font-size: 1.1rem;
}

.sticker-sm {
  padding: 0.5rem 0.9rem;
}

.sticker-sm .sticker-icon {
  width: 1.15rem;
  height: 1.15rem;
}

.sticker-sm .sticker-name {
  font-size: 0.8rem;
}

@media (prefers-reduced-motion: reduce) {
  .sticker {
    transform: none;
    transition: none;
  }
  .sticker:hover {
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {}
</style>
