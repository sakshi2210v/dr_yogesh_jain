import BreadCrumbs from "@/components/Breadcrumbs";
import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Treatment from "@/components/Treatment";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Best Physician in Lower Parel | Dr. Yogesh Jain Expert Medical Care",
  icons: {
    icon: "/logo.jpg",
  },
  description:
    "Dr. Yogesh Jain, one of the best physician in lower parel provides expert diagnosis and personalized treatment. Trust in his healthcare solutions.",
};

const page = () => {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Treatment", url: "/treatment" },
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
        <Treatment bg={true} />
        <Cta />
        <Reviews />
      </div>
    </>
  );
};

export default page;
