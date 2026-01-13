import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from '@/components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jawher Ayari - Software Engineer & Web Developer',
  description: 'Portfolio of Jawher Ayari - Software engineering and web development professional with expertise in automation workflows using n8n',
  keywords: ['Jawher Ayari', 'Software Engineer', 'Web Developer', 'n8n', 'Automation', 'GitHub'],
  authors: [{ name: 'Jawher Ayari' }],
  openGraph: {
    title: 'Jawher Ayari - Software Engineer & Web Developer',
    description: 'Portfolio of Jawher Ayari - Software engineering and web development professional',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientWrapper>
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </ClientWrapper>
      </body>
    </html>
  )
}

