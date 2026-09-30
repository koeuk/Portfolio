import { Article } from '@/components/ui/Article'

export const metadata = {
  title: 'Building Responsive Layouts with Tailwind CSS | Koeuk Dev',
  description: 'Building responsive layouts with Tailwind CSS.',
}

export default function TailwindResponsiveLayoutsPage() {
  return (
    <Article
      title="Building Responsive Layouts with Tailwind CSS"
      date="Jan 10, 2026"
      tags={['Tailwind', 'CSS']}
      backHref="/about-me/my-info?section=rean"
    >
      <p>Content coming soon...</p>
    </Article>
  )
}
