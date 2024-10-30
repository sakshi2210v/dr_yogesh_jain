"use client";

import Image from "next/image";
import React from "react";
import doctor from "../assets/doctor.png";
import { motion } from "framer-motion";
import { slideIn, textVariant, textVariant2 } from "@/utils/motion";
import Button from "./Button";
const Hero = () => {
  return (
    <div>
       <div className="relative pt-14">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        </div>
    <div className="flex flex-wrap-reverse justify-center items-center max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
      <motion.div
        className="md:w-[50%]  "
        variants={slideIn("left", 2, 0)}
        initial="hidden"
        whileInView="show"
      >
        <motion.p
          variants={slideIn("up", 1, 0)}
          initial="hidden"
          whileInView="show"
          className="md:text-5xl md:mt-0 mt-6  text-3xl md:leading-snug  text-gray-800 font-semibold"
        >
          Welcome to{" "}
          <span className="font-bold text-primary">
            {" "}
            Dr. Yogesh Jain&apos;s{" "}
          </span>
          Internal Medicine Practice.
        </motion.p>
        <p className="md:text-xl text-lg mt-6 text-gray-600">
          Expert in adult health, offering personalized care for optimal
          well-being. Trust his vast experience and compassion at his Internal
          Medicine Practice for a healthier life.
        </p>
        <div className="flex md:justify-start justify-center">
        <motion.button
          variants={slideIn("down", 1, 0)}
          initial="hidden"
          whileInView="show"
          href="https://calendly.com/docyogeshjain/docyogeshjain"
          className="rounded-full bg-green-600 hover:bg-green-700 text-white  mt-6 md:mx-0 "
        >
         <Button/>
        </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="rounded-lg md:w-[50%] md:max-h-screen"
        initial="hidden"
        whileInView="show"
      >
        <Image src={doctor} className="rounded-lg mt-6" />
      </motion.div>
    </div>
    </div>
  );
};

export default Hero;
