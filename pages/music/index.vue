<template>
  <div class="min-h-screen pt-32 pb-20 bg-white dark:bg-primary transition-colors">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <NuxtLink
        to="/"
        class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Home
      </NuxtLink>

      <header class="mb-8 flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-violet-500 to-blue-500 flex items-center justify-center text-white shadow-xl">
          <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6Z" />
          </svg>
        </div>
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-primary dark:text-white">Music</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400">Things I'm listening to</p>
        </div>
      </header>

      <div class="rounded-3xl bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800">
        <MusicContent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Music | Koeuk Dev',
})
</script>
