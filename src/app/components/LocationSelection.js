"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaMapMarkerAlt } from "react-icons/fa";

// location data
const locations = [
  "  میدان آزادی , خیابان بهارلو",
  "میدان ولیعصر , خیابان سیف",
  "میدان حر , خیابان محتهدی",
];

export default function LocationSelection() {
  const [location, setLocation] = useState(" محل مورد نظر  ...");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* Button */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col  justify-center items-center xl:items-start">
          <div className="w-full h-16 xl:h-full flex justify-center  ">
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                <div className=" text-primary text-[15px] font-bold">انتخاب مکان</div>
              </div>
              <div
                className=" font-medium text-[14px] text-[#e7e3e3b1] text-center xl:ml-6 xl:text-right
              "
              >
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* Items */}
        <Menu.Items className="dropdown-menu  font-bold text-md absolute -top-56 xl:top-[90px] left-1/2 xl:right-24 z-10 transform -translate-x-1/2 xl:translate-x-0  text-center xl:text-center w-full bg-[#ef0008ec] max-w-[332px] py-6 rounded-[10px]">
         <div className=" hidden xl:block absolute -top-2 right-4 -z-50 rotate-45 w-6 h-6 bg-[#DD0007]  "></div>
          {locations.map((location, index) => {
            return (
              <div
              onClick={()=> setLocation(location)}
                key={index}
                className="cursor-pointer text-primary bg-[#ef0008ec] py-4 xl:pl-10 hover:bg-red-600 text-[16px] "
              >
                {location}
              </div>
            );
          })}
        </Menu.Items>
      </div>
    </Menu>
  );
}
