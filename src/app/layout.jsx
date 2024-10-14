import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Internal Medicine Specialist | Dr. Yogesh Jain Clinic',
  icons: {
    icon: '/logo.jpg',
  },
  description: 'Consult Dr. Yogesh Jain, a leading internal medicine specialist offering expert care for complex medical conditions with personalized treatment plans.',
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
