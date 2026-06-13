<template>
    <footer class="bg-primary-dark text-white py-12">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <!-- Social Links -->
            <SocialTooltip :items="socials" class="mb-6" />

            <!-- Copyright -->
            <p class="text-gray-400 mb-2">
                &copy; {{ new Date().getFullYear() }} <span class="title-shimmer-light font-semibold">{{ personalInfo.name }}</span>. {{ t('footer.rights') }}
            </p>
            <p class="text-sm text-gray-500">
                {{ t('footer.built') }}
            </p>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const { personalInfo, socials } = useData()
    const { t } = useI18n()
</script>
