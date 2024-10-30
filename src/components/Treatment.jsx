"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import icon from "@/assets/icons/icon.png";
import arrow from "@/assets/icons/arrow.png";
import data from "@/data.json";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
const Treatment = ({ bg }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div
     id="treatment"
      className={
        bg
          ? "bg-[#fff] bg-opacity-30 py-10"
          : "bg-[#2ECC80] bg-opacity-30 py-10"
      }
    >
      <div className="max-w-7xl  md:px-6 lg:px-8 mx-auto">
        <div className="bg-green-100 shadow-sm  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
          <p className="text-lg  font-semibold text-green-600 text-center">
            Treatment
          </p>
        </div>
        <p className="md:text-3xl text-2xl px-2 text-center mt-4 font-semibold">
          What our <span className="text-secondary"> Doctor </span>has to share
          with you?
        </p>
        <div className="grid sm:grid-cols-3 row-span-3   gap-[20px] max-w-7xl mx-auto py-6 md:px-0 px-4">
          {data?.treatments?.map((item) => (
            <motion.div
              variants={slideIn("left", 1, 0.4)}
              initial="hidden"
              whileInView="show"
              className="bg-[#f5f5f5] hover:bg-white max-w-md p-8 rounded-lg "
              key={item.id}
            >
              <img src={item.icon} alt="icon" className="w-[48px]" />
              <p className="md:text-xl text-lg my-4">{item.name}</p>
              <p className="text-lg md:text-md text-gray-600">{item.desc}</p>
              <Link
                href={"/treatment/" + item.lname}
                className="text-primary flex text-md items-center mt-4"
              >
                Learn More{" "}
                <span className="ml-2">
                  {" "}
                  <Image src={arrow} alt="icon" width="40" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Treatment;
