<template>
    <section id="projects" ref="elementRef" class="section dark:bg-primary overflow-hidden">
        <div :class="{ 'section-visible': isVisible }">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white section-title">
                {{ t('projects.title') }}
            </h2>

            <!-- Projects Grid -->
            <div class="section-content max-w-6xl mx-auto px-4">
                <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <ProjectCard
                        v-for="(project, index) in visibleProjects"
                        :key="project.id"
                        :project="project"
                        :index="index"
                    />
                </div>

                <!-- See More Button -->
                <div v-if="featuredProjects.length > initialCount && !showAll" class="flex justify-center mt-10">
                    <button
                        @click="showAll = true"
                        class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary dark:bg-white text-white dark:text-primary font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
                    >
                        {{ t('projects.seeMore') }}
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- GitHub Contribution Graph -->
            <div class="section-content max-w-6xl mx-auto px-4 mt-16">
                <div class="p-6 rounded-2xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
                    <div class="flex items-center gap-3 mb-4">
                        <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <h3 class="text-xl font-bold text-primary dark:text-white">GitHub Contributions</h3>
                    </div>
                    <!-- Contribution Heatmap -->
                    <a href="https://github.com/koeuk" target="_blank" rel="noopener noreferrer" class="block">
                        <img
                            :src="contributionUrl"
                            alt="GitHub Contribution Heatmap"
                            class="w-full rounded-lg"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { projects } = useData()
    const { isDark } = useTheme()
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()

    const featuredProjects = computed(() => projects.filter(p => p.featured))
    const showAll = ref(false)
    const initialCount = 3

    const visibleProjects = computed(() =>
        showAll.value ? featuredProjects.value : featuredProjects.value.slice(0, initialCount)
    )

    const contributionUrl = computed(() =>
        isDark.value
            ? 'https://ghchart.rshah.org/4ade80/koeuk'
            : 'https://ghchart.rshah.org/1a1a2e/koeuk'
    )
</script>

<style scoped>
.section-title,
.section-content {
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

.section-visible .section-content {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0) scale(1);
    transition-delay: 0.15s;
}
</style>
