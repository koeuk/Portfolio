<template>
  <!-- Fixed full-page background; sits behind all content -->
  <div class="fixed inset-0 -z-10 pointer-events-none">
    <!-- Light theme: white grid + purple radial (top-right) -->
    <div class="absolute inset-0 bg-white dark:hidden" :style="lightStyle" />
    <!-- Dark theme: subtle grid + purple glow over the primary bg -->
    <div class="absolute inset-0 hidden bg-primary dark:block" :style="darkStyle" />
  </div>
</template>

<script setup lang="ts">
/**
 * Vue port of the React "gradient-blur-bg" component.
 * Original was a styled <div> (the useState/count was unused boilerplate);
 * reimplemented here as a fixed, theme-aware page background.
 */
const lightStyle = {
  backgroundImage: `
    linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
    radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
  `,
  backgroundSize: '96px 64px, 96px 64px, 100% 100%',
}

const darkStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px),
    radial-gradient(circle 800px at 100% 200px, rgba(147,51,234,0.35), transparent)
  `,
  backgroundSize: '96px 64px, 96px 64px, 100% 100%',
}
</script>
