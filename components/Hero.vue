<template>
    <section id="home" class="relative">
        <ClientOnly>
            <HeroFuturistic />
            <template #fallback>
                <div class="h-screen w-full bg-black"></div>
            </template>
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
// Hero now renders the WebGPU/TSL "futuristic" hero (HeroFuturistic.vue).
// Wrapped in <ClientOnly> because WebGPU + three are browser-only.
</script>
