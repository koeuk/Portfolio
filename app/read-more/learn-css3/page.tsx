import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn CSS3 - Koeuk Dev',
  description: 'CSS has grown from "make it pretty" into a powerful layout and animation system.',
}

const flexCode = `.row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}`

const gridCode = `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}`

const varsCode = `:root {
  --primary: #1a1a1a;
  --radius: 12px;
}
.button {
  background: var(--primary);
  border-radius: var(--radius);
}`

export default function Page() {
  return (
    <Article title="Learn CSS3: Style the Modern Web" date="Apr 2, 2026" tags={['CSS3', 'Frontend']}>
      <p>
        CSS has grown from &quot;make it pretty&quot; into a powerful layout and animation system. Knowing modern CSS
        means writing less, doing more, and rarely needing JavaScript for visual concerns.
      </p>

      <h2>1. Flexbox for One-Dimensional Layout</h2>
      <p>Use Flexbox when items flow in a row or a column.</p>
      <CodeBlock language="css" code={flexCode} />

      <h2>2. Grid for Two-Dimensional Layout</h2>
      <p>When you need rows <em>and</em> columns, reach for Grid.</p>
      <CodeBlock language="css" code={gridCode} />

      <h2>3. Custom Properties (CSS Variables)</h2>
      <p>Theme tokens, dark mode, runtime customization — all with one feature.</p>
      <CodeBlock language="css" code={varsCode} />

      <h2>4. Responsive Design</h2>
      <ul>
        <li>Mobile-first: write base styles for small screens, override with <code>@media (min-width: ...)</code>.</li>
        <li>Use <code>clamp()</code> for fluid typography.</li>
        <li>Prefer logical properties (<code>margin-inline</code>) over directional ones.</li>
        <li>Container queries for component-level responsiveness.</li>
      </ul>

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Modern CSS gives you layout, theming, and motion without frameworks. Learn Flexbox, Grid, custom properties,
          and you can style nearly anything with confidence.
        </p>
      </Card>
    </Article>
  )
}
