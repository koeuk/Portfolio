import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn Tailwind CSS | Koeuk Dev',
  description: 'Tailwind replaces hand-written CSS with small utility classes.',
}

// @@CODES@@

export default function LearnTailwindPage() {
  return (
    <Article
      title="Learn Tailwind CSS: Utility-First Styling"
      date="Apr 5, 2026"
      tags={['Tailwind', 'CSS']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        Tailwind replaces hand-written CSS with small utility classes. It looks busy at first; after a week you stop
        wanting to leave your markup to write a stylesheet.
      </p>

      <h2>1. The Mental Model</h2>
      <p>
        Each class does one thing: <code>flex</code>, <code>p-4</code>, <code>text-lg</code>, <code>rounded-xl</code>.
        You compose them on the element.
      </p>

      <h2>2. Responsive &amp; State Variants</h2>
      <p>Prefix any utility with breakpoints or pseudo-states.</p>
      <CodeBlock language="html" code={variantsCode} />

      <h2>3. Dark Mode</h2>
      <p>
        Use the <code>dark:</code> variant. Toggle by adding the <code>dark</code> class on <code>&lt;html&gt;</code>.
      </p>
      <CodeBlock language="html" code={darkCode} />

      <h2>4. Theme Customization</h2>
      <p>
        Extend the design tokens — colors, spacing, fonts — in <code>tailwind.config.js</code>.
      </p>
      <CodeBlock language="javascript" code={configCode} />

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Tailwind keeps styles next to markup, eliminates naming, and stays consistent through tokens. For most apps,
          you can ship a polished UI without writing a single line of custom CSS.
        </p>
      </Card>
    </Article>
  )
}
