<template>
  <div class="min-h-screen pt-32 pb-20 transition-colors">
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
            class="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/30 via-blue-500/20 to-emerald-500/30 blur-3xl">
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
          class="lg:col-span-2 lg-glass shadow-none p-8 rounded-3xl border border-gray-200 dark:border-white/10">
          <h2 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            About Me
          </h2>
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {{ personalInfo.bio }}
          </p>
        </section>

        <!-- Quick Facts -->
        <section
          class="lg-glass shadow-none p-8 rounded-3xl border border-gray-200 dark:border-white/10">
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
            <div>
              <dt class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Phone</dt>
              <dd>
                <a :href="`tel:${personalInfo.phone.replace(/\s/g, '')}`"
                  class="text-base font-medium text-primary dark:text-white hover:underline">
                  {{ personalInfo.phone }}
                </a>
              </dd>
            </div>
            <div>
              <dt class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Location</dt>
              <dd class="text-base font-medium text-primary dark:text-white">{{ personalInfo.location }}</dd>
            </div>
          </dl>
        </section>

        <!-- Connect / Socials -->
        <section
          class="lg:col-span-3 lg-glass shadow-none p-8 rounded-3xl border border-gray-200 dark:border-white/10">
          <h2 class="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Connect
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a v-for="socialLink in socialLinks" :key="socialLink.label" :href="socialLink.href" target="_blank"
              rel="noopener noreferrer"
              class="lg-glass lg-glass-hover shadow-none cursor-pointer group flex items-center gap-3 p-4 rounded-2xl border border-gray-200 dark:border-white/10">
              <span
                class="flex-shrink-0 w-6 h-6 text-primary dark:text-white [&>svg]:w-full [&>svg]:h-full"
                v-html="socialLink.icon"
              ></span>
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
          class="lg-glass inline-flex items-center gap-1 p-1.5 rounded-full border border-gray-300 dark:border-white/15 overflow-x-auto max-w-full">
          <button v-for="tab in tabs" :key="tab.key" role="tab" :aria-selected="activeTab === tab.key"
            @click="activeTab = tab.key"
            class="relative px-5 sm:px-6 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-colors duration-300"
            :class="activeTab === tab.key
              ? 'text-white dark:text-primary'
              : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white'">
            <span class="relative z-10 flex items-center gap-2">
              <span class="w-4 h-4 inline-flex items-center justify-center [&>svg]:w-full [&>svg]:h-full" v-html="tab.icon"></span>
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
        <ReadMore v-if="activeTab === 'rean'" key="rean" />
        <Blog v-else-if="activeTab === 'blog'" key="blog" />
        <GitHub v-else-if="activeTab === 'github'" key="github" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const { personalInfo } = useData()
const { t } = useI18n()

const socialIcons = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>`,
}

const socialLinks = [
  { label: 'GitHub', href: personalInfo.github, handle: '@koeuk', icon: socialIcons.github },
  { label: 'LinkedIn', href: personalInfo.linkedin, handle: 'koeuk-kos', icon: socialIcons.linkedin },
  { label: 'Telegram', href: personalInfo.telegram, handle: '@koeuk24', icon: socialIcons.telegram },
  { label: 'Facebook', href: personalInfo.facebook, handle: '@koeuk25', icon: socialIcons.facebook },
]

const tabIcons = {
  read: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  blog: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  github: socialIcons.github,
}

const tabs = [
  { key: 'rean', label: 'nav.readMore', icon: tabIcons.read },
  { key: 'blog', label: 'nav.blog', icon: tabIcons.blog },
  { key: 'github', label: 'nav.github', icon: tabIcons.github },
] as const

type TabKey = typeof tabs[number]['key']
const validKeys = tabs.map(tab => tab.key) as readonly string[]

const route = useRoute()
const router = useRouter()

const activeTab = computed<TabKey>({
  get: () => {
    const param = route.query.section as string | undefined
    return (param && validKeys.includes(param) ? param : 'rean') as TabKey
  },
  set: (value: TabKey) => {
    const query = { ...route.query }
    if (value === 'rean') {
      delete query.section
    } else {
      query.section = value
    }
    router.replace({ query })
  },
})

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
