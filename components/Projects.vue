<template>
    <section id="projects" ref="elementRef" class="section px-0 dark:bg-primary overflow-hidden">
        <div :class="{ 'section-visible': isVisible }">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white section-title">
                {{ t('projects.title') }}
            </h2>

            <!-- Scrollable Container -->
            <div class="relative overflow-hidden section-content">
                <div class="flex animate-scroll-projects">
                    <!-- First set -->
                    <div class="flex gap-3 sm:gap-8 py-2">
                        <ProjectCard v-for="(project, index) in featuredProjects" :key="project.id" :project="project"
                            :index="index" class="w-[160px] h-[280px] sm:w-[380px] sm:h-[420px] flex-shrink-0" />
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div class="flex gap-3 sm:gap-8">
                        <ProjectCard v-for="(project, index) in featuredProjects" :key="'dup-' + project.id"
                            :project="project" :index="index" class="w-[160px] h-[280px] sm:w-[380px] sm:h-[420px] flex-shrink-0" />
                    </div>
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
</script>

<style scoped>
@keyframes scroll-projects {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.animate-scroll-projects {
    animation: scroll-projects 40s linear infinite;
    will-change: transform;
}

.animate-scroll-projects:hover {
    animation-play-state: paused;
}

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
