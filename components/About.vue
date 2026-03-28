<template>
    <section id="about" ref="elementRef" class="section bg-white dark:bg-primary">
        <div class="grid md:grid-cols-2 gap-12 items-center" :class="{ 'section-visible': isVisible }">
            <!-- Photo with Avatar -->
            <div class="flex justify-center about-image">
                <Avatar class="w-80 h-80 shadow-2xl border-4 border-gray-200 dark:border-gray-700">
                    <AvatarImage src="/images/koeuk.jpg" :alt="personalInfo.name" />
                    <AvatarFallback
                        class="bg-gradient-to-br from-primary to-primary-light text-white text-6xl font-bold">
                        {{personalInfo.name.split(' ').map(n => n[0]).join('')}}
                    </AvatarFallback>
                </Avatar>
            </div>

            <!-- Content -->
            <div class="about-content">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-primary dark:text-white">
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

        <!-- Work Experience Timeline -->
        <div class="mt-24" :class="{ 'section-visible': isVisible }">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-primary dark:text-white section-title">
                Work Experience
            </h2>

            <div class="relative max-w-4xl mx-auto timeline-content">
                <!-- Vertical Line -->
                <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-yellow-400 to-green-400 rounded-full hidden md:block"></div>
                <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-yellow-400 to-green-400 rounded-full md:hidden"></div>

                <!-- START marker -->
                <div class="flex justify-center mb-12 relative z-10">
                    <div class="px-6 py-2 rounded-full border-2 border-primary dark:border-white text-primary dark:text-white font-bold text-lg bg-white dark:bg-primary">
                        START
                    </div>
                </div>

                <!-- Experience 1 - IT Solutions (Right side) -->
                <div class="relative flex flex-col md:flex-row items-start mb-16">
                    <!-- Left side content (desktop) -->
                    <div class="hidden md:block w-1/2"></div>

                    <!-- Center dot -->
                    <div class="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                        <div class="w-5 h-5 rounded-full bg-cyan-400 border-4 border-white dark:border-primary shadow-lg"></div>
                    </div>

                    <!-- Right side content -->
                    <div class="ml-16 md:ml-0 md:w-1/2 md:pl-12">
                        <div class="relative">
                            <!-- Dotted line connector (desktop) -->
                            <div class="hidden md:block absolute left-0 top-1/2 -translate-x-full w-8 border-t-2 border-dashed border-cyan-400"></div>

                            <span class="text-4xl md:text-5xl font-bold text-cyan-400/30 dark:text-cyan-400/20">2026</span>

                            <!-- Icon circle -->
                            <div class="absolute -right-4 top-0 w-14 h-14 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border-4 border-cyan-400 flex items-center justify-center hidden md:flex">
                                <svg class="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            <h3 class="text-xl font-bold text-primary dark:text-white mt-2">Internship</h3>
                            <h4 class="text-lg font-semibold text-cyan-500 mb-2">IT Solutions</h4>
                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Gained hands-on experience in full-stack web development, working with modern frameworks and tools.
                                Collaborated with the development team on client projects, contributed to frontend and backend features,
                                and learned professional software development workflows.
                            </p>
                            <div class="flex flex-wrap gap-2 mt-3">
                                <span class="px-2 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">Laravel</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">Vue.js</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Experience 2 - Vehabooking (Left side) -->
                <div class="relative flex flex-col md:flex-row items-start mb-16">
                    <!-- Left side content -->
                    <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                        <div class="relative">
                            <!-- Dotted line connector (desktop) -->
                            <div class="hidden md:block absolute right-0 top-1/2 translate-x-full w-8 border-t-2 border-dashed border-yellow-400"></div>

                            <!-- Icon circle -->
                            <div class="absolute -left-4 md:-left-auto md:left-auto md:-right-4 top-0 w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border-4 border-yellow-400 flex items-center justify-center hidden md:flex">
                                <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>

                            <span class="text-4xl md:text-5xl font-bold text-yellow-400/30 dark:text-yellow-400/20">2025</span>
                            <h3 class="text-xl font-bold text-primary dark:text-white mt-2">Internship</h3>
                            <h4 class="text-lg font-semibold text-yellow-500 mb-2">Vehabooking</h4>
                            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                Worked on a hotel and travel booking platform, developing responsive UI components and integrating
                                booking APIs. Gained experience in real-world product development, agile workflows, and building
                                user-friendly interfaces for the hospitality industry.
                            </p>
                            <div class="flex flex-wrap gap-2 mt-3 md:justify-end">
                                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">Vue.js</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">Nuxt.js</span>
                                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">REST API</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right side empty (desktop) -->
                    <div class="hidden md:block w-1/2"></div>

                    <!-- Center dot -->
                    <div class="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                        <div class="w-5 h-5 rounded-full bg-yellow-400 border-4 border-white dark:border-primary shadow-lg"></div>
                    </div>
                </div>

                <!-- FINISH marker -->
                <div class="flex justify-center mt-4 relative z-10">
                    <div class="px-6 py-2 rounded-full border-2 border-green-500 text-green-600 dark:text-green-400 font-bold text-lg bg-white dark:bg-primary">
                        PRESENT
                    </div>
                </div>
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

.section-title,
.timeline-content {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(50px) scale(0.95);
    transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.section-visible .section-title {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
}

.section-visible .timeline-content {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
    transition-delay: 0.3s;
}
</style>
