import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { mdxRs: true },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
