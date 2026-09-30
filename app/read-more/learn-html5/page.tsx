import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn HTML5 - Koeuk Dev',
  description: 'HTML5 is the markup language of the modern web.',
}

const semanticCode = `<header>
  <nav>...</nav>
</header>
<main>
  <article>
    <h1>Article title</h1>
    <section>...</section>
  </article>
  <aside>Related links</aside>
</main>
<footer>...</footer>`

const formCode = `<form>
  <label>
    Email
    <input type="email" required>
  </label>
  <label>
    Password
    <input type="password" minlength="8" required>
  </label>
  <button type="submit">Sign in</button>
</form>`

export default function Page() {
  return (
    <Article title="Learn HTML5: The Foundation of the Web" date="Apr 1, 2026" tags={['HTML5', 'Frontend']}>
      <p>
        HTML5 is the markup language of the modern web. Every page, app, and email lives in some form of HTML.
        The good news: the core is small. Master a handful of structural ideas and you can describe almost anything.
      </p>

      <h2>1. Semantic Elements</h2>
      <p>
        Use tags that describe what the content <em>is</em>, not how it looks. Screen readers, search engines, and future-you will thank you.
      </p>
      <CodeBlock language="html" code={semanticCode} />

      <h2>2. Forms & Inputs</h2>
      <p>
        HTML5 added many input types and validation attributes. Use them — the browser does the heavy lifting.
      </p>
      <CodeBlock language="html" code={formCode} />

      <h2>3. Accessibility (a11y)</h2>
      <ul>
        <li>Always include <code>alt</code> text on images.</li>
        <li>Use one <code>&lt;h1&gt;</code> per page; nest headings logically.</li>
        <li>Label every form input. Implicit labels work too: wrap the input in <code>&lt;label&gt;</code>.</li>
        <li>Buttons are buttons. Don&apos;t use <code>&lt;div onclick&gt;</code>.</li>
      </ul>

      <h2>4. Useful APIs to Know</h2>
      <ul>
        <li><strong>localStorage / sessionStorage</strong> — quick client-side persistence.</li>
        <li><strong>Fetch API</strong> — modern way to talk to servers.</li>
        <li><strong>IntersectionObserver</strong> — lazy-load images, infinite scroll.</li>
        <li><strong>Geolocation, Clipboard, Notifications</strong> — opt-in browser powers.</li>
      </ul>

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Write HTML that says what it means. Keep it semantic, keep it accessible, and let CSS handle how it looks.
          Solid HTML is the foundation everything else stands on.
        </p>
      </Card>
    </Article>
  )
}
