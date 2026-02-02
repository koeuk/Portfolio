<template>
    <nav class="fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out nav-enter"
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
                            class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-primary-light hover:bg-gray-200 dark:hover:bg-primary-dark transition-colors text-gray-700 dark:text-gray-200">
                            <span>{{ currentFlag }}</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <Transition name="dropdown">
                            <div v-if="showLangMenu"
                                class="absolute right-0 mt-2 w-32 bg-white dark:bg-primary-light rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <button v-for="lang in languages" :key="lang.code"
                                    @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                                    class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-primary flex items-center gap-2 text-gray-700 dark:text-gray-200"
                                    :class="{ 'bg-accent/10': currentLang === lang.code }">
                                    <span>{{ lang.flag }}</span>
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </Transition>
                    </div>

                    <!-- Theme Toggle Switch -->
                    <button @click="toggleTheme" class="theme-toggle" :class="{ 'dark': isDark }">
                        <div class="toggle-track">
                            <!-- Sun icon -->
                            <svg class="toggle-icon sun" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                            <!-- Moon icon -->
                            <svg class="toggle-icon moon" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                            </svg>
                            <!-- Sliding circle -->
                            <div class="toggle-thumb"></div>
                        </div>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex items-center gap-2 md:hidden">
                    <!-- Theme Toggle Mobile -->
                    <button @click="toggleTheme" class="theme-toggle" :class="{ 'dark': isDark }">
                        <div class="toggle-track">
                            <svg class="toggle-icon sun" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                            <svg class="toggle-icon moon" viewBox="0 0 24 24" fill="currentColor">
                                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
                            </svg>
                            <div class="toggle-thumb"></div>
                        </div>
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
        <Transition name="mobile-menu">
            <div v-if="isOpen"
                class="md:hidden bg-white dark:bg-primary border-t border-gray-200 dark:border-gray-700 shadow-lg">
                <a v-for="link in navLinks" :key="link.href" :href="link.href" @click="isOpen = false"
                    class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-primary-light hover:text-accent transition-colors text-gray-700 dark:text-gray-200">
                    {{ t(link.label) }}
                </a>
                <!-- Language selector mobile -->
                <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex gap-2">
                        <button v-for="lang in languages" :key="lang.code"
                            @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                            class="flex-1 py-2 rounded-lg text-center"
                            :class="currentLang === lang.code ? 'bg-accent text-white' : 'bg-gray-100 dark:bg-primary-light text-gray-700 dark:text-gray-200'">
                            {{ lang.flag }} {{ lang.name }}
                        </button>
                    </div>
                </div>
            </div>
        </Transition>
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

<style scoped>
.nav-enter {
    animation: navSlideDown 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes navSlideDown {
    from {
        opacity: 0;
        filter: blur(10px);
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        filter: blur(0);
        transform: translateY(0);
    }
}

.mobile-menu-enter-active {
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-leave-active {
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-10px);
}

.dropdown-enter-active {
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-leave-active {
    transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(-8px) scale(0.9);
}

/* Theme Toggle Switch */
.theme-toggle {
    padding: 4px;
    border-radius: 9999px;
    background: transparent;
    cursor: pointer;
    border: none;
}

.toggle-track {
    position: relative;
    width: 56px;
    height: 28px;
    background: #e5e7eb;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;
    transition: background 0.3s ease;
}

.theme-toggle.dark .toggle-track {
    background: #1a3b44;
}

.toggle-icon {
    width: 14px;
    height: 14px;
    z-index: 1;
    transition: all 0.3s ease;
}

.toggle-icon.sun {
    color: #fbbf24;
}

.toggle-icon.moon {
    color: #94a3b8;
}

.theme-toggle.dark .toggle-icon.sun {
    color: #6b7280;
}

.theme-toggle.dark .toggle-icon.moon {
    color: #fbbf24;
}

.toggle-thumb {
    position: absolute;
    left: 2px;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.theme-toggle.dark .toggle-thumb {
    transform: translateX(28px);
    background: #0d1f23;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>
