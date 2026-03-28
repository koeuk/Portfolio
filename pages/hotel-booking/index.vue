<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-20 space-y-4">
        <div class="space-y-4">
          <NuxtLink to="/experience" class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all uppercase tracking-widest translate-x-0 hover:-translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Experience
          </NuxtLink>
          <div class="space-y-2 pt-4">
            <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white">
              Hotel Booking
            </h1>
            <p class="text-2xl md:text-3xl font-medium text-gray-400">
              Hotel Booking System
            </p>
          </div>
        </div>
        <div class="px-6 py-2 rounded-full border border-gray-700 font-bold text-white uppercase tracking-widest text-sm whitespace-nowrap">
          2025 - 2026
        </div>
      </div>

      <!-- Tech Stack Pills -->
      <div class="flex flex-wrap gap-3 mb-16">
        <span v-for="tech in techStack" :key="tech.name"
          class="px-4 py-2 rounded-full text-sm font-medium border"
          :class="tech.color">
          {{ tech.name }}
        </span>
      </div>

      <!-- Overview Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div v-for="stat in stats" :key="stat.label"
          class="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
          <p class="text-3xl font-bold text-white mb-1">{{ stat.value }}</p>
          <p class="text-sm text-gray-400">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Features</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="feature in features" :key="feature.title"
            class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all group">
            <div class="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg"
              :class="feature.iconBg">
              {{ feature.icon }}
            </div>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-violet-300 transition-colors">{{ feature.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ feature.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Database Schema -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Database Schema</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div v-for="table in tables" :key="table"
            class="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-gray-300 hover:border-blue-500/40 hover:text-blue-300 transition-all">
            {{ table }}
          </div>
        </div>
      </div>

      <!-- API Section -->
      <div class="mb-16 p-6 rounded-2xl bg-gradient-to-r from-violet-900/20 to-blue-900/20 border border-white/10">
        <div class="flex items-center gap-3 mb-3">
          <span class="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">REST API</span>
          <span class="text-gray-400 text-sm">v1</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">34 API Endpoints</h3>
        <p class="text-gray-400 mb-4">Authentication, Hotels, Rooms, Bookings, Payments, Reviews, Coupons, Notifications, Profile</p>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-mono">GET</span>
          <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono">POST</span>
          <span class="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono">PUT</span>
          <span class="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-mono">DELETE</span>
        </div>
      </div>

      <!-- Screenshots Gallery -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Screenshots</h2>
        <div class="columns-1 md:columns-2 gap-4 space-y-4">
          <div v-for="i in imageIndices" :key="i"
            class="break-inside-avoid rounded-xl overflow-hidden transition-all cursor-pointer group"
            @click="openLightbox(i)">
            <img
              :src="`/images/hotel-booking/${i}.png`"
              :alt="`Hotel Booking Screenshot ${i}`"
              class="w-full block group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Integrations -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Integrations</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="intg in integrations" :key="intg.name"
            class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
            <span class="text-2xl">{{ intg.icon }}</span>
            <div>
              <p class="font-semibold text-sm">{{ intg.name }}</p>
              <p class="text-xs text-gray-400">{{ intg.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxImage" class="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          @click.self="lightboxImage = null">
          <button @click="lightboxImage = null"
            class="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img :src="`/images/hotel-booking/${lightboxImage}.png`" alt="" class="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl" />
          <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm">{{ lightboxImage! - 3 }} / 36</p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Hotel Booking System - Koeuk Dev' })

const imageIndices = Array.from({ length: 36 }, (_, i) => i + 4)
const lightboxImage = ref<number | null>(null)

function openLightbox(i: number) { lightboxImage.value = i }
function nextImage() { if (lightboxImage.value) lightboxImage.value = lightboxImage.value >= 39 ? 4 : lightboxImage.value + 1 }
function prevImage() { if (lightboxImage.value) lightboxImage.value = lightboxImage.value <= 4 ? 39 : lightboxImage.value - 1 }

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (!lightboxImage.value) return
    if (e.key === 'Escape') lightboxImage.value = null
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  })
})

const techStack = [
  { name: 'Laravel 12', color: 'bg-red-500/10 border-red-500/30 text-red-400' },
  { name: 'React 18', color: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' },
  { name: 'Inertia.js', color: 'bg-violet-500/10 border-violet-500/30 text-violet-400' },
  { name: 'Tailwind CSS', color: 'bg-sky-500/10 border-sky-500/30 text-sky-400' },
  { name: 'Shadcn UI', color: 'bg-white/10 border-white/20 text-gray-300' },
  { name: 'MySQL', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
  { name: 'Sanctum', color: 'bg-orange-500/10 border-orange-500/30 text-orange-400' },
  { name: 'Vite', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
  { name: 'Recharts', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
  { name: 'Leaflet', color: 'bg-green-500/10 border-green-500/30 text-green-400' },
]

const stats = [
  { value: '34', label: 'API Endpoints' },
  { value: '12', label: 'DB Tables' },
  { value: '36', label: 'Screenshots' },
  { value: '2', label: 'User Roles' },
]

const features = [
  { icon: '🏨', title: 'Hotel Browsing', desc: 'Search and filter hotels by city, country, or keyword with real-time results.', iconBg: 'bg-violet-500/20' },
  { icon: '🗓', title: 'Room Availability', desc: 'Real-time overlap detection for check-in/check-out dates with auto-calculated pricing.', iconBg: 'bg-blue-500/20' },
  { icon: '💳', title: 'Payment Processing', desc: 'Support for Card, Cash, and PayPal methods with full transaction tracking.', iconBg: 'bg-emerald-500/20' },
  { icon: '🎫', title: 'Coupon System', desc: 'Percentage-based discount codes with date validity and usage limits.', iconBg: 'bg-yellow-500/20' },
  { icon: '⭐', title: 'Reviews & Ratings', desc: 'Rate hotels 1-5 stars after completed bookings with moderation tools.', iconBg: 'bg-orange-500/20' },
  { icon: '📊', title: 'Admin Dashboard', desc: 'Analytics with weekly/monthly/yearly breakdowns, PDF and Excel export.', iconBg: 'bg-pink-500/20' },
  { icon: '🔐', title: 'Authentication', desc: 'Laravel Sanctum + Breeze with Google and Facebook OAuth social login.', iconBg: 'bg-red-500/20' },
  { icon: '🔔', title: 'Notifications', desc: 'Multi-channel alerts via email, in-app database, and Telegram bot.', iconBg: 'bg-cyan-500/20' },
  { icon: '🗺', title: 'Maps Integration', desc: 'Hotel location maps with Leaflet and OpenStreetMap, no API key required.', iconBg: 'bg-green-500/20' },
  { icon: '🌙', title: 'Dark Mode', desc: 'Persistent theme toggle with system preference detection.', iconBg: 'bg-gray-500/20' },
]

const tables = [
  'users', 'hotels', 'room_types', 'rooms', 'bookings', 'payments',
  'reviews', 'amenities', 'hotel_amenities', 'coupons', 'settings', 'notifications'
]

const integrations = [
  { icon: '🔵', name: 'Google OAuth', desc: 'Social login via Google' },
  { icon: '🔷', name: 'Facebook OAuth', desc: 'Social login via Facebook' },
  { icon: '✈️', name: 'Telegram Bot', desc: 'Admin booking alerts' },
  { icon: '📧', name: 'SMTP Email', desc: 'Booking notifications' },
  { icon: '🗺', name: 'OpenStreetMap', desc: 'Hotel location maps' },
  { icon: '📄', name: 'PDF/Excel Export', desc: 'jsPDF + SheetJS reports' },
]
</script>

<style scoped>
.lightbox-enter-active { transition: all 0.3s ease; }
.lightbox-leave-active { transition: all 0.2s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
