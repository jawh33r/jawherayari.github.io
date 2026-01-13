'use client'

import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from './ThemeProvider'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

