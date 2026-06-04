import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-opensans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PT Catur Putra Manggala',
  description:
    'PT Catur Putra Manggala — General Contractor, Developer, Supplier & General Trading. ' +
    'Spesialis pemasangan pagar panel beton dan pekerjaan tanah di Sumatera Selatan.',
  keywords: [
    'pagar panel beton',
    'kontraktor palembang',
    'penimbunan tanah',
    'PT Catur Putra Manggala',
    'general contractor sumatera selatan',
  ],
  openGraph: {
    title: 'PT Catur Putra Manggala',
    description: 'Kontraktor terpercaya di Sumatera Selatan. 10+ tahun pengalaman.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
