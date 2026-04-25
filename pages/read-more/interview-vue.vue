<template>
  <div class="min-h-screen bg-white dark:bg-primary pt-20">
    <div class="max-w-4xl mx-auto px-6 py-12">
      <NuxtLink to="/read-more" class="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        {{ t('readMore.back') }}
      </NuxtLink>

      <div class="mb-12">
        <div class="flex gap-2 mb-4">
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Vue</span>
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          Vue.js Interview Questions
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 25, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Preparing for a Vue.js interview? This guide covers <strong>20 commonly asked questions</strong> with clear answers and practical code examples. Whether you're a beginner or an experienced developer, these questions will help you solidify your understanding of Vue.js core concepts.
          </p>
        </section>

        <!-- Q1 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">1. What is Vue.js? What are its key features?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, meaning you can use as little or as much of it as you need. Key features include:
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li><strong>Reactive data binding</strong> — the DOM automatically updates when data changes</li>
            <li><strong>Component-based architecture</strong> — build UIs with reusable, self-contained components</li>
            <li><strong>Virtual DOM</strong> — efficient rendering through a virtual representation of the DOM</li>
            <li><strong>Directives</strong> — special attributes like <code class="inline-code">v-if</code>, <code class="inline-code">v-for</code>, <code class="inline-code">v-bind</code></li>
            <li><strong>Single File Components</strong> — template, script, and style in one <code class="inline-code">.vue</code> file</li>
            <li><strong>Composition API</strong> — modern way to organize component logic</li>
          </ul>
          <CodeBlock title="A simple Vue component" :code="codes[0]" />
        </section>

        <!-- Q2 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">2. What is the Virtual DOM?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The Virtual DOM is a lightweight JavaScript representation of the real DOM. When data changes, Vue creates a new virtual DOM tree and compares it with the previous one (a process called <strong>diffing</strong>). Only the differences are applied to the real DOM, making updates much faster than manipulating the DOM directly.
          </p>
          <CodeBlock title="Virtual DOM concept" :code="codes[1]" />
          <div class="tip-box mt-4">
            <strong>Key benefit:</strong> The Virtual DOM batches multiple changes together and performs a single, optimized DOM update, avoiding costly reflows and repaints.
          </div>
        </section>

        <!-- Q3 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">3. What are Vue lifecycle hooks?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Lifecycle hooks are functions that let you run code at specific stages of a component's life. In the Composition API, they are imported from Vue and called inside <code class="inline-code">&lt;script setup&gt;</code>.
          </p>
          <CodeBlock title="Lifecycle hooks" :code="codes[2]" />
        </section>

        <!-- Q4 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">4. What is the difference between v-show and v-if?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Both conditionally display elements, but they work differently. <code class="inline-code">v-if</code> completely adds or removes the element from the DOM, while <code class="inline-code">v-show</code> toggles the CSS <code class="inline-code">display</code> property. Use <code class="inline-code">v-show</code> for frequent toggling and <code class="inline-code">v-if</code> for conditions that rarely change.
          </p>
          <CodeBlock title="v-show vs v-if" :code="codes[3]" />
        </section>

        <!-- Q5 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">5. What are computed properties vs methods?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Computed properties</strong> are cached and only re-evaluate when their reactive dependencies change. <strong>Methods</strong> run every time they are called. Use computed for derived data and methods for actions or event handlers.
          </p>
          <CodeBlock title="Computed vs Methods" :code="codes[4]" />
        </section>

        <!-- Q6 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">6. What is two-way data binding (v-model)?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">v-model</code> creates a two-way binding between a form input and reactive data. When the user types, the data updates. When the data changes, the input updates. It is syntactic sugar for a <code class="inline-code">:value</code> binding and an <code class="inline-code">@input</code> event listener.
          </p>
          <CodeBlock title="v-model usage" :code="codes[5]" />
        </section>

        <!-- Q7 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">7. What are Vue components? How to pass data between them?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Components are reusable, self-contained pieces of UI. Data flows <strong>down</strong> from parent to child via <strong>props</strong>, and <strong>up</strong> from child to parent via <strong>emits</strong> (custom events). For deeply nested components, use <code class="inline-code">provide/inject</code> or a state management library.
          </p>
          <CodeBlock title="Parent-Child communication" :code="codes[6]" />
        </section>

        <!-- Q8 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">8. What are props and emits?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Props</strong> are custom attributes used to pass data from a parent to a child component. <strong>Emits</strong> are custom events that a child component sends to its parent. In the Composition API, you define them with <code class="inline-code">defineProps()</code> and <code class="inline-code">defineEmits()</code>.
          </p>
          <CodeBlock title="Props and Emits" :code="codes[7]" />
        </section>

        <!-- Q9 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">9. What is Vuex/Pinia? When to use state management?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Pinia</strong> (the recommended state management for Vue 3) and <strong>Vuex</strong> are centralized stores for managing shared state across components. Use state management when multiple components need to access or modify the same data and prop drilling becomes unwieldy.
          </p>
          <CodeBlock title="Pinia store example" :code="codes[8]" />
        </section>

        <!-- Q10 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">10. What is Vue Router? How do dynamic routes work?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Vue Router is the official routing library for Vue.js. It maps URLs to components. <strong>Dynamic routes</strong> use parameters (e.g., <code class="inline-code">/user/:id</code>) to match variable URL segments and pass them as route params.
          </p>
          <CodeBlock title="Vue Router with dynamic routes" :code="codes[9]" />
        </section>

        <!-- Q11 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">11. What are watchers? watch vs watchEffect?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Watchers let you perform side effects when reactive data changes. <code class="inline-code">watch()</code> explicitly specifies which sources to watch and gives you old/new values. <code class="inline-code">watchEffect()</code> automatically tracks all reactive dependencies used inside it and runs immediately.
          </p>
          <CodeBlock title="watch vs watchEffect" :code="codes[10]" />
        </section>

        <!-- Q12 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">12. What is the Composition API vs Options API?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The <strong>Options API</strong> organizes code by option type (data, methods, computed, watch) while the <strong>Composition API</strong> organizes code by logical concern. The Composition API is recommended for Vue 3 as it offers better TypeScript support, code reuse via composables, and more flexible code organization.
          </p>
          <CodeBlock title="Options API vs Composition API" :code="codes[11]" />
        </section>

        <!-- Q13 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">13. What are slots (default, named, scoped)?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Slots allow a parent component to inject content into a child component's template. <strong>Default slots</strong> provide a single content area, <strong>named slots</strong> allow multiple content areas, and <strong>scoped slots</strong> let the child pass data back to the parent's slot content.
          </p>
          <CodeBlock title="Slots example" :code="codes[12]" />
        </section>

        <!-- Q14 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">14. What are custom directives?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Custom directives let you apply low-level DOM manipulations to elements. They are useful for reusable behaviors like auto-focus, tooltips, or click-outside detection. Register them globally or locally using the <code class="inline-code">v-</code> prefix.
          </p>
          <CodeBlock title="Custom directive" :code="codes[13]" />
        </section>

        <!-- Q15 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">15. What is provide/inject?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">provide</code> and <code class="inline-code">inject</code> allow an ancestor component to serve as a dependency provider for all its descendants. This avoids prop drilling through multiple component layers.
          </p>
          <CodeBlock title="Provide / Inject" :code="codes[14]" />
        </section>

        <!-- Q16 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">16. What are mixins vs composables?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Mixins</strong> (Options API) merge options into a component but can cause naming conflicts and unclear data sources. <strong>Composables</strong> (Composition API) are plain functions that return reactive state, offering explicit imports, no naming conflicts, and better TypeScript support. Composables are the recommended pattern in Vue 3.
          </p>
          <CodeBlock title="Mixin vs Composable" :code="codes[15]" />
        </section>

        <!-- Q17 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">17. What is nextTick?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <code class="inline-code">nextTick()</code> lets you run code after the DOM has been updated following a reactive state change. Vue batches DOM updates, so if you need to access the updated DOM immediately after changing data, use <code class="inline-code">nextTick()</code>.
          </p>
          <CodeBlock title="nextTick usage" :code="codes[16]" />
        </section>

        <!-- Q18 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">18. What are async components and Suspense?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Async components</strong> are loaded lazily (on demand) to reduce the initial bundle size. <strong>Suspense</strong> is a built-in component that renders fallback content while waiting for async components or async setup functions to resolve.
          </p>
          <CodeBlock title="Async components and Suspense" :code="codes[17]" />
        </section>

        <!-- Q19 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">19. What is the key attribute used for?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            The <code class="inline-code">key</code> attribute gives Vue a hint to identify each node uniquely during the diffing process. It is essential when rendering lists with <code class="inline-code">v-for</code> to ensure correct element reuse and ordering. It can also be used to force a component to re-render by changing its key.
          </p>
          <CodeBlock title="Key attribute" :code="codes[18]" />
        </section>

        <!-- Q20 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">20. What are template refs?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Template refs give you direct access to a DOM element or child component instance. Declare a <code class="inline-code">ref()</code> with the same name as the <code class="inline-code">ref</code> attribute in the template. The ref is populated after the component is mounted.
          </p>
          <CodeBlock title="Template refs" :code="codes[19]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            These 20 questions cover the most important Vue.js concepts you should know for an interview. Here is a quick recap:
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Core concepts</strong> — Virtual DOM, reactivity, lifecycle hooks</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Directives</strong> — v-if, v-show, v-model, v-for with key</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Component communication</strong> — props, emits, provide/inject, slots</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Reactivity</strong> — computed, watch, watchEffect, nextTick</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Composition API</strong> — script setup, composables, template refs</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>State management</strong> — Pinia stores for shared state</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Routing</strong> — Vue Router with dynamic routes</span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span><strong>Advanced</strong> — async components, Suspense, custom directives</span></li>
          </ul>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({ title: 'Vue.js Interview Questions - Koeuk Dev' })

const codes = [
  `&lt;template&gt;
  &lt;div id="app"&gt;
    &lt;h1&gt;{{ message }}&lt;/h1&gt;
    &lt;button @click="count++"&gt;Clicked {{ count }} times&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)
&lt;\/script&gt;`,

  `// Vue's Virtual DOM process:
// 1. State changes → new Virtual DOM tree is created
// 2. New tree is compared (diffed) with the old tree
// 3. Only the differences (patches) are applied to the real DOM

// Example: When "count" changes from 0 to 1
// Old Virtual DOM:  &lt;span&gt;Count: 0&lt;/span&gt;
// New Virtual DOM:  &lt;span&gt;Count: 1&lt;/span&gt;
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

  `&lt;template&gt;
  &lt;!-- v-if: element is completely removed from the DOM --&gt;
  &lt;div v-if="isVisible"&gt;I am added/removed from DOM&lt;/div&gt;

  &lt;!-- v-show: element stays in DOM, display is toggled --&gt;
  &lt;div v-show="isVisible"&gt;I am always in DOM, just hidden&lt;/div&gt;

  &lt;!-- v-if with v-else --&gt;
  &lt;div v-if="loggedIn"&gt;Welcome back!&lt;/div&gt;
  &lt;div v-else&gt;Please log in&lt;/div&gt;

  &lt;button @click="isVisible = !isVisible"&gt;Toggle&lt;/button&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const isVisible = ref(true)
const loggedIn = ref(false)
&lt;\/script&gt;

// v-if:   Higher toggle cost (DOM add/remove), lower initial cost if false
// v-show: Lower toggle cost (CSS only), higher initial cost (always rendered)`,

  `&lt;script setup&gt;
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
&lt;\/script&gt;

&lt;template&gt;
  &lt;!-- Both show "John Doe" but computed is cached --&gt;
  &lt;p&gt;{{ fullName }}&lt;/p&gt;
  &lt;p&gt;{{ getFullName() }}&lt;/p&gt;
&lt;/template&gt;`,

  `&lt;script setup&gt;
import { ref } from 'vue'

const name = ref('')
const agreed = ref(false)
const selected = ref('vue')
&lt;\/script&gt;

&lt;template&gt;
  &lt;!-- Text input --&gt;
  &lt;input v-model="name" placeholder="Your name" /&gt;
  &lt;p&gt;Hello, {{ name }}&lt;/p&gt;

  &lt;!-- Checkbox --&gt;
  &lt;input type="checkbox" v-model="agreed" /&gt;
  &lt;span&gt;Agreed: {{ agreed }}&lt;/span&gt;

  &lt;!-- Select --&gt;
  &lt;select v-model="selected"&gt;
    &lt;option value="vue"&gt;Vue&lt;/option&gt;
    &lt;option value="react"&gt;React&lt;/option&gt;
    &lt;option value="angular"&gt;Angular&lt;/option&gt;
  &lt;/select&gt;

  &lt;!-- v-model is shorthand for: --&gt;
  &lt;input :value="name" @input="name = $event.target.value" /&gt;
&lt;/template&gt;`,

  `&lt;!-- ParentComponent.vue --&gt;
&lt;script setup&gt;
import { ref } from 'vue'
import ChildComponent from './ChildComponent.vue'

const parentMessage = ref('Hello from parent')

function handleChildEvent(payload) {
  console.log('Received from child:', payload)
}
&lt;\/script&gt;

&lt;template&gt;
  &lt;!-- Pass data DOWN via props --&gt;
  &lt;ChildComponent
    :message="parentMessage"
    @notify="handleChildEvent"
  /&gt;
&lt;/template&gt;

&lt;!-- ChildComponent.vue --&gt;
&lt;script setup&gt;
// Receive data from parent
const props = defineProps&lt;{
  message: string
}&gt;()

// Send events to parent
const emit = defineEmits&lt;{
  notify: [value: string]
}&gt;()

function sendToParent() {
  emit('notify', 'Hello from child!')
}
&lt;\/script&gt;

&lt;template&gt;
  &lt;p&gt;{{ message }}&lt;/p&gt;
  &lt;button @click="sendToParent"&gt;Notify Parent&lt;/button&gt;
&lt;/template&gt;`,

  `&lt;!-- ChildComponent.vue --&gt;
&lt;script setup&gt;
// Props: receive data from parent (read-only)
const props = defineProps&lt;{
  title: string
  count: number
  items?: string[]  // optional prop
}&gt;()

// Emits: send events to parent
const emit = defineEmits&lt;{
  update: [id: number, value: string]
  delete: [id: number]
}&gt;()

function onUpdate() {
  emit('update', 1, 'new value')
}

function onDelete() {
  emit('delete', 1)
}
&lt;\/script&gt;

&lt;template&gt;
  &lt;h2&gt;{{ title }}&lt;/h2&gt;
  &lt;p&gt;Count: {{ count }}&lt;/p&gt;
  &lt;button @click="onUpdate"&gt;Update&lt;/button&gt;
  &lt;button @click="onDelete"&gt;Delete&lt;/button&gt;
&lt;/template&gt;`,

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
// &lt;script setup&gt;
// import { useCounterStore } from '~/stores/useCounterStore'
// const store = useCounterStore()
// store.increment()
// console.log(store.count, store.doubleCount)
// &lt;\/script&gt;`,

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
// &lt;script setup&gt;
// import { useRoute } from 'vue-router'
// const route = useRoute()
// console.log(route.params.id) // e.g. "42"
// &lt;\/script&gt;`,

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
// &lt;script setup&gt;
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
// &lt;\/script&gt;

// Composition API advantages:
// - Better TypeScript support
// - Logic can be extracted into composables
// - No "this" keyword confusion
// - Related code stays together`,

  `&lt;!-- BaseCard.vue — child with slots --&gt;
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;!-- Default slot --&gt;
    &lt;slot&gt;Default content if nothing provided&lt;/slot&gt;

    &lt;!-- Named slots --&gt;
    &lt;header&gt;&lt;slot name="header"&gt;&lt;/slot&gt;&lt;/header&gt;
    &lt;main&gt;&lt;slot name="body"&gt;&lt;/slot&gt;&lt;/main&gt;
    &lt;footer&gt;&lt;slot name="footer"&gt;&lt;/slot&gt;&lt;/footer&gt;

    &lt;!-- Scoped slot: pass data back to parent --&gt;
    &lt;slot name="item" :data="itemData" :index="0"&gt;&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;!-- Parent using slots --&gt;
&lt;template&gt;
  &lt;BaseCard&gt;
    &lt;!-- Named slot content --&gt;
    &lt;template #header&gt;
      &lt;h1&gt;Card Title&lt;/h1&gt;
    &lt;/template&gt;

    &lt;template #body&gt;
      &lt;p&gt;Card content goes here&lt;/p&gt;
    &lt;/template&gt;

    &lt;!-- Scoped slot: receive data from child --&gt;
    &lt;template #item="{ data, index }"&gt;
      &lt;p&gt;Item {{ index }}: {{ data }}&lt;/p&gt;
    &lt;/template&gt;
  &lt;/BaseCard&gt;
&lt;/template&gt;`,

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
// &lt;input v-focus /&gt;
// &lt;div v-click-outside="closeDropdown"&gt;...&lt;/div&gt;`,

  `&lt;!-- Ancestor.vue --&gt;
&lt;script setup&gt;
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
&lt;\/script&gt;

&lt;!-- Any deeply nested descendant --&gt;
&lt;script setup&gt;
import { inject } from 'vue'

// Inject values from ancestor
const theme = inject('theme')
const user = inject('currentUser')
const toggleTheme = inject('toggleTheme')

// With a default value (fallback)
const lang = inject('language', 'en')
&lt;\/script&gt;

&lt;template&gt;
  &lt;div :class="theme"&gt;
    &lt;p&gt;Hello, {{ user.name }}&lt;/p&gt;
    &lt;button @click="toggleTheme"&gt;Toggle Theme&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;`,

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
// &lt;script setup&gt;
// import { useCounter } from '~/composables/useCounter'
// const { count, increment } = useCounter(10)
// &lt;\/script&gt;
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
// &lt;template&gt;
//   &lt;Suspense&gt;
//     &lt;template #default&gt;
//       &lt;AsyncDashboard /&gt;
//     &lt;/template&gt;
//     &lt;template #fallback&gt;
//       &lt;div&gt;Loading dashboard...&lt;/div&gt;
//     &lt;/template&gt;
//   &lt;/Suspense&gt;
// &lt;/template&gt;`,

  `&lt;template&gt;
  &lt;!-- REQUIRED: always use :key with v-for --&gt;
  &lt;ul&gt;
    &lt;li v-for="item in items" :key="item.id"&gt;
      {{ item.name }}
    &lt;/li&gt;
  &lt;/ul&gt;

  &lt;!-- BAD: using index as key (causes bugs with reordering) --&gt;
  &lt;li v-for="(item, index) in items" :key="index"&gt;...&lt;/li&gt;

  &lt;!-- Force re-render by changing key --&gt;
  &lt;UserProfile :key="userId" :user-id="userId" /&gt;
  &lt;!-- When userId changes, the component is destroyed and recreated --&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
])
const userId = ref(1)
&lt;\/script&gt;`,

  `&lt;script setup&gt;
import { ref, onMounted } from 'vue'

// Declare a ref with the same name as the template ref attribute
const inputRef = ref&lt;HTMLInputElement | null&gt;(null)
const containerRef = ref&lt;HTMLDivElement | null&gt;(null)

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
&lt;\/script&gt;

&lt;template&gt;
  &lt;!-- ref="inputRef" connects to the inputRef variable --&gt;
  &lt;input ref="inputRef" type="text" placeholder="Auto-focused!" /&gt;
  &lt;button @click="selectAll"&gt;Select All&lt;/button&gt;

  &lt;div ref="containerRef" class="overflow-auto h-64"&gt;
    &lt;!-- Long content --&gt;
  &lt;/div&gt;
  &lt;button @click="scrollToBottom"&gt;Scroll to Bottom&lt;/button&gt;
&lt;/template&gt;`,
]
</script>

<style scoped>
.inline-code {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-green-600 dark:text-green-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
