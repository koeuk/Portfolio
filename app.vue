<template>
  <div :class="{ 'dark': isDark }" class="min-h-screen bg-white dark:bg-primary transition-colors">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { isDark, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
