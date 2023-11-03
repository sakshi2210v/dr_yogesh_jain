import Image from "next/image";
import React from "react";
import Link from "next/link";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: (props) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="48"
            height="48"
            rx="24"
            fill="url(#paint0_linear_1492_4768)"
          />
          <path
            d="M29.9821 11H25.9066C23.4881 11 20.7979 12.0371 20.7979 15.6115C20.8097 16.857 20.7979 18.0498 20.7979 19.3921H18V23.9316H20.8845V37H26.185V23.8454H29.6835L30 19.3794H26.0936C26.0936 19.3794 26.1024 17.3928 26.0936 16.8158C26.0936 15.4033 27.5352 15.4842 27.6219 15.4842C28.3079 15.4842 29.6417 15.4862 29.9841 15.4842V11H29.9821Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1492_4768"
              x1="24"
              y1="3.13145e-07"
              x2="13.2973"
              y2="46.4859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16A349" />
              <stop offset="1" stopColor="#16A349" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/",
      icon: (props) => (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="48"
            height="48"
            rx="24"
            fill="url(#paint0_linear_1492_4765)"
          />
          <g clipPath="url(#clip0_1492_4765)">
            <path
              d="M12 14.7879C12 13.9798 12.2703 13.3131 12.8108 12.7879C13.3513 12.2626 14.0541 12 14.9189 12C15.7683 12 16.4556 12.2586 16.9807 12.7758C17.5212 13.3091 17.7915 14.004 17.7915 14.8606C17.7915 15.6364 17.529 16.2828 17.0039 16.8C16.4633 17.3333 15.7529 17.6 14.8726 17.6H14.8494C14 17.6 13.3127 17.3333 12.7876 16.8C12.2625 16.2667 12 15.5959 12 14.7879ZM12.3012 36V19.806H17.444V36H12.3012ZM20.2934 36H25.4363V26.9576C25.4363 26.3919 25.4981 25.9555 25.6216 25.6485C25.8378 25.099 26.166 24.6343 26.6062 24.2545C27.0463 23.8747 27.5984 23.6848 28.2625 23.6848C29.9923 23.6848 30.8571 24.905 30.8571 27.3454V36H36V26.7151C36 24.3232 35.4595 22.5091 34.3784 21.2727C33.2973 20.0364 31.8687 19.4182 30.0927 19.4182C28.1004 19.4182 26.5483 20.3151 25.4363 22.1091V22.1576H25.4131L25.4363 22.1091V19.806H20.2934C20.3243 20.3232 20.3398 21.9313 20.3398 24.6303C20.3398 27.3293 20.3243 31.1191 20.2934 36Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1492_4765"
              x1="24"
              y1="3.13145e-07"
              x2="13.2973"
              y2="46.4859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16A349" />
              <stop offset="1" stopColor="#16A349" />
            </linearGradient>
            <clipPath id="clip0_1492_4765">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(12 12)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/",
      icon: (props) => (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.480835"
            width="48"
            height="48"
            rx="24"
            fill="url(#paint0_linear_1492_4762)"
          />
          <g clipPath="url(#clip0_1492_4762)">
            <path
              d="M20.0006 24C20.0006 21.791 21.791 19.9997 24 19.9997C26.209 19.9997 28.0003 21.791 28.0003 24C28.0003 26.209 26.209 28.0003 24 28.0003C21.791 28.0003 20.0006 26.209 20.0006 24ZM17.8381 24C17.8381 27.4032 20.5968 30.1619 24 30.1619C27.4032 30.1619 30.1619 27.4032 30.1619 24C30.1619 20.5968 27.4032 17.8381 24 17.8381C20.5968 17.8381 17.8381 20.5968 17.8381 24ZM28.9658 17.5939C28.9658 18.3887 29.6103 19.0342 30.4061 19.0342C31.201 19.0342 31.8465 18.3887 31.8465 17.5939C31.8465 16.799 31.2019 16.1544 30.4061 16.1544C29.6103 16.1544 28.9658 16.799 28.9658 17.5939ZM19.1515 33.7677C17.9816 33.7144 17.3457 33.5195 16.9231 33.3548C16.3628 33.1367 15.9635 32.8769 15.5428 32.4572C15.1231 32.0375 14.8624 31.6381 14.6452 31.0779C14.4805 30.6553 14.2856 30.0194 14.2323 28.8494C14.1742 27.5845 14.1625 27.2045 14.1625 24C14.1625 20.7955 14.1751 20.4165 14.2323 19.1506C14.2856 17.9806 14.4814 17.3457 14.6452 16.9221C14.8633 16.3619 15.1231 15.9625 15.5428 15.5418C15.9625 15.1221 16.3619 14.8614 16.9231 14.6443C17.3457 14.4795 17.9816 14.2847 19.1515 14.2313C20.4165 14.1732 20.7964 14.1616 24 14.1616C27.2045 14.1616 27.5835 14.1742 28.8494 14.2313C30.0194 14.2847 30.6543 14.4805 31.0779 14.6443C31.6381 14.8614 32.0375 15.1221 32.4582 15.5418C32.8779 15.9616 33.1376 16.3619 33.3557 16.9221C33.5205 17.3447 33.7154 17.9806 33.7687 19.1506C33.8268 20.4165 33.8385 20.7955 33.8385 24C33.8385 27.2036 33.8268 27.5835 33.7687 28.8494C33.7154 30.0194 33.5195 30.6553 33.3557 31.0779C33.1376 31.6381 32.8779 32.0375 32.4582 32.4572C32.0385 32.8769 31.6381 33.1367 31.0779 33.3548C30.6553 33.5195 30.0194 33.7144 28.8494 33.7677C27.5845 33.8258 27.2045 33.8375 24 33.8375C20.7964 33.8375 20.4165 33.8258 19.1515 33.7677V33.7677ZM19.0527 12.0727C17.7751 12.1309 16.9027 12.3334 16.1399 12.63C15.3509 12.9363 14.6821 13.3473 14.0142 14.0142C13.3473 14.6811 12.9363 15.3499 12.63 16.1399C12.3334 16.9027 12.1309 17.7751 12.0727 19.0527C12.0136 20.3321 12 20.7412 12 24C12 27.2588 12.0136 27.6679 12.0727 28.9473C12.1309 30.2249 12.3334 31.0973 12.63 31.8601C12.9363 32.6491 13.3464 33.3189 14.0142 33.9858C14.6811 34.6527 15.3499 35.0627 16.1399 35.37C16.9037 35.6666 17.7751 35.8691 19.0527 35.9273C20.3331 35.9855 20.7412 36 24 36C27.2598 36 27.6679 35.9864 28.9473 35.9273C30.2249 35.8691 31.0973 35.6666 31.8601 35.37C32.6491 35.0627 33.3179 34.6527 33.9858 33.9858C34.6527 33.3189 35.0627 32.6491 35.37 31.8601C35.6666 31.0973 35.8701 30.2249 35.9273 28.9473C35.9855 27.6669 35.999 27.2588 35.999 24C35.999 20.7412 35.9855 20.3321 35.9273 19.0527C35.8691 17.7751 35.6666 16.9027 35.37 16.1399C35.0627 15.3509 34.6527 14.6821 33.9858 14.0142C33.3189 13.3473 32.6491 12.9363 31.8611 12.63C31.0973 12.3334 30.2249 12.1299 28.9483 12.0727C27.6688 12.0145 27.2598 12 24.001 12C20.7412 12 20.3331 12.0136 19.0527 12.0727"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_1492_4762"
              x1="24.4808"
              y1="3.13145e-07"
              x2="13.7781"
              y2="46.4859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#16A349" />
              <stop offset="1" stopColor="#16A349" />
            </linearGradient>
            <clipPath id="clip0_1492_4762">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(12 12)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ],
};
const Footer = () => {
  return (
    <div className=" sm:p-10 p-4 md:px-16 px-6">
      <div className="flex justify-between footer flex-wrap">
        <div className="max-w-sm">
          <p className="text-xl font-semibold text-primary">Dr. Yogesh Jain</p>
          <div className="">
            <div className="flex my-2 mt-4 items-center mr-3">
              <BuildingOffice2Icon
                width={30}
                color="#006BB6"
                className="mr-3"
              />
              <p className="text-table">Dr Yogesh Jain&apos;s Clinic</p>
            </div>
            <div className="flex my-2 ">
              <div className="w-[10%] mr-3">
                <MapPinIcon width={30} color="#006BB6" className="mr-3" />
              </div>
              <p className="text-table">
                Poonawala Building No - 3, Ganpatrao Kadam Marg, Lower Parel,
                Mumbai - 400013 (Near Peninsula Corporate Park, Opp. A to Z
                Industries)
              </p>
            </div>
            <div className="flex my-2">
              <div className="w-[10%] mr-3">
                <ClockIcon width={30} color="#006BB6" className="mr-3" />
              </div>
              <p className="text-table">Monday to Saturday - 7:30 pm to 11 pm</p>
            </div>
            <div className="flex my-2">
              <PhoneIcon width={30} color="#006BB6" className="mr-3" />
              <a href="tel:+919004803606" className="text-table">
                +91 90048 03606{" "}
              </a>
            </div>
            <div className="flex my-2">
              <EnvelopeIcon width={30} color="#006BB6" className="mr-3" />
              <p className="text-table">docyogeshjain@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-sm md:mt-0 mt-4">
          <div className="text-lg text-primary  mb-4 ">
            Aryan Hospital & ICCU
          </div>
          <ul>
            <li className="my-2">
              <a href="mailto:yogesh_jain96@yahoo.com" className="flex">
                <BuildingOffice2Icon width={"28px"} color="#16803C" />
                <p className="ml-2"> Aryan Hospital & ICCU </p>
              </a>
            </li>
          </ul>
          <ul>
            <li className="my-2 flex">
              <div className="w-[10%] mr-2">
                <MapPinIcon width={30} color="#16803C" />
              </div>
                <p className="">
                  Royal Garden, Next to Girnar Tower, Ambewadi, Kala Chowki,
                  Mumbai-400033
                </p>
            </li>
            <li>
              <div className="flex my-2">
                <PhoneIcon width={28} color="#16803C" />
                <a href="tel:+917208567901" className="text-black">
                  +91 72085 67901{" "}
                </a>
              </div>

              <div className="flex my-4">
                <ClockIcon width={30} color="#16803C" className="mr-3" />
                <p className="text-table">
                  Monday to Saturday - 11 am to 1:30 pm
                </p>
              </div>

              <div className="flex my-4">
                <EnvelopeIcon width={30} color="#16803C" className="mr-3" />
                <p className="text-table">docyogeshjain@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-lg text-primary  mb-4 ">Our Pages</div>
          <ul>
            <li className="my-2">
              <Link href="/">Home </Link>
            </li>
            <li className="my-2">
              <Link href="/treatment">Treatement </Link>
            </li>
            <li className="my-2">
              <Link href="/news">News</Link>
            </li>
            <li className="my-2">
              <Link href="/gallery">Gallery </Link>
            </li>

            <li className="my-2">
              <Link href="/contact"> Contact </Link>
            </li>
          </ul>
        </div>
        <div className="sm:mt-0 mt-6">
          <div className="text-lg text-primary mb-4 ">Important Links</div>
          <ul>
            <li className="my-2">
              <Link href={`/#${encodeURIComponent("aboutus")}`}>About us</Link>
            </li>
            <li className="my-2">
              <Link href={`/#${encodeURIComponent("treatment")}`}>
                Treatment
              </Link>
            </li>
            <li className="my-2">
              <Link href={`/#${encodeURIComponent("hospitals")}`}>
                Associated Hospitals
              </Link>
            </li>
            <li className="my-2">
              <Link href={`/#${encodeURIComponent("reviews")}`}>
                Testimonials
              </Link>
            </li>
            <li className="my-2">
              <Link href={`/#${encodeURIComponent("info")}`}>
                Clinic Location & Timing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-6 md:order-2 mt-4">
        <h5 className="text-xl font-semibold leading-6 text-primary mr-4">
          Follow us on social media:
        </h5>
        <div className="flex space-x-6 ">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-1 h-1" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
