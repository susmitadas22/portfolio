import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'susmita', template: '%s • susmita' },
  description:
    'Indie hacker, full-stack developer, crafting web and mobile apps.',
  category: 'Personal Site',
  openGraph: { type: 'website', locale: 'en_US', url: 'https://sush.me' },
  twitter: { card: 'summary_large_image' },
  alternates: { types: { 'application/rss+xml': 'https://sush.me/rss.xml' } },
}
