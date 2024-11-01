import Image from "next/image";
import React from "react";
import img1 from "@/assets/img1.png";
import Form from "@/components/Form";
import source from "../../data.json";
import NewsCards from "@/components/News";
import Cta from "@/components/Cta";
import BreadCrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Latest Blogs on Health and Wellness | Dr. Yogesh Jain",
  icons: {
    icon: "/logo.jpg",
  },
  description:
    "Read informative blogs on health, wellness, and lifestyle by Dr. Yogesh Jain. Stay updated with insights and tips for better living. Visit for more details.",
};

const page = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "News", url: "/news" },
  ];

  return (
    <div>
      <BreadCrumbs breadCrumbs={breadcrumbs} />
      <div className="bg-green-100 shadow-sm my-8  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
        <p className="text-lg  font-semibold text-green-600 text-center">
          News
        </p>
      </div>
      <NewsCards />
      <Cta />
    </div>
  );
};

export default page;
