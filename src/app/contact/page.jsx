import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Image from "next/image";
import React from "react";
import img from "@/assets/gallery.png";
import Info from "@/components/Info";
import BreadCrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

export const metadata = {
  title: "Best Physician in Lower Parel | Dr. Yogesh Jain Contact Details",
  icons: {
    icon: "/logo.jpg",
  },
  description:
    "Get in touch with Dr. Yogesh Jain, the leading physician in Lower Parel, Mumbai. Book consultations for expert medical care across multiple specialties.",
};
const page = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
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
        <div className="my-24">
          <Info />
        </div>
        <Cta />
        <Reviews />
      </div>
    </>
  );
};

export default page;
