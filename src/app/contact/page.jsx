import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Image from "next/image";
import React from "react";
import img from '@/assets/gallery.png'
import Info from "@/components/Info";

export const metadata = {
  title: 'Contact Dr. Yogesh Jain for Professional Gallery Insights',
  icons: {
    icon: '/Dr Yogesh Jain.jpg',
  },
  description: 'Get in touch with Dr. Yogesh Jain to learn more about his gallery and services. Reach out today for inquiries related to your health and wellness needs.',
}
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
