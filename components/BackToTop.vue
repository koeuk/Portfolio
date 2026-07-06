<template>
  <Transition name="fade-slide">
    <button 
      v-show="isVisible" 
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white dark:bg-white dark:text-primary border border-gray-100 dark:border-gray-800 hover:scale-110 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-2xl shadow-xl transition-all duration-300 focus:outline-none"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const checkScroll = () => {
  // Show button when scrolled down 400px
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}
</style>
