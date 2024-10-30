import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Internal Medicine Specialist | Dr. Yogesh Jain Clinic',
  icons: {
    icon: '/Dr Yogesh Jain.jpg',
  },
  description: 'Consult Dr. Yogesh Jain, a leading internal medicine specialist offering expert care for complex medical conditions with personalized treatment plans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      {/* <Script
  strategy="lazyOnload"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
/>

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
</Script> */}
<meta name="google-site-verification" content="XZCDXa84QDpEh8vXIcZjmlkAxtHHl2xDhmTnddUZGfw" />
      </head>
      <body className={`${inter.className} text-dark`}>
       <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
