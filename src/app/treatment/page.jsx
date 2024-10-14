import Cta from '@/components/Cta'
import Reviews from '@/components/Reviews'
import Treatment from '@/components/Treatment'
import React from 'react'

export const metadata = {
  title: 'Best Physician in Mumbai | Dr. Yogesh Jain Expert Medical Care',
  icons: {
    icon: '/logo.jpg',
  },
  description: 'Dr. Yogesh Jain, one of the best physicians in Mumbai, provides expert diagnosis and personalized treatment. Trust in his experience for comprehensive healthcare solutions.',
}

const page = () => {
  return (
    <div>
        <Treatment bg={true}/>
        <Cta/>
        <Reviews/>
    </div>
  )
}

export default page