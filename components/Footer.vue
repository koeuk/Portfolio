<template>
    <footer class="bg-primary-dark text-white py-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <!-- Social Links -->
            <div class="flex justify-center gap-6 mb-6">
                <a v-for="link in socialLinks" :key="link.id"
                    :href="link.url" target="_blank" rel="noopener noreferrer"
                    class="text-2xl hover:text-white transition-colors"
                    v-html="link.icon_svg">
                </a>
            </div>

            <!-- Copyright -->
            <p class="text-gray-400 mb-2">
                &copy; {{ new Date().getFullYear() }} {{ personalInfo?.name }}. {{ t('footer.rights') }}
            </p>
            <p class="text-sm text-gray-500">
                {{ t('footer.built') }}
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const { t } = useI18n()
    const { getPersonalInfo } = useApi()

    const { data: personalInfoData } = await getPersonalInfo()

    const personalInfo = computed(() => (personalInfoData.value as any)?.data)
    const socialLinks = computed(() => personalInfo.value?.social_links || [])
</script>
