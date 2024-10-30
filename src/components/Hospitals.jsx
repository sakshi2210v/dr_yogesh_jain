"use client"
import React from "react";
import logo from "@/assets/logo/logo1.jpg";
import logo1 from "@/assets/logo/logo2.png";
import logo2 from "@/assets/logo/logo3.png";
import logo3 from "@/assets/logo/logo4.jpeg";
import logo4 from "@/assets/logo/logo5.png";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";
const Hospitals = () => {
  return (
    <div className="my-10 max-w-7xl mx-auto" id="hospitals">
      <motion.p  initial="hidden"
    whileInView="show" variants={textVariant(0.2)} className="md:text-3xl text-2xl px-2 font-semibold text-center">
        Trusted by <span className="text-secondary">Consulting Hospitals</span>
      </motion.p>
      <div className="flex flex-wrap justify-around my-14">
      <div className="grid gap-10">

        <Marquee>
          <Image
            src={logo}
            className="max-w-[260px] h-[100px] aspect-[3/2] object-contain mx-20"
          />
          <Image
            src={logo2}
            className="max-w-[400px] h-[80px] aspect-[3/2] object-contain"
          />
          <Image
            src={logo3}
            className="max-w-[400px] h-[80px] aspect-[3/2] object-contain"
          />
          <Image
            src={logo4}
            className="max-w-[400px] h-[80px] aspect-[3/2] object-contain"
          />
        </Marquee>
       </div>

      </div>
    </div>
  );
};

export default Hospitals;
