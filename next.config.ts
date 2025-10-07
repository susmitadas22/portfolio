import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: { mdxRs: true },
  output: 'standalone',
  redirects: async () => {
    return [
      {
        source: '/github',
        destination: 'https://github.com/susmitadas22',
        permanent: true,
      },
      {
        source: '/git',
        destination: 'https://github.com/susmitadas22',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
