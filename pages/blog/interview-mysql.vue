<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">MySQL</span>
          <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.itvw.mysql.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 20, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" v-html="t('blog.itvw.mysql.intro')"></p>
        </section>

        <!-- Q1 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q1') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a1') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a1l1')"></li>
            <li v-html="t('blog.itvw.mysql.a1l2')"></li>
            <li v-html="t('blog.itvw.mysql.a1l3')"></li>
            <li v-html="t('blog.itvw.mysql.a1l4')"></li>
            <li v-html="t('blog.itvw.mysql.a1l5')"></li>
            <li v-html="t('blog.itvw.mysql.a1l6')"></li>
            <li v-html="t('blog.itvw.mysql.a1l7')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q1c1')" :code="codes[0]" />
        </div>

        <!-- Q2 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q2') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.mysql.a2')"></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">SQL</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">MySQL</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">A query language (standard)</td>
                  <td class="py-3">A database software (RDBMS)</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Defines how to interact with data</td>
                  <td class="py-3">Implements SQL to store/retrieve data</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Used by many RDBMS (PostgreSQL, SQLite, etc.)</td>
                  <td class="py-3">One specific RDBMS that uses SQL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.itvw.mysql.q2c1')" :code="codes[1]" />
        </div>

        <!-- Q3 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q3') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.mysql.a3')"></p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">InnoDB</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">MyISAM</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Transactions</td>
                  <td class="py-3 pr-4 text-green-500">Yes (ACID)</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Foreign Keys</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Row-level Locking</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 text-red-500">No (table-level)</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Full-text Search</td>
                  <td class="py-3 pr-4 text-green-500">Yes (5.6+)</td>
                  <td class="py-3 text-green-500">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.itvw.mysql.q3c1')" :code="codes[2]" />
        </div>

        <!-- Q4 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q4') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a4') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a4l1')"></li>
            <li v-html="t('blog.itvw.mysql.a4l2')"></li>
            <li v-html="t('blog.itvw.mysql.a4l3')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q4c1')" :code="codes[3]" />
        </div>

        <!-- Q5 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q5') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a5') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a5l1')"></li>
            <li v-html="t('blog.itvw.mysql.a5l2')"></li>
            <li v-html="t('blog.itvw.mysql.a5l3')"></li>
            <li v-html="t('blog.itvw.mysql.a5l4')"></li>
            <li v-html="t('blog.itvw.mysql.a5l5')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q5c1')" :code="codes[4]" />
        </div>

        <!-- Q6 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q6') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a6') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a6l1')"></li>
            <li v-html="t('blog.itvw.mysql.a6l2')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q6c1')" :code="codes[5]" />
        </div>

        <!-- Q7 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q7') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a7') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a7l1')"></li>
            <li v-html="t('blog.itvw.mysql.a7l2')"></li>
            <li v-html="t('blog.itvw.mysql.a7l3')"></li>
            <li v-html="t('blog.itvw.mysql.a7l4')"></li>
            <li v-html="t('blog.itvw.mysql.a7l5')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q7c1')" :code="codes[6]" />
        </div>

        <!-- Q8 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q8') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a8') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a8l1')"></li>
            <li v-html="t('blog.itvw.mysql.a8l2')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q8c1')" :code="codes[7]" />
        </div>

        <!-- Q9 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q9') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a9') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a9l1')"></li>
            <li v-html="t('blog.itvw.mysql.a9l2')"></li>
            <li v-html="t('blog.itvw.mysql.a9l3')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q9c1')" :code="codes[8]" />
        </div>

        <!-- Q10 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q10') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a10') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a10l1')"></li>
            <li v-html="t('blog.itvw.mysql.a10l2')"></li>
            <li v-html="t('blog.itvw.mysql.a10l3')"></li>
            <li v-html="t('blog.itvw.mysql.a10l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q10c1')" :code="codes[9]" />
        </div>

        <!-- Q11 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q11') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a11') }}</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">DELETE</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">TRUNCATE</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">DROP</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Removes</td>
                  <td class="py-3 pr-4">Specific rows</td>
                  <td class="py-3 pr-4">All rows</td>
                  <td class="py-3">Entire table</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">WHERE clause</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 pr-4 text-red-500">No</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Rollback</td>
                  <td class="py-3 pr-4 text-green-500">Yes</td>
                  <td class="py-3 pr-4 text-red-500">No</td>
                  <td class="py-3 text-red-500">No</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Speed</td>
                  <td class="py-3 pr-4">Slower</td>
                  <td class="py-3 pr-4">Faster</td>
                  <td class="py-3">Fastest</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.itvw.mysql.q11c1')" :code="codes[10]" />
        </div>

        <!-- Q12 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q12') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a12') }}</p>
          <CodeBlock :title="t('blog.itvw.mysql.q12c1')" :code="codes[11]" />
        </div>

        <!-- Q13 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q13') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a13') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a13l1')"></li>
            <li v-html="t('blog.itvw.mysql.a13l2')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q13c1')" :code="codes[12]" />
        </div>

        <!-- Q14 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q14') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a14') }}</p>
          <CodeBlock :title="t('blog.itvw.mysql.q14c1')" :code="codes[13]" />
        </div>

        <!-- Q15 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q15') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a15') }}</p>
          <div class="overflow-x-auto mb-4">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Feature</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">CHAR</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">VARCHAR</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Storage</td>
                  <td class="py-3 pr-4">Fixed-length (padded with spaces)</td>
                  <td class="py-3">Variable-length</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Max length</td>
                  <td class="py-3 pr-4">255 characters</td>
                  <td class="py-3">65,535 characters</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4">Performance</td>
                  <td class="py-3 pr-4">Faster for fixed-size data</td>
                  <td class="py-3">Better for variable-size data</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4">Use case</td>
                  <td class="py-3 pr-4">Country codes, status flags</td>
                  <td class="py-3">Names, emails, descriptions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <CodeBlock :title="t('blog.itvw.mysql.q15c1')" :code="codes[14]" />
        </div>

        <!-- Q16 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q16') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a16') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a16l1')"></li>
            <li v-html="t('blog.itvw.mysql.a16l2')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q16c1')" :code="codes[15]" />
        </div>

        <!-- Q17 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q17') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.mysql.a17')"></p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a17l1')"></li>
            <li v-html="t('blog.itvw.mysql.a17l2')"></li>
            <li v-html="t('blog.itvw.mysql.a17l3')"></li>
            <li v-html="t('blog.itvw.mysql.a17l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q17c1')" :code="codes[16]" />
        </div>

        <!-- Q18 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q18') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a18') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a18l1')"></li>
            <li v-html="t('blog.itvw.mysql.a18l2')"></li>
            <li v-html="t('blog.itvw.mysql.a18l3')"></li>
            <li v-html="t('blog.itvw.mysql.a18l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q18c1')" :code="codes[17]" />
        </div>

        <!-- Q19 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q19') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a19') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a19l1')"></li>
            <li v-html="t('blog.itvw.mysql.a19l2')"></li>
            <li v-html="t('blog.itvw.mysql.a19l3')"></li>
            <li v-html="t('blog.itvw.mysql.a19l4')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q19c1')" :code="codes[18]" />
        </div>

        <!-- Q20 -->
        <div class="qa-section">
          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.itvw.mysql.q20') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ t('blog.itvw.mysql.a20') }}</p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.mysql.a20l1')"></li>
            <li v-html="t('blog.itvw.mysql.a20l2')"></li>
            <li v-html="t('blog.itvw.mysql.a20l3')"></li>
            <li v-html="t('blog.itvw.mysql.a20l4')"></li>
            <li v-html="t('blog.itvw.mysql.a20l5')"></li>
            <li v-html="t('blog.itvw.mysql.a20l6')"></li>
            <li v-html="t('blog.itvw.mysql.a20l7')"></li>
            <li v-html="t('blog.itvw.mysql.a20l8')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.mysql.q20c1')" :code="codes[19]" />
        </div>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum8')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum9')"></span></li>
            <li class="flex items-start gap-2"><span class="text-orange-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.mysql.sum10')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'MySQL Interview Questions - Koeuk Dev' })

const codes = [
  `-- Check MySQL version
SELECT VERSION();

-- Show all databases
SHOW DATABASES;

-- Create a new database
CREATE DATABASE my_app;

-- Use a database
USE my_app;

-- Show all tables in current database
SHOW TABLES;`,

  `-- SQL is the language you write:
SELECT * FROM users WHERE age > 18;
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
UPDATE users SET name = 'Jane' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- MySQL is the software that executes these SQL statements
-- Other RDBMS like PostgreSQL, SQLite, SQL Server also use SQL
-- but with slight syntax differences`,

  `-- Show available storage engines
SHOW ENGINES;

-- Create table with InnoDB (default, recommended)
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    total DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- Create table with MyISAM (legacy, no transactions)
CREATE TABLE logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM;

-- Check engine of a specific table
SHOW TABLE STATUS WHERE Name = 'orders';`,

  `-- PRIMARY KEY: Unique identifier for each row
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- UNIQUE KEY: Ensures no duplicate values
ALTER TABLE users ADD UNIQUE KEY unique_email (email);

-- FOREIGN KEY: Links to another table's primary key
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    product VARCHAR(255),
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Composite PRIMARY KEY
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);`,

  `-- Create a single-column index
CREATE INDEX idx_email ON users(email);

-- Create a composite index (multi-column)
CREATE INDEX idx_name_city ON users(last_name, city);

-- Create a unique index
CREATE UNIQUE INDEX idx_unique_email ON users(email);

-- Create a FULLTEXT index for text search
CREATE FULLTEXT INDEX idx_content ON articles(title, body);

-- Use FULLTEXT search
SELECT * FROM articles
WHERE MATCH(title, body) AGAINST('MySQL tutorial' IN BOOLEAN MODE);

-- Show indexes on a table
SHOW INDEX FROM users;

-- Drop an index
DROP INDEX idx_email ON users;`,

  `-- WHERE: filters rows BEFORE grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE salary > 50000        -- filter individual rows first
GROUP BY department;

-- HAVING: filters groups AFTER grouping
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;        -- filter groups with more than 5 employees

-- Combined: WHERE + HAVING
SELECT department, AVG(salary) AS avg_salary
FROM employees
WHERE hire_date > '2020-01-01'   -- only employees hired after 2020
GROUP BY department
HAVING AVG(salary) > 60000;     -- only departments with avg salary > 60k`,

  `-- Sample tables
-- users: id, name, email
-- orders: id, user_id, total

-- INNER JOIN: only matching rows
SELECT u.name, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN: all users, even without orders
SELECT u.name, o.total
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;

-- RIGHT JOIN: all orders, even without matching users
SELECT u.name, o.total
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN (simulated with UNION in MySQL)
SELECT u.name, o.total FROM users u LEFT JOIN orders o ON u.id = o.user_id
UNION
SELECT u.name, o.total FROM users u RIGHT JOIN orders o ON u.id = o.user_id;

-- CROSS JOIN: every user paired with every order
SELECT u.name, o.total
FROM users u
CROSS JOIN orders o;

-- Self JOIN: employees with their managers
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,

  `-- Non-correlated subquery: inner query runs ONCE independently
SELECT name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees   -- runs once, returns one value
);

-- Subquery in FROM clause (derived table)
SELECT dept, avg_sal
FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_averages
WHERE avg_sal > 60000;

-- Correlated subquery: inner query runs for EACH outer row
SELECT e.name, e.salary, e.department
FROM employees e
WHERE e.salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = e.department  -- references outer query
);

-- EXISTS with correlated subquery
SELECT u.name
FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);`,

  `-- UNNORMALIZED (bad): repeating groups, multiple values in one cell
-- | id | name | phones                |
-- | 1  | John | 012345678, 098765432  |

-- 1NF: Atomic values, no repeating groups
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
CREATE TABLE user_phones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- 2NF: Remove partial dependencies
-- Bad: order_items(order_id, product_id, product_name, quantity)
-- product_name depends only on product_id (partial dependency)

-- Good: separate into two tables
CREATE TABLE products (
    id INT PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- 3NF: Remove transitive dependencies
-- Bad: employees(id, name, dept_id, dept_name, dept_location)
-- dept_name and dept_location depend on dept_id, not on employee id

-- Good: separate department info
CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    location VARCHAR(255)
);
CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(id)
);`,

  `-- Start a transaction
START TRANSACTION;

-- Transfer $100 from account 1 to account 2
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both succeed, make changes permanent
COMMIT;

-- If something goes wrong, undo everything
-- ROLLBACK;

-- Using SAVEPOINT for partial rollback
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (1, 99.99);
SAVEPOINT order_created;

INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 5, 2);
-- Oops, something wrong with this item
ROLLBACK TO order_created;

-- The order still exists, only the item was rolled back
INSERT INTO order_items (order_id, product_id, quantity) VALUES (LAST_INSERT_ID(), 3, 1);
COMMIT;

-- Check current isolation level
SELECT @@transaction_isolation;

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;`,

  `-- DELETE: removes specific rows (can use WHERE, supports rollback)
DELETE FROM users WHERE id = 5;
DELETE FROM orders WHERE created_at < '2024-01-01';

-- TRUNCATE: removes ALL rows instantly (resets AUTO_INCREMENT)
TRUNCATE TABLE logs;

-- DROP: removes the entire table (structure + data)
DROP TABLE IF EXISTS temp_data;

-- Key differences:
-- DELETE   -> DML, row-by-row, logged, can rollback, keeps AUTO_INCREMENT
-- TRUNCATE -> DDL, drops & recreates table, cannot rollback, resets AUTO_INCREMENT
-- DROP     -> DDL, removes table entirely, cannot rollback`,

  `-- Create a view
CREATE VIEW active_users AS
SELECT id, name, email, last_login
FROM users
WHERE status = 'active'
AND last_login > DATE_SUB(NOW(), INTERVAL 30 DAY);

-- Use the view like a regular table
SELECT * FROM active_users;
SELECT name, email FROM active_users WHERE name LIKE 'J%';

-- Create a view with JOINs
CREATE VIEW order_summary AS
SELECT
    u.name AS customer,
    COUNT(o.id) AS total_orders,
    SUM(o.total) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- Query the view
SELECT * FROM order_summary WHERE total_spent > 1000;

-- Update a view
CREATE OR REPLACE VIEW active_users AS
SELECT id, name, email FROM users WHERE status = 'active';

-- Drop a view
DROP VIEW IF EXISTS active_users;`,

  `-- STORED PROCEDURE: reusable block of SQL
DELIMITER //

CREATE PROCEDURE GetUserOrders(IN userId INT)
BEGIN
    SELECT o.id, o.total, o.created_at
    FROM orders o
    WHERE o.user_id = userId
    ORDER BY o.created_at DESC;
END //

DELIMITER ;

-- Call the procedure
CALL GetUserOrders(1);

-- Procedure with OUT parameter
DELIMITER //

CREATE PROCEDURE GetOrderTotal(IN userId INT, OUT totalAmount DECIMAL(10,2))
BEGIN
    SELECT SUM(total) INTO totalAmount
    FROM orders
    WHERE user_id = userId;
END //

DELIMITER ;

CALL GetOrderTotal(1, @total);
SELECT @total;

-- FUNCTION: must return a single value
DELIMITER //

CREATE FUNCTION CalculateDiscount(price DECIMAL(10,2), discount_pct INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN price - (price * discount_pct / 100);
END //

DELIMITER ;

-- Use function in a query
SELECT name, price, CalculateDiscount(price, 10) AS discounted_price
FROM products;`,

  `-- Create a trigger that logs changes
DELIMITER //

CREATE TRIGGER before_user_update
BEFORE UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO user_audit_log (user_id, field_changed, old_value, new_value, changed_at)
    VALUES (OLD.id, 'email', OLD.email, NEW.email, NOW());
END //

DELIMITER ;

-- Trigger to auto-update stock after order
DELIMITER //

CREATE TRIGGER after_order_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products
    SET stock = stock - NEW.quantity
    WHERE id = NEW.product_id;
END //

DELIMITER ;

-- Trigger to prevent negative balance
DELIMITER //

CREATE TRIGGER before_withdrawal
BEFORE UPDATE ON accounts
FOR EACH ROW
BEGIN
    IF NEW.balance < 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient balance';
    END IF;
END //

DELIMITER ;

-- Show all triggers
SHOW TRIGGERS;

-- Drop a trigger
DROP TRIGGER IF EXISTS before_user_update;`,

  `-- CHAR: fixed-length, always uses specified bytes
CREATE TABLE countries (
    code CHAR(2) NOT NULL,      -- 'US', 'KH', 'JP' (always 2 chars)
    name VARCHAR(100)
);

-- VARCHAR: variable-length, uses only needed bytes + 1-2 bytes overhead
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),          -- 'John' uses 5 bytes, 'Alexander' uses 10 bytes
    email VARCHAR(255),
    status CHAR(1) DEFAULT 'A'  -- 'A' for active, 'I' for inactive
);

-- Storage comparison:
-- CHAR(10) storing 'Hello':  'Hello     ' (10 bytes, padded with spaces)
-- VARCHAR(10) storing 'Hello': 'Hello' (6 bytes = 5 chars + 1 length byte)`,

  `-- UNION: combines results, removes duplicates
SELECT name, email FROM customers
UNION
SELECT name, email FROM suppliers;
-- If 'John' appears in both tables, shown only once

-- UNION ALL: combines results, keeps duplicates (faster)
SELECT name, email FROM customers
UNION ALL
SELECT name, email FROM suppliers;
-- If 'John' appears in both tables, shown twice

-- Practical example: Get all transactions
SELECT id, amount, 'income' AS type FROM income
UNION ALL
SELECT id, amount, 'expense' AS type FROM expenses
ORDER BY amount DESC;

-- Rules:
-- 1. Same number of columns in each SELECT
-- 2. Columns must have compatible data types
-- 3. Column names come from the first SELECT`,

  `-- COUNT: number of rows
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- SUM: total of a column
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;

-- AVG: average value
SELECT department, ROUND(AVG(salary), 2) AS avg_salary
FROM employees
GROUP BY department;

-- MAX / MIN: highest and lowest
SELECT department,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM employees
GROUP BY department;

-- Multiple aggregates combined
SELECT
    department,
    COUNT(*) AS headcount,
    SUM(salary) AS total_salary,
    ROUND(AVG(salary), 2) AS avg_salary,
    MAX(salary) AS max_salary,
    MIN(salary) AS min_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- GROUP BY with multiple columns
SELECT department, job_title, COUNT(*) AS count
FROM employees
GROUP BY department, job_title;`,

  `-- Deadlock scenario:
-- Transaction 1:                    Transaction 2:
-- UPDATE accounts SET ... WHERE id=1  UPDATE accounts SET ... WHERE id=2
-- UPDATE accounts SET ... WHERE id=2  UPDATE accounts SET ... WHERE id=1
-- (waits for T2 to release id=2)     (waits for T1 to release id=1)
-- DEADLOCK!

-- Prevention strategy 1: Consistent lock ordering
-- Always lock rows in the same order (by id ascending)
START TRANSACTION;
SELECT * FROM accounts WHERE id = 1 FOR UPDATE;
SELECT * FROM accounts WHERE id = 2 FOR UPDATE;
-- Now do your updates
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

-- Prevention strategy 2: Use lock timeout
SET innodb_lock_wait_timeout = 5;  -- wait max 5 seconds

-- Check for deadlocks in the log
SHOW ENGINE INNODB STATUS;

-- View current locks
SELECT * FROM information_schema.INNODB_TRX;`,

  `-- MASTER configuration (my.cnf)
-- [mysqld]
-- server-id = 1
-- log_bin = mysql-bin
-- binlog_do_db = my_app

-- On Master: create replication user
CREATE USER 'replica_user'@'%' IDENTIFIED BY 'secure_password';
GRANT REPLICATION SLAVE ON *.* TO 'replica_user'@'%';
FLUSH PRIVILEGES;

-- Check master status
SHOW MASTER STATUS;
-- +------------------+----------+
-- | File             | Position |
-- | mysql-bin.000001 | 154      |
-- +------------------+----------+

-- SLAVE configuration (my.cnf)
-- [mysqld]
-- server-id = 2
-- relay_log = mysql-relay-bin

-- On Slave: configure connection to master
CHANGE MASTER TO
    MASTER_HOST = '192.168.1.100',
    MASTER_USER = 'replica_user',
    MASTER_PASSWORD = 'secure_password',
    MASTER_LOG_FILE = 'mysql-bin.000001',
    MASTER_LOG_POS = 154;

-- Start replication
START SLAVE;

-- Check slave status
SHOW SLAVE STATUS\\G`,

  `-- 1. Use EXPLAIN to analyze queries
EXPLAIN SELECT * FROM users WHERE email = 'john@example.com';
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 5;

-- 2. Add indexes on frequently queried columns
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- 3. Avoid SELECT * — only select what you need
-- Bad:
SELECT * FROM users;
-- Good:
SELECT id, name, email FROM users;

-- 4. Use LIMIT for pagination
SELECT id, name FROM products ORDER BY created_at DESC LIMIT 20 OFFSET 40;

-- 5. Avoid functions on indexed columns in WHERE
-- Bad (cannot use index):
SELECT * FROM users WHERE YEAR(created_at) = 2025;
-- Good (can use index):
SELECT * FROM users WHERE created_at >= '2025-01-01' AND created_at < '2026-01-01';

-- 6. Use EXISTS instead of IN for large subqueries
-- Slower:
SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
-- Faster:
SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);

-- 7. Optimize JOINs — ensure join columns are indexed
SELECT u.name, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id  -- u.id (PK, indexed), o.user_id (needs index)
GROUP BY u.id, u.name;

-- 8. Use query profiling
SET profiling = 1;
SELECT * FROM users WHERE status = 'active';
SHOW PROFILES;
SHOW PROFILE FOR QUERY 1;`,
]
</script>

<style scoped>
:deep(.inline-code) {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-orange-500 dark:text-orange-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
