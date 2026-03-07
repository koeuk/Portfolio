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
          <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full font-medium">Interview</span>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-primary dark:text-white mb-4">
          {{ t('blog.itvw.vue.title') }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Feb 25, 2026</p>
      </div>

      <article class="prose-content">

        <section class="mb-12">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" v-html="t('blog.itvw.vue.intro')"></p>
        </section>

        <!-- Q1 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q1') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.vue.a1') }}
          </p>
          <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
            <li v-html="t('blog.itvw.vue.a1l1')"></li>
            <li v-html="t('blog.itvw.vue.a1l2')"></li>
            <li v-html="t('blog.itvw.vue.a1l3')"></li>
            <li v-html="t('blog.itvw.vue.a1l4')"></li>
            <li v-html="t('blog.itvw.vue.a1l5')"></li>
            <li v-html="t('blog.itvw.vue.a1l6')"></li>
          </ul>
          <CodeBlock :title="t('blog.itvw.vue.q1c1')" :code="codes[0]" />
        </section>

        <!-- Q2 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q2') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a2')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q2c1')" :code="codes[1]" />
          <div class="tip-box mt-4" v-html="t('blog.itvw.vue.q2tip')"></div>
        </section>

        <!-- Q3 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q3') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a3')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q3c1')" :code="codes[2]" />
        </section>

        <!-- Q4 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q4') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a4')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q4c1')" :code="codes[3]" />
        </section>

        <!-- Q5 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q5') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a5')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q5c1')" :code="codes[4]" />
        </section>

        <!-- Q6 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q6') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a6')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q6c1')" :code="codes[5]" />
        </section>

        <!-- Q7 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q7') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a7')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q7c1')" :code="codes[6]" />
        </section>

        <!-- Q8 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q8') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a8')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q8c1')" :code="codes[7]" />
        </section>

        <!-- Q9 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q9') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a9')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q9c1')" :code="codes[8]" />
        </section>

        <!-- Q10 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q10') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a10')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q10c1')" :code="codes[9]" />
        </section>

        <!-- Q11 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q11') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a11')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q11c1')" :code="codes[10]" />
        </section>

        <!-- Q12 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q12') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a12')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q12c1')" :code="codes[11]" />
        </section>

        <!-- Q13 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q13') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a13')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q13c1')" :code="codes[12]" />
        </section>

        <!-- Q14 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q14') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a14')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q14c1')" :code="codes[13]" />
        </section>

        <!-- Q15 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q15') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a15')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q15c1')" :code="codes[14]" />
        </section>

        <!-- Q16 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q16') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a16')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q16c1')" :code="codes[15]" />
        </section>

        <!-- Q17 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q17') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a17')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q17c1')" :code="codes[16]" />
        </section>

        <!-- Q18 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q18') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a18')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q18c1')" :code="codes[17]" />
        </section>

        <!-- Q19 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q19') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a19')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q19c1')" :code="codes[18]" />
        </section>

        <!-- Q20 -->
        <section class="qa-section">
          <h3 class="text-xl font-bold text-primary dark:text-white mb-3">{{ t('blog.itvw.vue.q20') }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4" v-html="t('blog.itvw.vue.a20')"></p>
          <CodeBlock :title="t('blog.itvw.vue.q20c1')" :code="codes[19]" />
        </section>

        <!-- Summary -->
        <section class="mb-12 p-6 rounded-xl bg-gray-50 dark:bg-primary-light border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-4">{{ t('blog.summary') }}</h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ t('blog.itvw.vue.sumIntro') }}
          </p>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum1')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum2')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum3')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum4')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum5')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum6')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum7')"></span></li>
            <li class="flex items-start gap-2"><span class="text-green-500 mt-1">&#10003;</span><span v-html="t('blog.itvw.vue.sum8')"></span></li>
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
:deep(.inline-code) {
  @apply px-1.5 py-0.5 bg-gray-100 dark:bg-primary-light rounded text-sm font-mono text-green-600 dark:text-green-400;
}
.tip-box {
  @apply p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-700 dark:text-blue-300;
}
.qa-section {
  @apply mb-8 p-6 rounded-xl bg-gray-50 dark:bg-primary-light/50 border border-gray-200 dark:border-gray-700;
}
</style>
