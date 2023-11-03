import Cta from '@/components/Cta'
import Reviews from '@/components/Reviews'
import Treatment from '@/components/Treatment'
import React from 'react'

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