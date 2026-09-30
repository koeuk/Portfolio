import type { NextConfig } from 'next'

// Fully static: `next build` writes plain HTML/CSS/JS to out/, no server needed.
// trailingSlash writes each page as <route>/index.html, which every static host serves.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
