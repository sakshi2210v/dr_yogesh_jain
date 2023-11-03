import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Yogesh Jain',
  icons: {
    icon: '/logo.jpg',
  },
  description: 'Expert in adult health, offering personalized care for optimal well-being. Trust his vast experience and compassion at his Internal Medicine Practice for a healthier life.  ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-dark`}>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
