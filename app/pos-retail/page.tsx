import type { Metadata } from 'next'
import { PosRetail } from './PosRetail'

export const metadata: Metadata = {
  title: 'POS Retail | Koeuk Dev',
  description:
    'Offline-first point of sale and back office for a Cambodian retail shop, built with Laravel 12, Vue 3, TypeScript, Inertia, shadcn-vue and Tailwind.',
}

export default function PosRetailPage() {
  return <PosRetail />
}
