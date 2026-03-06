<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        Back to Blog
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
          <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs rounded-full font-medium">JavaScript</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Getting Started with Vue 3 Composition API
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Jan 15, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            The Composition API is the modern way to write Vue components. Instead of organizing code by options (data, methods, computed, watch), you organize code by <strong>logical concern</strong> — keeping related logic together. This makes components easier to read, reuse, and maintain.
          </p>
        </section>

        <!-- Options vs Composition -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Options API vs Composition API</h2>

          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="compare-box border-red-200 dark:border-red-800">
              <div class="compare-header text-red-600 dark:text-red-400">Options API (old way)</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Code split by <em>type</em> (data, methods, computed)</li>
                <li>Related logic scattered across sections</li>
                <li>Hard to extract reusable logic</li>
                <li>Uses <code class="inline-code">this</code> keyword</li>
              </ul>
            </div>
            <div class="compare-box border-green-200 dark:border-green-800">
              <div class="compare-header text-green-600 dark:text-green-400">Composition API (new way)</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Code grouped by <em>feature</em></li>
                <li>Related logic stays together</li>
                <li>Easy to extract into composables</li>
                <li>No <code class="inline-code">this</code> — plain variables</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- script setup -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">1. script setup</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">&lt;script setup&gt;</code> is the recommended way to use the Composition API in Single File Components. Everything declared at the top level is automatically available in the template.
          </p>
          <CodeBlock title="Basic Component" :code="codes[0]" />
          <div class="tip-box mt-4">
            <strong>No return needed!</strong> With <code class="inline-code">&lt;script setup&gt;</code>, all variables, functions, and imports are automatically exposed to the template. No need for <code class="inline-code">export default</code> or <code class="inline-code">return</code>.
          </div>
        </section>

        <!-- ref & reactive -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">2. Reactive State: ref() & reactive()</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-6">ref() — for primitives & any value</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">ref()</code> wraps a value in a reactive object. Access it with <code class="inline-code">.value</code> in script, but directly in template.
          </p>
          <CodeBlock title="ref() usage" :code="codes[1]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">reactive() — for objects</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">reactive()</code> makes an entire object reactive. No <code class="inline-code">.value</code> needed, but it only works with objects.
          </p>
          <CodeBlock title="reactive() usage" :code="codes[2]" />

          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="compare-box border-blue-200 dark:border-blue-800">
              <div class="compare-header text-blue-600 dark:text-blue-400">ref()</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Works with any type</li>
                <li>Need <code class="inline-code">.value</code> in script</li>
                <li>Can reassign entirely</li>
                <li>Recommended for most cases</li>
              </ul>
            </div>
            <div class="compare-box border-blue-200 dark:border-blue-800">
              <div class="compare-header text-blue-600 dark:text-blue-400">reactive()</div>
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Only objects/arrays</li>
                <li>No <code class="inline-code">.value</code> needed</li>
                <li>Cannot reassign the whole object</li>
                <li>Good for complex state objects</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- computed -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">3. Computed Properties</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">computed()</code> creates a cached value that automatically updates when its dependencies change. Use it for derived data.
          </p>
          <CodeBlock title="computed() usage" :code="codes[3]" />
        </section>

        <!-- watch -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">4. Watchers</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">watch()</code> runs a callback when a reactive value changes. Use it for side effects (API calls, logging, etc).
          </p>
          <CodeBlock title="watch() usage" :code="codes[4]" />
        </section>

        <!-- Lifecycle Hooks -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">5. Lifecycle Hooks</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Lifecycle hooks let you run code at specific points in a component's life.
          </p>

          <div class="overflow-x-auto mb-6">
            <table class="w-full text-sm text-left">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">Hook</th>
                  <th class="py-3 pr-4 text-primary dark:text-white font-semibold">When it runs</th>
                  <th class="py-3 text-primary dark:text-white font-semibold">Common use</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 dark:text-gray-300">
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onMounted</td>
                  <td class="py-3 pr-4">After DOM is rendered</td>
                  <td class="py-3">Fetch data, init libraries</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onUpdated</td>
                  <td class="py-3 pr-4">After reactive state change causes re-render</td>
                  <td class="py-3">DOM-dependent operations</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onUnmounted</td>
                  <td class="py-3 pr-4">Component is removed</td>
                  <td class="py-3">Cleanup (timers, listeners)</td>
                </tr>
                <tr class="border-b border-gray-100 dark:border-gray-800">
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onBeforeMount</td>
                  <td class="py-3 pr-4">Before DOM is rendered</td>
                  <td class="py-3">Pre-render logic</td>
                </tr>
                <tr>
                  <td class="py-3 pr-4 font-mono text-sm text-green-600 dark:text-green-400">onBeforeUnmount</td>
                  <td class="py-3 pr-4">Before component is removed</td>
                  <td class="py-3">Save state, cleanup</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock title="Lifecycle Hooks" :code="codes[5]" />
        </section>

        <!-- Props & Emits -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">6. Props & Emits</h2>

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3">Props — receive data from parent</h3>
          <CodeBlock title="defineProps" :code="codes[6]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">Emits — send events to parent</h3>
          <CodeBlock title="defineEmits" :code="codes[7]" />

          <h3 class="text-xl font-semibold text-primary dark:text-white mb-3 mt-8">Using the component</h3>
          <CodeBlock title="Parent component" :code="codes[8]" />
        </section>

        <!-- Composables -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">7. Composables (Reusable Logic)</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Composables are functions that encapsulate and reuse stateful logic. Convention: name them <code class="inline-code">use[Something]</code>.
          </p>
          <CodeBlock title="composables/useCounter.ts" :code="codes[9]" />
          <CodeBlock class="mt-4" title="Using the composable" :code="codes[10]" />
          <div class="tip-box mt-4">
            <strong>Real-world examples:</strong> <code class="inline-code">useFetch()</code>, <code class="inline-code">useAuth()</code>, <code class="inline-code">useTheme()</code>, <code class="inline-code">useLocalStorage()</code>. Composables are Vue's answer to React hooks.
          </div>
        </section>

        <!-- Template Refs -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">8. Template Refs</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Access DOM elements directly using <code class="inline-code">ref</code> + template <code class="inline-code">ref</code> attribute.
          </p>
          <CodeBlock title="Template Refs" :code="codes[11]" />
        </section>

        <!-- provide / inject -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">9. Provide / Inject</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Pass data deep through component trees without prop drilling.
          </p>

          <div class="flow-diagram mb-6">
            <div class="flow-node flow-parent">Parent (provide)</div>
            <div class="flow-line"></div>
            <div class="flow-node flow-child">Child</div>
            <div class="flow-line"></div>
            <div class="flow-node flow-grandchild">Grandchild (inject)</div>
          </div>

          <CodeBlock title="Parent — provide" :code="codes[12]" />
          <CodeBlock class="mt-4" title="Any descendant — inject" :code="codes[13]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">Summary</h2>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>script setup</strong> — cleaner syntax, auto-exposed variables</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>ref() / reactive()</strong> — make data reactive</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>computed()</strong> — cached derived values</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>watch()</strong> — react to changes with side effects</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Lifecycle hooks</strong> — onMounted, onUnmounted, etc.</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>defineProps / defineEmits</strong> — component communication</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Composables</strong> — reusable stateful logic (use[Something])</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>provide / inject</strong> — pass data without prop drilling</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
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
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-green-600 dark:text-green-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-sm text-green-700 dark:text-green-300;
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
