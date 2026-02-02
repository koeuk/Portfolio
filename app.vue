<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-white dark:bg-primary transition-colors">
    <!-- Navbar outside transition so it stays fixed -->
    <Navbar />

    <Transition name="page-load" appear>
      <div v-if="isLoaded" class="page-wrapper">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const { isDark, initTheme } = useTheme()
const isLoaded = ref(false)

onMounted(() => {
  initTheme()
  // Small delay for smooth entrance
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<style>
.page-load-enter-active {
  transition: all 1.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.page-load-enter-from {
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.98) translateY(20px);
}

.page-load-enter-to {
  opacity: 1;
  filter: blur(0);
  transform: scale(1) translateY(0);
}

.page-wrapper {
  will-change: opacity, transform, filter;
}
</style>
