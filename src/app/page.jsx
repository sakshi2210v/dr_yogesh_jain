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
import Head from 'next/head'
export default function Home() {
  return (
    <div className=' mx-auto'>
      <Head>
          <title>Yogesh Jain</title>
          <link rel="icon" href="/logo.jpg" sizes="any" />
      </Head>
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
