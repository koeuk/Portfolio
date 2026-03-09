<template>
  <div v-if="experience" class="min-h-screen pt-24 pb-20 bg-white dark:bg-primary transition-colors">
    <div class="max-w-4xl mx-auto px-4 md:px-8">
      <!-- Top Section: Header & Badge -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 space-y-4">
        <div class="space-y-4">
          <NuxtLink to="/experience" class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest translate-x-0 hover:-translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ t('experience.backToExperience') }}
          </NuxtLink>
          <div class="space-y-2 pt-4">
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary dark:text-white slide-up">
              {{ experience.role }}
            </h1>
            <p class="text-2xl md:text-3xl font-medium text-gray-500 dark:text-gray-400 slide-up-delay-1">
              {{ experience.company }}
            </p>
          </div>
        </div>
        <div class="px-6 py-2 rounded-full border border-gray-200 dark:border-gray-700 font-bold text-primary dark:text-white uppercase tracking-widest text-sm slide-up-delay-2">
          {{ experience.period }}
        </div>
      </div>

      <!-- Gallery Section -->
      <section v-if="experience.images && experience.images.length > 0" class="mb-20 slide-up-delay-1" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide" @touchstart="stopAutoSlide" @touchend="startAutoSlide">
        <div class="relative group aspect-[16/9] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 shadow-2xl bg-gray-100 dark:bg-primary-dark">
          <Transition name="fade" mode="out-in">
            <img
              :key="currentImgIndex"
              :src="experience.images[currentImgIndex].image_url"
              class="w-full h-full object-cover cursor-zoom-in"
              @click="openLightbox(currentImgIndex)"
            />
          </Transition>

          <!-- Navigation Overlays -->
          <div class="absolute inset-y-0 left-0 w-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button @click.stop="prevImg" class="p-4 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/30 border border-white/20 transition-all hover:scale-110">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
          </div>
          <div class="absolute inset-y-0 right-0 w-24 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button @click.stop="nextImg" class="p-4 rounded-full bg-white/10 backdrop-blur-xl text-white hover:bg-white/30 border border-white/20 transition-all hover:scale-110">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Indicators -->
          <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 bg-black/20 backdrop-blur-md rounded-full">
            <button
              v-for="(_, idx) in experience.images"
              :key="idx"
              @click="currentImgIndex = idx"
              class="h-1.5 transition-all duration-500 rounded-full"
              :class="idx === currentImgIndex ? 'w-10 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'"
            ></button>
          </div>
        </div>

        <!-- Thumbnail Strip below -->
        <div class="relative w-full max-w-4xl mx-auto mt-8">
          <div class="flex items-center gap-4">
            <button @click="scrollThumbnails('left')" class="p-2 text-gray-400 hover:text-primary dark:hover:text-white transition-colors flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <div ref="thumbnailContainer" class="flex flex-grow gap-4 overflow-x-auto py-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory">
              <button
                v-for="(img, idx) in experience.images"
                :key="img.id"
                @click="currentImgIndex = idx"
                class="flex-shrink-0 w-28 h-18 sm:w-32 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all duration-300 snap-center"
                :class="idx === currentImgIndex ? 'border-primary dark:border-white scale-105 shadow-xl ring-4 ring-primary/20 dark:ring-white/20' : 'border-transparent opacity-50 hover:opacity-100'"
              >
                <img :src="img.image_url" class="w-full h-full object-cover" />
              </button>
            </div>

            <button @click="scrollThumbnails('right')" class="p-2 text-gray-400 hover:text-primary dark:hover:text-white transition-colors flex-shrink-0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div class="flex items-center justify-between bg-gray-400 dark:bg-gray-600 rounded-full w-full h-3 mt-4 px-1 mx-auto max-w-3xl opacity-50">
            <button @click="scrollThumbnails('left')" class="text-white hover:text-primary transition-colors flex items-center justify-center p-1">
              <svg class="w-2 h-2 fill-current" viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
            </button>
            <button @click="scrollThumbnails('right')" class="text-white hover:text-primary transition-colors flex items-center justify-center p-1">
              <svg class="w-2 h-2 fill-current" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        <!-- Left: Description (2 cols) -->
        <div class="lg:col-span-2 space-y-12 slide-up-delay-2">
          <section>
            <h2 class="text-lg font-bold text-gray-400 dark:text-gray-600 mb-6 uppercase tracking-widest">
              {{ t('experience.roleResponsibility') }}
            </h2>
            <div class="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              {{ experience.description }}
            </div>
          </section>

          <!-- Impact & Achievements -->
          <section v-if="experience.achievements && experience.achievements.length > 0" class="space-y-6">
            <h2 class="text-lg font-bold text-gray-400 dark:text-gray-600 mb-6 uppercase tracking-widest">
              {{ t('experience.impactAchievements') }}
            </h2>
            <ul class="space-y-4 text-gray-600 dark:text-gray-400 list-none">
              <li v-for="achievement in experience.achievements" :key="achievement.id" class="flex gap-4 items-start">
                <span class="w-2 h-2 rounded-full bg-primary dark:bg-white mt-2.5"></span>
                {{ achievement.description }}
              </li>
            </ul>
          </section>
        </div>

        <!-- Right: Technical Stack (1 col) -->
        <div class="lg:col-span-1 slide-up-delay-3 sticky top-32">
          <div class="bg-gray-50 dark:bg-primary-light p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative">
            <div class="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 dark:bg-white/5 rounded-full blur-3xl"></div>
            <h2 class="text-lg font-bold text-primary dark:text-white mb-8 border-b border-gray-200 dark:border-gray-700 pb-4 uppercase tracking-widest text-center">
              {{ t('experience.techStack') }}
            </h2>
            <div class="flex flex-wrap justify-center gap-3">
              <span
                v-for="tech in experience.technologies"
                :key="tech"
                class="px-5 py-2 text-sm font-semibold rounded-2xl bg-white dark:bg-primary border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm transition-all hover:scale-110"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Showcase Breakdown -->
      <div v-if="experience.categories && experience.categories.length > 0" class="mt-32 space-y-24">
        <div v-for="section in experience.categories" :key="section.id" class="space-y-12 slide-up">
          <div class="flex items-center gap-6">
            <h2 class="text-3xl md:text-4xl font-black text-primary dark:text-white uppercase tracking-tighter">
              {{ section.title }}
            </h2>
            <div class="h-px flex-grow bg-gray-100 dark:bg-gray-800"></div>
          </div>

          <div class="space-y-12">
            <div
              v-for="item in section.items"
              :key="item.id"
              class="space-y-4"
            >
              <h3 class="text-2xl font-black text-primary dark:text-white flex items-center gap-3">
                <div class="w-2 h-2 rounded-full bg-primary/50 dark:bg-white/50"></div>
                {{ item.label }}
              </h3>

              <p v-if="item.subheading" class="text-gray-500 font-bold pl-5">
                {{ item.subheading }}
              </p>

              <ul class="space-y-4 pl-5">
                <li v-for="(point, pIdx) in item.points" :key="pIdx" class="text-lg leading-relaxed font-medium text-gray-600 dark:text-gray-300">
                  {{ point }}
                </li>
              </ul>

              <!-- Category Tech Pills -->
              <div v-if="item.technologies && item.technologies.length > 0" class="flex flex-wrap gap-2 pt-4 pl-5">
                <span
                  v-for="tech in item.technologies"
                  :key="tech"
                  class="px-3 py-1 text-xs font-bold rounded-full bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 uppercase tracking-tighter"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Differences Table -->
      <div v-if="experience.key_differences && experience.key_differences.length > 0" class="mt-32 slide-up pb-20">
        <div class="flex items-center gap-6 mb-12">
          <h2 class="text-3xl md:text-4xl font-black text-primary dark:text-white uppercase tracking-tighter">
            {{ t('experience.keyDifferences') }}
          </h2>
          <div class="h-px flex-grow bg-gray-100 dark:bg-gray-800"></div>
        </div>

        <div class="overflow-x-auto rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl bg-white dark:bg-primary">
          <table class="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr class="bg-gray-50 dark:bg-primary-light border-b border-gray-100 dark:border-gray-800">
                <th class="py-6 px-8 text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest whitespace-nowrap">{{ t('experience.feature') }}</th>
                <th class="py-6 px-8 text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{{ t('experience.webInterface') }}</th>
                <th class="py-6 px-8 text-sm font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{{ t('experience.adminInterface') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(diff, index) in experience.key_differences" :key="diff.id" :class="index % 2 === 0 ? 'bg-white dark:bg-primary' : 'bg-gray-50/50 dark:bg-primary-light/30'" class="border-b border-gray-50 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-primary-light transition-colors group">
                <td class="py-6 px-8 text-lg font-bold text-primary dark:text-white border-r border-gray-50 dark:border-gray-800 whitespace-nowrap">{{ diff.feature }}</td>
                <td class="py-6 px-8 text-lg text-gray-600 dark:text-gray-300 font-medium border-r border-gray-50 dark:border-gray-800 group-hover:text-primary dark:group-hover:text-white transition-colors">{{ diff.web_description }}</td>
                <td class="py-6 px-8 text-lg text-gray-600 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-white transition-colors">{{ diff.admin_description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12">
          <button @click="lightboxOpen = false" class="absolute top-8 right-8 text-white hover:text-gray-400 transition-colors p-2">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <div class="relative w-full h-full flex items-center justify-center">
            <button @click="prevImg" class="absolute left-0 md:-left-20 p-4 text-white hover:scale-125 transition-transform">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <div class="max-w-6xl max-h-[85vh] overflow-hidden rounded-xl shadow-[0_0_100px_rgba(255,255,255,0.1)]">
              <img :src="experience.images[currentImgIndex].image_url" class="w-full h-full object-contain" />
            </div>

            <button @click="nextImg" class="absolute right-0 md:-right-20 p-4 text-white hover:scale-125 transition-transform">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div class="mt-8 text-white/60 font-medium tracking-[0.2em] uppercase">
            {{ currentImgIndex + 1 }} / {{ experience.images.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center bg-white dark:bg-primary">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-primary dark:text-white">{{ t('experience.notFound') }}</h1>
      <NuxtLink to="/experience" class="text-gray-500 hover:text-primary dark:hover:text-white underline font-semibold transition-colors">
        {{ t('experience.viewAllExperiences') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const { t } = useI18n()
const route = useRoute()
const { getExperience } = useApi()

const { data: experienceData } = await getExperience(route.params.id as string)

const experience = computed(() => (experienceData.value as any)?.data)

const currentImgIndex = ref(0)
const lightboxOpen = ref(false)
const thumbnailContainer = ref<HTMLElement | null>(null)
let slideInterval: any = null

const nextImg = () => {
  if (!experience.value?.images?.length) return
  currentImgIndex.value = (currentImgIndex.value + 1) % experience.value.images.length
}

const prevImg = () => {
  if (!experience.value?.images?.length) return
  currentImgIndex.value = (currentImgIndex.value - 1 + experience.value.images.length) % experience.value.images.length
}

const openLightbox = (index: number) => {
  currentImgIndex.value = index
  lightboxOpen.value = true
}

const startAutoSlide = () => {
  stopAutoSlide()
  slideInterval = setInterval(() => {
    nextImg()
  }, 4000)
}

const stopAutoSlide = () => {
  if (slideInterval) clearInterval(slideInterval)
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})

const scrollThumbnails = (direction: 'left' | 'right') => {
  if (!thumbnailContainer.value) return
  const scrollAmount = 300
  thumbnailContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

watch(currentImgIndex, (newIdx) => {
  if (!thumbnailContainer.value) return
  const activeThumbnail = thumbnailContainer.value.children[newIdx] as HTMLElement
  if (activeThumbnail) {
    const containerWidth = thumbnailContainer.value.offsetWidth
    const thumbLeft = activeThumbnail.offsetLeft
    const thumbWidth = activeThumbnail.offsetWidth
    thumbnailContainer.value.scrollTo({
      left: thumbLeft - containerWidth / 2 + thumbWidth / 2,
      behavior: 'smooth'
    })
  }
})

useHead({
  title: experience.value
    ? `${experience.value.role} at ${experience.value.company} | Koeuk Dev`
    : 'Experience | Koeuk Dev',
  meta: [
    { name: 'description', content: experience.value?.description || 'Detailed view of professional experience.' }
  ]
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slide-up {
  animation: slideUp 1s ease-out forwards;
}
.slide-up-delay-1 {
  animation: slideUp 1s ease-out 0.1s forwards;
  opacity: 0;
}
.slide-up-delay-2 {
  animation: slideUp 1s ease-out 0.2s forwards;
  opacity: 0;
}
.slide-up-delay-3 {
  animation: slideUp 1s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.lightbox-enter-active, .lightbox-leave-active {
  transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.lightbox-enter-from, .lightbox-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
  transform: scale(0.95);
}
</style>
