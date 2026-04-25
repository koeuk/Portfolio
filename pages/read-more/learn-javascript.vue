<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">JavaScript</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">Frontend</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn JavaScript: From Zero to Modern ES
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 3, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          JavaScript runs the browser, the server (Node.js), and most of the modern web. It's quirky in places, but the
          modern parts are clean, expressive, and worth learning deeply.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Variables & Functions</h2>
          <p class="mb-4 leading-relaxed">Use <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">const</code> by default. Reach for <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">let</code> only when you must reassign. Avoid <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">var</code>.</p>
          <CodeBlock language="javascript" :code="varsCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Async with Promises & await</h2>
          <p class="mb-4 leading-relaxed">Anything that takes time (network, files, timers) returns a Promise. <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">await</code> makes async code read like sync code.</p>
          <CodeBlock language="javascript" :code="asyncCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Modern Patterns</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li>Destructuring: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">{ name, age } = user</code></li>
            <li>Spread/rest: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">[...arr, newItem]</code></li>
            <li>Optional chaining: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">user?.address?.city</code></li>
            <li>Nullish coalescing: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">value ?? 'default'</code></li>
            <li>Modules: <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">import / export</code> instead of CommonJS.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Array Methods Worth Memorizing</h2>
          <p class="leading-relaxed">
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">map</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">filter</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">reduce</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">find</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">some</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">every</code>,
            <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">flatMap</code>. Most data work in JS is one of these.
          </p>
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Learn the modern subset well — <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">const</code>, arrow functions,
            destructuring, modules, async/await. The rest is mostly history you can read about later.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn JavaScript - Koeuk Dev' })

const varsCode = `const greeting = 'hello'
let count = 0
count += 1

const greet = (name) => \`Hello, \${name}!\`
greet('Koeuk')`

const asyncCode = `async function loadUser(id) {
  const response = await fetch(\`/api/users/\${id}\`)
  if (!response.ok) throw new Error('Failed to load')
  return response.json()
}

const user = await loadUser(42)`
</script>
