<template>
  <canvas ref="canvas" class="block w-full h-full"></canvas>
</template>

<script setup lang="ts">
import * as THREE from 'three'

/**
 * Vue/Three.js port of the React "background-paper-shaders" component.
 * The original used @react-three/fiber + @paper-design/shaders-react (React-only),
 * so the framework-agnostic GLSL is reimplemented here on a full-screen quad.
 * Recolored to the portfolio's green palette.
 */
const props = withDefaults(defineProps<{
  color1?: string
  color2?: string
  intensity?: number
  speed?: number
}>(), {
  color1: '#16a34a', // green-600
  color2: '#86efac', // green-300
  intensity: 0.85,
  speed: 1.0,
})

const canvas = ref<HTMLCanvasElement | null>(null)

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.OrthographicCamera | null = null
let material: THREE.ShaderMaterial | null = null
let geometry: THREE.PlaneGeometry | null = null
let frameId = 0
let resizeObserver: ResizeObserver | null = null

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform float time;
  uniform float intensity;
  uniform vec2 resolution;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    // Aspect-correct coordinates so the pattern isn't stretched
    vec2 uv = vUv;
    vec2 p = uv;
    p.x *= resolution.x / resolution.y;

    // Animated flowing noise (ported from the original fragment shader)
    float noise = sin(p.x * 6.0 + time) * cos(p.y * 5.0 + time * 0.8);
    noise += sin(p.x * 11.0 - time * 1.6) * cos(p.y * 8.0 + time * 1.2) * 0.5;
    noise += sin(p.x * 18.0 + time * 0.4) * cos(p.y * 14.0 - time * 0.9) * 0.25;

    // Blend the two theme colors based on the noise field
    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);

    // Soft bright veins
    color = mix(color, vec3(1.0), pow(abs(noise), 3.0) * intensity * 0.6);

    // Radial vignette so it reads as a background and fades to black at edges
    float vignette = 1.0 - length(uv - 0.5) * 1.3;
    vignette = clamp(pow(vignette, 1.6), 0.0, 1.0);

    // Sit the whole thing over black at a calm overall strength
    vec3 finalColor = color * vignette * intensity;
    gl_FragColor = vec4(finalColor, 1.0);
  }
`

function setSize() {
  if (!renderer || !material || !canvas.value) return
  const parent = canvas.value.parentElement
  const width = parent?.clientWidth || window.innerWidth
  const height = parent?.clientHeight || window.innerHeight
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height, false)
  ;(material.uniforms.resolution.value as THREE.Vector2).set(width, height)
}

onMounted(() => {
  if (!canvas.value) return

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true, alpha: true })
  scene = new THREE.Scene()
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  geometry = new THREE.PlaneGeometry(2, 2)
  material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      time: { value: 0 },
      intensity: { value: props.intensity },
      resolution: { value: new THREE.Vector2(1, 1) },
      color1: { value: new THREE.Color(props.color1) },
      color2: { value: new THREE.Color(props.color2) },
    },
  })

  scene.add(new THREE.Mesh(geometry, material))
  setSize()

  resizeObserver = new ResizeObserver(setSize)
  if (canvas.value.parentElement) resizeObserver.observe(canvas.value.parentElement)

  const clock = new THREE.Clock()
  const render = () => {
    if (!renderer || !scene || !camera || !material) return
    material.uniforms.time.value = clock.getElapsedTime() * props.speed
    renderer.render(scene, camera)
    if (!prefersReducedMotion) frameId = requestAnimationFrame(render)
  }
  render()
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  resizeObserver?.disconnect()
  geometry?.dispose()
  material?.dispose()
  renderer?.dispose()
  renderer = null
  scene = null
  camera = null
  material = null
  geometry = null
})
</script>
