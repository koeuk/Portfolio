'use client'

import { useRef, useState, type ReactNode } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '@/lib/utils'

/** Code sample with a title bar and a copy button. Pass `code`, or the code as children. */
export function CodeBlock({
  title,
  language,
  code,
  className,
  children,
}: {
  /** Shown in the title bar; falls back to `language` */
  title?: string
  language?: string
  code?: string
  className?: string
  children?: ReactNode
}) {
  const preRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(preRef.current?.textContent ?? '')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure context); the code can still be selected by hand.
    }
  }

  return (
    <div className={cn('neo my-6 overflow-hidden bg-bw', className)}>
      <div className="flex items-center justify-between border-b-2 border-border bg-main px-4 py-2 text-sm font-heading text-main-fg">
        <span>{title ?? language ?? 'code'}</span>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1 rounded-base border-2 border-transparent px-2 py-0.5 text-xs transition-colors hover:border-border"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre ref={preRef} className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="whitespace-pre font-mono">{code ?? children}</code>
      </pre>
    </div>
  )
}
