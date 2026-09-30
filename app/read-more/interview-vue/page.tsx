import { Article } from '@/components/ui/Article'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { ArticleSummary } from '@/components/ui/ArticleSummary'

export const metadata = {
  title: 'Vue.js Interview Questions | Koeuk Dev',
  description: '20 commonly asked Vue.js interview questions with clear answers and practical code examples.',
}

const codes = [
  `<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <button @click="count++">Clicked {{ count }} times</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)
<\/script>`,

  `// Vue's Virtual DOM process:
// 1. State changes → new Virtual DOM tree is created
// 2. New tree is compared (diffed) with the old tree
// 3. Only the differences (patches) are applied to the real DOM

// Example: When "count" changes from 0 to 1
// Old Virtual DOM:  <span>Count: 0</span>
// New Virtual DOM:  <span>Count: 1</span>
// Diff result:      Only the text node "0" → "1" needs updating
// Real DOM update:  span.textContent = "1"  (minimal change)`,

  `import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'

// Before the component is mounted to the DOM
onBeforeMount(() => {
  console.log('Component is about to mount')
})

// After the component is mounted (DOM is available)
onMounted(() => {
  console.log('Component mounted — fetch data here')
})

// Before the component re-renders due to state change
onBeforeUpdate(() => {
  console.log('Component is about to update')
})

// After the component re-renders
onUpdated(() => {
  console.log('Component updated')
})

// Before the component is removed from the DOM
onBeforeUnmount(() => {
  console.log('Cleanup before unmount')
})

// After the component is removed
onUnmounted(() => {
  console.log('Component destroyed — clear timers, listeners')
})`,

  `<template>
  <!-- v-if: element is completely removed from the DOM -->
  <div v-if="isVisible">I am added/removed from DOM</div>

  <!-- v-show: element stays in DOM, display is toggled -->
  <div v-show="isVisible">I am always in DOM, just hidden</div>

  <!-- v-if with v-else -->
  <div v-if="loggedIn">Welcome back!</div>
  <div v-else>Please log in</div>

  <button @click="isVisible = !isVisible">Toggle</button>
</template>

<script setup>
import { ref } from 'vue'
const isVisible = ref(true)
const loggedIn = ref(false)
<\/script>

// v-if:   Higher toggle cost (DOM add/remove), lower initial cost if false
// v-show: Lower toggle cost (CSS only), higher initial cost (always rendered)`,

  `<script setup>
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// COMPUTED: cached, re-evaluates only when dependencies change
const fullName = computed(() => {
  console.log('computed called') // only runs when firstName or lastName changes
  return \`\${firstName.value} \${lastName.value}\`
})

// METHOD: runs every time it is called
function getFullName() {
  console.log('method called') // runs on every render
  return \`\${firstName.value} \${lastName.value}\`
}
<\/script>

<template>
  <!-- Both show "John Doe" but computed is cached -->
  <p>{{ fullName }}</p>
  <p>{{ getFullName() }}</p>
</template>`,

  `<script setup>
import { ref } from 'vue'

const name = ref('')
const agreed = ref(false)
const selected = ref('vue')
<\/script>

<template>
  <!-- Text input -->
  <input v-model="name" placeholder="Your name" />
  <p>Hello, {{ name }}</p>

  <!-- Checkbox -->
  <input type="checkbox" v-model="agreed" />
  <span>Agreed: {{ agreed }}</span>

  <!-- Select -->
  <select v-model="selected">
    <option value="vue">Vue</option>
    <option value="react">React</option>
    <option value="angular">Angular</option>
  </select>

  <!-- v-model is shorthand for: -->
  <input :value="name" @input="name = $event.target.value" />
</template>`,

  `<!-- ParentComponent.vue -->
<script setup>
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('Hello from parent')

function handleChildEvent(payload) {
  console.log('Received from child:', payload)
}
<\/script>

<template>
  <!-- Pass data DOWN via props -->
  <ChildComponent
    :message="parentMessage"
    @notify="handleChildEvent"
  />
</template>

<!-- ChildComponent.vue -->
<script setup>
// Receive data from parent
const props = defineProps<{
  message: string
}>()

// Send events to parent
const emit = defineEmits<{
  notify: [value: string]
}>()

function sendToParent() {
  emit('notify', 'Hello from child!')
}
<\/script>

<template>
  <p>{{ message }}</p>
  <button @click="sendToParent">Notify Parent</button>
</template>`,

  `<!-- ChildComponent.vue -->
<script setup>
// Props: receive data from parent (read-only)
const props = defineProps<{
  title: string
  count: number
  items?: string[]  // optional prop
}>()

// Emits: send events to parent
const emit = defineEmits<{
  update: [id: number, value: string]
  delete: [id: number]
}>()

function onUpdate() {
  emit('update', 1, 'new value')
}

function onDelete() {
  emit('delete', 1)
}
<\/script>

<template>
  <h2>{{ title }}</h2>
  <p>Count: {{ count }}</p>
  <button @click="onUpdate">Update</button>
  <button @click="onDelete">Delete</button>
</template>`,

  `// stores/useCounterStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)
  const name = ref('Counter')

  // Getters (computed)
  const doubleCount = computed(() => count.value * 2)

  // Actions
  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  async function fetchCount() {
    const res = await fetch('/api/count')
    count.value = await res.json()
  }

  return { count, name, doubleCount, increment, decrement, fetchCount }
})

// Usage in a component:
// <script setup>
// import { useCounterStore } from '~/stores/useCounterStore'
// const store = useCounterStore()
// store.increment()
// console.log(store.count, store.doubleCount)
// <\/script>`,

  `// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./pages/Home.vue') },
  { path: '/about', component: () => import('./pages/About.vue') },

  // Dynamic route — :id is a parameter
  { path: '/user/:id', component: () => import('./pages/User.vue') },

  // Multiple params
  { path: '/post/:year/:slug', component: () => import('./pages/Post.vue') },

  // Catch-all 404
  { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// In the User.vue component:
// <script setup>
// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route.params.id) // e.g. "42"
// <\/script>`,

  `import { ref, watch, watchEffect } from 'vue'

const search = ref('')
const userId = ref(1)

// watch(): explicitly specify what to watch
// Gives you old and new values
watch(search, (newVal, oldVal) => {
  console.log(\`Changed from "\${oldVal}" to "\${newVal}"\`)
})

// Watch multiple sources
watch([search, userId], ([newSearch, newId], [oldSearch, oldId]) => {
  console.log('Search or userId changed')
})

// Deep watch for objects
const user = ref({ name: 'John', age: 25 })
watch(user, (newUser) => {
  console.log('User changed:', newUser)
}, { deep: true })

// watchEffect(): auto-tracks dependencies, runs immediately
watchEffect(() => {
  // Automatically watches "userId" because it is used inside
  console.log(\`Fetching user \${userId.value}\`)
  fetch(\`/api/users/\${userId.value}\`)
})

// Key difference:
// watch()       → lazy (doesn't run immediately), explicit sources
// watchEffect() → eager (runs immediately), auto-tracks dependencies`,

  `// ---- OPTIONS API ----
// Organizes code by option type
export default {
  data() {
    return { count: 0, name: 'Vue' }
  },
  computed: {
    doubleCount() { return this.count * 2 }
  },
  methods: {
    increment() { this.count++ }
  },
  mounted() {
    console.log('mounted')
  }
}

// ---- COMPOSITION API ----
// Organizes code by logical concern
// <script setup>
import { ref, computed, onMounted } from 'vue'

const count = ref(0)
const name = ref('Vue')

const doubleCount = computed(() => count.value * 2)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('mounted')
})
// <\/script>

// Composition API advantages:
// - Better TypeScript support
// - Logic can be extracted into composables
// - No "this" keyword confusion
// - Related code stays together`,

  `<!-- BaseCard.vue — child with slots -->
<template>
  <div class="card">
    <!-- Default slot -->
    <slot>Default content if nothing provided</slot>

    <!-- Named slots -->
    <header><slot name="header"></slot></header>
    <main><slot name="body"></slot></main>
    <footer><slot name="footer"></slot></footer>

    <!-- Scoped slot: pass data back to parent -->
    <slot name="item" :data="itemData" :index="0"></slot>
  </div>
</template>

<!-- Parent using slots -->
<template>
  <BaseCard>
    <!-- Named slot content -->
    <template #header>
      <h1>Card Title</h1>
    </template>

    <template #body>
      <p>Card content goes here</p>
    </template>

    <!-- Scoped slot: receive data from child -->
    <template #item="{ data, index }">
      <p>Item {{ index }}: {{ data }}</p>
    </template>
  </BaseCard>
</template>`,

  `// Register a custom directive globally
// main.ts
const app = createApp(App)

// v-focus: auto-focus an input when mounted
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

// v-click-outside: detect clicks outside an element
app.directive('click-outside', {
  mounted(el, binding) {
    el._clickOutside = (event) => {
      if (!el.contains(event.target)) {
        binding.value(event) // call the provided function
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside)
  }
})

// Usage in template:
// <input v-focus />
// <div v-click-outside="closeDropdown">...</div>`,

  `<!-- Ancestor.vue -->
<script setup>
import { provide, ref } from 'vue'

const theme = ref('dark')
const user = ref({ name: 'John', role: 'admin' })

// Provide values to ALL descendants
provide('theme', theme)
provide('currentUser', user)

// Provide a function so children can update the value
function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
provide('toggleTheme', toggleTheme)
<\/script>

<!-- Any deeply nested descendant -->
<script setup>
import { inject } from 'vue'

// Inject values from ancestor
const theme = inject('theme')
const user = inject('currentUser')
const toggleTheme = inject('toggleTheme')

// With a default value (fallback)
const lang = inject('language', 'en')
<\/script>

<template>
  <div :class="theme">
    <p>Hello, {{ user.name }}</p>
    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>`,

  `// ---- MIXIN (Options API — legacy pattern) ----
// mixins/counterMixin.js
export const counterMixin = {
  data() {
    return { count: 0 }
  },
  methods: {
    increment() { this.count++ }
  }
}
// Usage: mixins: [counterMixin]
// Problem: unclear where "count" comes from, naming conflicts

// ---- COMPOSABLE (Composition API — recommended) ----
// composables/useCounter.ts
import { ref } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  function increment() { count.value++ }
  function decrement() { count.value-- }
  return { count, increment, decrement }
}

// Usage:
// <script setup>
// import { useCounter } from '~/composables/useCounter'
// const { count, increment } = useCounter(10)
// <\/script>
// Benefits: explicit, no naming conflicts, great TS support`,

  `import { ref, nextTick } from 'vue'

const message = ref('Hello')
const messageRef = ref(null)

async function updateMessage() {
  message.value = 'Updated!'

  // DOM has NOT updated yet at this point
  console.log(messageRef.value.textContent) // "Hello"

  // Wait for DOM to update
  await nextTick()

  // Now the DOM is updated
  console.log(messageRef.value.textContent) // "Updated!"
}

// Common use cases:
// - Accessing DOM after a state change
// - Scrolling to an element after it appears
// - Measuring an element's size after content changes`,

  `// Async component — loaded on demand (lazy loading)
import { defineAsyncComponent } from 'vue'

const AsyncModal = defineAsyncComponent(() =>
  import('./components/HeavyModal.vue')
)

const AsyncChart = defineAsyncComponent({
  loader: () => import('./components/Chart.vue'),
  loadingComponent: LoadingSpinner,
  errorComponent: ErrorDisplay,
  delay: 200,       // delay before showing loading component
  timeout: 10000,   // timeout before showing error
})

// Usage with Suspense:
// <template>
//   <Suspense>
//     <template #default>
//       <AsyncDashboard />
//     </template>
//     <template #fallback>
//       <div>Loading dashboard...</div>
//     </template>
//   </Suspense>
// </template>`,

  `<template>
  <!-- REQUIRED: always use :key with v-for -->
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>

  <!-- BAD: using index as key (causes bugs with reordering) -->
  <li v-for="(item, index) in items" :key="index">...</li>

  <!-- Force re-render by changing key -->
  <UserProfile :key="userId" :user-id="userId" />
  <!-- When userId changes, the component is destroyed and recreated -->
</template>

<script setup>
import { ref } from 'vue'
const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
])
const userId = ref(1)
<\/script>`,

  `<script setup>
import { ref, onMounted } from 'vue'

// Declare a ref with the same name as the template ref attribute
const inputRef = ref<HTMLInputElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  // Access the DOM element after mount
  inputRef.value?.focus()
  console.log(containerRef.value?.offsetHeight)
})

function selectAll() {
  inputRef.value?.select()
}

function scrollToBottom() {
  const el = containerRef.value
  if (el) el.scrollTop = el.scrollHeight
}
<\/script>

<template>
  <!-- ref="inputRef" connects to the inputRef variable -->
  <input ref="inputRef" type="text" placeholder="Auto-focused!" />
  <button @click="selectAll">Select All</button>

  <div ref="containerRef" class="overflow-auto h-64">
    <!-- Long content -->
  </div>
  <button @click="scrollToBottom">Scroll to Bottom</button>
</template>`,
]

export default function InterviewVuePage() {
  return (
    <Article
      title="Vue.js Interview Questions"
      date="Feb 25, 2026"
      tags={['Vue', 'Interview']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        Preparing for a Vue.js interview? This guide covers <strong>20 commonly asked questions</strong> with clear
        answers and practical code examples. Whether you&apos;re a beginner or an experienced developer, these questions
        will help you solidify your understanding of Vue.js core concepts.
      </p>

      <h3>1. What is Vue.js? What are its key features?</h3>
      <p>
        Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally
        adoptable, meaning you can use as little or as much of it as you need. Key features include:
      </p>
      <ul>
        <li>
          <strong>Reactive data binding</strong> — the DOM automatically updates when data changes
        </li>
        <li>
          <strong>Component-based architecture</strong> — build UIs with reusable, self-contained components
        </li>
        <li>
          <strong>Virtual DOM</strong> — efficient rendering through a virtual representation of the DOM
        </li>
        <li>
          <strong>Directives</strong> — special attributes like <code>v-if</code>, <code>v-for</code>,{' '}
          <code>v-bind</code>
        </li>
        <li>
          <strong>Single File Components</strong> — template, script, and style in one <code>.vue</code> file
        </li>
        <li>
          <strong>Composition API</strong> — modern way to organize component logic
        </li>
      </ul>
      <CodeBlock title="A simple Vue component" code={codes[0]} />

      <h3>2. What is the Virtual DOM?</h3>
      <p>
        The Virtual DOM is a lightweight JavaScript representation of the real DOM. When data changes, Vue creates a
        new virtual DOM tree and compares it with the previous one (a process called <strong>diffing</strong>). Only
        the differences are applied to the real DOM, making updates much faster than manipulating the DOM directly.
      </p>
      <CodeBlock title="Virtual DOM concept" code={codes[1]} />
      <blockquote>
        <strong>Key benefit:</strong> The Virtual DOM batches multiple changes together and performs a single,
        optimized DOM update, avoiding costly reflows and repaints.
      </blockquote>

      <h3>3. What are Vue lifecycle hooks?</h3>
      <p>
        Lifecycle hooks are functions that let you run code at specific stages of a component&apos;s life. In the
        Composition API, they are imported from Vue and called inside <code>&lt;script setup&gt;</code>.
      </p>
      <CodeBlock title="Lifecycle hooks" code={codes[2]} />

      <h3>4. What is the difference between v-show and v-if?</h3>
      <p>
        Both conditionally display elements, but they work differently. <code>v-if</code> completely adds or removes
        the element from the DOM, while <code>v-show</code> toggles the CSS <code>display</code> property. Use{' '}
        <code>v-show</code> for frequent toggling and <code>v-if</code> for conditions that rarely change.
      </p>
      <CodeBlock title="v-show vs v-if" code={codes[3]} />

      <h3>5. What are computed properties vs methods?</h3>
      <p>
        <strong>Computed properties</strong> are cached and only re-evaluate when their reactive dependencies change.{' '}
        <strong>Methods</strong> run every time they are called. Use computed for derived data and methods for actions
        or event handlers.
      </p>
      <CodeBlock title="Computed vs Methods" code={codes[4]} />

      <h3>6. What is two-way data binding (v-model)?</h3>
      <p>
        <code>v-model</code> creates a two-way binding between a form input and reactive data. When the user types, the
        data updates. When the data changes, the input updates. It is syntactic sugar for a <code>:value</code> binding
        and an <code>@input</code> event listener.
      </p>
      <CodeBlock title="v-model usage" code={codes[5]} />

      <h3>7. What are Vue components? How to pass data between them?</h3>
      <p>
        Components are reusable, self-contained pieces of UI. Data flows <strong>down</strong> from parent to child via{' '}
        <strong>props</strong>, and <strong>up</strong> from child to parent via <strong>emits</strong> (custom events).
        For deeply nested components, use <code>provide/inject</code> or a state management library.
      </p>
      <CodeBlock title="Parent-Child communication" code={codes[6]} />

      <h3>8. What are props and emits?</h3>
      <p>
        <strong>Props</strong> are custom attributes used to pass data from a parent to a child component.{' '}
        <strong>Emits</strong> are custom events that a child component sends to its parent. In the Composition API, you
        define them with <code>defineProps()</code> and <code>defineEmits()</code>.
      </p>
      <CodeBlock title="Props and Emits" code={codes[7]} />

      <h3>9. What is Vuex/Pinia? When to use state management?</h3>
      <p>
        <strong>Pinia</strong> (the recommended state management for Vue 3) and <strong>Vuex</strong> are centralized
        stores for managing shared state across components. Use state management when multiple components need to
        access or modify the same data and prop drilling becomes unwieldy.
      </p>
      <CodeBlock title="Pinia store example" code={codes[8]} />

      <h3>10. What is Vue Router? How do dynamic routes work?</h3>
      <p>
        Vue Router is the official routing library for Vue.js. It maps URLs to components.{' '}
        <strong>Dynamic routes</strong> use parameters (e.g., <code>/user/:id</code>) to match variable URL segments and
        pass them as route params.
      </p>
      <CodeBlock title="Vue Router with dynamic routes" code={codes[9]} />

      <h3>11. What are watchers? watch vs watchEffect?</h3>
      <p>
        Watchers let you perform side effects when reactive data changes. <code>watch()</code> explicitly specifies
        which sources to watch and gives you old/new values. <code>watchEffect()</code> automatically tracks all
        reactive dependencies used inside it and runs immediately.
      </p>
      <CodeBlock title="watch vs watchEffect" code={codes[10]} />

      <h3>12. What is the Composition API vs Options API?</h3>
      <p>
        The <strong>Options API</strong> organizes code by option type (data, methods, computed, watch) while the{' '}
        <strong>Composition API</strong> organizes code by logical concern. The Composition API is recommended for Vue
        3 as it offers better TypeScript support, code reuse via composables, and more flexible code organization.
      </p>
      <CodeBlock title="Options API vs Composition API" code={codes[11]} />

      <h3>13. What are slots (default, named, scoped)?</h3>
      <p>
        Slots allow a parent component to inject content into a child component&apos;s template.{' '}
        <strong>Default slots</strong> provide a single content area, <strong>named slots</strong> allow multiple
        content areas, and <strong>scoped slots</strong> let the child pass data back to the parent&apos;s slot
        content.
      </p>
      <CodeBlock title="Slots example" code={codes[12]} />

      <h3>14. What are custom directives?</h3>
      <p>
        Custom directives let you apply low-level DOM manipulations to elements. They are useful for reusable behaviors
        like auto-focus, tooltips, or click-outside detection. Register them globally or locally using the{' '}
        <code>v-</code> prefix.
      </p>
      <CodeBlock title="Custom directive" code={codes[13]} />

      <h3>15. What is provide/inject?</h3>
      <p>
        <code>provide</code> and <code>inject</code> allow an ancestor component to serve as a dependency provider for
        all its descendants. This avoids prop drilling through multiple component layers.
      </p>
      <CodeBlock title="Provide / Inject" code={codes[14]} />

      <h3>16. What are mixins vs composables?</h3>
      <p>
        <strong>Mixins</strong> (Options API) merge options into a component but can cause naming conflicts and unclear
        data sources. <strong>Composables</strong> (Composition API) are plain functions that return reactive state,
        offering explicit imports, no naming conflicts, and better TypeScript support. Composables are the recommended
        pattern in Vue 3.
      </p>
      <CodeBlock title="Mixin vs Composable" code={codes[15]} />

      <h3>17. What is nextTick?</h3>
      <p>
        <code>nextTick()</code> lets you run code after the DOM has been updated following a reactive state change. Vue
        batches DOM updates, so if you need to access the updated DOM immediately after changing data, use{' '}
        <code>nextTick()</code>.
      </p>
      <CodeBlock title="nextTick usage" code={codes[16]} />

      <h3>18. What are async components and Suspense?</h3>
      <p>
        <strong>Async components</strong> are loaded lazily (on demand) to reduce the initial bundle size.{' '}
        <strong>Suspense</strong> is a built-in component that renders fallback content while waiting for async
        components or async setup functions to resolve.
      </p>
      <CodeBlock title="Async components and Suspense" code={codes[17]} />

      <h3>19. What is the key attribute used for?</h3>
      <p>
        The <code>key</code> attribute gives Vue a hint to identify each node uniquely during the diffing process. It
        is essential when rendering lists with <code>v-for</code> to ensure correct element reuse and ordering. It can
        also be used to force a component to re-render by changing its key.
      </p>
      <CodeBlock title="Key attribute" code={codes[18]} />

      <h3>20. What are template refs?</h3>
      <p>
        Template refs give you direct access to a DOM element or child component instance. Declare a{' '}
        <code>ref()</code> with the same name as the <code>ref</code> attribute in the template. The ref is populated
        after the component is mounted.
      </p>
      <CodeBlock title="Template refs" code={codes[19]} />

      <ArticleSummary>
        <p>
          These 20 questions cover the most important Vue.js concepts you should know for an interview. Here is a quick
          recap:
        </p>
        <ul>
          <li>
            <strong>Core concepts</strong> — Virtual DOM, reactivity, lifecycle hooks
          </li>
          <li>
            <strong>Directives</strong> — v-if, v-show, v-model, v-for with key
          </li>
          <li>
            <strong>Component communication</strong> — props, emits, provide/inject, slots
          </li>
          <li>
            <strong>Reactivity</strong> — computed, watch, watchEffect, nextTick
          </li>
          <li>
            <strong>Composition API</strong> — script setup, composables, template refs
          </li>
          <li>
            <strong>State management</strong> — Pinia stores for shared state
          </li>
          <li>
            <strong>Routing</strong> — Vue Router with dynamic routes
          </li>
          <li>
            <strong>Advanced</strong> — async components, Suspense, custom directives
          </li>
        </ul>
      </ArticleSummary>
    </Article>
  )
}
