<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs rounded-full font-medium">Tailwind</span>
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">CSS</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn Tailwind CSS: Utility-First Styling
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 5, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          Tailwind replaces hand-written CSS with small utility classes. It looks busy at first; after a week
          you stop wanting to leave your markup to write a stylesheet.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. The Mental Model</h2>
          <p class="leading-relaxed">
            Each class does one thing: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">flex</code>, <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">p-4</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">text-lg</code>, <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">rounded-xl</code>. You compose them on the element.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Responsive & State Variants</h2>
          <p class="mb-4 leading-relaxed">Prefix any utility with breakpoints or pseudo-states.</p>
          <CodeBlock language="html" :code="variantsCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Dark Mode</h2>
          <p class="mb-4 leading-relaxed">Use the <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">dark:</code> variant. Toggle by adding the <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">dark</code> class on <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">&lt;html&gt;</code>.</p>
          <CodeBlock language="html" :code="darkCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Theme Customization</h2>
          <p class="mb-4 leading-relaxed">Extend the design tokens — colors, spacing, fonts — in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">tailwind.config.js</code>.</p>
          <CodeBlock language="javascript" :code="configCode" />
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Tailwind keeps styles next to markup, eliminates naming, and stays consistent through tokens.
            For most apps, you can ship a polished UI without writing a single line of custom CSS.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn Tailwind CSS - Koeuk Dev' })

const variantsCode = `<button class="px-4 py-2 md:px-6 md:py-3 bg-blue-500 hover:bg-blue-600 focus:ring-2 rounded-lg">
  Click me
</button>`

const darkCode = `<div class="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  Adapts to theme automatically.
</div>`

const configCode = `// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        accent: '#7c3aed',
      },
    },
  },
}`
</script>
