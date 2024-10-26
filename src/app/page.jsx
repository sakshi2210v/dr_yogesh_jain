import Image from 'next/image';
import Hero from '@/components/Hero';
import Aboutus from '@/components/Aboutus';
import Achievements from '@/components/Achievements';
import Form from '@/components/Form';
import Featured from '@/components/Featured';
import Reviews from '@/components/Reviews';
import Treatment from '@/components/Treatment';
import Gallery from '@/components/Gallery';
import Hospitals from '@/components/Hospitals';
import Cta from '@/components/Cta';
import Info from '@/components/Info';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='mx-auto'>
      <Head>
        <title>Yogesh Jain</title>
        <link rel="icon" href="/Dr Yogesh Jain.jpg" sizes="any" />

        {/* Organization Schema - Medical Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Yogesh Jain",
              "url": "https://www.dryogeshjain.in/",
              "logo": "https://www.dryogeshjain.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "090048 03606",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en",
              },
            }),
          }}
        />

        {/* {/* Local Business Schema - Physician  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Yogesh Jain",
              "image": "https://www.dryogeshjain.in/logo.png",
              "@id": "",
              "url": "https://www.dryogeshjain.in/",
              "telephone": "090048 03606",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ganapatrao Kadam Marg",
                "addressLocality": "Mumbai",
                "postalCode": "400013",
                "addressCountry": "IN",
              },
            }),
          }}
        />
      </Head>

      <Hero />
      <Achievements />
      <Aboutus />
      <Treatment />
      <Hospitals />
      <Cta />
      <Reviews />
      <Info />
      <Gallery />
      {/* <Featured/> */}
      <Form />
    </div>
  );
}
