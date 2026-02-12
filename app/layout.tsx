import type { Metadata } from 'next'
import { Inter, Changa_One } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const changaOne = Changa_One({ weight: '400', subsets: ['latin'], variable: '--font-changa-one' })

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
      <body className={`${inter.variable} ${changaOne.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
