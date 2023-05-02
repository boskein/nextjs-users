import './globals.css'
import Navigation from '@/components/navigation/Navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Contact',
  description: 'Lista de usuarios de contacto'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.className}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
