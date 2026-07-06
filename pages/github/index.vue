<template>
  <div class="min-h-screen bg-[#0d1117] pt-24 pb-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <NuxtLink
        to="/about-me/my-info"
        class="inline-flex items-center gap-2 mb-10 text-gray-400 hover:text-white transition-colors font-medium"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to My Info
      </NuxtLink>

      <!-- Profile Section -->
      <div class="mb-12">
        <img
          src="/images/github/profile.png"
          alt="GitHub Profile - koeuk kos"
          class="w-full rounded-xl border border-gray-700 shadow-2xl"
        />
      </div>

      <!-- Contribution History -->
      <h2 class="text-3xl font-bold text-white mb-8">Contribution History</h2>

      <div class="space-y-8">
        <!-- 2026 -->
        <div class="rounded-xl border border-gray-700 overflow-hidden">
          <div class="bg-[#161b22] px-6 py-3 border-b border-gray-700">
            <h3 class="text-lg font-semibold text-white flex items-center gap-3">
              <span class="px-3 py-1 bg-blue-600 rounded-full text-sm">2026</span>
              1,411 contributions
            </h3>
          </div>
          <img
            src="/images/github/contributions-2026.png"
            alt="GitHub Contributions 2026"
            class="w-full"
          />
        </div>

        <!-- 2025 -->
        <div class="rounded-xl border border-gray-700 overflow-hidden">
          <div class="bg-[#161b22] px-6 py-3 border-b border-gray-700">
            <h3 class="text-lg font-semibold text-white flex items-center gap-3">
              <span class="px-3 py-1 bg-gray-600 rounded-full text-sm">2025</span>
              989 contributions
            </h3>
          </div>
          <img
            src="/images/github/contributions-2025.png"
            alt="GitHub Contributions 2025"
            class="w-full"
          />
        </div>

        <!-- 2024 -->
        <div class="rounded-xl border border-gray-700 overflow-hidden">
          <div class="bg-[#161b22] px-6 py-3 border-b border-gray-700">
            <h3 class="text-lg font-semibold text-white flex items-center gap-3">
              <span class="px-3 py-1 bg-gray-600 rounded-full text-sm">2024</span>
              421 contributions
            </h3>
          </div>
          <img
            src="/images/github/contributions-2024.png"
            alt="GitHub Contributions 2024"
            class="w-full"
          />
        </div>

        <!-- 2023 -->
        <div class="rounded-xl border border-gray-700 overflow-hidden">
          <div class="bg-[#161b22] px-6 py-3 border-b border-gray-700">
            <h3 class="text-lg font-semibold text-white flex items-center gap-3">
              <span class="px-3 py-1 bg-gray-600 rounded-full text-sm">2023</span>
              40 contributions
            </h3>
          </div>
          <img
            src="/images/github/contributions-2023.png"
            alt="GitHub Contributions 2023"
            class="w-full"
          />
        </div>
      </div>

      <!-- Total Summary -->
      <div class="mt-12 p-6 rounded-xl bg-[#161b22] border border-gray-700 text-center">
        <p class="text-gray-400 text-lg">Total Contributions</p>
        <p class="text-5xl font-bold text-white mt-2">2,861</p>
        <p class="text-gray-500 mt-2">Since 2023</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'GitHub Profile - Koeuk Dev' })
</script>
