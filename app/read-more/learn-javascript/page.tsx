import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn JavaScript | Koeuk Dev',
  description: 'JavaScript runs the browser, the server (Node.js), and most of the modern web.',
}

const varsCode = `const greeting = 'hello'
let count = 0
count += 1

const greet = (name) => \`Hello, \${name}!\`
greet('Koeuk')`

const asyncCode = `async function loadUser(id) {
  const response = await fetch(\`/api/users/\${id}\`)
  if (!response.ok) throw new Error('Failed to load')
  return response.json()
}

const user = await loadUser(42)`

export default function LearnJavaScriptPage() {
  return (
    <Article
      title="Learn JavaScript: From Zero to Modern ES"
      date="Apr 3, 2026"
      tags={['JavaScript', 'Frontend']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        JavaScript runs the browser, the server (Node.js), and most of the modern web. It&apos;s quirky in places, but
        the modern parts are clean, expressive, and worth learning deeply.
      </p>

      <h2>1. Variables &amp; Functions</h2>
      <p>
        Use <code>const</code> by default. Reach for <code>let</code> only when you must reassign. Avoid{' '}
        <code>var</code>.
      </p>
      <CodeBlock language="javascript" code={varsCode} />

      <h2>2. Async with Promises &amp; await</h2>
      <p>
        Anything that takes time (network, files, timers) returns a Promise. <code>await</code> makes async code read
        like sync code.
      </p>
      <CodeBlock language="javascript" code={asyncCode} />

      <h2>3. Modern Patterns</h2>
      <ul>
        <li>
          Destructuring: <code>{'{ name, age } = user'}</code>
        </li>
        <li>
          Spread/rest: <code>[...arr, newItem]</code>
        </li>
        <li>
          Optional chaining: <code>user?.address?.city</code>
        </li>
        <li>
          Nullish coalescing: <code>value ?? &apos;default&apos;</code>
        </li>
        <li>
          Modules: <code>import / export</code> instead of CommonJS.
        </li>
      </ul>

      <h2>4. Array Methods Worth Memorizing</h2>
      <p>
        <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>find</code>, <code>some</code>,{' '}
        <code>every</code>, <code>flatMap</code>. Most data work in JS is one of these.
      </p>

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Learn the modern subset well — <code>const</code>, arrow functions, destructuring, modules, async/await. The
          rest is mostly history you can read about later.
        </p>
      </Card>
    </Article>
  )
}
