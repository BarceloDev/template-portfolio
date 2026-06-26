import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'João Martins — Fotógrafo de Casamentos e Ensaios',
  description:
    'Fotografia de casamentos, ensaios e retratos em São Paulo. Registros únicos que contam histórias com elegância e emoção.',
  keywords: [
    'fotógrafo casamentos',
    'ensaios fotográficos',
    'fotografia São Paulo',
    'fotógrafo profissional',
    'João Martins fotógrafo',
  ],
  authors: [{ name: 'João Martins' }],
  creator: 'João Martins',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'João Martins — Fotógrafo de Casamentos e Ensaios',
    description:
      'Fotografia de casamentos, ensaios e retratos em São Paulo. Registros únicos que contam histórias com elegância e emoção.',
    siteName: 'João Martins Fotografia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João Martins — Fotógrafo de Casamentos e Ensaios',
    description:
      'Fotografia de casamentos, ensaios e retratos em São Paulo.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#291C0E',
  colorScheme: 'light',
  initialScale: 1,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} bg-[#FAF8F5]`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
