<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
    <!-- Ambient refraction orbs -->
    <div class="lg-orb bg-emerald-500/20 w-[32rem] h-[32rem] -top-32 -right-40" aria-hidden="true"></div>
    <div class="lg-orb bg-green-500/15 w-[34rem] h-[34rem] top-[45%] -left-52" aria-hidden="true"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div class="space-y-4">
          <NuxtLink to="/#personal-projects" class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-all uppercase tracking-widest translate-x-0 hover:-translate-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </NuxtLink>
          <div class="flex items-center gap-5 pt-4">
            <img src="/images/pos-retail/logo.jpg" alt="POS Retail logo" class="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover border border-white/10 shadow-lg flex-shrink-0" />
            <div class="space-y-1">
              <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white">
                POS Retail
              </h1>
              <p class="text-xl md:text-2xl lg:text-3xl font-medium text-gray-400">
                Offline-first Point of Sale &amp; Back Office
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <span class="lg-glass-dark px-6 py-2.5 rounded-full font-bold text-white uppercase tracking-widest text-sm whitespace-nowrap">
            2026
          </span>
          <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
            class="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-primary font-bold text-sm uppercase tracking-widest hover:bg-emerald-300 transition-all hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.15)]">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>

      <!-- Intro -->
      <p class="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mb-12">
        A point-of-sale and back-office built for a real Cambodian retail shop. Prices are Riel-native,
        a can, a six-pack and a case are sold as one product, customers can run a tab, and the till keeps
        working without a connection, syncing sales back to the server once it is online again.
      </p>

      <!-- Tech Stack Pills -->
      <div class="flex flex-wrap gap-3 mb-16">
        <span v-for="technology in techStack" :key="technology.name"
          class="lg-pill px-4 py-2 rounded-full text-sm font-medium border"
          :class="technology.color">
          {{ technology.name }}
        </span>
      </div>

      <!-- Overview Cards -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div v-for="stat in stats" :key="stat.label"
          class="lg-glass-dark lg-glass-hover p-5 rounded-2xl text-center">
          <p class="text-3xl font-bold text-white mb-1">{{ stat.value }}</p>
          <p class="text-sm text-gray-400">{{ stat.label }}</p>
        </div>
      </div>

      <!-- Features Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Features</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div v-for="feature in features" :key="feature.title"
            class="lg-glass-dark lg-glass-hover p-6 rounded-2xl group">
            <div class="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg"
              :class="feature.iconBg">
              {{ feature.icon }}
            </div>
            <h3 class="text-lg font-semibold mb-2 group-hover:text-emerald-300 transition-colors">{{ feature.title }}</h3>
            <p class="text-sm text-gray-400 leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- Architecture -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Architecture</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="layer in architecture" :key="layer.title"
            class="lg-glass-dark lg-glass-hover p-5 rounded-2xl">
            <p class="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">{{ layer.title }}</p>
            <p class="text-sm text-gray-300 leading-relaxed">{{ layer.description }}</p>
          </div>
        </div>
      </div>

      <!-- Database Schema -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">Core Models</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          <div v-for="table in tables" :key="table"
            class="lg-glass-dark lg-glass-hover px-4 py-3 rounded-xl text-sm font-mono text-gray-300 hover:text-emerald-300">
            {{ table }}
          </div>
        </div>
      </div>

      <!-- API Section -->
      <div class="mb-16 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/20 to-green-900/10 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_14px_38px_rgba(0,0,0,0.4)]">
        <div class="flex items-center gap-3 mb-3">
          <span class="lg-pill px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">TOKEN API</span>
          <span class="text-gray-400 text-sm">documented with Scribe</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">REST API for integrators</h3>
        <p class="text-gray-400 mb-4">The token API reuses the same permission gates as the web app, so there is one authorisation path. Docs generate from controller annotations and ship with an integrator walkthrough.</p>
        <div class="flex flex-wrap gap-2">
          <span class="lg-pill px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-mono">GET</span>
          <span class="lg-pill px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono">POST</span>
          <span class="lg-pill px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-mono">PUT</span>
          <span class="lg-pill px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-mono">DELETE</span>
        </div>
      </div>

      <!-- Screenshot galleries -->
      <div v-for="group in galleries" :key="group.title" class="mb-16">
        <h2 class="text-3xl font-bold mb-2">Screenshots — {{ group.title }}</h2>
        <p class="text-gray-400 mb-8">{{ group.description }}</p>
        <div :class="group.narrow ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4' : 'columns-1 md:columns-2 gap-4 space-y-4'">
          <figure v-for="shot in group.shots" :key="shot.file"
            class="break-inside-avoid rounded-xl overflow-hidden lg-glass-dark cursor-pointer group m-0"
            @click="openLightbox(shot.file)">
            <img
              :src="`/images/pos-retail/${shot.file}.png`"
              :alt="`POS Retail — ${shot.caption}`"
              class="w-full block group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <figcaption class="px-4 py-2 text-xs text-gray-400 border-t border-white/10">{{ shot.caption }}</figcaption>
          </figure>
        </div>
      </div>

      <!-- Source code CTA -->
      <div class="lg-glass-dark p-8 md:p-10 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 class="text-2xl md:text-3xl font-bold mb-2">Source code</h2>
          <p class="text-gray-400">The full Laravel + Vue codebase, migrations, seeders, tests and API docs are public on GitHub.</p>
          <p class="text-sm font-mono text-gray-500 mt-2">{{ githubUrl.replace('https://', '') }}</p>
        </div>
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-primary font-bold uppercase tracking-widest text-sm hover:bg-emerald-400 transition-all hover:scale-105 whitespace-nowrap">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Open repository
        </a>
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
          <button @click="previousImage" class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img :src="`/images/pos-retail/${lightboxImage}.png`" :alt="captionFor(lightboxImage)" class="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl" />
          <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p class="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm text-center px-4">
            {{ captionFor(lightboxImage) }} · {{ imageIndices.indexOf(lightboxImage) + 1 }} / {{ imageIndices.length }}
          </p>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'POS Retail - Koeuk Dev',
  meta: [
    { name: 'description', content: 'Offline-first point of sale and back office for a Cambodian retail shop, built with Laravel 12, Vue 3, TypeScript, Inertia, shadcn-vue and Tailwind.' }
  ]
})

const githubUrl = 'https://github.com/koeuk/POS-retail'

interface Shot { file: number; caption: string }
interface Gallery { title: string; description: string; shots: Shot[]; narrow?: boolean }

const galleries: Gallery[] = [
  {
    title: 'Point of Sale',
    description: 'The till: search or scan, pack-size prices, cart, and the three ways a sale can end — paid, on a customer tab, or taken for yourself.',
    shots: [
      { file: 10, caption: 'Product grid with cart, category filter and online status' },
      { file: 8, caption: 'Putting a sale in debt — pick the customer who owes it' },
      { file: 9, caption: 'Partial payment now, the rest stays on the tab' },
      { file: 7, caption: 'Order history from every till, with debt badges' },
      { file: 5, caption: 'In Debt — what each customer still owes, record payments' },
      { file: 13, caption: 'Myself — stock taken for own use, valued at shelf price' },
    ],
  },
  {
    title: 'Back Office',
    description: 'Dashboard, catalogue and shop settings. Light and dark themes.',
    shots: [
      { file: 2, caption: 'Dashboard — today\'s sales, owed to you, last 7 days' },
      { file: 3, caption: 'Dashboard in dark mode' },
      { file: 11, caption: 'Products with SKU, barcode, per-store stock and status' },
      { file: 1, caption: 'Categories with product counts and change history' },
      { file: 12, caption: 'Shop settings — USD / KHR, exchange rate, logo and favicon' },
    ],
  },
  {
    title: 'Authentication',
    description: 'Staff accounts are created by an administrator. Password reset uses a 6-digit emailed code.',
    shots: [
      { file: 6, caption: 'Log in' },
      { file: 4, caption: 'Forgot password — 6-digit code' },
    ],
  },
  {
    title: 'Public QR Menu',
    description: 'Customers scan a QR code and browse the shelf on their phone, with every pack size and price.',
    narrow: true,
    shots: [
      { file: 14, caption: 'Mobile menu grouped by category' },
    ],
  },
]

const allShots = galleries.flatMap(group => group.shots)
const imageIndices = allShots.map(shot => shot.file)
const lightboxImage = ref<number | null>(null)

function captionFor(file: number | null) {
  return allShots.find(shot => shot.file === file)?.caption ?? ''
}
function openLightbox(file: number) { lightboxImage.value = file }
function nextImage() {
  if (!lightboxImage.value) return
  const index = imageIndices.indexOf(lightboxImage.value)
  lightboxImage.value = imageIndices[(index + 1) % imageIndices.length]
}
function previousImage() {
  if (!lightboxImage.value) return
  const index = imageIndices.indexOf(lightboxImage.value)
  lightboxImage.value = imageIndices[(index - 1 + imageIndices.length) % imageIndices.length]
}

function onKeydown(event: KeyboardEvent) {
  if (!lightboxImage.value) return
  if (event.key === 'Escape') lightboxImage.value = null
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') previousImage()
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => document.removeEventListener('keydown', onKeydown))

const techStack = [
  { name: 'Laravel 12', color: 'bg-red-500/10 border-red-500/30 text-red-400' },
  { name: 'Vue 3', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
  { name: 'TypeScript', color: 'bg-blue-500/10 border-blue-500/30 text-blue-400' },
  { name: 'Inertia.js', color: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
  { name: 'shadcn-vue', color: 'bg-white/10 border-white/20 text-gray-300' },
  { name: 'Tailwind CSS', color: 'bg-sky-500/10 border-sky-500/30 text-sky-400' },
  { name: 'MySQL', color: 'bg-orange-500/10 border-orange-500/30 text-orange-400' },
  { name: 'Vite', color: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' },
  { name: 'Scribe', color: 'bg-pink-500/10 border-pink-500/30 text-pink-400' },
  { name: 'PHPUnit + GitHub Actions', color: 'bg-green-500/10 border-green-500/30 text-green-400' },
]

const stats = [
  { value: '3', label: 'Roles: Admin, Manager, Cashier' },
  { value: 'KHR / USD', label: 'Dual currency display' },
  { value: 'Offline', label: 'Sales queue and sync' },
  { value: '14', label: 'Screenshots' },
]

const features = [
  { icon: '📴', title: 'Offline-first till', description: 'Sales rung up without a connection are queued on the device and replayed to the server when it is back online.', iconBg: 'bg-emerald-500/20' },
  { icon: '៛', title: 'Riel-native pricing', description: 'Prices are stored in the shop currency with its own minor factor, so Riel never assumes cents. Toggle USD or KHR display with a configurable exchange rate.', iconBg: 'bg-green-500/20' },
  { icon: '📦', title: 'Pack sizes as one product', description: 'A can, a six-pack and a case are the same product with different prices, so the grid shows one card with a price range.', iconBg: 'bg-blue-500/20' },
  { icon: '📒', title: 'Customer debt tabs', description: 'Put all or part of a bill on a named customer. Record payments as money comes in; a debt settles once paid in full.', iconBg: 'bg-red-500/20' },
  { icon: '🍽', title: 'Myself', description: 'Stock taken for own use goes down without counting as a sale, valued at shelf price for the week, month and year.', iconBg: 'bg-yellow-500/20' },
  { icon: '📱', title: 'Public QR menu', description: 'A no-login mobile menu customers reach by scanning a QR code, grouped by category with every pack size.', iconBg: 'bg-cyan-500/20' },
  { icon: '🏬', title: 'Per-store stock', description: 'Stock lives per store, not on the product. Order numbers encode store and register (S1-R1-…).', iconBg: 'bg-orange-500/20' },
  { icon: '🔐', title: 'One permission path', description: 'Every feature is gated by a Permission enum, route middleware and a policy. Roles are only bundles of permissions.', iconBg: 'bg-purple-500/20' },
  { icon: '🕵️', title: 'Audit trail', description: 'Model changes and money, auth and access events are logged with an explicit field list, so secrets never reach the activity log.', iconBg: 'bg-pink-500/20' },
  { icon: '📊', title: 'Reports and dashboard', description: 'Today versus yesterday, average basket, sales for the last 7 days, owed to you, and per-cashier activity.', iconBg: 'bg-indigo-500/20' },
  { icon: '🎨', title: 'Branding and dark mode', description: 'Upload a logo and favicon, set the order number prefix, and switch between light and dark themes.', iconBg: 'bg-gray-500/20' },
  { icon: '🌐', title: 'Khmer and English', description: 'Bilingual product and category names throughout the till, menu and back office.', iconBg: 'bg-teal-500/20' },
]

const architecture = [
  { title: 'Enums first', description: 'Permission, Role, Action, OrderStatus, PaymentMethod and SaleType define the vocabulary the whole app agrees on.' },
  { title: 'Inertia pages', description: 'Web controllers return Inertia pages mapped straight to resources/js/pages; shared props carry auth.can to every screen.' },
  { title: 'Services', description: 'OrderTotals, OrderSyncService for offline replay, and SalesReporter keep business rules out of controllers.' },
  { title: 'Policies', description: 'Per-model authorisation, all routed through hasPermission, never a role check.' },
  { title: 'shadcn-vue UI', description: 'A primitive component layer under components/ui with typed composables such as usePermissions and useCurrency.' },
  { title: 'Tests and CI', description: 'PHPUnit suite plus lint run on every push to main and develop via GitHub Actions.' },
]

const tables = [
  'users', 'stores', 'registers', 'products', 'categories',
  'stocks', 'orders', 'customers', 'activities', 'settings'
]
</script>

<style scoped>
.lightbox-enter-active { transition: all 0.3s ease; }
.lightbox-leave-active { transition: all 0.2s ease; }
.lightbox-enter-from, .lightbox-leave-to { opacity: 0; }
</style>
