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
          Building Responsive Layouts with Tailwind CSS
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 10, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Tailwind CSS is a utility-first CSS framework that lets you build modern, responsive layouts directly in your HTML. Instead of writing custom CSS, you compose designs using small, single-purpose utility classes. In this guide, we will explore how to build fully responsive layouts using Tailwind CSS.
          </p>
        </section>

        <!-- 1. What is Tailwind CSS? -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">1. What is Tailwind CSS? Why use it?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. Unlike Bootstrap or other component-based frameworks, Tailwind doesn't impose design decisions on you. Instead, it gives you the building blocks to create any design you want.
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li>No context switching between HTML and CSS files</li>
            <li>Highly customizable via <code class="inline-code">tailwind.config.js</code></li>
            <li>Built-in responsive design utilities</li>
            <li>Dark mode support out of the box</li>
            <li>Smaller production builds with automatic purging of unused CSS</li>
          </ul>
          <CodeBlock title="Tailwind vs Traditional CSS" :code="codes[0]" />
        </div>

        <!-- 2. Setting up Tailwind CSS -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">2. Setting up Tailwind CSS</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Getting started with Tailwind CSS is straightforward. Install it via npm and generate the configuration file.
          </p>
          <CodeBlock title="Installation" :code="codes[1]" />
          <CodeBlock class="mt-4" title="tailwind.config.js" :code="codes[2]" />
          <CodeBlock class="mt-4" title="Add Tailwind directives to your CSS" :code="codes[3]" />
        </div>

        <!-- 3. Responsive Design Basics -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">3. Responsive Design Basics (Breakpoints)</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind uses a mobile-first breakpoint system. Each breakpoint prefix applies styles at that minimum width and above. The default breakpoints are:
          </p>
          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Prefix</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Min Width</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">Typical Devices</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">sm</td>
                  <td class="py-3 pr-4">640px</td>
                  <td class="py-3">Small phones (landscape)</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">md</td>
                  <td class="py-3 pr-4">768px</td>
                  <td class="py-3">Tablets</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">lg</td>
                  <td class="py-3 pr-4">1024px</td>
                  <td class="py-3">Laptops</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">xl</td>
                  <td class="py-3 pr-4">1280px</td>
                  <td class="py-3">Desktops</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-mono text-sm text-blue-600 dark:text-blue-400">2xl</td>
                  <td class="py-3 pr-4">1536px</td>
                  <td class="py-3">Large desktops</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock title="Using Breakpoints" :code="codes[4]" />
        </div>

        <!-- 4. Mobile-First Approach -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">4. Mobile-First Approach</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind follows a mobile-first approach. Unprefixed utilities apply to all screen sizes, while prefixed utilities only apply at the specified breakpoint and above. This means you should design for mobile first, then layer on styles for larger screens.
          </p>
          <CodeBlock title="Mobile-First Example" :code="codes[5]" />
          <div class="tip-box mt-4">
            <strong>Tip:</strong> Always start with the mobile layout (no prefix), then add <code class="inline-code">md:</code> and <code class="inline-code">lg:</code> prefixes for larger screens. This ensures your design works on all devices.
          </div>
        </div>

        <!-- 5. Flexbox with Tailwind -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">5. Flexbox with Tailwind</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Flexbox is one of the most powerful layout tools in CSS, and Tailwind makes it incredibly easy to use. The key utility classes include <code class="inline-code">flex</code>, <code class="inline-code">items-center</code>, <code class="inline-code">justify-between</code>, and <code class="inline-code">gap</code>.
          </p>
          <CodeBlock title="Flexbox Utilities" :code="codes[6]" />
        </div>

        <!-- 6. Grid Layouts -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">6. Grid Layouts</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            CSS Grid is perfect for two-dimensional layouts. Tailwind provides utilities like <code class="inline-code">grid</code>, <code class="inline-code">grid-cols-*</code>, and <code class="inline-code">gap-*</code> to build responsive grid systems with ease.
          </p>
          <CodeBlock title="Responsive Grid Layout" :code="codes[7]" />
        </div>

        <!-- 7. Responsive Typography -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">7. Responsive Typography</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Typography should scale with screen size for optimal readability. Tailwind lets you adjust font sizes, line heights, and font weights at different breakpoints using classes like <code class="inline-code">text-sm</code>, <code class="inline-code">md:text-lg</code>, and <code class="inline-code">lg:text-2xl</code>.
          </p>
          <CodeBlock title="Responsive Typography" :code="codes[8]" />
        </div>

        <!-- 8. Responsive Spacing and Padding -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">8. Responsive Spacing and Padding</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Spacing is crucial for responsive design. Tailwind provides margin (<code class="inline-code">m-*</code>), padding (<code class="inline-code">p-*</code>), and gap utilities that can be adjusted per breakpoint to ensure proper spacing on every screen size.
          </p>
          <CodeBlock title="Responsive Spacing" :code="codes[9]" />
        </div>

        <!-- 9. Hiding/Showing Elements -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">9. Hiding/Showing Elements</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Sometimes you need to show or hide elements based on screen size. Tailwind provides the <code class="inline-code">hidden</code> and <code class="inline-code">block</code> utilities combined with breakpoint prefixes like <code class="inline-code">md:block</code> and <code class="inline-code">lg:hidden</code>.
          </p>
          <CodeBlock title="Show/Hide by Screen Size" :code="codes[10]" />
        </div>

        <!-- 10. Container and Max Width -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">10. Container and Max Width</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The <code class="inline-code">container</code> class sets the max-width to match the current breakpoint. Combined with <code class="inline-code">mx-auto</code> and padding, it creates a centered content area that adapts to screen size.
          </p>
          <CodeBlock title="Container and Max Width" :code="codes[11]" />
        </div>

        <!-- 11. Responsive Navigation Example -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">11. Responsive Navigation Example</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            A responsive navigation bar is one of the most common patterns. Here is how to build one that collapses into a hamburger menu on mobile and shows full links on larger screens.
          </p>
          <CodeBlock title="Responsive Navbar" :code="codes[12]" />
        </div>

        <!-- 12. Dark Mode Support -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">12. Dark Mode Support</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Tailwind has built-in dark mode support using the <code class="inline-code">dark:</code> prefix. You can enable it via the <code class="inline-code">class</code> strategy (recommended) or the <code class="inline-code">media</code> strategy that follows the OS preference.
          </p>
          <CodeBlock title="Dark Mode Configuration" :code="codes[13]" />
          <CodeBlock class="mt-4" title="Using Dark Mode Classes" :code="codes[14]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Tailwind CSS is a utility-first framework that lets you build responsive designs directly in HTML.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Use breakpoint prefixes (<code class="inline-code">sm:</code>, <code class="inline-code">md:</code>, <code class="inline-code">lg:</code>, <code class="inline-code">xl:</code>, <code class="inline-code">2xl:</code>) for responsive design.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Always design mobile-first, then add styles for larger screens.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Use <code class="inline-code">flex</code> and <code class="inline-code">grid</code> utilities for powerful, responsive layouts.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Responsive typography, spacing, and visibility classes adapt your UI across devices.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>The <code class="inline-code">container</code> class with <code class="inline-code">mx-auto</code> centers content responsively.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Dark mode is built-in with the <code class="inline-code">dark:</code> prefix for seamless theme switching.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span>Tailwind purges unused CSS in production, resulting in very small bundle sizes.</span></li>
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
