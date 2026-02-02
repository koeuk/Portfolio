<template>
    <section id="about" class="section dark:bg-primary">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Photo with Avatar -->
            <div class="flex justify-center">
                <Avatar class="w-80 h-80 shadow-2xl border-4 border-accent/20">
                    <AvatarImage src="/images/koeuk.jpg" :alt="personalInfo.name" />
                    <AvatarFallback
                        class="bg-gradient-to-br from-primary to-primary-light text-white text-6xl font-bold">
                        {{personalInfo.name.split(' ').map(n => n[0]).join('')}}
                    </AvatarFallback>
                </Avatar>
            </div>

            <!-- Content -->
            <div>
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
                        class="px-4 py-2 bg-accent/10 text-accent font-medium rounded-full text-sm">
                        {{ t(badge) }}
                    </span>
                </div>

                <Button variant="outline" size="lg" as="a" href="/resume.pdf" download
                    class="border-accent text-accent hover:bg-accent hover:text-primary dark:border-accent dark:text-accent">
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

    const badgeKeys = [
        'badge.frontend',
        'badge.responsive',
        'badge.typescript',
        'badge.frameworks',
        'badge.uiux',
        'badge.problemSolving'
    ]
</script>
