import Image from "next/image";
import React from "react";
import img1 from "@/assets/img1.png";
import Form from "@/components/Form";
import source from '../../data.json'
import NewsCards from "@/components/News";
import Cta from "@/components/Cta";
const page = () => {

  return (
    <div>
      <div className="bg-green-100 shadow-sm my-8  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
          <p className="text-lg  font-semibold text-green-600 text-center">
            News
          </p>
        </div>
      <NewsCards/>
      <Cta />
    </div>
  );
};

export default page;
