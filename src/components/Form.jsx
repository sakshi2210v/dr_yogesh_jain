import React from 'react'
import Button from './Button'

const Form = () => {
  return (
    <div className='sm:p-20 p-6 formbg flex flex-wrap sm:py-10 py-10'>
        <div className="sm:w-[60%] md:px-20 mt-10">
            <p className="sm:text-4xl text-3xl text-white sm:text-left text-center">Book Your Consultation Now!</p>
            <p className="text-white mt-10 sm:text-left text-center mb-4">Experience Dr. Yogesh Jain&apos;s compassionate guidance for optimal health. Book your appointment now and unlock tailored solutions for your well-being, leading to a fulfilling and healthy life. Take the leap towards better health today! </p>
        </div>
        <div className='flex justify-center items-center sm:w-[40%] my-10 w-full'>
       <Button/>
        </div>
    </div>
  )
}

export default Form