<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">Tailwind</span>
          <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs rounded-full font-medium">CSS</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.tailwind.responsive.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 10, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ t('blog.tailwind.responsive.intro') }}
          </p>
        </section>

        <!-- 1. What is Tailwind CSS? -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section1Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.tailwind.responsive.section1Desc') }}
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li>{{ t('blog.tailwind.responsive.section1Li1') }}</li>
            <li v-html="t('blog.tailwind.responsive.section1Li2')"></li>
            <li>{{ t('blog.tailwind.responsive.section1Li3') }}</li>
            <li>{{ t('blog.tailwind.responsive.section1Li4') }}</li>
            <li>{{ t('blog.tailwind.responsive.section1Li5') }}</li>
          </ul>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle1')" :code="codes[0]" />
        </div>

        <!-- 2. Setting up Tailwind CSS -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section2Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.tailwind.responsive.section2Desc') }}
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle2')" :code="codes[1]" />
          <CodeBlock class="mt-4" title="tailwind.config.js" :code="codes[2]" />
          <CodeBlock class="mt-4" title="Add Tailwind directives to your CSS" :code="codes[3]" />
        </div>

        <!-- 3. Responsive Design Basics -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section3Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.tailwind.responsive.section3Desc') }}
          </p>
          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.tailwind.responsive.tablePrefix') }}</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.tailwind.responsive.tableMinWidth') }}</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">{{ t('blog.tailwind.responsive.tableDevices') }}</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">sm</td>
                  <td class="py-3 pr-4">640px</td>
                  <td class="py-3">{{ t('blog.tailwind.responsive.deviceSm') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">md</td>
                  <td class="py-3 pr-4">768px</td>
                  <td class="py-3">{{ t('blog.tailwind.responsive.deviceMd') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">lg</td>
                  <td class="py-3 pr-4">1024px</td>
                  <td class="py-3">{{ t('blog.tailwind.responsive.deviceLg') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">xl</td>
                  <td class="py-3 pr-4">1280px</td>
                  <td class="py-3">{{ t('blog.tailwind.responsive.deviceXl') }}</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">2xl</td>
                  <td class="py-3 pr-4">1536px</td>
                  <td class="py-3">{{ t('blog.tailwind.responsive.device2xl') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle4')" :code="codes[4]" />
        </div>

        <!-- 4. Mobile-First Approach -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section4Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.tailwind.responsive.section4Desc') }}
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle5')" :code="codes[5]" />
          <div class="tip-box mt-4" v-html="t('blog.tailwind.responsive.tipBox')">
          </div>
        </div>

        <!-- 5. Flexbox with Tailwind -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section5Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section5Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle6')" :code="codes[6]" />
        </div>

        <!-- 6. Grid Layouts -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section6Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section6Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle7')" :code="codes[7]" />
        </div>

        <!-- 7. Responsive Typography -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section7Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section7Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle8')" :code="codes[8]" />
        </div>

        <!-- 8. Responsive Spacing and Padding -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section8Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section8Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle9')" :code="codes[9]" />
        </div>

        <!-- 9. Hiding/Showing Elements -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section9Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section9Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle10')" :code="codes[10]" />
        </div>

        <!-- 10. Container and Max Width -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section10Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section10Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle11')" :code="codes[11]" />
        </div>

        <!-- 11. Responsive Navigation Example -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section11Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.tailwind.responsive.section11Desc') }}
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle12')" :code="codes[12]" />
        </div>

        <!-- 12. Dark Mode Support -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.tailwind.responsive.section12Title') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.tailwind.responsive.section12Desc')">
          </p>
          <CodeBlock :title="t('blog.tailwind.responsive.codeTitle13')" :code="codes[13]" />
          <CodeBlock class="mt-4" :title="t('blog.tailwind.responsive.codeTitle14')" :code="codes[14]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>{{ t('blog.tailwind.responsive.summary1') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.tailwind.responsive.summary2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>{{ t('blog.tailwind.responsive.summary3') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.tailwind.responsive.summary4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>{{ t('blog.tailwind.responsive.summary5') }}</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.tailwind.responsive.summary6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.tailwind.responsive.summary7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>{{ t('blog.tailwind.responsive.summary8') }}</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Building Responsive Layouts with Tailwind CSS - Koeuk Dev' })

const codes = [
  `<!-- Traditional CSS -->
<style>
  .card {
    background: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
</style>
<div class="card">Hello</div>

<!-- Tailwind CSS — no separate stylesheet needed -->
<div class="bg-white rounded-lg p-4 shadow-md">Hello</div>`,

  `# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Generate config files
npx tailwindcss init -p`,

  `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
      },
    },
  },
  plugins: [],
}`,

  `/* src/assets/css/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`,

  `<!-- No prefix = all screens (mobile and up) -->
<div class="text-sm">Always small text</div>

<!-- sm: = 640px and up -->
<div class="text-sm sm:text-base">Small on mobile, base on sm+</div>

<!-- md: = 768px and up -->
<div class="text-sm md:text-lg">Small on mobile, large on tablets+</div>

<!-- lg: = 1024px and up -->
<div class="text-sm lg:text-xl">Small on mobile, xl on laptops+</div>

<!-- xl: = 1280px and up -->
<div class="text-sm xl:text-2xl">Small on mobile, 2xl on desktops+</div>

<!-- 2xl: = 1536px and up -->
<div class="text-sm 2xl:text-3xl">Small on mobile, 3xl on large desktops+</div>`,

  `<!-- Mobile-first: stack vertically on small screens, side-by-side on md+ -->
<div class="flex flex-col md:flex-row gap-4">
  <!-- Full width on mobile, half width on md+ -->
  <div class="w-full md:w-1/2 p-4 bg-white rounded-lg shadow">
    <h2 class="text-lg md:text-xl font-bold">Left Panel</h2>
    <p class="text-sm md:text-base">Content here...</p>
  </div>

  <div class="w-full md:w-1/2 p-4 bg-white rounded-lg shadow">
    <h2 class="text-lg md:text-xl font-bold">Right Panel</h2>
    <p class="text-sm md:text-base">Content here...</p>
  </div>
</div>`,

  `<!-- Horizontal layout with centered items -->
<div class="flex items-center justify-between gap-4">
  <div>Logo</div>
  <nav>Menu</nav>
</div>

<!-- Stack on mobile, row on desktop -->
<div class="flex flex-col md:flex-row items-center gap-4">
  <div class="w-full md:w-1/3">Column 1</div>
  <div class="w-full md:w-1/3">Column 2</div>
  <div class="w-full md:w-1/3">Column 3</div>
</div>

<!-- Center content vertically and horizontally -->
<div class="flex items-center justify-center min-h-screen">
  <div class="text-center">
    <h1 class="text-4xl font-bold">Centered Content</h1>
    <p>This is perfectly centered on the page.</p>
  </div>
</div>

<!-- Flex wrap for responsive cards -->
<div class="flex flex-wrap gap-4">
  <div class="flex-1 min-w-[250px] p-4 bg-gray-100 rounded">Card 1</div>
  <div class="flex-1 min-w-[250px] p-4 bg-gray-100 rounded">Card 2</div>
  <div class="flex-1 min-w-[250px] p-4 bg-gray-100 rounded">Card 3</div>
</div>`,

  `<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="p-6 bg-white rounded-xl shadow-md">
    <h3 class="font-bold text-lg">Card 1</h3>
    <p class="text-gray-600">Description here...</p>
  </div>
  <div class="p-6 bg-white rounded-xl shadow-md">
    <h3 class="font-bold text-lg">Card 2</h3>
    <p class="text-gray-600">Description here...</p>
  </div>
  <div class="p-6 bg-white rounded-xl shadow-md">
    <h3 class="font-bold text-lg">Card 3</h3>
    <p class="text-gray-600">Description here...</p>
  </div>
</div>

<!-- Spanning columns -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
  <div class="md:col-span-3 p-4 bg-blue-50 rounded">Main Content (3/4)</div>
  <div class="md:col-span-1 p-4 bg-gray-50 rounded">Sidebar (1/4)</div>
</div>

<!-- Auto-fit grid — cards automatically wrap -->
<div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
  <div class="p-4 bg-white rounded shadow">Auto Card 1</div>
  <div class="p-4 bg-white rounded shadow">Auto Card 2</div>
  <div class="p-4 bg-white rounded shadow">Auto Card 3</div>
  <div class="p-4 bg-white rounded shadow">Auto Card 4</div>
</div>`,

  `<!-- Responsive heading -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>

<!-- Responsive paragraph -->
<p class="text-sm md:text-base lg:text-lg leading-relaxed">
  This text scales up as the screen gets larger, improving
  readability on different devices.
</p>

<!-- Responsive font weight and tracking -->
<h2 class="text-xl md:text-2xl font-semibold md:font-bold tracking-tight md:tracking-normal">
  Subtitle Text
</h2>

<!-- Responsive text alignment -->
<p class="text-center md:text-left">
  Centered on mobile, left-aligned on desktop.
</p>`,

  `<!-- Responsive padding -->
<div class="p-4 md:p-8 lg:p-12">
  Content with increasing padding on larger screens.
</div>

<!-- Responsive margin -->
<div class="mt-4 md:mt-8 lg:mt-12 mb-4 md:mb-8">
  Content with responsive vertical margins.
</div>

<!-- Responsive gap in flex/grid -->
<div class="grid grid-cols-2 gap-2 md:gap-4 lg:gap-8">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Responsive space between children -->
<div class="space-y-2 md:space-y-4 lg:space-y-6">
  <div class="p-4 bg-gray-100 rounded">Section 1</div>
  <div class="p-4 bg-gray-100 rounded">Section 2</div>
  <div class="p-4 bg-gray-100 rounded">Section 3</div>
</div>`,

  `<!-- Show only on mobile (hidden on md and up) -->
<div class="block md:hidden">
  <button>Mobile Menu Icon</button>
</div>

<!-- Show only on desktop (hidden below md) -->
<nav class="hidden md:flex gap-4">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>

<!-- Show only on large screens -->
<aside class="hidden lg:block w-64">
  Sidebar — only visible on lg+
</aside>

<!-- Different display types per breakpoint -->
<div class="hidden sm:block md:flex lg:grid lg:grid-cols-2">
  Adapts display type at each breakpoint.
</div>`,

  `<!-- Basic centered container -->
<div class="container mx-auto px-4">
  Content is centered with horizontal padding.
</div>

<!-- Max-width constraint -->
<div class="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
  Content limited to max-w-4xl (896px) and centered.
</div>

<!-- Different max-widths -->
<div class="max-w-sm mx-auto">Small container (384px)</div>
<div class="max-w-md mx-auto">Medium container (448px)</div>
<div class="max-w-lg mx-auto">Large container (512px)</div>
<div class="max-w-xl mx-auto">XL container (576px)</div>
<div class="max-w-2xl mx-auto">2XL container (672px)</div>
<div class="max-w-4xl mx-auto">4XL container (896px)</div>
<div class="max-w-7xl mx-auto">7XL container (1280px)</div>`,

  `<nav class="bg-white shadow-md">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <div class="text-xl font-bold text-gray-800">MyApp</div>

      <!-- Desktop Menu (hidden on mobile) -->
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">Services</a>
        <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg
                       hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>

      <!-- Mobile Menu Button (hidden on desktop) -->
      <button class="md:hidden p-2 rounded-lg hover:bg-gray-100">
        <svg class="w-6 h-6" fill="none" stroke="currentColor"
             viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu (toggle with JS) -->
    <div class="md:hidden pb-4 space-y-2">
      <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Home</a>
      <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">About</a>
      <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Services</a>
      <a href="#" class="block px-3 py-2 rounded hover:bg-gray-100">Contact</a>
    </div>
  </div>
</nav>`,

  `// tailwind.config.js
export default {
  darkMode: 'class', // or 'media' for OS-based
  theme: {
    extend: {},
  },
  plugins: [],
}`,

  `<!-- Dark mode with the dark: prefix -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">
    Hello World
  </h1>
  <p class="text-gray-600 dark:text-gray-300">
    This text adapts to dark mode automatically.
  </p>

  <!-- Card with dark mode -->
  <div class="bg-gray-100 dark:bg-gray-800
              border border-gray-200 dark:border-gray-700
              rounded-xl p-6 shadow-md dark:shadow-gray-900/50">
    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
      Dark Mode Card
    </h3>
    <p class="text-gray-500 dark:text-gray-400">
      Seamlessly switches between light and dark themes.
    </p>
    <button class="mt-4 bg-blue-600 dark:bg-blue-500
                   hover:bg-blue-700 dark:hover:bg-blue-600
                   text-white px-4 py-2 rounded-lg transition-colors">
      Action
    </button>
  </div>
</div>

<!-- Toggle dark mode with JavaScript -->
<script>
  // Add/remove 'dark' class on <html> element
  document.documentElement.classList.toggle('dark')
<\/script>`,
]
</script>

<style scoped>
.qa-section { @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700; }
:deep(.inline-code) {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-blue-600 dark:text-blue-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
:deep(.tip-box strong) {
  @apply text-blue-800 dark:text-blue-200;
}
</style>
