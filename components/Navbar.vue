<template>
    <nav class="fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out nav-enter"
        :class="scrolled ? 'bg-white/95 dark:bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-white/90 dark:bg-primary/90'">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <NuxtLink to="/"
                    class="text-2xl font-bold text-primary dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                    Portfolio
                </NuxtLink>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-6">
                    <a v-for="link in navLinks" :key="link.href" :href="link.href"
                        class="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-white transition-colors font-medium">
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
                                    :class="{ 'bg-gray-200 dark:bg-primary-light': currentLang === lang.code }">
                                    <span>{{ lang.flag }}</span>
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </Transition>
                    </div>

                    <!-- Theme Toggle Switch -->
                    <button @click="toggleTheme" class="toggle-switch" :class="{ 'active': isDark }">
                        <span class="toggle-slider"></span>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div class="flex items-center gap-2 md:hidden">
                    <!-- Theme Toggle Mobile -->
                    <button @click="toggleTheme" class="toggle-switch" :class="{ 'active': isDark }">
                        <span class="toggle-slider"></span>
                    </button>

                    <button @click="isOpen = !isOpen"
                        class="text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
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
                    class="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-primary-light text-gray-700 dark:text-gray-200 transition-colors">
                    {{ t(link.label) }}
                </a>
                <!-- Language selector mobile -->
                <div class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex gap-2">
                        <button v-for="lang in languages" :key="lang.code"
                            @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                            class="flex-1 py-2 rounded-lg text-center"
                            :class="currentLang === lang.code ? 'bg-primary text-white dark:bg-white dark:text-primary' : 'bg-gray-100 dark:bg-primary-light text-gray-700 dark:text-gray-200'">
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
.toggle-switch {
    position: relative;
    width: 44px;
    height: 24px;
    background: #e5e7eb;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
}

.toggle-switch.active {
    background: #1a1a1a;
}

.toggle-slider {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.toggle-switch.active .toggle-slider {
    transform: translateX(20px);
    background: #ffffff;
}
</style>
