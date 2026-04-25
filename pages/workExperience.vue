<template>
  <div class="min-h-screen pt-32 pb-20 bg-white dark:bg-primary transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtLink to="/"
        class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ t('nav.home') }}
      </NuxtLink>
    </div>

    <WorkExperience />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: 'Work Experience | Koeuk Dev'
})
</script>
