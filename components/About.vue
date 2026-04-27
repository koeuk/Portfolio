<template>
    <section id="about" ref="elementRef" class="section bg-white dark:bg-primary">
        <div class="grid md:grid-cols-2 gap-12 items-center" :class="{ 'section-visible': isVisible }">
            <!-- Photo with Avatar -->
            <div class="flex justify-center about-image">
                <div class="relative w-80 h-80">
                    <Avatar class="w-80 h-80 shadow-2xl border-4 border-gray-200 dark:border-gray-700">
                        <AvatarImage src="/images/koeuk.jpg" :alt="personalInfo.name" />
                        <AvatarFallback
                            class="bg-gradient-to-br from-primary to-primary-light text-white text-6xl font-bold">
                            {{personalInfo.name.split(' ').map(n => n[0]).join('')}}
                        </AvatarFallback>
                    </Avatar>
                    <NuxtLink
                        to="/about-me/my-info"
                        :aria-label="t('nav.myInfo')"
                        class="my-info-badge group absolute bottom-3 right-3 w-14 h-14 rounded-full bg-primary dark:bg-white text-white dark:text-primary border-4 border-white dark:border-primary shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12"
                    >
                        <svg class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span class="my-info-tooltip absolute bottom-full mb-2 right-0 px-3 py-1.5 rounded-lg bg-primary dark:bg-white text-white dark:text-primary text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                            {{ t('nav.myInfo') }}
                        </span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Content -->
            <div class="about-content">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 title-shimmer">
                    {{ t('about.title') }}
                </h2>
                <p class="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    {{ t('about.bio') }}
                </p>

                <h3 class="text-2xl font-bold mb-4 text-primary dark:text-white">
                    {{ t('about.keySkills') }}
                </h3>
                <div class="flex flex-wrap gap-3 mb-8">
                    <span v-for="badge in badgeKeys" :key="badge"
                        class="px-4 py-2 bg-gray-100 dark:bg-primary-light text-primary dark:text-white font-medium rounded-full text-sm border border-gray-200 dark:border-gray-600">
                        {{ t(badge) }}
                    </span>
                </div>

                <Button variant="outline" size="lg" as="a" href="/resume.pdf" download
                    class="border-primary text-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {{ t('about.downloadResume') }}
                </Button>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
    const { personalInfo } = useData()
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()

    const badgeKeys = [
        'badge.frontend',
        'badge.responsive',
        'badge.typescript',
        'badge.frameworks',
        'badge.uiux',
        'badge.problemSolving'
    ]
</script>

<style scoped>
.about-image,
.about-content {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(50px) scale(0.95);
    transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.section-visible .about-image {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
}

.section-visible .about-content {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
    transition-delay: 0.15s;
}

.my-info-badge {
    animation: badgePulse 2.4s ease-in-out infinite;
}

.my-info-badge:hover {
    animation: none;
}

@keyframes badgePulse {
    0%, 100% {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 0 0 0 rgba(124, 58, 237, 0.5);
    }
    50% {
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 0 0 12px rgba(124, 58, 237, 0);
    }
}

</style>
