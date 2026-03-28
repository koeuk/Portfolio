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
        </div>
    </section>
</template>

<script setup lang="ts">
    const { projects } = useData()
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()

    const featuredProjects = computed(() => projects.filter(p => p.featured))
    const showAll = ref(false)
    const initialCount = 3

    const visibleProjects = computed(() =>
        showAll.value ? featuredProjects.value : featuredProjects.value.slice(0, initialCount)
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
