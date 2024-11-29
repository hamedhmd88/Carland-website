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
  const [location, setLocation] = useState(" انتخاب مکان ...");
  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex-1">
        {/* Button */}
        <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start xl:border-r xl:border-black/10">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className=" text-[15px] font-bold">انتخاب مکان</div>
              </div>
              <div
                className=" font-medium text-[14px] text-secendary text-center xl:ml-6 xl:text-left
              "
              >
                {location}
              </div>
            </div>
          </div>
        </Menu.Button>
        {/* Items */}
        <Menu.Items className="dropdown-menu shadow-lg font-bold text-md absolute -top-56 xl:top-[90px] left-1/2 xl:right-0 z-10 transform -translate-x-1/2 xl:translate-x-0  text-center xl:text-right w-full bg-white max-w-[332px] py-6 rounded-[10px]">
          {locations.map((location, index) => {
            return (
              <div
              onClick={()=> setLocation(location)}
                key={index}
                className="cursor-pointer py-4 xl:pl-10 hover:bg-gray-50 text-[13px] "
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