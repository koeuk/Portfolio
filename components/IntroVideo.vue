<template>
  <section id="intro-video" ref="elementRef" class="section overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 section-title title-shimmer tracking-tight">
        {{ t('introVideo.title') }}
      </h2>
      <p class="text-center text-gray-500 dark:text-gray-400 mb-16 section-title">
        {{ t('introVideo.subtitle') }}
      </p>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 section-content">
        <div class="video-frame">
          <video
            src="/videos/portfolio-intro.mp4"
            class="w-full h-auto block"
            autoplay
            muted
            loop
            playsinline
            controls
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { isVisible, elementRef } = useScrollAnimation()
</script>

<style scoped>
.section-title,
.section-content {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(50px) scale(0.95);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.section-visible .section-title {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
}

.section-visible .section-content {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  transition-delay: 0.15s;
}

.video-frame {
  border-radius: 18px;
  overflow: hidden;
}
</style>
