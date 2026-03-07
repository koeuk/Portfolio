<template>
  <div class="magic-bg fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <!-- Floating sparkles -->
    <div v-for="n in 30" :key="'spark-' + n" class="sparkle" :style="getSparkleStyle(n)"></div>

    <!-- Shooting stars / meteor streaks -->
    <div v-for="n in 5" :key="'meteor-' + n" class="meteor" :style="getMeteorStyle(n)"></div>

    <!-- Floating rune characters -->
    <div v-for="n in 12" :key="'rune-' + n" class="rune-char" :style="getRuneStyle(n)">
      {{ runes[(n - 1) % runes.length] }}
    </div>

    <!-- Energy trails -->
    <svg class="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="trail1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0)" />
          <stop offset="40%" stop-color="rgba(255,255,255,0.15)" />
          <stop offset="60%" stop-color="rgba(200,220,255,0.2)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="trail2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0)" />
          <stop offset="50%" stop-color="rgba(180,200,255,0.12)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id="auroraGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="rgba(100,180,255,0)" />
          <stop offset="20%" stop-color="rgba(100,180,255,0.06)" />
          <stop offset="40%" stop-color="rgba(180,120,255,0.08)" />
          <stop offset="60%" stop-color="rgba(120,220,255,0.06)" />
          <stop offset="80%" stop-color="rgba(200,160,255,0.07)" />
          <stop offset="100%" stop-color="rgba(100,180,255,0)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Sweeping energy trails -->
      <path class="energy-trail trail-1" d="M-100,200 Q400,100 800,300 T1600,250" stroke="url(#trail1)" stroke-width="1.5" fill="none" filter="url(#glow)" />
      <path class="energy-trail trail-2" d="M-100,500 Q300,400 700,600 T1600,450" stroke="url(#trail2)" stroke-width="1" fill="none" filter="url(#glow)" />
      <path class="energy-trail trail-3" d="M-100,800 Q500,700 900,850 T1600,750" stroke="url(#trail1)" stroke-width="1.2" fill="none" filter="url(#glow)" />

      <!-- Aurora shimmer waves -->
      <path class="aurora aurora-1" d="M-200,300 C200,250 400,350 600,280 S1000,320 1400,270 L1400,370 C1000,420 800,330 600,380 S200,350 -200,400 Z" fill="url(#auroraGrad)" filter="url(#softGlow)" />
      <path class="aurora aurora-2" d="M-200,550 C100,500 350,600 550,530 S900,570 1400,520 L1400,620 C900,670 700,580 550,630 S100,600 -200,650 Z" fill="url(#auroraGrad)" filter="url(#softGlow)" />
    </svg>

    <!-- Magic circles (subtle, rotating) -->
    <div class="magic-circle circle-1">
      <svg viewBox="0 0 200 200" class="w-full h-full">
        <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" stroke-dasharray="8 12" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5" stroke-dasharray="4 16" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5" />
        <!-- Inner rune marks -->
        <line x1="100" y1="20" x2="100" y2="40" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
        <line x1="100" y1="160" x2="100" y2="180" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
        <line x1="20" y1="100" x2="40" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
        <line x1="160" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.06)" stroke-width="0.5" />
        <!-- Cross rune marks -->
        <line x1="30" y1="30" x2="45" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" />
        <line x1="155" y1="155" x2="170" y2="170" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" />
        <line x1="170" y1="30" x2="155" y2="45" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" />
        <line x1="30" y1="170" x2="45" y2="155" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" />
        <!-- Inner triangle -->
        <polygon points="100,35 155,135 45,135" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5" />
      </svg>
    </div>

    <div class="magic-circle circle-2">
      <svg viewBox="0 0 200 200" class="w-full h-full">
        <circle cx="100" cy="100" r="85" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5" stroke-dasharray="6 14" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="0.5" stroke-dasharray="3 12" />
        <!-- Hexagon -->
        <polygon points="100,25 165,62.5 165,137.5 100,175 35,137.5 35,62.5" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5" />
        <!-- Inner star -->
        <polygon points="100,40 115,80 160,80 125,105 140,145 100,120 60,145 75,105 40,80 85,80" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="0.5" />
      </svg>
    </div>

    <!-- Third magic circle -->
    <div class="magic-circle circle-3">
      <svg viewBox="0 0 200 200" class="w-full h-full">
        <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(180,200,255,0.04)" stroke-width="0.5" stroke-dasharray="5 10" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(180,200,255,0.03)" stroke-width="0.5" />
        <polygon points="100,30 145,75 145,125 100,170 55,125 55,75" fill="none" stroke="rgba(180,200,255,0.03)" stroke-width="0.5" />
        <line x1="100" y1="30" x2="100" y2="170" stroke="rgba(180,200,255,0.02)" stroke-width="0.5" />
        <line x1="55" y1="75" x2="145" y2="125" stroke="rgba(180,200,255,0.02)" stroke-width="0.5" />
        <line x1="55" y1="125" x2="145" y2="75" stroke="rgba(180,200,255,0.02)" stroke-width="0.5" />
      </svg>
    </div>

    <!-- Floating geometric shapes -->
    <div v-for="n in 6" :key="'geo-' + n" class="geo-shape" :style="getGeoStyle(n)">
      <svg viewBox="0 0 40 40" class="w-full h-full">
        <!-- Alternating diamond and triangle -->
        <polygon v-if="n % 2 === 0" points="20,2 38,20 20,38 2,20" fill="none" stroke="rgba(200,220,255,0.12)" stroke-width="0.8" />
        <polygon v-else points="20,4 36,34 4,34" fill="none" stroke="rgba(220,200,255,0.12)" stroke-width="0.8" />
      </svg>
    </div>

    <!-- Floating orb pulses -->
    <div class="pulse-orb orb-a"></div>
    <div class="pulse-orb orb-b"></div>
    <div class="pulse-orb orb-c"></div>

    <!-- Mana particles (tiny rising dots) -->
    <div v-for="n in 15" :key="'mana-' + n" class="mana-particle" :style="getManaStyle(n)"></div>
  </div>
</template>

<script setup lang="ts">
const runes = ['\u2606', '\u2662', '\u25CB', '\u2727', '\u2726', '\u25C7', '\u2605', '\u2736', '\u2737', '\u2734', '\u2733', '\u2721']

function getSparkleStyle(n: number) {
  const seed = n * 7.3
  const size = 1 + (seed % 3)
  const left = (seed * 13.7) % 100
  const top = (seed * 17.3) % 100
  const delay = (seed * 3.1) % 12
  const duration = 4 + (seed % 8)
  const drift = -30 + (seed % 60)

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    '--drift': `${drift}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as Record<string, string>
}

function getMeteorStyle(n: number) {
  const seed = n * 11.7
  const top = (seed * 7.3) % 60
  const left = 20 + (seed * 13.1) % 60
  const delay = (seed * 2.3) % 15
  const duration = 1.5 + (seed % 2)

  return {
    top: `${top}%`,
    left: `${left}%`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as Record<string, string>
}

function getRuneStyle(n: number) {
  const seed = n * 9.7
  const left = (seed * 11.3) % 90 + 5
  const top = (seed * 14.1) % 80 + 10
  const delay = (seed * 2.7) % 20
  const duration = 8 + (seed % 12)
  const size = 14 + (seed % 10)

  return {
    left: `${left}%`,
    top: `${top}%`,
    fontSize: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as Record<string, string>
}

function getGeoStyle(n: number) {
  const seed = n * 13.3
  const left = 10 + (seed * 11.7) % 80
  const top = 10 + (seed * 8.9) % 70
  const size = 20 + (seed % 25)
  const delay = (seed * 1.9) % 15
  const duration = 10 + (seed % 15)

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as Record<string, string>
}

function getManaStyle(n: number) {
  const seed = n * 5.3
  const left = (seed * 17.1) % 100
  const delay = (seed * 3.7) % 10
  const duration = 6 + (seed % 8)
  const size = 2 + (seed % 3)

  return {
    left: `${left}%`,
    bottom: `-${10 + (seed % 20)}px`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  } as Record<string, string>
}
</script>

<style scoped>
/* Sparkles - anime magic particles */
.sparkle {
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.3);
  animation: sparkleFloat linear infinite;
}

.sparkle:nth-child(3n) {
  background: rgba(200, 220, 255, 0.9);
  box-shadow: 0 0 8px 2px rgba(200, 220, 255, 0.3);
}

.sparkle:nth-child(5n) {
  background: rgba(220, 200, 255, 0.9);
  box-shadow: 0 0 8px 2px rgba(220, 200, 255, 0.3);
}

@keyframes sparkleFloat {
  0% {
    opacity: 0;
    transform: translateY(0) translateX(0) scale(0);
  }
  15% {
    opacity: 0.7;
    transform: translateY(-20px) translateX(calc(var(--drift) * 0.2)) scale(1);
  }
  50% {
    opacity: 0.4;
    transform: translateY(-80px) translateX(calc(var(--drift) * 0.6)) scale(0.8);
  }
  85% {
    opacity: 0.15;
  }
  100% {
    opacity: 0;
    transform: translateY(-160px) translateX(var(--drift)) scale(0.2);
  }
}

/* Shooting stars / meteor streaks */
.meteor {
  position: absolute;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(200,220,255,0.3), transparent);
  border-radius: 50%;
  opacity: 0;
  transform: rotate(-45deg);
  animation: meteorShoot ease-in infinite;
}

.meteor::before {
  content: '';
  position: absolute;
  left: 0;
  top: -1px;
  width: 4px;
  height: 3px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 8px 2px rgba(200,220,255,0.6), 0 0 16px 4px rgba(200,220,255,0.3);
}

@keyframes meteorShoot {
  0% {
    opacity: 0;
    transform: rotate(-45deg) translateX(0);
  }
  5% {
    opacity: 1;
  }
  15% {
    opacity: 0.8;
  }
  25% {
    opacity: 0;
    transform: rotate(-45deg) translateX(300px);
  }
  100% {
    opacity: 0;
  }
}

/* Floating rune characters */
.rune-char {
  position: absolute;
  color: rgba(200, 220, 255, 0.08);
  opacity: 0;
  font-weight: 300;
  animation: runeFloat ease-in-out infinite;
  user-select: none;
}

@keyframes runeFloat {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(0deg) scale(0.5);
  }
  20% {
    opacity: 0.5;
    transform: translateY(0) rotate(15deg) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: translateY(-30px) rotate(-10deg) scale(1.1);
  }
  80% {
    opacity: 0.15;
    transform: translateY(-60px) rotate(20deg) scale(0.9);
  }
  100% {
    opacity: 0;
    transform: translateY(-90px) rotate(0deg) scale(0.5);
  }
}

/* Energy trails - sweeping anime-style lines */
.energy-trail {
  stroke-dasharray: 300 1200;
  stroke-dashoffset: 1500;
  animation: trailSweep ease-in-out infinite;
}

.trail-1 {
  animation-duration: 8s;
  animation-delay: 0s;
}

.trail-2 {
  animation-duration: 10s;
  animation-delay: 3s;
}

.trail-3 {
  animation-duration: 9s;
  animation-delay: 6s;
}

@keyframes trailSweep {
  0% {
    stroke-dashoffset: 1500;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  80% {
    opacity: 0;
  }
  100% {
    stroke-dashoffset: -1500;
    opacity: 0;
  }
}

/* Aurora shimmer waves */
.aurora {
  opacity: 0;
  animation: auroraWave ease-in-out infinite;
}

.aurora-1 {
  animation-duration: 18s;
  animation-delay: 0s;
}

.aurora-2 {
  animation-duration: 22s;
  animation-delay: 8s;
}

@keyframes auroraWave {
  0% {
    opacity: 0;
    transform: translateX(-100px) scaleY(0.8);
  }
  25% {
    opacity: 1;
    transform: translateX(0) scaleY(1.1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(50px) scaleY(0.9);
  }
  75% {
    opacity: 0.9;
    transform: translateX(-30px) scaleY(1.05);
  }
  100% {
    opacity: 0;
    transform: translateX(-100px) scaleY(0.8);
  }
}

/* Magic circles - slow rotating rune circles */
.magic-circle {
  position: absolute;
  opacity: 0;
  animation: circleAppear 20s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: 15%;
  right: -50px;
  animation-delay: 0s;
}

.circle-2 {
  width: 250px;
  height: 250px;
  bottom: 10%;
  left: -30px;
  animation-delay: 10s;
}

.circle-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: 15%;
  animation-delay: 5s;
  animation-duration: 25s;
}

.circle-1 svg {
  animation: rotateClockwise 30s linear infinite;
}

.circle-2 svg {
  animation: rotateCounter 25s linear infinite;
}

.circle-3 svg {
  animation: rotateClockwise 35s linear infinite;
}

@keyframes circleAppear {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  80% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotateClockwise {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes rotateCounter {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

/* Floating geometric shapes */
.geo-shape {
  position: absolute;
  opacity: 0;
  animation: geoFloat ease-in-out infinite;
}

@keyframes geoFloat {
  0% {
    opacity: 0;
    transform: translateY(0) rotate(0deg) scale(0.5);
  }
  20% {
    opacity: 0.6;
    transform: translateY(-20px) rotate(30deg) scale(1);
  }
  50% {
    opacity: 0.4;
    transform: translateY(-50px) rotate(90deg) scale(1.1);
  }
  80% {
    opacity: 0.2;
    transform: translateY(-80px) rotate(150deg) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translateY(-120px) rotate(180deg) scale(0.4);
  }
}

/* Pulse orbs - soft glowing spots */
.pulse-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: orbPulse ease-in-out infinite;
}

.orb-a {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(180, 200, 255, 0.08) 0%, transparent 70%);
  top: 30%;
  left: 10%;
  animation-duration: 12s;
  animation-delay: 0s;
}

.orb-b {
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(200, 180, 255, 0.06) 0%, transparent 70%);
  top: 60%;
  right: 5%;
  animation-duration: 15s;
  animation-delay: 4s;
}

.orb-c {
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.07) 0%, transparent 70%);
  bottom: 15%;
  left: 40%;
  animation-duration: 10s;
  animation-delay: 8s;
}

@keyframes orbPulse {
  0%, 100% {
    opacity: 0;
    transform: scale(0.6);
  }
  30% {
    opacity: 1;
    transform: scale(1.1);
  }
  70% {
    opacity: 0.8;
    transform: scale(1);
  }
}

/* Mana particles - tiny rising energy dots */
.mana-particle {
  position: absolute;
  background: rgba(180, 220, 255, 0.7);
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px 1px rgba(180, 220, 255, 0.4);
  animation: manaRise linear infinite;
}

.mana-particle:nth-child(2n) {
  background: rgba(220, 200, 255, 0.6);
  box-shadow: 0 0 4px 1px rgba(220, 200, 255, 0.3);
}

.mana-particle:nth-child(3n) {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.3);
}

@keyframes manaRise {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0);
  }
  10% {
    opacity: 0.8;
    transform: translateY(-20px) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-200px) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translateY(-400px) scale(0.2);
  }
}

/* Light mode: reduce intensity */
:global(.dark) .magic-bg {
  opacity: 1;
}

.magic-bg {
  opacity: 0.4;
}
</style>
