import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'Maxim - Frontend Developer',
  description: 'Portfolio showcasing my frontend development work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}