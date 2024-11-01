"use client";
import React, { useState, useEffect, useMemo } from "react";
import source from "@/data.json";
import { usePathname, useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import BreadCrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import Image from "next/image";

const Icon = React.memo(() => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="16" cy="16" r="15.6" stroke="#12AC49" strokeWidth="0.8" />
    <path
      d="M9.41406 17.4126L12.2353 21.1743L22.5801 10.8296"
      stroke="#12AC49"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

const Page = () => {
  const [data, setData] = useState(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams) {
      const matchedData = source.treatments.find(
        (e) => e.lname === pathname.split("/")[2]
      );
      if (matchedData) {
        setData(matchedData);
      } else {
        router.push("/");
      }
    }
  }, [searchParams, pathname]);

  const breadcrumbs = useMemo(() => {
    return data
      ? [
          { name: "Home", url: "/" },
          { name: "Treatment", url: "/treatment" },
          { name: data.name, url: `/treatment/${data.lname}` },
        ]
      : [];
  }, [data]);

  const breadcrumbSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: breadcrumb.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL}${breadcrumb.url}`,
      })),
    }),
    [breadcrumbs]
  );

  return (
    <>
      <Head>
        <title>{data?.title || "Default Title"}</title>
        <meta
          name="description"
          content={data?.description || "Default description"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </Head>

      {data ? (
        <>
          <BreadCrumbs breadCrumbs={breadcrumbs} />
          <div className="flex justify-center flex-col items-center my-10">
            <p className="text-3xl font-semibold text-green-700">{data.name}</p>
            <p className="mt-2 text-center text-gray-500">{data.desc}</p>
            <div className="flex flex-wrap md:max-w-7xl mt-10">
              <div className="md:w-1/2 border-r-2 border-grey-100 px-6 w-full">
                <Image
                  src={data.link}
                  alt={data.alt}
                  className="rounded-xl min-h-[300px] w-full mb-10"
                  layout="responsive"
                  width={700}
                  height={475}
                />
                {data.body && <div>{parse(data.body)}</div>}
              </div>
              <div className="md:w-1/2 md:px-10 px-6 py-6 w-full">
                <p className="text-3xl text-green-700 mb-4">
                  Treatments available
                </p>
                {data.treatments?.map((e) => (
                  <div className="flex items-center my-5" key={e.id}>
                    <div className="w-[30px] mr-2">
                      <Icon />
                    </div>
                    <p className="text-lg ml-2 text-gray-600">{e.name}</p>
                  </div>
                ))}
              </div>
              <div className="w-full flex justify-center my-10">
                <Button />
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Page;
