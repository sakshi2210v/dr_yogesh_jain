"use client";
import { Dialog } from "@headlessui/react";
import {
  BuildingOffice2Icon,
  ClockIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";

const Button = () => {
  let [isOpen, setIsOpen] = useState(false);

  function handleDeactivate() {
    // ...
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 "
      >
        Book Appointment
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-6">
            <Dialog.Title className="text-xl text-green-700">
              Book an Appoinment
            </Dialog.Title>
            <hr className="my-2 w-full" />
            <div className=" flex flex-wrap">
              <div className="md:w-1/2">
                <div className="flex my-4 mt-4 items-center mr-3">
                  <BuildingOffice2Icon
                    width={30}
                    color="#006BB6"
                    className="mr-3"
                  />
                  <p className="text-table">Dr Yogesh Jain&apos;s Clinic</p>
                </div>
                <div className="flex my-4 ">
                  <div className="w-[10%] mr-3">
                    <MapPinIcon width={30} color="#006BB6" className="" />
                  </div>
                  <p className="text-table">
                    Poonawala Building No - 3, Ganpatrao Kadam Marg, Lower
                    Parel, Mumbai - 400013 (Near Peninsula Corporate Park, Opp. A to Z
                    Industries)
                  </p>
                </div>
                <div className="flex my-4">
                  <div className="w-[10%] mr-3">
                    <ClockIcon width={30} color="#006BB6" className="mr-3" />
                  </div>
                  <p className="text-table">
                    Monday to Saturday - 7:30 pm to 11 pm
                  </p>
                </div>
                <div className="flex my-4">
                  <PhoneIcon width={30} color="#006BB6" className="mr-3" />
                  <a href="tel:+919004803606" className="text-table">
                    +91 90048 03606{" "}
                  </a>
                </div>
                <div className="flex my-4">
                  <EnvelopeIcon width={30} color="#006BB6" className="mr-3" />
                  <p className="text-table">docyogeshjain@gmail.com</p>
                </div>
              </div>
              <div className="md:w-1/2 ">
                <div className="">
                  <div className="flex my-4 mt-4  mr-3">
                    <div className="w-[10%] mr-2">
                      <BuildingOffice2Icon
                        width={30}
                        color="#006BB6"
                        className="mr-3"
                      />
                    </div>
                    <p className="text-table ">Aryan Hospital & ICCU</p>
                  </div>
                  <div className="flex my-4 ">
                    <div className="w-[10%] mr-2">
                      <MapPinIcon width={30} color="#006BB6" className="mr-3" />
                    </div>
                    <p className="text-table">
                      Royal Garden, Next to Girnar Tower, Ambewadi, Kala Chowki,
                      Mumbai-400033
                    </p>
                  </div>
                  <div className="flex my-4">
                    <div className="w-[10%] mr-2">
                      <ClockIcon width={30} color="#006BB6" className="mr-3" />
                    </div>
                    <p className="text-table">
                      Monday to Saturday - 11 am to 1:30 pm
                    </p>
                  </div>
                  <div className="flex my-4">
                    <PhoneIcon width={30} color="#006BB6" className="mr-2" />
                    <a href="tel:+919004803606" className="text-table">
                      +91 72085 67901{" "}
                    </a>
                  </div>
                  <div className="flex my-4">
                    <EnvelopeIcon width={30} color="#006BB6" className="mr-2" />
                    <p className="text-table">docyogeshjain@gmail.com</p>
                  </div>
                </div>
              </div>
              <button className="bg-red-800 px-4 py-2 text-white rounded-2xl w-full" onClick={()=>setIsOpen(false)}>Close</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Button;
