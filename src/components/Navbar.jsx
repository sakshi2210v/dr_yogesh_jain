"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Bars3Icon,
  HomeIcon,
  NewspaperIcon,
  PhoneArrowUpRightIcon,
  PhotoIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import treate from "../assets/icons/icon.png";
import { navVariants } from "@/utils/motion";
import Button from "./Button";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex   justify-between items-center py-4 max-w-7xl px-4 md:px-6 lg:px-8 mx-auto"
    >
      <Link
        className="text-2xl font-semibold text-blue-900 cursor-pointer"
        href="/"
      >
        <img src="/logo.png" alt="" srcset="" className="w-16 h-16" />
      </Link>
      <ul
        className="z-[200] shadow-sm border border-gray-300 rounded-full md:px-4 py-3 md:flex hidden fixed top-[24px] bg-white mx-auto left-[50%]"
        style={{ transform: "translateX(-50%)" }}
      >
        <li className="px-4 text-gray-600">
          <Link href="/">Home</Link>
        </li>
        <li className="px-4 text-gray-600">
          <Link href="/treatment">Treatment</Link>
        </li>
        <li className="px-4 text-gray-600">
          <Link href="/news">News</Link>
        </li>

        <li className="px-4 text-gray-600">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="px-4 text-gray-600">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div
        href="https://calendly.com/docyogeshjain/docyogeshjain"
        className="rounded-full bg-green-600 hover:bg-green-700 text-white  md:inline hidden"
      >
        <Button />
      </div>
      {open ? (
        <XMarkIcon
          className="md::hidden relative w-[35px] z-[2010]"
          onClick={() => setOpen(false)}
        />
      ) : (
        <Bars3Icon
          className="md:hidden relative w-[35px] z-[100]"
          onClick={() => setOpen(true)}
        />
      )}

      <div
        className={
          open
            ? "sidebar z-[200] w-[90%] py-12 px-5  bg-white h-full "
            : "hidden"
        }
      >
        <ul className="sm:hidden flex flex-col nav-mobile">
          <li
            className="px-4 flex justify- items-center "
            onClick={() => setOpen(false)}
          >
            <HomeIcon
              className="w-[29px] h-[29px] color-gray-600  mr-2"
              color="#4f4d4d"
            />
            <Link href="/">Home</Link>
          </li>
          <li
            className="px-4 flex justify- items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src={treate}
              className="w-[29px] h-[29px] color-gray-600 mr-2"
            />
            <Link href="/treatment">Treatment</Link>
          </li>
          <li
            className="px-4 flex justify- items-center"
            onClick={() => setOpen(false)}
          >
            <NewspaperIcon
              className="w-[29px] h-[29px] color-gray-600  mr-2"
              color="#4f4d4d"
            />
            <Link href="/news">News</Link>
          </li>

          <li
            className="px-4 flex justify- items-center"
            onClick={() => setOpen(false)}
          >
            <PhotoIcon
              className="w-[29px] h-[29px] color-gray-600  mr-2"
              color="#4f4d4d"
            />
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            className="px-4 flex justify- items-center"
            onClick={() => setOpen(false)}
          >
            <PhoneArrowUpRightIcon
              className="w-[29px] h-[29px] color-gray-600  mr-2"
              color="#4f4d4d"
            />

            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={()=>setOpen(false)} >
        <Button />
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
