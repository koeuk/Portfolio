<template>
    <section id="contact" ref="elementRef" class="section rounded-t-3xl bg-gradient-to-br from-primary via-primary-light to-primary text-white">
        <div class="max-w-5xl mx-auto" :class="{ 'section-visible': isVisible }">
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 section-title">
                {{ t('contact.title') }}
            </h2>

            <div class="grid md:grid-cols-2 gap-12 section-content">
                <!-- Contact Info -->
                <div>
                    <h3 class="text-3xl font-bold mb-6">{{ t('contact.subtitle') }}</h3>
                    <p class="text-gray-300 text-lg mb-8 leading-relaxed">
                        {{ t('contact.description') }}
                    </p>

                    <!-- Email -->
                    <div class="space-y-5 mb-8">
                        <a :href="`mailto:${personalInfo.email}`"
                            class="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {{ personalInfo.email }}
                        </a>
                    </div>

                    <!-- Social Links -->
                    <div class="flex gap-5">
                        <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer"
                            class="text-3xl hover:text-accent transition-colors transform hover:scale-110">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer"
                            class="text-3xl hover:text-accent transition-colors transform hover:scale-110">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a :href="personalInfo.telegram" target="_blank" rel="noopener noreferrer"
                            class="text-3xl hover:text-accent transition-colors transform hover:scale-110">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                            </svg>
                        </a>
                        <a :href="personalInfo.facebook" target="_blank" rel="noopener noreferrer"
                            class="text-3xl hover:text-accent transition-colors transform hover:scale-110">
                            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Contact Form -->
                <form @submit.prevent="handleSubmit" class="space-y-5">
                    <input v-model="form.name" type="text" :placeholder="t('contact.name')" class="input-field"
                        required />
                    <input v-model="form.email" type="email" :placeholder="t('contact.email')" class="input-field"
                        required />
                    <textarea v-model="form.message" :placeholder="t('contact.message')" rows="6"
                        class="input-field resize-none" required></textarea>
                    <Button variant="accent" size="lg" class="w-full">
                        {{ t('contact.send') }}
                    </Button>

                    <p v-if="status === 'success'" class="text-green-400 text-center font-medium">
                        {{ t('contact.success') }}
                    </p>
                    <p v-if="status === 'error'" class="text-red-400 text-center font-medium">
                        {{ t('contact.error') }}
                    </p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { personalInfo } = useData()
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()

    const form = reactive({ name: '', email: '', message: '' })
    const status = ref<'idle' | 'success' | 'error'>('idle')

    function handleSubmit() {
        status.value = 'success'
        setTimeout(() => {
            form.name = ''
            form.email = ''
            form.message = ''
            status.value = 'idle'
        }, 3000)
    }
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
