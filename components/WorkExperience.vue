<template>
  <section id="work-experience" ref="elementRef" class="section relative overflow-hidden">
    <!-- Ambient refraction orbs so the glass material reads against the page -->
    <div class="glass-orb glass-orb-blue" aria-hidden="true"></div>
    <div class="glass-orb glass-orb-green" aria-hidden="true"></div>

    <div class="relative" :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 section-title title-shimmer">
        Work Experience
      </h2>

      <div class="relative max-w-4xl mx-auto timeline-content">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-emerald-500 rounded-full hidden md:block timeline-line"></div>
        <div class="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-emerald-500 rounded-full md:hidden timeline-line"></div>

        <!-- START -->
        <div class="flex justify-center mb-12 relative z-10 timeline-step timeline-step-start">
          <div class="glass-capsule text-primary dark:text-white font-bold text-lg">
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
            <div class="relative glass-card glass-card-blue">
              <div class="hidden md:block absolute left-0 top-1/2 -translate-x-full w-8 border-t-2 border-dashed border-blue-400 glass-connector"></div>
              <span class="year-shimmer-blue text-4xl md:text-5xl font-bold">2024</span>
              <div class="absolute -right-4 -top-4 w-14 h-14 rounded-full glass-icon glass-icon-blue flex items-center justify-center hidden md:flex">
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
                <span class="glass-pill glass-pill-blue">Laravel</span>
                <span class="glass-pill glass-pill-blue">Vue.js</span>
                <span class="glass-pill glass-pill-blue">Vuetify</span>
                <span class="glass-pill glass-pill-blue">Tailwind CSS</span>
                <span class="glass-pill glass-pill-blue">Chart.js</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehabooking -->
        <div class="relative flex flex-col md:flex-row items-start mb-16 timeline-step timeline-step-2">
          <div class="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
            <div class="relative glass-card glass-card-green">
              <div class="hidden md:block absolute right-0 top-1/2 translate-x-full w-8 border-t-2 border-dashed border-green-400 glass-connector"></div>
              <div class="absolute -right-4 md:right-auto md:-left-4 -top-4 w-14 h-14 rounded-full glass-icon glass-icon-green flex items-center justify-center hidden md:flex">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span class="year-shimmer text-4xl md:text-5xl font-bold">2024 - 2026</span>
              <h3 class="text-xl font-bold text-primary dark:text-white mt-2">Staff</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Dec 2024 - Present</p>
              <h4 class="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">Vehabooking</h4>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Worked on Innovation Lab Hotel Booking platform, developing responsive UI components and integrating
                booking APIs. Gained experience in real-world product development, agile workflows, and building
                user-friendly interfaces for the hospitality industry.
              </p>
              <div class="flex flex-wrap gap-2 mt-3 md:justify-end">
                <span class="glass-pill glass-pill-green">Vue.js</span>
                <span class="glass-pill glass-pill-green">Nuxt.js</span>
                <span class="glass-pill glass-pill-green">Shadcn Vue</span>
                <span class="glass-pill glass-pill-green">Tailwind CSS</span>
                <span class="glass-pill glass-pill-green">Laravel</span>
                <span class="glass-pill glass-pill-green">PHP</span>
                <span class="glass-pill glass-pill-green">REST API</span>
              </div>
            </div>
          </div>
          <div class="hidden md:block w-1/2"></div>
          <div class="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
            <div class="w-5 h-5 rounded-full bg-green-500 border-4 border-white dark:border-primary shadow-lg"></div>
          </div>
        </div>

        <!-- PRESENT -->
        <div class="flex justify-center mt-4 relative z-10 timeline-step timeline-step-end">
          <div class="glass-capsule glass-capsule-present text-emerald-600 dark:text-emerald-400 font-bold text-lg">
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
/* ─────────────────────────────────────────────
   Liquid Glass — iOS 26 HIG inspired material
   Translucent, blurred, with a specular top edge,
   concentric radii, layered depth and fluid motion.
   ───────────────────────────────────────────── */
.glass-card {
  position: relative;
  border-radius: 24px;
  padding: 1.5rem 1.75rem;
  isolation: isolate;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.28));
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.55);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.75),
    inset 0 -1px 1px rgba(255, 255, 255, 0.25),
    0 10px 30px rgba(15, 23, 42, 0.08),
    0 2px 8px rgba(15, 23, 42, 0.04);
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.55s ease;
}

/* Specular rim — bright light edge along the top, fading down */
.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0) 45%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 1;
}

/* Soft colored inner glow keyed to each card's theme */
.glass-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0.5;
  pointer-events: none;
  z-index: -1;
  transition: opacity 0.55s ease;
}

.glass-card-blue::after {
  background: radial-gradient(120% 120% at 80% 0%, rgba(59, 130, 246, 0.18), transparent 60%);
}

.glass-card-green::after {
  background: radial-gradient(120% 120% at 20% 0%, rgba(34, 197, 94, 0.18), transparent 60%);
}

.glass-card:hover {
  transform: translateY(-6px) scale(1.012);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.85),
    inset 0 -1px 1px rgba(255, 255, 255, 0.3),
    0 24px 50px rgba(15, 23, 42, 0.14),
    0 6px 16px rgba(15, 23, 42, 0.08);
}

.glass-card:hover::after {
  opacity: 0.85;
}

.glass-card-blue:hover {
  border-color: rgba(59, 130, 246, 0.45);
}

.glass-card-green:hover {
  border-color: rgba(34, 197, 94, 0.45);
}

/* Dark mode — darker translucent glass, dimmer specular */
.dark .glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.02));
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.12),
    inset 0 -1px 1px rgba(255, 255, 255, 0.04),
    0 16px 40px rgba(0, 0, 0, 0.45),
    0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .glass-card::before {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0) 45%);
}

.dark .glass-card:hover {
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.18),
    0 28px 60px rgba(0, 0, 0, 0.55),
    0 8px 20px rgba(0, 0, 0, 0.4);
}

/* Floating glass icon discs */
.glass-icon {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.25));
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  backdrop-filter: blur(14px) saturate(180%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.8),
    0 8px 20px rgba(15, 23, 42, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.6);
  z-index: 2;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.glass-icon-blue { box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 8px 22px rgba(59, 130, 246, 0.35); }
.glass-icon-green { box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 8px 22px rgba(34, 197, 94, 0.35); }

.glass-card:hover .glass-icon { transform: scale(1.08) rotate(-3deg); }

.dark .glass-icon {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03));
  border-color: rgba(255, 255, 255, 0.15);
}

/* Glass tech pills */
.glass-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  font-size: 0.72rem;
  font-weight: 500;
  border-radius: 9999px;
  -webkit-backdrop-filter: blur(10px) saturate(160%);
  backdrop-filter: blur(10px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.glass-pill:hover { transform: translateY(-2px); }

.glass-pill-blue {
  background: rgba(59, 130, 246, 0.12);
  color: rgb(37, 99, 235);
}

.glass-pill-green {
  background: rgba(34, 197, 94, 0.12);
  color: rgb(22, 163, 74);
}

.dark .glass-pill { border-color: rgba(255, 255, 255, 0.12); box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); }
.dark .glass-pill-blue { background: rgba(59, 130, 246, 0.18); color: rgb(147, 197, 253); }
.dark .glass-pill-green { background: rgba(34, 197, 94, 0.18); color: rgb(134, 239, 172); }

/* START / PRESENT glass capsules */
.glass-capsule {
  position: relative;
  z-index: 10;
  padding: 0.55rem 1.6rem;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(244, 244, 246, 0.94));
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.8),
    0 8px 24px rgba(15, 23, 42, 0.1);
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease;
}

.glass-capsule:hover { transform: translateY(-3px) scale(1.03); }
.glass-capsule-present { box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 8px 26px rgba(16, 185, 129, 0.3); }

.dark .glass-capsule {
  background: linear-gradient(135deg, rgba(38, 40, 46, 0.96), rgba(20, 22, 26, 0.95));
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.14), 0 10px 28px rgba(0, 0, 0, 0.4);
}

/* Dashed connector — soften so it reads as light meeting the glass */
.glass-connector { opacity: 0.7; }

/* Ambient refraction orbs behind the timeline */
.glass-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(90px);
  opacity: 0.5;
  pointer-events: none;
  z-index: 0;
}

.glass-orb-blue {
  width: 26rem;
  height: 26rem;
  top: 8%;
  right: -6rem;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.45), transparent 70%);
}

.glass-orb-green {
  width: 28rem;
  height: 28rem;
  bottom: 6%;
  left: -7rem;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.4), transparent 70%);
}

.dark .glass-orb { opacity: 0.35; }

@media (prefers-reduced-motion: reduce) {
  .glass-card,
  .glass-icon,
  .glass-pill,
  .glass-capsule {
    transition: none;
  }
}

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
    rgba(34, 197, 94, 0.15) 0%,
    rgba(34, 197, 94, 0.15) 35%,
    rgba(74, 222, 128, 0.95) 50%,
    rgba(34, 197, 94, 0.15) 65%,
    rgba(34, 197, 94, 0.15) 100%
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
    -webkit-text-fill-color: rgba(34, 197, 94, 0.4);
    color: rgba(34, 197, 94, 0.4);
  }
}

/* Shimmer animation for the 2024 year label (IT Solutions, blue theme) */
.year-shimmer-blue {
  background: linear-gradient(
    90deg,
    rgba(59, 130, 246, 0.15) 0%,
    rgba(59, 130, 246, 0.15) 35%,
    rgba(96, 165, 250, 0.95) 50%,
    rgba(59, 130, 246, 0.15) 65%,
    rgba(59, 130, 246, 0.15) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: year-shimmer-sweep 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  display: inline-block;
}

@media (prefers-reduced-motion: reduce) {
  .year-shimmer-blue {
    animation: none;
    background: none;
    -webkit-text-fill-color: rgba(59, 130, 246, 0.4);
    color: rgba(59, 130, 246, 0.4);
  }
}
</style>
