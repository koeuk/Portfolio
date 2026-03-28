<template>
    <section id="home" class="h-[75vh] flex items-center justify-center relative overflow-hidden hero-bg">
        <!-- Black Background -->
        <div class="absolute inset-0 bg-black"></div>

        <!-- Aurora Wave Effect -->
        <div class="absolute inset-0 aurora-container">
            <div class="aurora aurora-1"></div>
            <div class="aurora aurora-2"></div>
            <div class="aurora aurora-3"></div>
            <div class="aurora aurora-4"></div>
            <div class="aurora aurora-5"></div>
        </div>

        <!-- Floating Profile Images -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="profile-float profile-float-1">
                <img src="/images/profile.jpg" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
            <div class="profile-float profile-float-2">
                <img src="/images/profile.jpg" alt="" class="w-full h-full object-cover rounded-full" />
            </div>
        </div>

        <!-- Content -->
        <div class="w-full max-w-7xl mx-auto text-center text-white relative z-10 px-4">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                {{ t('hero.greeting') }}
                <span class="text-white">
                    {{ displayedName }}<span class="animate-blink">|</span>
                </span>
            </h1>
            <p class="text-xl sm:text-2xl md:text-3xl mb-12 text-gray-300 max-w-3xl mx-auto">
                {{ t('hero.role') }}
            </p>
            <div class="mb-6">
                <Button variant="accent" size="lg" as="a" href="#skills">
                    {{ t('hero.cta') }}
                </Button>
            </div>

            <!-- Scroll Indicator -->
            <div class="flex justify-center">
                <div class="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2 animate-bounce-slow">
                    <div class="w-1 h-3 bg-white/50 rounded-full"></div>
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
</script>

<style scoped>
@keyframes blink {
    0%, 45% { opacity: 1; }
    50%, 100% { opacity: 0; }
}

.animate-blink {
    animation: blink 1.2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
}

.hero-bg {
    background: #000000;
}

/* Aurora Wave Container */
.aurora-container {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* Aurora Waves */
.aurora {
    position: absolute;
    width: 140%;
    height: 300px;
    top: 50%;
    left: -20%;
    transform: translateY(-50%);
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0;
    mix-blend-mode: screen;
}

.aurora-1 {
    background: radial-gradient(ellipse at center,
        rgba(147, 51, 234, 0.7) 0%,
        rgba(126, 34, 206, 0.4) 30%,
        rgba(88, 28, 135, 0.2) 50%,
        transparent 70%);
    height: 200px;
    animation: auroraWave1 8s ease-in-out infinite;
}

.aurora-2 {
    background: radial-gradient(ellipse at center,
        rgba(192, 132, 252, 0.5) 0%,
        rgba(147, 51, 234, 0.3) 30%,
        rgba(107, 33, 168, 0.15) 50%,
        transparent 70%);
    height: 250px;
    animation: auroraWave2 10s ease-in-out infinite;
    animation-delay: -2s;
}

.aurora-3 {
    background: radial-gradient(ellipse at center,
        rgba(168, 85, 247, 0.6) 0%,
        rgba(139, 92, 246, 0.35) 25%,
        rgba(109, 40, 217, 0.15) 50%,
        transparent 70%);
    height: 180px;
    animation: auroraWave3 12s ease-in-out infinite;
    animation-delay: -4s;
}

.aurora-4 {
    background: radial-gradient(ellipse at center,
        rgba(216, 180, 254, 0.4) 0%,
        rgba(192, 132, 252, 0.2) 30%,
        transparent 60%);
    height: 150px;
    animation: auroraWave4 9s ease-in-out infinite;
    animation-delay: -1s;
}

.aurora-5 {
    background: radial-gradient(ellipse at center,
        rgba(126, 34, 206, 0.5) 0%,
        rgba(88, 28, 135, 0.3) 30%,
        transparent 60%);
    height: 280px;
    animation: auroraWave5 14s ease-in-out infinite;
    animation-delay: -6s;
}

@keyframes auroraWave1 {
    0%, 100% {
        opacity: 0.6;
        transform: translateY(-50%) translateX(0%) scaleX(1) rotate(-2deg);
    }
    25% {
        opacity: 0.8;
        transform: translateY(-55%) translateX(5%) scaleX(1.1) rotate(1deg);
    }
    50% {
        opacity: 0.5;
        transform: translateY(-45%) translateX(-3%) scaleX(0.95) rotate(-1deg);
    }
    75% {
        opacity: 0.9;
        transform: translateY(-50%) translateX(2%) scaleX(1.05) rotate(2deg);
    }
}

@keyframes auroraWave2 {
    0%, 100% {
        opacity: 0.4;
        transform: translateY(-50%) translateX(-5%) scaleX(1.1) rotate(2deg);
    }
    25% {
        opacity: 0.7;
        transform: translateY(-40%) translateX(3%) scaleX(0.9) rotate(-1deg);
    }
    50% {
        opacity: 0.5;
        transform: translateY(-55%) translateX(-2%) scaleX(1.15) rotate(1deg);
    }
    75% {
        opacity: 0.6;
        transform: translateY(-48%) translateX(4%) scaleX(1) rotate(-2deg);
    }
}

@keyframes auroraWave3 {
    0%, 100% {
        opacity: 0.5;
        transform: translateY(-50%) translateX(3%) scaleX(1) rotate(-1deg);
    }
    30% {
        opacity: 0.8;
        transform: translateY(-45%) translateX(-4%) scaleX(1.2) rotate(2deg);
    }
    60% {
        opacity: 0.4;
        transform: translateY(-55%) translateX(5%) scaleX(0.85) rotate(-2deg);
    }
}

@keyframes auroraWave4 {
    0%, 100% {
        opacity: 0.3;
        transform: translateY(-50%) translateX(2%) scaleX(0.8) rotate(1deg);
    }
    35% {
        opacity: 0.6;
        transform: translateY(-45%) translateX(-3%) scaleX(1.1) rotate(-1deg);
    }
    70% {
        opacity: 0.4;
        transform: translateY(-52%) translateX(4%) scaleX(0.95) rotate(2deg);
    }
}

@keyframes auroraWave5 {
    0%, 100% {
        opacity: 0.3;
        transform: translateY(-50%) translateX(-3%) scaleX(1.1) rotate(-1deg);
    }
    20% {
        opacity: 0.5;
        transform: translateY(-48%) translateX(2%) scaleX(0.9) rotate(1deg);
    }
    50% {
        opacity: 0.7;
        transform: translateY(-52%) translateX(-1%) scaleX(1.15) rotate(-2deg);
    }
    80% {
        opacity: 0.4;
        transform: translateY(-46%) translateX(3%) scaleX(1) rotate(1deg);
    }
}

/* Floating Profile Images */
.profile-float {
    position: absolute;
    border-radius: 50%;
    border: 3px solid rgba(168, 85, 247, 0.3);
    box-shadow: 0 0 40px rgba(147, 51, 234, 0.15), 0 0 80px rgba(147, 51, 234, 0.08);
    overflow: hidden;
    opacity: 0.4;
}

.profile-float-1 {
    width: 180px;
    height: 180px;
    bottom: 15%;
    left: 8%;
    animation: profileFloat1 18s ease-in-out infinite;
}

.profile-float-2 {
    width: 220px;
    height: 220px;
    top: 15%;
    right: 8%;
    animation: profileFloat2 22s ease-in-out infinite;
}

@keyframes profileFloat1 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.4; }
    25% { transform: translate(20px, -30px) rotate(5deg) scale(1.05); opacity: 0.5; }
    50% { transform: translate(-15px, 20px) rotate(-3deg) scale(0.95); opacity: 0.35; }
    75% { transform: translate(25px, 10px) rotate(4deg) scale(1.02); opacity: 0.45; }
}

@keyframes profileFloat2 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 0.35; }
    25% { transform: translate(-25px, 20px) rotate(-4deg) scale(0.95); opacity: 0.45; }
    50% { transform: translate(20px, -25px) rotate(5deg) scale(1.05); opacity: 0.4; }
    75% { transform: translate(-10px, -15px) rotate(-3deg) scale(0.98); opacity: 0.5; }
}
</style>
