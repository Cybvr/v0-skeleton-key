import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Skeleton Key | Buy and Sell Like The 1%',
  description: 'The brand new, all-in-one platform to help you sell for more and buy for less.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
