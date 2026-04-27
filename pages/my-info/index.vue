<template>
  <div class="min-h-screen pt-32 pb-20 bg-white dark:bg-primary transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Link -->
      <NuxtLink to="/"
        class="group inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-primary dark:hover:text-white transition-all uppercase tracking-widest mb-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        {{ t('nav.home') }}
      </NuxtLink>

      <!-- Header -->
      <div class="grid md:grid-cols-[auto_1fr] gap-10 items-center mb-20">
        <div class="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto md:mx-0">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-emerald-500/30 blur-3xl">
          </div>
          <img :src="personalInfo.image" :alt="personalInfo.name"
            class="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-primary-light shadow-2xl" />
        </div>
        <div class="text-center md:text-left space-y-3">
          <p class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {{ t('nav.myInfo') }}
          </p>
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary dark:text-white tracking-tight">
            {{ personalInfo.name }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium">
            {{ personalInfo.role }}
          </p>
        </div>
      </div>

      <!-- Content Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Bio -->
        <section
          class="lg:col-span-2 p-8 rounded-3xl bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800">
          <h2 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            About Me
          </h2>
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {{ personalInfo.bio }}
          </p>
        </section>

        <!-- Quick Facts -->
        <section
          class="p-8 rounded-3xl bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800">
          <h2 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Quick Facts
          </h2>
          <dl class="space-y-4">
            <div>
              <dt class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Name</dt>
              <dd class="text-base font-medium text-primary dark:text-white">{{ personalInfo.name }}</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Role</dt>
              <dd class="text-base font-medium text-primary dark:text-white">{{ personalInfo.role }}</dd>
            </div>
            <div>
              <dt class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Email</dt>
              <dd>
                <a :href="`mailto:${personalInfo.email}`"
                  class="text-base font-medium text-primary dark:text-white hover:underline break-all">
                  {{ personalInfo.email }}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <!-- Connect / Socials -->
        <section
          class="lg:col-span-3 p-8 rounded-3xl bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800">
          <h2 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Connect
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a v-for="socialLink in socialLinks" :key="socialLink.label" :href="socialLink.href" target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-primary border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-white hover:-translate-y-1 transition-all">
              <span class="text-2xl">{{ socialLink.icon }}</span>
              <div class="min-w-0">
                <p
                  class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider group-hover:text-primary dark:group-hover:text-white transition-colors">
                  {{ socialLink.label }}
                </p>
                <p class="text-sm font-medium text-primary dark:text-white truncate">{{ socialLink.handle }}</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>

    <!-- Tabs -->
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div class="flex justify-center">
        <div role="tablist"
          class="inline-flex items-center gap-1 p-1.5 rounded-full bg-gray-50 dark:bg-primary-light border border-gray-100 dark:border-gray-800 shadow-sm overflow-x-auto max-w-full">
          <button v-for="tab in tabs" :key="tab.key" role="tab" :aria-selected="activeTab === tab.key"
            @click="activeTab = tab.key"
            class="relative px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-300"
            :class="activeTab === tab.key
              ? 'text-white dark:text-primary'
              : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white'">
            <span class="relative z-10 flex items-center gap-2">
              <span>{{ tab.icon }}</span>
              {{ t(tab.label) }}
            </span>
            <span v-if="activeTab === tab.key"
              class="absolute inset-0 bg-primary dark:bg-white rounded-full -z-0 tab-pill-active"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tab Panels -->
    <div class="mt-4">
      <Transition name="tab-fade" mode="out-in">
        <GitHub v-if="activeTab === 'github'" key="github" />
        <Experience v-else-if="activeTab === 'projects'" key="projects" />
        <WorkExperience v-else-if="activeTab === 'work'" key="work" />
        <ReadMore v-else-if="activeTab === 'rean'" key="rean" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const { personalInfo } = useData()
const { t } = useI18n()

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, handle: '@koeuk', icon: '🐙' },
  { label: 'LinkedIn', href: personalInfo.linkedin, handle: 'koeuk-kos', icon: '💼' },
  { label: 'Telegram', href: personalInfo.telegram, handle: '@koeuk24', icon: '✈️' },
  { label: 'Facebook', href: personalInfo.facebook, handle: '@koeuk25', icon: '📘' },
]

const tabs = [
  { key: 'github', label: 'nav.github', icon: '🐙' },
  { key: 'projects', label: 'nav.personalProjects', icon: '🚀' },
  { key: 'work', label: 'nav.workExperience', icon: '💼' },
  { key: 'rean', label: 'nav.readMore', icon: '📖' },
] as const

const activeTab = ref<typeof tabs[number]['key']>('github')

useHead({
  title: `My Info | ${personalInfo.name}`,
  meta: [
    { name: 'description', content: personalInfo.bio }
  ]
})
</script>

<style scoped>
.tab-pill-active {
  animation: pillPop 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes pillPop {
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
  filter: blur(4px);
}
</style>
