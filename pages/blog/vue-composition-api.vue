<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('blog.backToBlog') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">JavaScript</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.vue.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 15, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" v-html="t('blog.vue.intro')"></p>
        </section>

        <!-- Options vs Composition -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.optionsVsComposition') }}</h2>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="compare-box border-red-200 dark:border-red-800">
              <div class="compare-header text-red-600 dark:text-red-400">{{ t('blog.vue.optionsOld') }}</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li v-html="t('blog.vue.options1')"></li>
                <li>{{ t('blog.vue.options2') }}</li>
                <li>{{ t('blog.vue.options3') }}</li>
                <li v-html="t('blog.vue.options4')"></li>
              </ul>
            </div>
            <div class="compare-box border-green-200 dark:border-green-800">
              <div class="compare-header text-green-600 dark:text-green-400">{{ t('blog.vue.compositionNew') }}</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li v-html="t('blog.vue.composition1')"></li>
                <li>{{ t('blog.vue.composition2') }}</li>
                <li>{{ t('blog.vue.composition3') }}</li>
                <li v-html="t('blog.vue.composition4')"></li>
              </ul>
            </div>
          </div>
        </section>

        <!-- script setup -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s1.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s1.desc')"></p>
          <CodeBlock :title="t('blog.vue.s1.codeTitle')" :code="codes[0]" />
          <div class="tip-box mt-4" v-html="t('blog.vue.s1.tip')"></div>
        </section>

        <!-- ref & reactive -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s2.title') }}</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-6">{{ t('blog.vue.s2.refTitle') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s2.refDesc')"></p>
          <CodeBlock :title="t('blog.vue.s2.refCodeTitle')" :code="codes[1]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.vue.s2.reactiveTitle') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s2.reactiveDesc')"></p>
          <CodeBlock :title="t('blog.vue.s2.reactiveCodeTitle')" :code="codes[2]" />

          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="compare-box border-blue-200 dark:border-blue-800">
              <div class="compare-header text-blue-600 dark:text-blue-400">ref()</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>{{ t('blog.vue.s2.refCompare1') }}</li>
                <li v-html="t('blog.vue.s2.refCompare2')"></li>
                <li>{{ t('blog.vue.s2.refCompare3') }}</li>
                <li>{{ t('blog.vue.s2.refCompare4') }}</li>
              </ul>
            </div>
            <div class="compare-box border-blue-200 dark:border-blue-800">
              <div class="compare-header text-blue-600 dark:text-blue-400">reactive()</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>{{ t('blog.vue.s2.reactiveCompare1') }}</li>
                <li v-html="t('blog.vue.s2.reactiveCompare2')"></li>
                <li>{{ t('blog.vue.s2.reactiveCompare3') }}</li>
                <li>{{ t('blog.vue.s2.reactiveCompare4') }}</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- computed -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s3.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s3.desc')"></p>
          <CodeBlock :title="t('blog.vue.s3.codeTitle')" :code="codes[3]" />
        </section>

        <!-- watch -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s4.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s4.desc')"></p>
          <CodeBlock :title="t('blog.vue.s4.codeTitle')" :code="codes[4]" />
        </section>

        <!-- Lifecycle Hooks -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s5.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.vue.s5.desc') }}
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.vue.s5.thHook') }}</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">{{ t('blog.vue.s5.thWhen') }}</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">{{ t('blog.vue.s5.thUse') }}</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onMounted</td>
                  <td class="py-3 pr-4">{{ t('blog.vue.s5.mounted.when') }}</td>
                  <td class="py-3">{{ t('blog.vue.s5.mounted.use') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onUpdated</td>
                  <td class="py-3 pr-4">{{ t('blog.vue.s5.updated.when') }}</td>
                  <td class="py-3">{{ t('blog.vue.s5.updated.use') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onUnmounted</td>
                  <td class="py-3 pr-4">{{ t('blog.vue.s5.unmounted.when') }}</td>
                  <td class="py-3">{{ t('blog.vue.s5.unmounted.use') }}</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onBeforeMount</td>
                  <td class="py-3 pr-4">{{ t('blog.vue.s5.beforeMount.when') }}</td>
                  <td class="py-3">{{ t('blog.vue.s5.beforeMount.use') }}</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onBeforeUnmount</td>
                  <td class="py-3 pr-4">{{ t('blog.vue.s5.beforeUnmount.when') }}</td>
                  <td class="py-3">{{ t('blog.vue.s5.beforeUnmount.use') }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock :title="t('blog.vue.s5.codeTitle')" :code="codes[5]" />
        </section>

        <!-- Props & Emits -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s6.title') }}</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">{{ t('blog.vue.s6.propsTitle') }}</h3>
          <CodeBlock title="defineProps" :code="codes[6]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.vue.s6.emitsTitle') }}</h3>
          <CodeBlock title="defineEmits" :code="codes[7]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">{{ t('blog.vue.s6.usingTitle') }}</h3>
          <CodeBlock :title="t('blog.vue.s6.parentCodeTitle')" :code="codes[8]" />
        </section>

        <!-- Composables -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s7.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s7.desc')"></p>
          <CodeBlock title="composables/useCounter.ts" :code="codes[9]" />
          <CodeBlock class="mt-4" :title="t('blog.vue.s7.codeTitle2')" :code="codes[10]" />
          <div class="tip-box mt-4" v-html="t('blog.vue.s7.tip')"></div>
        </section>

        <!-- Template Refs -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s8.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.vue.s8.desc')"></p>
          <CodeBlock :title="t('blog.vue.s8.codeTitle')" :code="codes[11]" />
        </section>

        <!-- provide / inject -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.vue.s9.title') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.vue.s9.desc') }}
          </p>

          <div class="flow-diagram mb-6">
            <div class="flow-node flow-parent">{{ t('blog.vue.s9.flowParent') }}</div>
            <div class="flow-line"></div>
            <div class="flow-node flow-child">{{ t('blog.vue.s9.flowChild') }}</div>
            <div class="flow-line"></div>
            <div class="flow-node flow-grandchild">{{ t('blog.vue.s9.flowGrandchild') }}</div>
          </div>

          <CodeBlock :title="t('blog.vue.s9.provideCodeTitle')" :code="codes[12]" />
          <CodeBlock class="mt-4" :title="t('blog.vue.s9.injectCodeTitle')" :code="codes[13]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.vue.sum8')"></span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Vue 3 Composition API - Koeuk Dev' })

const codes = [
  `<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 3!')
const count = ref(0)

function increment() {
  count.value++
}
<\/script>

<template>
  <h1>{{ message }}</h1>
  <p>Count: {{ count }}</p>
  <button @click="increment">+1</button>
</template>`,

  `import { ref } from 'vue'

// String
const name = ref('John')

// Number
const count = ref(0)

// Boolean
const isVisible = ref(true)

// Array
const items = ref(['Apple', 'Banana', 'Cherry'])

// In script: use .value
count.value++
name.value = 'Jane'
items.value.push('Date')

// In template: no .value needed!
// {{ count }}  {{ name }}  {{ items }}`,

  `import { reactive } from 'vue'

const user = reactive({
  name: 'John',
  age: 25,
  address: {
    city: 'Phnom Penh',
    country: 'Cambodia'
  }
})

// No .value needed!
user.name = 'Jane'
user.age = 26
user.address.city = 'Siem Reap'`,

  `import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// Computed — auto-updates when firstName or lastName changes
const fullName = computed(() => {
  return \`\${firstName.value} \${lastName.value}\`
})

// Filtered list example
const todos = ref([
  { text: 'Learn Vue', done: true },
  { text: 'Build app', done: false },
  { text: 'Deploy', done: false },
])

const activeTodos = computed(() => {
  return todos.value.filter(t => !t.done)
})
// activeTodos.value = [{ text: 'Build app' }, { text: 'Deploy' }]`,

  `import { ref, watch, watchEffect } from 'vue'

const search = ref('')
const userId = ref(1)

// Watch a single ref
watch(search, (newValue, oldValue) => {
  console.log(\`Search changed: "\${oldValue}" → "\${newValue}"\`)
})

// Watch with options
watch(search, (newValue) => {
  // Call API after user stops typing
  fetchResults(newValue)
}, { debounce: 300 })

// Watch multiple sources
watch([firstName, lastName], ([newFirst, newLast]) => {
  console.log(\`Name: \${newFirst} \${newLast}\`)
})

// Deep watch (for objects)
watch(user, (newUser) => {
  console.log('User changed:', newUser)
}, { deep: true })

// watchEffect — auto-tracks dependencies
watchEffect(() => {
  // Runs immediately, then re-runs when userId changes
  console.log(\`Fetching user \${userId.value}\`)
  fetchUser(userId.value)
})`,

  `import { onMounted, onUnmounted, ref } from 'vue'

const data = ref(null)
let intervalId = null

// Runs after component is mounted to DOM
onMounted(async () => {
  // Fetch data from API
  const res = await fetch('/api/data')
  data.value = await res.json()

  // Start a timer
  intervalId = setInterval(() => {
    console.log('tick')
  }, 1000)
})

// Cleanup when component is destroyed
onUnmounted(() => {
  clearInterval(intervalId)
})`,

  `// Child component: UserCard.vue
<script setup>
// Define what props this component accepts
const props = defineProps<{
  name: string
  age: number
  avatar?: string  // optional prop
}>()

// Use props directly
console.log(props.name)
<\/script>

<template>
  <div class="card">
    <img :src="avatar" />
    <h2>{{ name }}</h2>
    <p>Age: {{ age }}</p>
  </div>
</template>`,

  `// Child component: SearchInput.vue
<script setup>
const emit = defineEmits<{
  search: [query: string]
  clear: []
}>()

const query = ref('')

function onSearch() {
  emit('search', query.value)
}

function onClear() {
  query.value = ''
  emit('clear')
}
<\/script>

<template>
  <input v-model="query" @keyup.enter="onSearch" />
  <button @click="onSearch">Search</button>
  <button @click="onClear">Clear</button>
</template>`,

  `<!-- Parent component -->
<template>
  <UserCard
    name="John"
    :age="25"
    avatar="/john.jpg"
  />

  <SearchInput
    @search="handleSearch"
    @clear="handleClear"
  />
</template>

<script setup>
function handleSearch(query) {
  console.log('Searching for:', query)
}

function handleClear() {
  console.log('Search cleared')
}
<\/script>`,

  `// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)

  const doubled = computed(() => count.value * 2)
  const isPositive = computed(() => count.value > 0)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = initial }

  return { count, doubled, isPositive, increment, decrement, reset }
}`,

  `<script setup>
import { useCounter } from '~/composables/useCounter'

// Use the composable — each instance has its own state
const { count, doubled, increment, decrement, reset } = useCounter(10)

// Can use multiple composables
const likes = useCounter(0)
const views = useCounter(100)
<\/script>

<template>
  <p>Count: {{ count }} (doubled: {{ doubled }})</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="reset">Reset</button>
</template>`,

  `<script setup>
import { ref, onMounted } from 'vue'

// Create a ref with null initial value
const inputRef = ref<HTMLInputElement | null>(null)

onMounted(() => {
  // Access the DOM element after mount
  inputRef.value?.focus()
})

function selectAll() {
  inputRef.value?.select()
}
<\/script>

<template>
  <!-- Connect with ref="inputRef" -->
  <input ref="inputRef" type="text" placeholder="Auto-focused!" />
  <button @click="selectAll">Select All</button>
</template>`,

  `<!-- Parent.vue -->
<script setup>
import { provide, ref } from 'vue'

const theme = ref('dark')
const user = ref({ name: 'John', role: 'admin' })

// Provide values — available to ALL descendants
provide('theme', theme)
provide('user', user)
<\/script>`,

  `<!-- Any deeply nested child -->
<script setup>
import { inject } from 'vue'

// Inject values from any ancestor
const theme = inject('theme')        // ref('dark')
const user = inject('user')          // ref({ name: 'John', role: 'admin' })

// With default value (in case no ancestor provides it)
const lang = inject('lang', 'en')
<\/script>

<template>
  <div :class="theme">
    <p>Welcome, {{ user.name }}</p>
  </div>
</template>`,
]
</script>

<style scoped>
:deep(.inline-code) {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-green-600 dark:text-green-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-sm text-green-700 dark:text-green-300;
}
:deep(.tip-box strong) {
  @apply text-green-800 dark:text-green-200;
}
.compare-box {
  @apply p-4 rounded-xl border-2 space-y-2;
}
.compare-header {
  @apply font-bold text-sm mb-2;
}

/* Flow Diagram */
.flow-diagram {
  @apply flex items-center justify-center gap-0;
}
.flow-node {
  @apply px-4 py-2 rounded-lg text-xs font-semibold text-center;
}
.flow-parent {
  @apply bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400;
}
.flow-child {
  @apply bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400;
}
.flow-grandchild {
  @apply bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400;
}
.flow-line {
  @apply w-8 h-0.5 bg-gray-300 dark:bg-gray-600 relative;
}
.flow-line::after {
  content: '';
  @apply absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid rgb(156, 163, 175);
}
</style>
