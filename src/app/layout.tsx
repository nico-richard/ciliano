import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import './globals.sass'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata: Metadata = {
  title: 'Ciliano',
  description: 'Améliore ton niveau sur League of Legends',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={rajdhani.variable}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
