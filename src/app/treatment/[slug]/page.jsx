"use client";
import React, { useState, useEffect } from "react";
import img1 from "@/assets/img1.png";
import source from "@/data.json";
import { usePathname, useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import BreadCrumbs from "@/components/Breadcrumbs";

const Icon = () => {
  return (
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
  );
};

const Page = ({ children }) => {
  const [data, setData] = useState({});
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams) {
      const matchedData = source.treatments.filter(
        (e) => e.lname === pathname.split("/")[2]
      )[0];
      setData(matchedData);

      // Dynamically set the document's title and meta description
      if (matchedData) {
        document.title = matchedData.title || "Default Title";
        const metaDescription = document.querySelector(
          'meta[name="description"]'
        );
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            matchedData.description || "Default description"
          );
        } else {
          const newMetaDescription = document.createElement("meta");
          newMetaDescription.title = "description";
          newMetaDescription.description =
            matchedData.description || "Default description";
          document.head.appendChild(newMetaDescription);
        }
      }
    } else {
      router.push("/");
    }
  }, [searchParams, pathname]);

  const breadcrumbs = data
    ? [
        { name: "Home", url: "/" },
        { name: "Treatment", url: "/treatment" },
        { name: data.name, url: `/treatment/${data.lname}` },
      ]
    : [];

  return (
    <>
      {/* Only render breadcrumbs if data exists */}
      {data && <BreadCrumbs breadCrumbs={breadcrumbs} />}
      {data ? (
        <div className="flex justify-center flex-col items-center my-10">
          <p className="text-3xl font-semibold text-green-700">{data.name}</p>
          <p className="mt-2 text-center text-gray-500">{data.desc}</p>
          <div className="flex flex-wrap md:max-w-7xl mt-10">
            <div className="md:w-1/2 border-r-2 border-grey-100 px-6 w-full">
              <img
                src={data.link}
                className="rounded-xl min-h-[300px] w-full mb-10"
              />
              <p>{data.body ? parse(data.body) : null}</p>
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
      ) : (
        <p>Loading...</p> // Add a loading state while data is being fetched
      )}
    </>
  );
};

export default Page;
