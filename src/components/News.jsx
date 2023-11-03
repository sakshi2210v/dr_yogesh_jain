"use client";

import React from "react";
import source from '../data.json'
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";

const NewsCards = () => {
  return (
    <div className="max-w-5xl mx-auto">
      
          {source.news.map((item)=>(
      <motion.div initial={"hidden"} whileInView={"show"} variants={slideIn("left",2.5,0)} key={item.id} className="flex md:flex-nowrap 	flex-wrap md:max-w-7xl max-w-[90%] md:max-h-[380px] mx-auto my-10 rounded-lg cardshadow overflow-hidden">
        <img src={item.img} className="md:w-[300px] w-full md:h-[380px] h-full" />
        <div className="md:p-8 p-4 md:max-w-[70%]">
          <p className="md:text-2xl text-xl my-4"> {item.title}</p>
          <p className="md:text-lg md:pr-10  text-gray-600 mb-4">
           {item.body}
          </p>
          <a href={item.link} className="text-lg mt-10 text-blue-500">Read more..</a>
        </div>
      </motion.div>
      ))}
    </div>
  )
}

export default NewsCards