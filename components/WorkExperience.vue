<template>
  <section id="work-experience" ref="elementRef" class="section bg-white dark:bg-primary">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-primary dark:text-white section-title">
        Work Experience
      </h2>

      <div class="relative max-w-4xl mx-auto timeline-content">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 rounded-full hidden md:block timeline-line"></div>
        <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 rounded-full md:hidden timeline-line"></div>

        <!-- START -->
        <div class="flex justify-center mb-12 relative z-10 timeline-step timeline-step-start">
          <div class="px-6 py-2 rounded-full border-2 border-primary dark:border-white text-primary dark:text-white font-bold text-lg bg-white dark:bg-primary">
            START
          </div>
        </div>

        <!-- IT Solutions -->
        <div class="relative flex flex-col md:flex-row items-start mb-16 timeline-step timeline-step-1">
          <div class="hidden md:block w-1/2"></div>
          <div class="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
            <div class="w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-primary shadow-lg"></div>
          </div>
          <div class="ml-16 md:ml-0 md:w-1/2 md:pl-12">
            <div class="relative">
              <div class="hidden md:block absolute left-0 top-1/2 -translate-x-full w-8 border-t-2 border-dashed border-blue-400"></div>
              <span class="text-4xl md:text-5xl font-bold text-blue-500/20 dark:text-blue-400/20">2024</span>
              <div class="absolute -right-4 top-0 w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/30 border-4 border-blue-500 flex items-center justify-center hidden md:flex">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-primary dark:text-white mt-2">Internship</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Aug 2024 - Dec 2024</p>
              <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">IT Solutions</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Gained hands-on experience in full-stack web development, working with modern frameworks and tools.
                Collaborated with the development team on client projects, contributed to frontend and backend features,
                and learned professional software development workflows.
              </p>
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Laravel</span>
                <span class="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Vue.js</span>
                <span class="px-2 py-1 text-xs rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehabooking -->
        <div class="relative flex flex-col md:flex-row items-start mb-16 timeline-step timeline-step-2">
          <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
            <div class="relative">
              <div class="hidden md:block absolute right-0 top-1/2 translate-x-full w-8 border-t-2 border-dashed border-violet-400"></div>
              <div class="absolute -right-4 md:right-auto md:-left-4 top-0 w-14 h-14 rounded-full bg-violet-50 dark:bg-violet-900/30 border-4 border-violet-500 flex items-center justify-center hidden md:flex">
                <svg class="w-6 h-6 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span class="year-shimmer text-4xl md:text-5xl font-bold">2024 - 2026</span>
              <h3 class="text-xl font-bold text-primary dark:text-white mt-2">Staff</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Dec 2024 - Present</p>
              <h4 class="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-2">Vehabooking</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Worked on Innovation Lab Hotel Booking platform, developing responsive UI components and integrating
                booking APIs. Gained experience in real-world product development, agile workflows, and building
                user-friendly interfaces for the hospitality industry.
              </p>
              <div class="flex flex-wrap gap-2 mt-3 md:justify-end">
                <span class="px-2 py-1 text-xs rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">Vue.js</span>
                <span class="px-2 py-1 text-xs rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">Nuxt.js</span>
                <span class="px-2 py-1 text-xs rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">Shadcn Vue</span>
                <span class="px-2 py-1 text-xs rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">Tailwind CSS</span>
                <span class="px-2 py-1 text-xs rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">REST API</span>
              </div>
            </div>
          </div>
          <div class="hidden md:block w-1/2"></div>
          <div class="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
            <div class="w-5 h-5 rounded-full bg-violet-500 border-4 border-white dark:border-primary shadow-lg"></div>
          </div>
        </div>

        <!-- PRESENT -->
        <div class="flex justify-center mt-4 relative z-10 timeline-step timeline-step-end">
          <div class="px-6 py-2 rounded-full border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold text-lg bg-white dark:bg-primary">
            PRESENT
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isVisible, elementRef } = useScrollAnimation()
</script>

<style scoped>
.section-title,
.timeline-content {
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

.section-visible .timeline-content {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0) scale(1);
  transition-delay: 0.3s;
}

/* Timeline line draws downward from START */
.timeline-line {
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 2.4s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 0.5s;
}

.section-visible .timeline-line {
  transform: scaleY(1);
}

/* Staggered reveal of each step from top to bottom */
.timeline-step {
  opacity: 0;
  transform: translateY(-20px);
  filter: blur(8px);
  transition: opacity 0.7s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), filter 0.7s ease-out;
}

.section-visible .timeline-step-start {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition-delay: 0.4s;
}

.section-visible .timeline-step-1 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition-delay: 1.1s;
}

.section-visible .timeline-step-2 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition-delay: 1.8s;
}

.section-visible .timeline-step-end {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition-delay: 2.5s;
}

/* Shimmer animation for the 2024 - 2026 year label */
.year-shimmer {
  background: linear-gradient(
    90deg,
    rgba(139, 92, 246, 0.15) 0%,
    rgba(139, 92, 246, 0.15) 35%,
    rgba(167, 139, 250, 0.95) 50%,
    rgba(139, 92, 246, 0.15) 65%,
    rgba(139, 92, 246, 0.15) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: year-shimmer-sweep 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  display: inline-block;
}

@keyframes year-shimmer-sweep {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .year-shimmer {
    animation: none;
    background: none;
    -webkit-text-fill-color: rgba(139, 92, 246, 0.4);
    color: rgba(139, 92, 246, 0.4);
  }
}
</style>
