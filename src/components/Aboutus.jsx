"use client";
import React from "react";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import doctor from "@/assets/doctor.png";
import Image from "next/image";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import doc from '@/assets/icons/doc.png'
import data from "@/data.json";
import { AcademicCapIcon, ChartBarIcon, ChartPieIcon, CursorArrowRippleIcon } from "@heroicons/react/20/solid";
import TreatCard from "./TreatCard";
const Tick = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="mr-3 w-[32px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15.6" stroke="#12AC49" stroke-width="0.8" />
      <path
        d="M9.41406 17.4126L12.2353 21.1743L22.5801 10.8296"
        stroke="#12AC49"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const Aboutus = () => {
  return (
    <div id="aboutus" className="max-w-7xl px-3 py-12 md:px-6 lg:px-8 mx-auto">
      <div className="bg-green-100 shadow-sm  border border-green-300 rounded-full mx-auto px-4 py-2 max-w-[280px]">
        <p className="text-lg  font-semibold text-green-600 text-center">
          About Dr. Yogesh Jain
        </p>
      </div>
      <p className="md:text-3xl text-2xl font-semibold text-center my-4 px-2">
        What our <span className="text-secondary"> Doctor </span> has to share
        with you?
      </p>
      <Tab.Group>
        <Tab.List className="flex flex-wrap  md:justify-between justify-center items-center max-w-4xl mx-auto ">
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "  outline-none text-secondary text-lg border-b-4 border-secondary  px-14 py-4"
                    : " rounded-full outline-none text-gray-700 text-lg px-14 py-4"
                }
              >
                About Doctor
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "  outline-none text-secondary text-lg border-b-4 border-secondary  px-14 py-4"
                    : " rounded-full outline-none text-gray-700 text-lg px-14 py-4"
                }
              >
                Treatments Available
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected
                    ? "  outline-none text-secondary text-lg border-b-4 border-secondary  px-14 py-4"
                    : " rounded-full outline-none text-gray-700 text-lg px-14 py-4"
                }
              >
                Doctor Qualifications
              </button>
            )}
          </Tab>
        </Tab.List>
        <hr />
        <Tab.Panels>
          <Tab.Panel>
            <div className="flex flex-wrap max-w-1/2 ">
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("left", 2, 0)}
              >
                <Image src={doctor} width="500" className="my-10" />
                <p className="text-primary text-xl mt-2">Dr. Yogesh Jain</p>
                <p className="text-lg text-secondary">
                MBBS, Diplomate of National Board (DNB), MD (Internal Medicine)
                </p>
              </motion.div>
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("right", 3, 0)}
                className="md:max-w-[50%]  md:py-20 md:pl-8 py-8"
              >
                <p className="md:text-2xl font-semibold text-xl text-gray-900">
                  Dr. Yogesh Jain: Compassionate, experienced Internal Medicine
                  Physician, trusted for personalized care, and optimizing
                  patient wellbeing.
                </p>

                <p className="mt-10 md:text-lg text-gray-600">
                  Dr. Yogesh Jain is a compassionate Internal Medicine Physician
                  with extensive experience in treating various illnesses. He
                  specializes in diabetic, cardiometabolic, and infectious
                  diseases, particularly in patients with underlying conditions.
                  Dr. Yogesh takes a holistic approach to patient care,
                  considering physical, emotional, and socio-economic aspects.
                  <br />
                  <br />
                  He is dedicated to delivering high-quality medical care and
                  empowers patients through counseling and education on
                  preventive measures and healthy lifestyles. Patients trust him
                  for his genuine concern and expertise in optimizing their
                  well-being.
                </p>
              </motion.div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div className="flex  flex-wrap max-w-1/2">
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("left", 2, 0)}
              >
                <Image src={doctor} width="500" />
                <p className="text-primary text-xl mt-2">Dr. Yogesh Jain</p>
                <p className="text-lg text-secondary">
                MBBS, Diplomate of National Board (DNB), MD (Internal Medicine)
                </p>
              </motion.div>
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("right", 2, 0)}
                className="md:max-w-[50%] md:px-8  py-10"
              >
                  <div className="flex  flex-wrap justify-center items-center md:mt-20">
                {data?.treatments?.map((item) => (
                  <TreatCard data={item} key={item.id}/>
                ))}
                </div>
                {/* <ul className="ulitem">

                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Endocrinology: Unlocking Hormonal Balance for a Vibrant
                    Life.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Cardiology: Heart care that beats with excellence.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Cardiovascular Medicine: Heart care with expertise,
                    compassion, and your well-being in mind.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Diabetology: Empowering Lives, Defeating Diabetes Together.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Infectious Diseases and Community Health: Protecting
                    communities, one infection at a time.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Preventive and Social Medicine: Empowering Healthier Lives
                    Together!
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Pulmonology: Breathing life into your lung health.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Rheumatology: Conquering autoimmune challenges together.
                  </li>
                  <li>
                    <div className="w-[30px] mr-3">
                      <Tick />
                    </div>
                    Neurology: Guiding your neurological health towards a
                    brighter tomorrow.
                  </li>
                </ul> */}
              </motion.div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {" "}
            <div className="flex p-4 flex-wrap max-w-1/2">
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("left", 2, 0)}
              >
                <Image src={doctor} width="500" />
                <p className="text-primary text-xl mt-2">Dr. Yogesh Jain</p>
                <p className="text-lg text-secondary">
                MBBS, Diplomate of National Board (DNB), MD (Internal Medicine)
                </p>
              </motion.div>
              <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={slideIn("right", 2, 0)}
                className="md:max-w-[50%] md:px-8  py-10"
              >
                <ul className="ul-treate">
                  <p className="text-xl my-4 flex">
                    <div className="w-[30px] mr-3 ">
                      <AcademicCapIcon color="green" />
                    </div>{" "}
                    Education{" "}
                  </p>
                  <li>
                    Completed MBBS from the esteemed Krishna Institute of
                    Medical Sciences (KIMS) in Karad
                  </li>
                  <li>
                    Pursued an enriching internship at Seth GS Medical College
                    and KEM Hospital in Mumbai, gaining exposure to diverse
                    medical cases.
                  </li>
                  <p className="text-xl my-4 flex">
                    <div className="w-[30px] mr-3 ">
                      <CursorArrowRippleIcon color="green" />
                    </div>
                    Specialization{" "}
                  </p>
                  <li>
                    Undertook Diplomate of National Board (DNB) at two renowned
                    hospitals in Mumbai - Rajawadi Hospital and D. Y. Patil
                    Hospital and Research Centre.
                  </li>
                  <li>
                    Acquired specialized training in various medical
                    disciplines, refining skills in patient management.
                  </li>
                  <p className="text-xl my-4 flex">
                    <div className="w-[30px] mr-3  ">
                      <Image src={doc} />
                    </div>
                    Clinical Experience{" "}
                  </p>
                  <li>
                    Served as a Junior Consultant at the prestigious P. D.
                    Hinduja National Hospital and Medical Research Centre,
                    Mumbai.
                  </li>
                  <li>
                    Collaborated with experienced professionals, contributing
                    expertise to diagnose and treat complex medical conditions.
                  </li>
                  <li>
                    Trained with Boston University School of Medicine, USA, and
                    BMJ for the treatment of diabetes in special situations,
                    complications, and comorbidities.{" "}
                  </li>
                </ul>
              </motion.div>
            </div>
          </Tab.Panel>

          {/* ... */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Aboutus;
