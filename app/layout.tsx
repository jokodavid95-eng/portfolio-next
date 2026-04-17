import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'David Mateos — Frontend Developer & UI Designer',
  description:
    'Desarrollador frontend con 5+ años de experiencia construyendo interfaces digitales que combinan funcionalidad precisa con estética editorial.',
  openGraph: {
    title: 'David Mateos — Frontend Developer & UI Designer',
    description:
      'Interfaces que equilibran claridad visual con arquitectura de componentes sólida.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Mateos — Frontend Developer & UI Designer',
    description: 'Frontend Developer & UI Designer',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%233D3F00'/><text y='72' x='12' font-size='60' font-family='sans-serif' fill='%23C8CC7A'>DM</text></svg>",
  },
}

import Cursor from '@/components/Cursor'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={spaceGrotesk.variable}>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
