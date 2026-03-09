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
                        <a :href="`mailto:${personalInfo?.email}`"
                            class="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {{ personalInfo?.email }}
                        </a>
                    </div>

                    <!-- Social Links -->
                    <div class="flex gap-5">
                        <a v-for="link in socialLinks" :key="link.id"
                            :href="link.url" target="_blank" rel="noopener noreferrer"
                            class="text-3xl hover:text-white transition-colors transform hover:scale-110"
                            v-html="link.icon_svg">
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
    const { t } = useI18n()
    const { isVisible, elementRef } = useScrollAnimation()
    const { getPersonalInfo } = useApi()

    const { data: personalInfoData } = await getPersonalInfo()

    const personalInfo = computed(() => (personalInfoData.value as any)?.data)
    const socialLinks = computed(() => personalInfo.value?.social_links || [])

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
