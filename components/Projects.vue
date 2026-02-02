<template>
    <section id="projects" class="section px-0 dark:bg-primary overflow-hidden">
        <div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary dark:text-white">
                {{ t('projects.title') }}
            </h2>


            <!-- Scrollable Container -->
            <div class="relative overflow-hidden">
                <div class="flex animate-scroll-projects">
                    <!-- First set -->
                    <div class="flex gap-8  py-2">
                        <ProjectCard v-for="(project, index) in featuredProjects" :key="project.id" :project="project"
                            :index="index" class="w-[380px] h-[420px] flex-shrink-0" />
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div class="flex gap-8 ">
                        <ProjectCard v-for="(project, index) in featuredProjects" :key="'dup-' + project.id"
                            :project="project" :index="index" class="w-[380px] h-[420px] flex-shrink-0" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { projects } = useData()
    const { t } = useI18n()
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
    animation: scroll-projects 35s linear infinite;
}

.animate-scroll-projects:hover {
    animation-play-state: paused;
}
</style>
