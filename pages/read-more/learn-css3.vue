<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">CSS3</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">Frontend</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn CSS3: Style the Modern Web
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 2, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          CSS has grown from "make it pretty" into a powerful layout and animation system. Knowing modern CSS
          means writing less, doing more, and rarely needing JavaScript for visual concerns.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Flexbox for One-Dimensional Layout</h2>
          <p class="mb-4 leading-relaxed">Use Flexbox when items flow in a row or a column.</p>
          <CodeBlock language="css" :code="flexCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Grid for Two-Dimensional Layout</h2>
          <p class="mb-4 leading-relaxed">When you need rows <em>and</em> columns, reach for Grid.</p>
          <CodeBlock language="css" :code="gridCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Custom Properties (CSS Variables)</h2>
          <p class="mb-4 leading-relaxed">Theme tokens, dark mode, runtime customization — all with one feature.</p>
          <CodeBlock language="css" :code="varsCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Responsive Design</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li>Mobile-first: write base styles for small screens, override with <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">@media (min-width: ...)</code>.</li>
            <li>Use <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">clamp()</code> for fluid typography.</li>
            <li>Prefer logical properties (<code class="px-1 bg-gray-100 dark:bg-primary-light rounded">margin-inline</code>) over directional ones.</li>
            <li>Container queries for component-level responsiveness.</li>
          </ul>
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Modern CSS gives you layout, theming, and motion without frameworks. Learn Flexbox, Grid, custom properties,
            and you can style nearly anything with confidence.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn CSS3 - Koeuk Dev' })

const flexCode = `.row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}`

const gridCode = `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}`

const varsCode = `:root {
  --primary: #1a1a1a;
  --radius: 12px;
}
.button {
  background: var(--primary);
  border-radius: var(--radius);
}`
</script>
