import Footer from './(shared)/Footer'
import Navbar from './(shared)/Navbar'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog AI app',
  description: 'blog app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
