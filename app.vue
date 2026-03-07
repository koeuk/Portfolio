<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-white dark:bg-primary transition-colors">
    <!-- Anime magic background -->
    <MagicBackground />

    <!-- Cursor spotlight glow -->
    <CursorSpotlight />

    <!-- Navbar outside transition so it stays fixed -->
    <Navbar />

    <div class="page-wrapper transition-all duration-1000 ease-out" 
         :class="{ 'opacity-0 blur-lg scale-95 translate-y-10': !isLoaded, 'opacity-100 blur-0 scale-100 translate-y-0': isLoaded }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

    <!-- Global Back to Top Button -->
    <BackToTop />
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
.page-wrapper {
  will-change: opacity, transform, filter;
  transition-property: opacity, transform, filter;
  transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
  transition-duration: 1.4s;
}
</style>
