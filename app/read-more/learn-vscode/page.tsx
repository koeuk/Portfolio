import type { ReactNode } from 'react'
import { Article } from '@/components/ui/Article'
import { Card } from '@/components/ui/Card'
import { CodeBlock } from '@/components/ui/CodeBlock'

export const metadata = {
  title: 'Learn VS Code | Koeuk Dev',
  description: "VS Code is the most popular editor for a reason — it's fast, extensible, and runs everywhere.",
}

// @@CODES@@

/** A keyboard key, drawn as a small raised cap. */
function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="whitespace-nowrap rounded-base border-2 border-b-4 border-border bg-bw px-1.5 font-mono text-[0.85em] text-fg">
      {children}
    </kbd>
  )
}

export default function LearnVsCodePage() {
  return (
    <Article
      title="Learn VS Code: A Faster Way to Code"
      date="Apr 7, 2026"
      tags={['VS Code', 'Tools']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>
        VS Code is the most popular editor for a reason — it&apos;s fast, extensible, and runs everywhere. Knowing a few
        tricks turns it from a text editor into a real productivity machine.
      </p>

      <h2>1. Keyboard Shortcuts to Memorize</h2>
      <ul>
        <li>
          <Kbd>Ctrl/Cmd + P</Kbd> — Quick open file
        </li>
        <li>
          <Kbd>Ctrl/Cmd + Shift + P</Kbd> — Command palette
        </li>
        <li>
          <Kbd>Ctrl/Cmd + D</Kbd> — Select next occurrence (multi-cursor)
        </li>
        <li>
          <Kbd>Alt + ↑/↓</Kbd> — Move line up/down
        </li>
        <li>
          <Kbd>F2</Kbd> — Rename symbol everywhere
        </li>
        <li>
          <Kbd>Ctrl/Cmd + .</Kbd> — Quick fix / refactor
        </li>
      </ul>

      <h2>2. Multi-Cursor Editing</h2>
      <p>
        Select a word, press <Kbd>Ctrl/Cmd + D</Kbd> repeatedly to select more occurrences, then edit them all at once.
        Or hold <Kbd>Alt</Kbd> and click to drop cursors anywhere.
      </p>

      <h2>3. Must-Have Extensions</h2>
      <ul>
        <li>
          <strong>Volar (Vue)</strong> — official Vue 3 / Nuxt support
        </li>
        <li>
          <strong>ESLint + Prettier</strong> — auto-format on save
        </li>
        <li>
          <strong>Tailwind CSS IntelliSense</strong> — class autocomplete &amp; previews
        </li>
        <li>
          <strong>GitLens</strong> — supercharged Git in the gutter
        </li>
        <li>
          <strong>Error Lens</strong> — inline TypeScript errors
        </li>
      </ul>

      <h2>4. Settings That Help</h2>
      <CodeBlock language="json" code={settingsCode} />

      <Card className="space-y-3">
        <h2 className="!mt-0">Summary</h2>
        <p>
          Live in the command palette. Learn 5 keyboard shortcuts a week. Configure format-on-save once and forget
          about formatting forever.
        </p>
      </Card>
    </Article>
  )
}
