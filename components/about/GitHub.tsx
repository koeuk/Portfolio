import { ArrowRight } from 'lucide-react'
import { SocialLinks } from '@/components/layout/SocialLinks'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

// The typing banner sits on the orange `main` surface, so its text is black
// (the Nuxt site drew it white on GitHub's dark theme).
const TYPING_SVG =
  "https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&weight=700&pause=1000&center=true&width=600&lines=Hello+There!+I'm+Koeuk+%F0%9F%99%8F&color=000000"

/** GitHub tab of My Info: a README-style card linking to the /github page. */
export function GitHub() {
  return (
    <section id="github">
      <h2 className="mb-8 font-heading text-xl sm:text-2xl">GitHub</h2>

      <Card className="p-0 sm:p-0">
        <p className="border-b-2 border-border px-4 py-3 text-sm sm:px-6">
          koeuk / <strong className="font-heading">README.md</strong>
        </p>

        <div className="p-4 sm:p-6">
          <div className="neo overflow-hidden bg-main px-3 py-5">
            <img src={TYPING_SVG} alt="Hello There! I'm Koeuk" className="mx-auto w-full max-w-[600px]" />
          </div>

          <p className="mt-6 text-center font-heading text-lg">Welcome to My Digital Space</p>

          <img
            src="https://img.shields.io/badge/Code_Experience-2023--2025-brightgreen?style=flat&logo=javascript"
            alt="Experience"
            className="mt-6"
          />

          <div className="neo mt-6 overflow-hidden bg-bw">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=koeuk&theme=react-dark&hide_border=true&area=true"
              alt="Contribution Graph"
              className="block w-full"
              loading="lazy"
            />
          </div>

          <div className="neo mt-6 overflow-hidden bg-bw p-3">
            <img
              src="https://ghchart.rshah.org/4ade80/koeuk"
              alt="GitHub Contribution Heatmap"
              className="block w-full"
              loading="lazy"
            />
          </div>

          <h3 className="mt-10 border-b-2 border-border pb-2 font-heading text-lg sm:text-xl">Connect With Me</h3>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
            <SocialLinks className="gap-6" />
            <Button href="/github" variant="main">
              View More
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}
