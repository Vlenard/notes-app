import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/Providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes',
  description: 'A web application for making notes',
  themeColor: "#0095ff"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
