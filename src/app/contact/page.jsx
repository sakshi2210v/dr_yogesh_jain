import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Image from "next/image";
import React from "react";
import img from '@/assets/gallery.png'
import Info from "@/components/Info";
const page = () => {
  return (
    <div>
      <div className="my-24">
      <Info/>
      </div>
      <Cta />
      <Reviews />
    </div>
  );
};

export default page;
