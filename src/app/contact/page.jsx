import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Image from "next/image";
import React from "react";
import img from "@/assets/gallery.png";
import Info from "@/components/Info";
import BreadCrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Contact Dr. Yogesh Jain for Professional Gallery Insights",
  icons: {
    icon: "/logo.jpg",
  },
  description:
    "Get in touch with Dr. Yogesh Jain to learn more about his gallery and services. Reach out today for inquiries related to your health and wellness needs.",
};
const page = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbs={breadcrumbs} />
      <div className="my-24">
        <Info />
      </div>
      <Cta />
      <Reviews />
    </div>
  );
};

export default page;
