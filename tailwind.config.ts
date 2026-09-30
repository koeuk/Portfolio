import type { Config } from 'tailwindcss'

/**
 * Neobrutalism design system, after neobrutalism-templates/portfolio (MIT).
 * Colours are CSS variables in app/globals.css, so dark mode is a token swap:
 *   bg        — page background (warm cream / dark brown)
 *   bw        — secondary surface (white / near-black)
 *   fg        — text
 *   main      — the orange used for cards, the nav pill and highlights
 *   main-fg   — text on `main`, always black
 *   border    — always black, 2px
 * Every raised element is `border-2 border-border rounded-base shadow-shadow`.
 */
export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.ts'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--background)',
        bw: 'var(--secondary-background)',
        fg: 'var(--foreground)',
        main: 'var(--main)',
        'main-fg': 'var(--main-foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        overlay: 'var(--overlay)',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      translate: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      fontFamily: {
        sans: ['Montserrat', '"Noto Sans Khmer"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        page: '750px',
        wide: '1000px',
      },
      screens: {
        w450: { max: '450px' },
      },
    },
  },
  plugins: [],
} satisfies Config
