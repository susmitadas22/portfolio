import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { Footer } from './footer'
import './globals.css'
import { Header } from './header'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'susmita',
  description: 'CS student & full-stack developer',
}

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${urbanist.className} bg-[#fff0f5] tracking-tight text-[#1e1e1e] antialiased dark:bg-[#111111] dark:text-[#f5f5f5]`}
      >
        <Providers>
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
