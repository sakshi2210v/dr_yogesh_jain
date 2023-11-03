"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import img1 from "@/assets/images/001.jpg";
import img2 from "@/assets/images/002.jpg";
import img3 from "@/assets/images/003.jpg";
import img4 from "@/assets/images/004.jpg";
import img5 from "@/assets/images/005.jpg";
import img6 from "@/assets/images/006.jpg";
import img7 from "@/assets/images/007.jpg";
import img8 from "@/assets/images/008.jpg";
import img9 from "@/assets/images/009.jpg";


import Link from "next/link";
export default function Gallery() {
  //   const swiperRef = useRef<SwiperCore>();
  return (
    <div className=" mx-auto m-4 my-24 md:p-0 p-2 ">
      <div className="bg-green-100 shadow-sm  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
        <p className="text-lg  font-semibold text-green-600 text-center">
       Gallery
        </p>
      </div>
      <p className="md:text-3xl text-2xl px-2 text-center mt-4 font-semibold">
        How our <span className="text-secondary"> Clinic </span>looks like?
      </p>

      <div className=" mx-auto mb-12 my-14 md:max-w-7xl  ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={10}
          roundLengths={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="mx-auto">
            <Image src={img1} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img2} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img3} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img4} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img5} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img6} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img7} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img8} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          <SwiperSlide className="mx-auto">
            <Image src={img9} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide>
          {/* <SwiperSlide className="mx-auto">
            <Image src={img10} width="600" className="mx-auto rounded-xl" />
          </SwiperSlide> */}
        </Swiper>
       
      </div>
      <div className="flex justify-center mb-4">
      <Link href="/gallery" className="bg-green-600 rounded-full text-white px-7 py-2 text-center mx-auto">
          View More
        </Link>
        </div>
    </div>
  );
}
