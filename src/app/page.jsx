import Image from 'next/image'
import Hero from '@/components/Hero'
import Aboutus from '@/components/Aboutus'
import Achievements from '@/components/Achievements'
import Form from '@/components/Form'
import Featured from '@/components/Featured'
import Reviews  from '@/components/Reviews'
import Treatment from '@/components/Treatment'
import Gallery from '@/components/Gallery'
import Hospitals from '@/components/Hospitals'
import Cta from '@/components/Cta'
import Info from '@/components/Info'
import Head from 'next/document'
import Script from 'next/script'
export default function Home() {
  return (
    <div className=' mx-auto'>
      <Head>
          <title>Yogesh Jain</title>
          <link rel="icon" href="/logo.jpg" sizes="any" />
          <Script
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
</Script>
<meta name="google-site-verification" content="XZCDXa84QDpEh8vXIcZjmlkAxtHHl2xDhmTnddUZGfw" />
      </Head >
      <Hero />
      <Achievements />
      <Aboutus />
      <Treatment/>
      <Hospitals/>
      <Cta/>
      <Reviews/>
      <Info/>
      <Gallery/>
      {/* <Featured/> */}
      <Form/>
    </div>
  )
}
