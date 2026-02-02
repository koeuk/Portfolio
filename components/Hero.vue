<template>
    <section id="home"
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary relative overflow-hidden">
        <!-- Background Effects -->
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
            <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse">
            </div>
        </div>

        <!-- Content -->
        <div class="section text-center text-white relative z-10 px-4">
            <div class="slide-up">
                <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    {{ t('hero.greeting') }}
                    <span class="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
                        {{ displayedName }}<span class="animate-blink">|</span>
                    </span>
                </h1>
                <p class="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto">
                    {{ t('hero.role') }}
                </p>
                <Button variant="accent" size="lg" as="a" href="#projects">
                    {{ t('hero.cta') }}
                </Button>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block fade-in">
                <div class="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-2 animate-bounce-slow">
                    <div class="w-1 h-3 bg-accent rounded-full"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { personalInfo } = useData()
    const { t } = useI18n()

    const displayedName = ref('')
    const fullName = personalInfo.name
    let charIndex = 0

    onMounted(() => {
        typeWriter()
    })

    function typeWriter() {
        if (charIndex < fullName.length) {
            displayedName.value += fullName.charAt(charIndex)
            charIndex++
            setTimeout(typeWriter, 150)
        }
    }
</script>

<style scoped>
@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

.animate-blink {
    animation: blink 1s infinite;
}
</style>
