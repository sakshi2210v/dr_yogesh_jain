"use client";
import Image from "next/image";
import React from "react";
import star from "../assets/star.svg";
import { motion } from "framer-motion";
import { slideIn, textVariant, textVariant2 } from "@/utils/motion";
import clsx from 'clsx'
function StarIcon(props) {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )
  }
  function StarRating({ rating }) {
    return (
      <div className="flex">
        {[...Array(5).keys()].map((index) => (
          <StarIcon
            key={index}
            className={clsx(
              'h-8 w-8',
              rating > index ? 'fill-yellow-500' : 'fill-gray-300'
            )}
          />
        ))}
      </div>
    )
  }
  
const Achievements = () => {
  return (
    <motion.div className="border my-10 shadow-sm border-gray-300 rounded-lg flex flex-wrap justify-between md:p-8 px-4 py-8 mx-4 md:mx-auto mb-10 max-w-7xl">
      <div>
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="md:text-2xl text-xl md:ml-4 md:text-left text-center font-semibold  "
        >
          Our Achievements as a Doctor.
        </motion.p>
        <div className="flex flex-wrap justify-center mt-6">
          <div className="mx-4 md:my-0 my-4">
            <p className="text-center md:text-lg text-2xl">10+</p>
            <p className="md:text-md text-xl">Years of Experience</p>
          </div>
          <div className="mx-4 md:my-0 my-4">
            <p className="text-center md:text-lg text-2xl">2+</p>
            <p className="md:text-md text-xl">Location available</p>
          </div>
          <div className="mx-4 md:my-0 my-4">
            <p className="text-center md:text-lg text-2xl">10,000+</p>
            <p className="md:text-md text-xl">Happy Patients</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-wrap items-center">
        <div className="mx-4 md:my-0 my-8">
          <p className="text-5xl text-secondary text-center">4.9</p>
          <div className="flex justify-center">
          <StarRating rating={4.9} />
          </div>
          <p className="text-sm text-center mt-2 font-semibold text-blue-500">
            Google
          </p>
        </div>
        <div className="mx-4 md:my-0 my-4">
          <p className="text-5xl text-secondary text-center">4.1</p>
          <div className="flex justify-center">
          <StarRating rating={4} />
          </div>
          <p className="text-sm text-center mt-2 font-semibold text-blue-500">
            Justdial
          </p>
        </div>
        <div className="mx-4 md:my-0 my-4">
          <p className="text-5xl text-secondary text-center">4.9</p>
          <div className="flex justify-center">
          <StarRating rating={4.9} />
          </div>
          <p className="text-sm text-center mt-2 font-semibold text-blue-500">
           Offline Client
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
