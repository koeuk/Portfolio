<template>
  <div
    ref="spotlight"
    class="cursor-spotlight fixed pointer-events-none z-50"
    :style="spotlightStyle"
  >
    <!-- Outer glow -->
    <div class="outer-glow"></div>
    <!-- Inner core -->
    <div class="inner-core"></div>
    <!-- Trailing particles -->
    <div
      v-for="(p, i) in particles"
      :key="i"
      class="trail-particle"
      :style="{
        left: `${p.x}px`,
        top: `${p.y}px`,
        width: `${p.size}px`,
        height: `${p.size}px`,
        opacity: p.opacity,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
const spotlight = ref<HTMLElement | null>(null)
const mouseX = ref(0)
const mouseY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
const isVisible = ref(false)

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  life: number
}

const particles = ref<Particle[]>([])
let animationId = 0
let lastSpawnTime = 0

const spotlightStyle = computed(() => ({
  left: `${currentX.value}px`,
  top: `${currentY.value}px`,
  opacity: isVisible.value ? 1 : 0,
}))

function onMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  isVisible.value = true

  // Spawn trail particles
  const now = Date.now()
  if (now - lastSpawnTime > 50 && particles.value.length < 12) {
    lastSpawnTime = now
    particles.value.push({
      x: (Math.random() - 0.5) * 30,
      y: (Math.random() - 0.5) * 30,
      size: 2 + Math.random() * 3,
      opacity: 0.6,
      life: 1,
    })
  }
}

function onMouseLeave() {
  isVisible.value = false
}

function animate() {
  // Smooth follow with easing
  currentX.value += (mouseX.value - currentX.value) * 0.15
  currentY.value += (mouseY.value - currentY.value) * 0.15

  // Update particles
  for (let i = particles.value.length - 1; i >= 0; i--) {
    const p = particles.value[i]
    p.life -= 0.02
    p.opacity = Math.max(0, p.life * 0.6)
    p.y -= 0.5
    p.x += (Math.random() - 0.5) * 0.5
    if (p.life <= 0) {
      particles.value.splice(i, 1)
    }
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  cancelAnimationFrame(animationId)
})
</script>

<style scoped>
.cursor-spotlight {
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  will-change: left, top;
}

/* Outer soft glow */
.outer-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(180, 210, 255, 0.07) 0%,
    rgba(180, 210, 255, 0.03) 30%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
}

:global(.dark) .outer-glow {
  background: radial-gradient(
    circle,
    rgba(180, 210, 255, 0.1) 0%,
    rgba(180, 210, 255, 0.04) 30%,
    transparent 70%
  );
}

/* Inner bright core */
.inner-core {
  position: absolute;
  width: 8px;
  height: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(200, 220, 255, 0.3) 40%,
    transparent 70%
  );
  border-radius: 50%;
  box-shadow:
    0 0 10px 3px rgba(200, 220, 255, 0.2),
    0 0 20px 6px rgba(200, 220, 255, 0.1);
  animation: corePulse 2s ease-in-out infinite;
}

@keyframes corePulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow:
      0 0 10px 3px rgba(200, 220, 255, 0.2),
      0 0 20px 6px rgba(200, 220, 255, 0.1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.3);
    box-shadow:
      0 0 15px 5px rgba(200, 220, 255, 0.3),
      0 0 30px 10px rgba(200, 220, 255, 0.15);
  }
}

/* Trail particles */
.trail-particle {
  position: absolute;
  background: rgba(200, 220, 255, 0.7);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 4px 1px rgba(200, 220, 255, 0.3);
  transition: opacity 0.1s linear;
  pointer-events: none;
}

.trail-particle:nth-child(odd) {
  background: rgba(220, 200, 255, 0.6);
  box-shadow: 0 0 4px 1px rgba(220, 200, 255, 0.3);
}
</style>
