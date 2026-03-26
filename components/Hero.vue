<template>
    <section id="home"
        class="min-h-screen flex items-center justify-center relative overflow-hidden hero-bg">
        <!-- Animated Gradient Background -->
        <div class="absolute inset-0 gradient-bg"></div>

        <!-- Animated Mesh Gradient -->
        <div class="absolute inset-0 mesh-gradient"></div>

        <!-- Floating Particles -->
        <div class="absolute inset-0 overflow-hidden particles">
            <div v-for="n in 20" :key="n" class="particle" :style="getParticleStyle(n)"></div>
        </div>

        <!-- Glowing Orbs -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="orb orb-1"></div>
            <div class="orb orb-2"></div>
            <div class="orb orb-3"></div>
            <div class="orb orb-4"></div>
        </div>

        <!-- Animated Lines -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <svg class="absolute w-full h-full opacity-20" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0" />
                        <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                    </linearGradient>
                    <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0" />
                        <stop offset="50%" style="stop-color:#e5e5e5;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                    </linearGradient>
                    <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0" />
                        <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                    </linearGradient>
                </defs>
                <line class="animated-line line-1" x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#lineGradient1)" stroke-width="1"/>
                <line class="animated-line line-2" x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#lineGradient2)" stroke-width="1"/>
                <line class="animated-line line-3" x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#lineGradient3)" stroke-width="1"/>
            </svg>
        </div>

        <!-- Grid Pattern Overlay -->
        <div class="absolute inset-0 opacity-[0.02] bg-grid-pattern"></div>

        <!-- Content -->
        <div class="section text-center text-white relative z-10 px-4">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight slide-up">
                {{ t('hero.greeting') }}
                <span class="text-white">
                    {{ displayedName }}<span class="animate-blink">|</span>
                </span>
            </h1>
            <p class="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto slide-up-delay-1">
                {{ t('hero.role') }}
            </p>
            <div class="slide-up-delay-2">
                <Button variant="accent" size="lg" as="a" href="#projects">
                    {{ t('hero.cta') }}
                </Button>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block slide-up-delay-3">
                <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2 animate-bounce-slow">
                    <div class="w-1 h-3 bg-white rounded-full"></div>
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
            setTimeout(typeWriter, 100)
        }
    }

    function getParticleStyle(n: number) {
        const size = Math.random() * 4 + 2
        const left = Math.random() * 100
        const delay = Math.random() * 20
        const duration = Math.random() * 10 + 15
        return {
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
        }
    }
</script>

<style scoped>
@keyframes blink {
    0%, 45% {
        opacity: 1;
    }
    50%, 100% {
        opacity: 0;
    }
}

.animate-blink {
    animation: blink 1.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

/* Animated Gradient Background */
.hero-bg {
    background: #030708;
}

.gradient-bg {
    background: linear-gradient(
        135deg,
        #030708 0%,
        #0a1214 25%,
        #0d1618 50%,
        #0a1214 75%,
        #030708 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

/* Mesh Gradient - Dark & White theme */
.mesh-gradient {
    background:
        radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.08) 0px, transparent 50%),
        radial-gradient(at 50% 0%, rgba(255, 255, 255, 0.06) 0px, transparent 50%),
        radial-gradient(at 100% 0%, rgba(255, 255, 255, 0.04) 0px, transparent 50%),
        radial-gradient(at 100% 50%, rgba(255, 255, 255, 0.06) 0px, transparent 50%),
        radial-gradient(at 50% 100%, rgba(255, 255, 255, 0.04) 0px, transparent 50%),
        radial-gradient(at 0% 50%, rgba(255, 255, 255, 0.06) 0px, transparent 50%);
    animation: meshMove 20s ease-in-out infinite;
}

@keyframes meshMove {
    0%, 100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
    33% {
        opacity: 0.8;
        transform: scale(1.1) rotate(1deg);
    }
    66% {
        opacity: 0.9;
        transform: scale(0.95) rotate(-1deg);
    }
}

/* Floating Particles */
.particle {
    position: absolute;
    background: #ffffff;
    border-radius: 50%;
    bottom: -10px;
    opacity: 0;
    animation: particleRise linear infinite;
}

.particle:nth-child(odd) {
    background: #ffffff;
}

.particle:nth-child(3n) {
    background: #e5e5e5;
}

.particle:nth-child(4n) {
    background: #f5f5f5;
}

@keyframes particleRise {
    0% {
        opacity: 0;
        transform: translateY(0) scale(0);
    }
    10% {
        opacity: 0.6;
        transform: scale(1);
    }
    90% {
        opacity: 0.3;
    }
    100% {
        opacity: 0;
        transform: translateY(-100vh) scale(0.5);
    }
}

/* Floating Orbs */
.orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: orbFloat 20s ease-in-out infinite;
}

.orb-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
    top: -150px;
    left: -150px;
    animation-delay: 0s;
}

.orb-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
    bottom: -100px;
    right: -100px;
    animation-delay: -5s;
    animation-duration: 18s;
}

.orb-3 {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    top: 40%;
    right: 15%;
    animation-delay: -10s;
    animation-duration: 22s;
}

.orb-4 {
    width: 450px;
    height: 450px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, transparent 70%);
    bottom: 20%;
    left: 5%;
    animation-delay: -7s;
    animation-duration: 25s;
}

@keyframes orbFloat {
    0%, 100% {
        transform: translate(0, 0) scale(1) rotate(0deg);
    }
    25% {
        transform: translate(50px, -50px) scale(1.1) rotate(5deg);
    }
    50% {
        transform: translate(-30px, 30px) scale(0.9) rotate(-5deg);
    }
    75% {
        transform: translate(40px, 20px) scale(1.05) rotate(3deg);
    }
}

/* Animated Lines */
.animated-line {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: drawLine 8s ease-in-out infinite;
}

.line-1 {
    animation-delay: 0s;
}

.line-2 {
    animation-delay: 2s;
}

.line-3 {
    animation-delay: 4s;
}

@keyframes drawLine {
    0%, 100% {
        stroke-dashoffset: 1000;
        opacity: 0;
    }
    10% {
        opacity: 0.3;
    }
    50% {
        stroke-dashoffset: 0;
        opacity: 0.3;
    }
    90% {
        opacity: 0.3;
    }
    95% {
        stroke-dashoffset: -1000;
        opacity: 0;
    }
}

/* Grid Pattern */
.bg-grid-pattern {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: gridPulse 4s ease-in-out infinite;
}

@keyframes gridPulse {
    0%, 100% {
        opacity: 0.02;
    }
    50% {
        opacity: 0.04;
    }
}
</style>
