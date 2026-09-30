import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn Nuxt.js - Koeuk Dev',
  description: 'Nuxt is to Vue what Next.js is to React: a full framework that takes care of routing, SSR, data fetching, and a thousand other details so you can focus on the app.',
}

const routesCode = `pages/
  index.vue           -> /
  about.vue           -> /about
  blog/index.vue      -> /blog
  blog/[slug].vue     -> /blog/:slug`

const fetchCode = `<script setup>
const { data: posts } = await useFetch('/api/posts')
<\/script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>`

const serverCode = `// server/api/posts.get.ts
export default defineEventHandler(async () => {
  return [{ id: 1, title: 'Hello Nuxt' }]
})`

export default function Page() {
  return (
    <Article title="Learn Nuxt.js: The Vue Meta-Framework" date="Apr 4, 2026" tags={['Nuxt', 'Vue']}>
      <p>
        Nuxt is to Vue what Next.js is to React: a full framework that takes care of routing, SSR, data fetching,
        and a thousand other details so you can focus on the app.
      </p>

      <h2>1. File-Based Routing</h2>
      <p>Drop a <code>.vue</code> file in <code>pages/</code> — that&apos;s a route.</p>
      <CodeBlock language="text" code={routesCode} />

      <h2>2. Auto Imports</h2>
      <p>
        Components in <code>components/</code> and composables in <code>composables/</code> are imported automatically. So are Vue&apos;s reactive APIs (<code>ref</code>, <code>computed</code>, etc).
      </p>

      <h2>3. Data Fetching</h2>
      <p>Use <code>useFetch</code> or <code>useAsyncData</code>. They run on the server during SSR and hydrate on the client.</p>
      <CodeBlock language="vue" code={fetchCode} />

      <h2>4. Server Routes</h2>
      <p>Need a backend? Drop a file in <code>server/api/</code>.</p>
      <CodeBlock language="typescript" code={serverCode} />

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Nuxt removes the boilerplate from Vue apps. Pages, layouts, server routes, SSR — all configured for you.
          Start with <code>npx nuxi init</code> and build something.
        </p>
      </Card>
    </Article>
  )
}
