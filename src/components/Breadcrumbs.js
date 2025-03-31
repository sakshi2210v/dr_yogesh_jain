import React from "react";
import Link from "next/link";

const BreadCrumbs = ({ breadCrumbs }) => {
  return (
    <section className="py-2 sm:py-2 bg-blue-100">
      <div className="container max-w-screen-xl mx-auto px-4">
        <ol className="inline-flex flex-wrap text-gray-600 space-x-0 md:space-x-0 items-center">
          {breadCrumbs?.map((breadCrumb, index) => (
            <li key={index} className="inline-flex items-center">
              <Link
                href={breadCrumb.url}
                className="text-gray-600 hover:text-blue-600"
              >
                {breadCrumb.name} /
              </Link>
              {breadCrumbs?.length - 1 !== index && (
                <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
              )}
            </li>
          ))} 
        </ol>
      </div>
    </section>
  );
};

export default BreadCrumbs;
