<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs rounded-full font-medium">Git</span>
          <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium">Tools</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Learn Git: Version Control Essentials
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Apr 6, 2026</p>
      </div>

      <article class="space-y-8 text-gray-700 dark:text-gray-300">
        <p class="text-lg leading-relaxed">
          Git tracks every change to your code so you can collaborate, experiment, and recover. The CLI looks
          intimidating but most of daily work is six commands.
        </p>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. The Daily Loop</h2>
          <CodeBlock language="bash" :code="dailyCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Branching</h2>
          <p class="mb-4 leading-relaxed">Branches are cheap. Use them for everything: features, fixes, experiments.</p>
          <CodeBlock language="bash" :code="branchCode" />
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Merge vs Rebase</h2>
          <ul class="list-disc list-inside space-y-2 leading-relaxed">
            <li><strong>Merge</strong> — preserves history exactly. Creates a merge commit.</li>
            <li><strong>Rebase</strong> — replays your commits on top of another branch. Cleaner linear history, but rewrites commit hashes.</li>
            <li>Rule of thumb: merge for shared branches, rebase for your local feature branch before pushing.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Recovery & Undo</h2>
          <CodeBlock language="bash" :code="undoCode" />
        </section>

        <section class="bg-gray-50 dark:bg-primary-light p-6 rounded-2xl">
          <h2 class="text-xl font-bold text-primary dark:text-white mb-3">Summary</h2>
          <p class="leading-relaxed">
            Commit often, write meaningful messages, branch fearlessly. Git's reflog will save you from almost any mistake —
            you just need to know it exists.
          </p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
useHead({ title: 'Learn Git - Koeuk Dev' })

const dailyCode = `git status               # see what changed
git add .                # stage everything
git commit -m "Add login form"
git pull --rebase        # update with latest
git push                 # share your work`

const branchCode = `git switch -c feature/signup    # create + switch
# work, commit, repeat
git push -u origin feature/signup`

const undoCode = `git restore file.txt         # undo unstaged changes to a file
git restore --staged file.txt # unstage
git reset HEAD~1             # undo last commit (keep changes)
git reflog                   # find any commit you've ever made`
</script>
