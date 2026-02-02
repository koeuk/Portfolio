<template>
    <nav class="fixed top-0 w-full z-50 transition-all duration-300"
        :class="scrolled ? 'bg-white/95 dark:bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-white/90 dark:bg-primary/90'">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <NuxtLink to="/"
                    class="text-2xl font-bold text-primary dark:text-white hover:text-accent transition-colors">
                    Portfolio
                </NuxtLink>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a v-for="link in navLinks" :key="link.href" :href="link.href"
                        class="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors font-medium">
                        {{ t(link.label) }}
                    </a>

                    <!-- Language Selector -->
                    <div class="relative">
                        <button @click="showLangMenu = !showLangMenu"
                            class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-primary-light hover:bg-gray-200 dark:hover:bg-primary transition-colors">
                            <span>{{ currentFlag }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div v-if="showLangMenu"
                            class="absolute right-0 mt-2 w-32 bg-white dark:bg-primary-light rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden">
                            <button v-for="lang in languages" :key="lang.code"
                                @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                                class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-primary flex items-center gap-2 text-gray-700 dark:text-gray-200"
                                :class="{ 'bg-accent/10': currentLang === lang.code }">
                                <span>{{ lang.flag }}</span>
                                <span>{{ lang.name }}</span>
                            </button>
                        </div>
                    </div>

                    <!-- Theme Toggle -->
                    <button @click="toggleTheme"
                        class="p-2 rounded-lg bg-gray-100 dark:bg-primary-light hover:bg-gray-200 dark:hover:bg-primary transition-colors">
                        <!-- Sun icon (light mode) -->
                        <svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd" />
                        </svg>
                        <!-- Moon icon (dark mode) -->
                        <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex items-center gap-2 md:hidden">
                    <!-- Theme Toggle Mobile -->
                    <button @click="toggleTheme" class="p-2 rounded-lg bg-gray-100 dark:bg-primary-light">
                        <svg v-if="isDark" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd" />
                        </svg>
                        <svg v-else class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    </button>

                    <button @click="isOpen = !isOpen"
                        class="text-gray-700 dark:text-white hover:text-accent transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen"
            class="md:hidden bg-white dark:bg-primary border-t border-gray-100 dark:border-gray-700 shadow-lg">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isOpen = false"
                class="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-primary-light hover:text-accent transition-colors text-gray-700 dark:text-gray-200">
                {{ t(link.label) }}
            </a>
            <!-- Language selector mobile -->
            <div class="px-4 py-3 border-t border-gray-100 dark:border-gray-700">
                <div class="flex gap-2">
                    <button v-for="lang in languages" :key="lang.code"
                        @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                        class="flex-1 py-2 rounded-lg text-center"
                        :class="currentLang === lang.code ? 'bg-accent text-primary' : 'bg-gray-100 dark:bg-primary-light text-gray-700 dark:text-gray-200'">
                        {{ lang.flag }} {{ lang.name }}
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
    const { isDark, toggleTheme, initTheme } = useTheme()
    const { t, currentLang, setLanguage, initLang, languages } = useI18n()

    const isOpen = ref(false)
    const scrolled = ref(false)
    const showLangMenu = ref(false)

    const navLinks = [
        { href: '#home', label: 'nav.home' },
        { href: '#projects', label: 'nav.projects' },
        { href: '#skills', label: 'nav.skills' },
        { href: '#about', label: 'nav.about' },
        { href: '#contact', label: 'nav.contact' }
    ]

    const currentFlag = computed(() => {
        const lang = languages.find(l => l.code === currentLang.value)
        return lang?.flag || '🇺🇸'
    })

    const selectLanguage = (lang: 'en' | 'km' | 'zh') => {
        setLanguage(lang)
        showLangMenu.value = false
    }

    onMounted(() => {
        initTheme()
        initLang()
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('click', closeLangMenu)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        document.removeEventListener('click', closeLangMenu)
    })

    function handleScroll() {
        scrolled.value = window.scrollY > 20
    }

    function closeLangMenu(e: Event) {
        const target = e.target as HTMLElement
        if (!target.closest('.relative')) {
            showLangMenu.value = false
        }
    }
</script>
