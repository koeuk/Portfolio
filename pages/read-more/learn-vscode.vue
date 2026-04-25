<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium">VS Code</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">Tools</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn VS Code: A Faster Way to Code
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 7, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          VS Code is the most popular editor for a reason — it's fast, extensible, and runs everywhere. Knowing a few
          tricks turns it from a text editor into a real productivity machine.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. Keyboard Shortcuts to Memorize</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Ctrl/Cmd + P</kbd> — Quick open file</li>
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Ctrl/Cmd + Shift + P</kbd> — Command palette</li>
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Ctrl/Cmd + D</kbd> — Select next occurrence (multi-cursor)</li>
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Alt + ↑/↓</kbd> — Move line up/down</li>
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">F2</kbd> — Rename symbol everywhere</li>
            <li><kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Ctrl/Cmd + .</kbd> — Quick fix / refactor</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Multi-Cursor Editing</h2>
          <p class="leading-relaxed">
            Select a word, press <kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Ctrl/Cmd + D</kbd> repeatedly to select more occurrences,
            then edit them all at once. Or hold <kbd class="px-2 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm">Alt</kbd> and click to drop cursors anywhere.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Must-Have Extensions</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li><strong>Volar (Vue)</strong> — official Vue 3 / Nuxt support</li>
            <li><strong>ESLint + Prettier</strong> — auto-format on save</li>
            <li><strong>Tailwind CSS IntelliSense</strong> — class autocomplete & previews</li>
            <li><strong>GitLens</strong> — supercharged Git in the gutter</li>
            <li><strong>Error Lens</strong> — inline TypeScript errors</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Settings That Help</h2>
          <CodeBlock language="json" :code="settingsCode" />
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Live in the command palette. Learn 5 keyboard shortcuts a week. Configure format-on-save once and forget about formatting forever.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn VS Code - Koeuk Dev' })

const settingsCode = `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.linkedEditing": true,
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true
}`
</script>
