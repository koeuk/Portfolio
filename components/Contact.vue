<template>
    <section id="contact" ref="elementRef" class="section rounded-t-3xl bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div class="max-w-5xl mx-auto" :class="{ 'section-visible': isVisible }">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 section-title title-shimmer-light">
                {{ t('contact.title') }}
            </h2>

            <div class="flex flex-col items-center section-content">
                <!-- Contact Info -->
                <div class="text-center">
                    <h3 class="text-3xl font-bold mb-6">{{ t('contact.subtitle') }}</h3>
                    <p class="text-gray-300 text-lg mb-8 leading-relaxed">
                        {{ t('contact.description') }}
                    </p>

                    <!-- Email -->
                    <div class="space-y-5 mb-8">
                        <a :href="`mailto:${personalInfo.email}`"
                            class="flex items-center justify-center gap-3 text-gray-300 hover:text-white transition-colors text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {{ personalInfo.email }}
                        </a>
                    </div>

                    <!-- Social Links -->
                    <SocialTooltip :items="socials" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { personalInfo, socials } = useData()
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()
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
