import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Image from "next/image";
import React from "react";

import img1 from "@/assets/images/001.jpg";
import img2 from "@/assets/images/002.jpg";
import img3 from "@/assets/images/003.jpg";
import img4 from "@/assets/images/004.jpg";
import img5 from "@/assets/images/005.jpg";
import img6 from "@/assets/images/006.jpg";
import img7 from "@/assets/images/007.jpg";
import img8 from "@/assets/images/008.jpg";
import img9 from "@/assets/images/009.jpg";
import img10 from "@/assets/images/010.JPG";
import img12 from "@/assets/images/011.JPG";
import img11 from "@/assets/images/012.jpg";


const page = () => {
  return (
    <div>
      <div className=" mx-auto m-4 md:p-0 p-2">
      <div className="bg-green-100 shadow-sm my-8  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
          <p className="text-lg  font-semibold text-green-600 text-center">
            Gallery
          </p>
        </div>
        <p className="md:text-3xl text-2xl text-center mt-4 font-semibold">
          How our <span className="text-secondary"> Clinic </span>looks like?
        </p>

        <div className="  mb-12 mt-12 grid md:grid-cols-4 gap-[20px] mx-auto md:max-w-7xl max-w-6xl ">
          <Image src={img1}  className="mx-auto rounded-lg " />
          <Image src={img2}  className="mx-auto rounded-lg " /> 
          <Image src={img3}  className="mx-auto rounded-lg " />
          <Image src={img4}  className="mx-auto rounded-lg " />
          <Image src={img5}  className="mx-auto rounded-lg " />
          <Image src={img6}  className="mx-auto rounded-lg " />
          <Image src={img7}  className="mx-auto rounded-lg " />
          <Image src={img8}  className="mx-auto rounded-lg " />
          <Image src={img9}  className="mx-auto rounded-lg " />
          <Image src={img10}  className="mx-auto rounded-lg " />
          <Image src={img11}  className="mx-auto rounded-lg " />
          <Image src={img12}  className="mx-auto rounded-lg " />
        </div>
      </div>
      <Cta />
      <Reviews />
    </div>
  );
};

export default page;
