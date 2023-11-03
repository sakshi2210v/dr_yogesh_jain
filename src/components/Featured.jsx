"use client";

import React from "react";
import source from '../data.json'
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import NewsCards from "./News";
const Featured = () => {
  return (
    <div className="md:max-w-5xl max-w-sm mx-auto mb-10 ">
      <div className="bg-green-100 shadow-sm  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
        <p className="text-lg  font-semibold text-green-600 text-center">
        News
        </p>
      </div>
      <p className="md:text-3xl text-2xl px-2  my-4  font-semibold text-center mt-4 mb-10">
        {" "}
        Updates <span className="text-secondary"> for you </span>
      </p>
      <NewsCards/>
    </div>
  );
};

export default Featured;
