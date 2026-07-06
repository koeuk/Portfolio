<template>
  <ul :class="['flex items-center justify-center gap-4', $attrs.class]">
    <li v-for="(item, index) in items" :key="index" class="relative group">
      <a :href="item.href" :aria-label="item.ariaLabel" target="_blank" rel="noopener noreferrer"
        class="relative flex items-center justify-center w-12 h-12 rounded-full bg-white overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-lg">
        <!-- Color fill that rises on hover -->
        <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out group-hover:h-full"
          :style="{ backgroundColor: item.color }" />
        <!-- Icon (uses currentColor so it flips to white on hover) -->
        <svg viewBox="0 0 24 24" fill="currentColor"
          class="relative z-10 w-6 h-6 text-gray-800 transition-colors duration-300 ease-in-out group-hover:text-white">
          <path :d="item.path" />
        </svg>
      </a>
      <!-- Tooltip -->
      <span :style="{ backgroundColor: item.color }"
        class="absolute left-1/2 -translate-x-1/2 bottom-[-40px] px-2.5 py-1.5 text-sm text-white whitespace-nowrap rounded-md opacity-0 invisible transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:bottom-[-50px]">
        {{ item.tooltip }}
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
/**
 * Vue port of the React "social-media" SocialTooltip component.
 * Renders inline SVG paths (recolorable via currentColor) instead of external
 * img URLs, so icons work offline and flip to white on hover.
 */
export interface SocialItem {
  href: string
  ariaLabel: string
  tooltip: string
  color: string
  /** Inner SVG path data, drawn in a 0 0 24 24 viewBox */
  path: string
}

defineProps<{ items: SocialItem[] }>()
defineOptions({ inheritAttrs: false })
</script>
