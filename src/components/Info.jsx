"use client";
import React from "react";
import location from "@/assets/icons/location.png";
import mail from "@/assets/icons/mail.png";
import phone from "@/assets/icons/phone.png";
import Image from "next/image";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import doctor from "@/assets/doctor.png";
import { motion } from "framer-motion";
import { textVariant2 } from "@/utils/motion";
import Button from "./Button";
import {
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
const trustedhospital = [
  {
    name: "Wockhardt Hospital (Mumbai Central)",
    number: "022-61784444/ 61784400",
  },
  {
    name: "Global Hospital (Parel)",
    number: "022-67670101",
  },
  {
    name: "Symbiosis Speciality Clinic (Dadar) ",
    number: "022-24305000/ 619292809",
  },
  {
    name: "Aryan Hospital & ICCU ",
    number: "+91 72085 67901",
  },
  {
    name: "Life Care Hospital (Prabhadevi) ",
    number: "022-242 1783",
  },
  {
    name: "Masina Hospital (Byculla)",
    number: "022-23714889/ 90/61841200",
  },
  {
    name: "Siddhachal Hospital (Lower Parel)",
    number: "022-31992248/ 8169438787",
  },
  {
    name: "Siddhivinayak Hospital & ICCU (Prabhadevi) ",
    number: "022-24318488/ 24318486",
  },
 
];
const Info = () => {
  return (
    <div className="max-w-7xl px-4 md:px-6 lg:px-8 mx-auto" id="info">
      <div className="flex  flex-wrap">
        <div className="md:w-[50%] w-full md:h-[500px] h-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.486300928752!2d72.8208395104121!3d18.998281182116074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf4550fb7117%3A0x1f27b4bcdecfe9cb!2sDr%20Yogesh%20M.Jain!5e0!3m2!1sen!2sin!4v1691318947091!5m2!1sen!2sin"
            frameborder="0"
            className="md:h-[400px] w-full h-[300px] border-radius-lg"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

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
              <div className="w-[10%]">
              <MapPinIcon width={30} color="#006BB6" className="mr-3" />
              </div>
              <p className="text-table">
                Poonawala Building No - 3, Ganpatrao Kadam Marg, Lower Parel,
                Mumbai - 400013 (Near Peninsula Corporate Park, Opp. A to Z
                Industries)
              </p>
            </div>
            <div className="flex my-2">
              <ClockIcon width={30} color="#006BB6" className="mr-3" />
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
        <div className=" md:w-[50%] w-full  md:px-16">
          <motion.p
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="md:text-3xl text-2xl px-2 font-semibold text-center md:mt-0 mt-4"
          >
            Trusted Hospital Network for Dr. Yogesh Jain&apos;s Patients:{" "}
            <span className="text-secondary">
              Quality Care, Seamless Admissions
            </span>
          </motion.p>
          <div className="grid md:grid-cols-2  gap-[6px] gap-x-3 mt-10">
          {trustedhospital.map((e) => (
              <div key={e.name} className="md:max-w-full mx-auto w-[300px]  border-2 border-primary  p-4 rounded-lg">
                <div className="flex">
                  <div className="w-[20%]">
                  <BuildingOffice2Icon
                    width={30}
                    className="mr-3 "
                    color="#16803C"
                  />
                  </div>
                  <p className="text-black md:text-sm text-md font-semibold">
                   {e.name}
                  </p>
                </div>
                <div className="flex mt-4">
                <div className="w-[20%]">
                  <PhoneIcon width={30} className="mr-3" color="#16803C" />
                  </div>
                  <p className="text-table text-sm">{e.number}</p>
                </div>
              </div>
          ))}
          </div>
          <div className="flex justify-center my-8">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
