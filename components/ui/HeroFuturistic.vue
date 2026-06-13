<template>
  <div class="relative h-screen w-full overflow-hidden bg-black">
    <!-- WebGPU canvas (depth/scan/bloom effect) -->
    <canvas v-if="supported" ref="canvas" class="absolute inset-0 block h-full w-full"></canvas>

    <!-- Fallback for browsers without WebGPU -->
    <div v-else class="absolute inset-0 flex items-center justify-center">
      <img src="/images/profile.jpg" alt=""
        class="h-[55%] w-auto rounded-2xl object-cover opacity-80 shadow-2xl" />
      <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
    </div>

    <!-- Title / subtitle overlay -->
    <div
      class="absolute left-0 top-0 z-[60] flex h-screen w-full flex-col items-center justify-center px-10 uppercase pointer-events-none">
      <div class="text-3xl font-extrabold md:text-5xl xl:text-6xl 2xl:text-7xl">
        <div class="flex space-x-2 overflow-hidden text-white lg:space-x-6">
          <div v-for="(word, index) in titleWords" :key="index" :class="index < visibleWords ? 'fade-in' : ''"
            :style="{ animationDelay: `${index * 0.13 + (delays[index] || 0)}s`, opacity: index < visibleWords ? undefined : 0 }">
            {{ word }}
          </div>
        </div>
      </div>
      <div class="mt-2 overflow-hidden text-xs font-bold text-white md:text-xl xl:text-2xl 2xl:text-3xl">
        <div :class="subtitleVisible ? 'fade-in-subtitle' : ''"
          :style="{ animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`, opacity: subtitleVisible ? undefined : 0 }">
          {{ subtitle }}
        </div>
      </div>
    </div>

    <!-- Scroll to explore -->
    <a href="#skills" class="explore-btn">
      Scroll to explore
      <span class="explore-arrow">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5V17" stroke="white" stroke-width="2" stroke-linecap="round" />
          <path d="M6 12L11 17L16 12" stroke="white" stroke-width="2" stroke-linecap="round" />
        </svg>
      </span>
    </a>
  </div>
</template>

<script setup lang="ts">
/**
 * Vue port of the React "hero-futuristic" component.
 * Original used @react-three/fiber + @react-three/drei (React-only); the
 * framework-agnostic WebGPU + TSL pipeline is reimplemented here on vanilla three.
 * Uses /images/profile.jpg as both color + pseudo-depth source (flat, no depth map).
 */

const titleWords = "Dear !, I'm Koeuk Dev".split(' ')
const subtitle = 'Web Developer & Creative Thinker'

const canvas = ref<HTMLCanvasElement | null>(null)
const supported = ref(true)

// Title animation state
const visibleWords = ref(0)
const subtitleVisible = ref(false)
const delays = ref<number[]>([])
const subtitleDelay = ref(0)

const timeouts: ReturnType<typeof setTimeout>[] = []
let cleanup3d: (() => void) | null = null

function runTitleSequence() {
  const step = (i: number) => {
    if (i < titleWords.length) {
      timeouts.push(setTimeout(() => { visibleWords.value = i + 1; step(i + 1) }, 600))
    } else {
      timeouts.push(setTimeout(() => { subtitleVisible.value = true }, 800))
    }
  }
  step(0)
}

async function init3D() {
  if (typeof navigator === 'undefined' || !(navigator as any).gpu) {
    supported.value = false
    return
  }

  // Dynamic imports keep these heavy WebGPU modules out of the SSR/initial bundle
  const THREE = await import('three/webgpu')
  const {
    abs, blendScreen, float, mod, mx_cell_noise_float, oneMinus,
    smoothstep, texture, uniform, uv, vec2, vec3, pass,
  } = await import('three/tsl')
  const { bloom } = await import('three/examples/jsm/tsl/display/BloomNode.js')

  await nextTick()
  const el = canvas.value
  if (!el) return

  const renderer = new THREE.WebGPURenderer({ canvas: el, antialias: true, alpha: true })
  try {
    await renderer.init()
  } catch (e) {
    supported.value = false
    return
  }

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
  camera.position.z = 1

  // Load the portrait; use it as both color map and pseudo-depth (red channel)
  const loader = new THREE.TextureLoader()
  const map = await new Promise<any>((resolve) =>
    loader.load('/images/koeuk-profile.png', resolve, undefined, () => resolve(null)))
  if (!map) { supported.value = false; return }
  map.colorSpace = THREE.SRGBColorSpace

  const uPointer = uniform(new THREE.Vector2(0))
  const uProgress = uniform(0)
  const strength = 0.01

  const tDepthMap = texture(map)
  const tMap = texture(map, uv().add(tDepthMap.r.mul(uPointer).mul(strength)))

  const tUv = vec2(uv().x, uv().y)
  const tiling = vec2(120.0)
  const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0)
  const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2))
  const dist = float(tiledUv.length())
  const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness)
  const flow = oneMinus(smoothstep(0, 0.02, abs(tDepthMap.sub(uProgress))))
  const mask = dot.mul(flow).mul(vec3(10, 0, 0))
  const final = blendScreen(tMap, mask)

  // The PNG already has a transparent background — drive opacity from its own
  // alpha channel (× uOpacity for the fade-in).
  const uOpacity = uniform(0)
  const material = new THREE.MeshBasicNodeMaterial({ colorNode: final, transparent: true })
  material.opacityNode = tMap.a.mul(uOpacity)

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material)
  scene.add(mesh)

  // Post-processing: bloom only (the full-screen red scan-line overlay was removed)
  const post = new THREE.PostProcessing(renderer)
  const scenePass = pass(scene, camera)
  const scenePassColor = scenePass.getTextureNode('output')
  const bloomPass = bloom(scenePassColor, 1, 0.5, 1)
  post.outputNode = scenePassColor.add(bloomPass)

  const pointer = new THREE.Vector2(0)
  const onPointer = (e: PointerEvent) => {
    pointer.set((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1))
  }
  window.addEventListener('pointermove', onPointer)

  function resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    const aspect = w / h
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(w, h, false)
    camera.left = -aspect
    camera.right = aspect
    camera.top = 1
    camera.bottom = -1
    camera.updateProjectionMatrix()
    // Keep the portrait square + centered, fitting within the viewport
    const s = Math.min(1.5, aspect * 1.8)
    mesh.scale.set(s, s, 1)
  }
  resize()
  window.addEventListener('resize', resize)

  const clock = new THREE.Clock()
  renderer.setAnimationLoop(() => {
    const t = clock.getElapsedTime()
    const p = Math.sin(t * 0.5) * 0.5 + 0.5
    uProgress.value = p
    uPointer.value.copy(pointer)
    uOpacity.value = THREE.MathUtils.lerp(uOpacity.value, 1, 0.07)
    post.renderAsync()
  })

  cleanup3d = () => {
    renderer.setAnimationLoop(null)
    window.removeEventListener('pointermove', onPointer)
    window.removeEventListener('resize', resize)
    mesh.geometry.dispose()
    material.dispose()
    map.dispose()
    renderer.dispose()
  }
}

onMounted(() => {
  runTitleSequence()
  init3D()
})

onUnmounted(() => {
  timeouts.forEach(clearTimeout)
  cleanup3d?.()
})
</script>

<style scoped>
@keyframes heroFadeIn {
  0% {
    opacity: 0;
    transform: translateY(22px) skewX(10deg);
    filter: blur(8px);
  }
  60% {
    filter: blur(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0) skewX(0);
    filter: blur(0);
  }
}

.fade-in {
  animation: heroFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes heroFadeUp {
  0% {
    opacity: 0;
    transform: translateY(14px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-subtitle {
  animation: heroFadeUp 0.8s ease-out both;
}

.explore-btn {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  z-index: 70;
  animation: heroFadeUp 1s ease-out 2.2s both;
}

.explore-btn:hover {
  color: #ffffff;
}

.explore-arrow {
  display: inline-flex;
  animation: exploreBounce 1.8s ease-in-out infinite;
}

@keyframes exploreBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-in,
  .fade-in-subtitle,
  .explore-btn,
  .explore-arrow {
    animation: none;
  }
}
</style>
