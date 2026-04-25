<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">HTML5</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">Frontend</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn HTML5: The Foundation of the Web
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 1, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          HTML5 is the markup language of the modern web. Every page, app, and email lives in some form of HTML.
          The good news: the core is small. Master a handful of structural ideas and you can describe almost anything.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Semantic Elements</h2>
          <p class="mb-4 leading-relaxed">
            Use tags that describe what the content <em>is</em>, not how it looks. Screen readers, search engines, and future-you will thank you.
          </p>
          <CodeBlock language="html" :code="semanticCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Forms & Inputs</h2>
          <p class="mb-4 leading-relaxed">
            HTML5 added many input types and validation attributes. Use them — the browser does the heavy lifting.
          </p>
          <CodeBlock language="html" :code="formCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Accessibility (a11y)</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li>Always include <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">alt</code> text on images.</li>
            <li>Use one <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">&lt;h1&gt;</code> per page; nest headings logically.</li>
            <li>Label every form input. Implicit labels work too: wrap the input in <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">&lt;label&gt;</code>.</li>
            <li>Buttons are buttons. Don't use <code class="px-1 bg-gray-100 dark:bg-primary-light rounded">&lt;div onclick&gt;</code>.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Useful APIs to Know</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li><strong>localStorage / sessionStorage</strong> — quick client-side persistence.</li>
            <li><strong>Fetch API</strong> — modern way to talk to servers.</li>
            <li><strong>IntersectionObserver</strong> — lazy-load images, infinite scroll.</li>
            <li><strong>Geolocation, Clipboard, Notifications</strong> — opt-in browser powers.</li>
          </ul>
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Write HTML that says what it means. Keep it semantic, keep it accessible, and let CSS handle how it looks.
            Solid HTML is the foundation everything else stands on.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn HTML5 - Koeuk Dev' })

const semanticCode = `<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Article title</h1>
    <section>...</section>
  </article>
  <aside>Related links</aside>
</main>
<footer>...</footer>`

const formCode = `<form>
  <label>
    Email
    <input type="email" required>
  </label>
  <label>
    Password
    <input type="password" minlength="8" required>
  </label>
  <button type="submit">Sign in</button>
</form>`
</script>
