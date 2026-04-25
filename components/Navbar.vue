<template>
    <nav class="fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ease-out nav-enter px-4 sm:px-6 pt-0">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center gap-3">
                <!-- Logo Pill -->
                <NuxtLink to="/#home"
                    class="group flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:scale-[1.02] transition-all duration-300">
                    <img src="/images/profile.jpg" alt="Logo"
                        class="w-9 h-9 rounded-full object-cover ring-2 ring-white dark:ring-white/20 group-hover:ring-primary/30 transition-all" />
                    <span class="text-sm font-semibold text-primary dark:text-white tracking-tight">Koeuk Dev</span>
                </NuxtLink>

                <!-- Desktop Menu Pill -->
                <div
                    class="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] relative">
                    <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href"
                        class="relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 z-10"
                        :class="currentActive === link.href
                            ? 'text-white dark:text-primary'
                            : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white'">
                        <span class="relative z-10">{{ t(link.label) }}</span>
                        <span v-if="currentActive === link.href"
                            class="absolute inset-0 bg-primary dark:bg-white rounded-full -z-0 nav-pill-active"></span>
                    </NuxtLink>
                </div>

                <!-- Right Controls Pill -->
                <div
                    class="hidden md:flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
                    <!-- Language Selector -->
                    <div class="relative">
                        <button @click.stop="showLangMenu = !showLangMenu"
                            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-sm">
                            <span class="text-base leading-none">{{ currentFlag }}</span>
                            <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 transition-transform duration-300"
                                :class="{ 'rotate-180': showLangMenu }" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <Transition name="dropdown">
                            <div v-if="showLangMenu"
                                class="absolute right-0 mt-3 w-40 bg-white/90 dark:bg-primary/95 backdrop-blur-xl rounded-2xl shadow-xl border border-black/5 dark:border-white/10 overflow-hidden p-1.5">
                                <button v-for="lang in languages" :key="lang.code"
                                    @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                                    class="w-full px-3 py-2 text-left rounded-xl flex items-center gap-2.5 text-sm transition-colors"
                                    :class="currentLang === lang.code
                                        ? 'bg-primary/10 dark:bg-white/10 text-primary dark:text-white font-medium'
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'">
                                    <span class="text-base">{{ lang.flag }}</span>
                                    <span>{{ lang.name }}</span>
                                </button>
                            </div>
                        </Transition>
                    </div>

                    <!-- Divider -->
                    <span class="w-px h-5 bg-black/10 dark:bg-white/10"></span>

                    <!-- Theme Toggle Switch -->
                    <button @click="toggleTheme" class="toggle-switch" :class="{ 'active': isDark }"
                        aria-label="Toggle theme">
                        <span class="toggle-slider">
                            <svg v-if="!isDark" class="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    clip-rule="evenodd" />
                            </svg>
                            <svg v-else class="w-3 h-3 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </span>
                    </button>
                </div>

                <!-- Mobile Menu Button -->
                <div
                    class="flex items-center gap-1 md:hidden px-2 py-1.5 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]">
                    <button @click="toggleTheme" class="toggle-switch" :class="{ 'active': isDark }"
                        aria-label="Toggle theme">
                        <span class="toggle-slider"></span>
                    </button>
                    <button @click="isOpen = !isOpen"
                        class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-white transition-colors"
                        aria-label="Toggle menu">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M6 18L18 6M6 6l12 12" />
                            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"
                                d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition name="mobile-menu">
            <div v-if="isOpen" class="md:hidden mt-3 max-w-7xl mx-auto">
                <div
                    class="bg-white/80 dark:bg-primary/90 backdrop-blur-xl rounded-3xl border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden p-2">
                    <NuxtLink v-for="link in navLinks" :key="link.href" :to="link.href" @click="isOpen = false"
                        class="block px-4 py-3 rounded-2xl transition-all text-sm font-medium"
                        :class="currentActive === link.href
                            ? 'bg-primary text-white dark:bg-white dark:text-primary'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/10'">
                        {{ t(link.label) }}
                    </NuxtLink>
                    <div class="mt-2 pt-2 border-t border-black/5 dark:border-white/10 px-1">
                        <div class="flex gap-1.5 p-1">
                            <button v-for="lang in languages" :key="lang.code"
                                @click="selectLanguage(lang.code as 'en' | 'km' | 'zh')"
                                class="flex-1 py-2 rounded-xl text-center text-sm font-medium transition-all"
                                :class="currentLang === lang.code
                                    ? 'bg-primary text-white dark:bg-white dark:text-primary'
                                    : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-200'">
                                {{ lang.flag }} {{ lang.name }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </nav>
</template>

<script setup lang="ts">
    const { isDark, toggleTheme, initTheme } = useTheme()
    const { t, currentLang, setLanguage, languages } = useI18n()

    const route = useRoute()
    const isOpen = ref(false)
    const scrolled = ref(false)
    const showLangMenu = ref(false)
    const activeSection = ref('/#home')

    const isHomePage = computed(() => route.path === '/')
    const currentActive = computed(() => {
        if (!isHomePage.value) {
            const match = navLinks.find(l => route.path.startsWith(l.href.replace('/#', '/')) && !l.href.startsWith('/#'))
            return match?.href || ''
        }
        return activeSection.value
    })

    const navLinks = [
        { href: '/#home', label: 'nav.home' },
        { href: '/#skills', label: 'nav.skills' },
        { href: '/#github', label: 'nav.github' },
        { href: '/#personal-projects', label: 'nav.personalProjects' },
        { href: '/#work-experience', label: 'nav.workExperience' },
        { href: '/#about', label: 'nav.about' },
        { href: '/#contact', label: 'nav.contact' },
        { href: '/blog', label: 'nav.blog', isPage: true }
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
        window.addEventListener('scroll', handleScroll)
        document.addEventListener('click', closeLangMenu)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
        document.removeEventListener('click', closeLangMenu)
    })

    function handleScroll() {
        scrolled.value = window.scrollY > 20

        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
            activeSection.value = '/#contact'
            return
        }

        const sections = ['home', 'skills', 'github', 'personal-projects', 'work-experience', 'about', 'contact']
        const scrollPos = window.scrollY + 150

        for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i])
            if (el && el.offsetTop <= scrollPos) {
                activeSection.value = `/#${sections[i]}`
                return
            }
        }
        activeSection.value = '/#home'
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

.nav-pill-active {
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
    flex-shrink: 0;
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
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-switch.active .toggle-slider {
    transform: translateX(20px);
    background: #ffffff;
}
</style>
