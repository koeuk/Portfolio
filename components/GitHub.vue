<template>
  <section id="github" ref="elementRef" class="section bg-white dark:bg-primary overflow-hidden">
    <div :class="{ 'section-visible': isVisible }">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-primary dark:text-white section-title">
        GitHub
      </h2>

      <div class="section-content max-w-5xl mx-auto px-4">
        <div class="p-6 sm:p-8 rounded-2xl bg-[#0d1117] border border-gray-700 text-white">
          <!-- Header -->
          <div class="flex items-center gap-3 mb-2">
            <span class="text-sm text-gray-400">koeuk / <strong class="text-white">README.md</strong></span>
          </div>

          <!-- Typing Title -->
          <div class="text-center py-6">
            <img
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&weight=700&pause=1000&center=true&width=600&lines=Hello+There!+I'm+Koeuk+%F0%9F%99%8F&color=FFFFFF"
              alt="Hello There! I'm Koeuk"
              class="mx-auto"
            />
          </div>

          <hr class="border-gray-700 mb-6" />

          <!-- Welcome -->
          <div class="text-center mb-6">
            <span class="text-lg">Welcome to My Digital Space</span>
          </div>

          <!-- Experience Badge -->
          <div class="mb-6">
            <img src="https://img.shields.io/badge/Code_Experience-2023--2025-brightgreen?style=flat&logo=javascript" alt="Experience" />
          </div>

          <!-- Activity Graph -->
          <div class="mb-6">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=koeuk&theme=react-dark&hide_border=true&area=true"
              alt="Contribution Graph"
              class="w-full rounded-lg"
            />
          </div>

          <!-- Contribution Heatmap -->
          <div class="mb-8">
            <img
              src="https://ghchart.rshah.org/4ade80/koeuk"
              alt="GitHub Contribution Heatmap"
              class="w-full rounded-lg"
            />
          </div>

          <!-- Tech Stack -->
          <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Tech Stack</h3>

          <!-- Frontend -->
          <h4 class="font-semibold mb-3 text-gray-200">Frontend & Frameworks</h4>
          <div class="flex flex-wrap gap-2 mb-6">
            <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vuedotjs&logoColor=white" alt="Vue.js" />
            <img src="https://img.shields.io/badge/Nuxt.js-00DC82?style=flat&logo=nuxtdotjs&logoColor=white" alt="Nuxt.js" />
            <img src="https://img.shields.io/badge/Vuetify-1867C0?style=flat&logo=vuetify&logoColor=white" alt="Vuetify" />
            <img src="https://img.shields.io/badge/Shadcn-000000?style=flat&logo=shadcnui&logoColor=white" alt="Shadcn" />
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
            <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white" alt="Bootstrap" />
            <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
            <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
            <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white" alt="SASS" />
          </div>

          <!-- Backend -->
          <h4 class="font-semibold mb-3 text-gray-200">Backend</h4>
          <div class="flex flex-wrap gap-2 mb-6">
            <img src="https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white" alt="Laravel" />
            <img src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white" alt="PHP" />
            <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white" alt="Node.js" />
          </div>

          <!-- Databases -->
          <h4 class="font-semibold mb-3 text-gray-200">Databases</h4>
          <div class="flex flex-wrap gap-2 mb-6">
            <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
          </div>

          <!-- Tools -->
          <h4 class="font-semibold mb-3 text-gray-200">Tools & Design</h4>
          <div class="flex flex-wrap gap-2 mb-8">
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="Figma" />
            <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white" alt="Canva" />
            <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
            <img src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=flat&logo=microsoft-office&logoColor=white" alt="Microsoft Office" />
            <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
          </div>

          <!-- Connect -->
          <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Connect With Me</h3>
          <div class="flex items-center justify-between">
            <div class="flex gap-4">
              <a href="https://github.com/koeuk" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/koeuk25/" target="_blank" rel="noopener noreferrer"
                class="text-gray-400 hover:text-white transition-colors">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <a href="https://github.com/koeuk" target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-600 text-gray-300 hover:bg-white hover:text-[#0d1117] font-semibold transition-all hover:scale-105">
              View More
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
</style>
