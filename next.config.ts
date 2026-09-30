import type { NextConfig } from 'next'

// Fully static: `next build` writes plain HTML/CSS/JS to out/, no server needed.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
