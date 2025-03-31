"use client";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className="bg-primary flex flex-wrap md:p-20 p-10 items-center justify-between">
      <div className="md:w-3xl">
        <motion.p
          variants={textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-white md:text-3xl text-2xl font-semibold md:text-left text-center"
        >
          Are you still facing confusion?
        </motion.p>
        <p className="text-white text-lg mt-4  md:text-left text-center">
          Dr. Yogesh Jain is a compassionate best internal medicine doctor in
          mumbai, recognized as one of the best physician in Mumbai, with
          extensive experience in treating various illnesses. He specializes in
          diabetic, cardiometabolic, and infectious diseases, particularly in
          patients with underlying conditions. Dr. Yogesh takes a holistic
          approach to patient care, considering physical, emotional, and
          socio-economic aspects.
        </p>
      </div>
      <div className="my-8 max-0 mx-auto md:mx-0">
        <Button />
      </div>
    </div>
  );
};

export default Cta;
