import Image from "next/image";
import React from "react";
import img1 from "@/assets/img1.png";
import Form from "@/components/Form";
import source from "../../data.json";
import NewsCards from "@/components/News";
import Cta from "@/components/Cta";
import BreadCrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL}${breadcrumb.url}`, // Ensure this is your website's base URL
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>
      <div>
        <BreadCrumbs breadCrumbs={breadcrumbs} />
        <div className="bg-green-100 shadow-sm my-8  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[240px]">
          <h1 className="text-lg  font-semibold text-green-600 text-center">
            News
          </h1>
        </div>
        <NewsCards />
        <Cta />
      </div>
    </>
  );
};

export default page;
