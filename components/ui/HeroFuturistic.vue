<template>
  <div class="relative h-screen w-full overflow-hidden bg-black">
    <!-- Portrait (transparent cut-out PNG) -->
    <div class="absolute inset-0 flex items-end justify-center">
      <img
        src="/images/koeuk-profile.png"
        alt="Koeuk Dev"
        class="h-[88%] w-auto max-w-none object-contain select-none pointer-events-none drop-shadow-2xl"
      />
      <!-- Soft vignette so the portrait blends into the black hero -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,transparent,rgba(0,0,0,0.6))]"></div>
    </div>

    <!-- Title / subtitle overlay -->
    <div
      class="absolute left-0 top-0 z-[60] flex h-screen w-full flex-col items-center justify-center px-10 uppercase pointer-events-none">
      <div class="text-3xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-7xl">
        <div class="flex space-x-2 overflow-hidden text-white lg:space-x-6">
          <div v-for="(word, index) in titleWords" :key="index" :class="index < visibleWords ? 'fade-in' : ''"
            :style="{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, opacity: index < visibleWords ? undefined : 0 }">
            {{ word }}
          </div>
        </div>
      </div>
      <div class="mt-2 overflow-hidden text-xs font-bold text-white md:text-xl xl:text-2xl 2xl:text-3xl">
        <div :class="subtitleVisible ? 'fade-in-subtitle' : ''"
          :style="{ animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`, opacity: subtitleVisible ? undefined : 0 }">
          {{ subtitle }}
        </div>
      </div>
    </div>

    <!-- Scroll to explore -->
    <a href="#skills" class="explore-btn">
      Scroll to explore
      <span class="explore-arrow">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5V17" stroke="white" stroke-width="2" stroke-linecap="round" />
          <path d="M6 12L11 17L16 12" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
/**
 * Hero with the cut-out portrait + animated title.
 * (The previous WebGPU / three.js version was removed to keep the
 * production build lightweight and dependency-free.)
 */

const titleWords = "Dear !, I'm Koeuk Dev".split(' ')
const subtitle = 'Web Developer & Creative Thinker'

// Title animation state
const visibleWords = ref(0)
const subtitleVisible = ref(false)
const delays = ref<number[]>([])
const subtitleDelay = ref(0)

const timeouts: ReturnType<typeof setTimeout>[] = []

function runTitleSequence() {
  const step = (i: number) => {
    if (i < titleWords.length) {
      timeouts.push(setTimeout(() => { visibleWords.value = i + 1; step(i + 1) }, 600))
    } else {
      timeouts.push(setTimeout(() => { subtitleVisible.value = true }, 800))
    }
  }
  step(0)
}

onMounted(() => {
  delays.value = titleWords.map(() => Math.random() * 0.07)
  subtitleDelay.value = Math.random() * 0.1
  runTitleSequence()
})

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
})
</script>

<style scoped>
@keyframes heroFadeIn {
  0% {
    opacity: 0;
    transform: translateY(22px) skewX(10deg);
    filter: blur(8px);
  }
  60% {
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) skewX(0);
    filter: blur(0);
  }
}

.fade-in {
  animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-subtitle {
  animation: heroFadeUp 0.8s ease-out both;
}

.explore-btn {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 70;
  animation: heroFadeUp 1s ease-out 2.2s both;
}

.explore-btn:hover {
  color: #ffffff;
}

.explore-arrow {
  display: inline-flex;
  animation: exploreBounce 1.8s ease-in-out infinite;
}

@keyframes exploreBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .fade-in-subtitle,
  .explore-btn,
  .explore-arrow {
    animation: none;
  }
}
</style>
