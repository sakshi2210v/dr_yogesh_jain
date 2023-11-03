"use client";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

import React from 'react'
import Button from "./Button";

const Cta = () => {
    return (
        <div className='bg-primary flex flex-wrap md:p-20 p-10 items-center justify-between'>
            <div className='md:w-3xl'>
                <motion.p variants={textVariant(0.5)} initial="hidden"
    whileInView="show"  className='text-white md:text-3xl text-2xl font-semibold md:text-left text-center'>Are you still facing confusion?
    </motion.p>
                <p className='text-white text-lg mt-4  md:text-left text-center'>Dr. Yogesh Jain is here to offer professional guidance for the optimal cure. Book a consultation now to gain clarity and embark on your journey to improved well-being with confidence.</p>
            </div>
            <div className="my-8 max-0 mx-auto md:mx-0">
            <Button/>
            </div>
        </div>
    )
}

export default Cta