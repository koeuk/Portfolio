import { ArrowRight } from 'lucide-react'
import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Vue 3 Composition API - Koeuk Dev',
  description: 'The Composition API is the modern way to write Vue components.',
}

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

export default function Page() {
  return (
    <Article title="Getting Started with Vue 3 Composition API" date="Jan 15, 2026" tags={['Vue', 'JavaScript']}>
      <p>
        The Composition API is the modern way to write Vue components. Instead of organizing code by options (data, methods, computed, watch), you organize code by <strong>logical concern</strong> — keeping related logic together. This makes components easier to read, reuse, and maintain.
      </p>

      <h2>Options API vs Composition API</h2>

      <div className="grid gap-5">
        <Card className="space-y-3">
          <h3 className="!mt-0">Options API (old way)</h3>
          <ul>
            <li>Code split by <em>type</em> (data, methods, computed)</li>
            <li>Related logic scattered across sections</li>
            <li>Hard to extract reusable logic</li>
            <li>Uses <code>this</code> keyword</li>
          </ul>
        </Card>
        <Card tone="main" className="space-y-3">
          <h3 className="!mt-0">Composition API (new way)</h3>
          <ul>
            <li>Code grouped by <em>feature</em></li>
            <li>Related logic stays together</li>
            <li>Easy to extract into composables</li>
            <li>No <code>this</code> — plain variables</li>
          </ul>
        </Card>
      </div>

      <h2>1. script setup</h2>
      <p>
        <code>&lt;script setup&gt;</code> is the recommended way to use the Composition API in Single File Components. Everything declared at the top level is automatically available in the template.
      </p>
      <CodeBlock title="Basic Component" code={codes[0]} />
      <blockquote>
        <strong>No return needed!</strong> With <code>&lt;script setup&gt;</code>, all variables, functions, and imports are automatically exposed to the template. No need for <code>export default</code> or <code>return</code>.
      </blockquote>

      <h2>2. Reactive State: ref() & reactive()</h2>

      <h3>ref() — for primitives & any value</h3>
      <p>
        <code>ref()</code> wraps a value in a reactive object. Access it with <code>.value</code> in script, but directly in template.
      </p>
      <CodeBlock title="ref() usage" code={codes[1]} />

      <h3>reactive() — for objects</h3>
      <p>
        <code>reactive()</code> makes an entire object reactive. No <code>.value</code> needed, but it only works with objects.
      </p>
      <CodeBlock title="reactive() usage" code={codes[2]} />

      <div className="grid gap-5">
        <Card className="space-y-3">
          <h3 className="!mt-0">ref()</h3>
          <ul>
            <li>Works with any type</li>
            <li>Need <code>.value</code> in script</li>
            <li>Can reassign entirely</li>
            <li>Recommended for most cases</li>
          </ul>
        </Card>
        <Card className="space-y-3">
          <h3 className="!mt-0">reactive()</h3>
          <ul>
            <li>Only objects/arrays</li>
            <li>No <code>.value</code> needed</li>
            <li>Cannot reassign the whole object</li>
            <li>Good for complex state objects</li>
          </ul>
        </Card>
      </div>

      <h2>3. Computed Properties</h2>
      <p>
        <code>computed()</code> creates a cached value that automatically updates when its dependencies change. Use it for derived data.
      </p>
      <CodeBlock title="computed() usage" code={codes[3]} />

      <h2>4. Watchers</h2>
      <p>
        <code>watch()</code> runs a callback when a reactive value changes. Use it for side effects (API calls, logging, etc).
      </p>
      <CodeBlock title="watch() usage" code={codes[4]} />

      <h2>5. Lifecycle Hooks</h2>
      <p>
        Lifecycle hooks let you run code at specific points in a component&apos;s life.
      </p>

      <table>
        <thead>
          <tr>
            <th>Hook</th>
            <th>When it runs</th>
            <th>Common use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>onMounted</code></td>
            <td>After DOM is rendered</td>
            <td>Fetch data, init libraries</td>
          </tr>
          <tr>
            <td><code>onUpdated</code></td>
            <td>After reactive state change causes re-render</td>
            <td>DOM-dependent operations</td>
          </tr>
          <tr>
            <td><code>onUnmounted</code></td>
            <td>Component is removed</td>
            <td>Cleanup (timers, listeners)</td>
          </tr>
          <tr>
            <td><code>onBeforeMount</code></td>
            <td>Before DOM is rendered</td>
            <td>Pre-render logic</td>
          </tr>
          <tr>
            <td><code>onBeforeUnmount</code></td>
            <td>Before component is removed</td>
            <td>Save state, cleanup</td>
          </tr>
        </tbody>
      </table>

      <CodeBlock title="Lifecycle Hooks" code={codes[5]} />

      <h2>6. Props & Emits</h2>

      <h3>Props — receive data from parent</h3>
      <CodeBlock title="defineProps" code={codes[6]} />

      <h3>Emits — send events to parent</h3>
      <CodeBlock title="defineEmits" code={codes[7]} />

      <h3>Using the component</h3>
      <CodeBlock title="Parent component" code={codes[8]} />

      <h2>7. Composables (Reusable Logic)</h2>
      <p>
        Composables are functions that encapsulate and reuse stateful logic. Convention: name them <code>use[Something]</code>.
      </p>
      <CodeBlock title="composables/useCounter.ts" code={codes[9]} />
      <CodeBlock title="Using the composable" code={codes[10]} />
      <blockquote>
        <strong>Real-world examples:</strong> <code>useFetch()</code>, <code>useAuth()</code>, <code>useTheme()</code>, <code>useLocalStorage()</code>. Composables are Vue&apos;s answer to React hooks.
      </blockquote>

      <h2>8. Template Refs</h2>
      <p>
        Access DOM elements directly using <code>ref</code> + template <code>ref</code> attribute.
      </p>
      <CodeBlock title="Template Refs" code={codes[11]} />

      <h2>9. Provide / Inject</h2>
      <p>
        Pass data deep through component trees without prop drilling.
      </p>

      <div className="flex flex-col items-center gap-2 text-sm font-heading sm:flex-row sm:justify-center">
        <span className="neo bg-main px-3 py-1.5 text-main-fg">Parent (provide)</span>
        <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden />
        <span className="neo bg-bw px-3 py-1.5">Child</span>
        <ArrowRight className="h-4 w-4 rotate-90 sm:rotate-0" aria-hidden />
        <span className="neo bg-main px-3 py-1.5 text-main-fg">Grandchild (inject)</span>
      </div>

      <CodeBlock title="Parent — provide" code={codes[12]} />
      <CodeBlock title="Any descendant — inject" code={codes[13]} />

      <ArticleSummary>
        <ul>
          <li><strong>script setup</strong> — cleaner syntax, auto-exposed variables</li>
          <li><strong>ref() / reactive()</strong> — make data reactive</li>
          <li><strong>computed()</strong> — cached derived values</li>
          <li><strong>watch()</strong> — react to changes with side effects</li>
          <li><strong>Lifecycle hooks</strong> — onMounted, onUnmounted, etc.</li>
          <li><strong>defineProps / defineEmits</strong> — component communication</li>
          <li><strong>Composables</strong> — reusable stateful logic (use[Something])</li>
          <li><strong>provide / inject</strong> — pass data without prop drilling</li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
