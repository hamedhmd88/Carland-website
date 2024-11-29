"use client";

import React, { useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

// icons
import { FaClock, FaLongArrowAltLeft } from "react-icons/fa";

// hours
const hours = ["10:00 صبح", "12:00 صبح", "14:30 بعدازظهر", "16:00 بعدازظهر"];

function HoursSelection() {
  const [hour, setHour] = useState(" 10:00 صبح");
  return (
    <>
      <Menu as="div" className="w-full h-full flex xl:flex-row">
        <div className="relative flex-1">
          {/* Button */}
          <Menu.Button className="dropdown-btn w-full h-full flex flex-col  justify-center items-center xl:items-start">
            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
              <FaClock className="text-yellow-400 text-xl" />
              <div className=" text-primary text-[15px] font-bold">
                انتخاب ساعت
              </div>
            </div>
            <div className=" flex items-center justify-center gap-x-3">
              <div
                className=" font-medium text-[16px] text-[#e7e3e3b1] text-center xl:mr-5 
              "
              >
                {hour}
              </div>
              <FaLongArrowAltLeft className="text-[#e7e3e3b1] text-xl " />
              <div
                className=" font-medium text-[16px] text-[#e7e3e3b1] text-center xl:mr-1 
              "
              >
                {hour}
              </div>
            </div>
          </Menu.Button>
          {/* Items */}
          <Menu.Items className="dropdown-menu  font-bold text-md absolute -top-80 xl:top-[90px] left-1/2 xl:right-0 z-10 transform -translate-x-1/2 xl:translate-x-0  text-center xl:text-center w-full bg-[#ef0008ec] max-w-[332px] py-6 rounded-[10px]">
            <div className=" hidden xl:block absolute -top-2 right-4 -z-50 rotate-45 w-6 h-6 bg-[#DD0007]  "></div>
            {hours.map((hour, index) => (
              <div>
                <div
                  onClick={() => setHour(hour)}
                  key={index}
                  className="cursor-pointer text-primary bg-[#ef0008ec] py-4 xl:pl-10 hover:bg-red-600 text-[16px] "
                >
                  {hour}
                </div>
              </div>
            ))}
          </Menu.Items>
        </div>
      </Menu>
    </>
  );
}

export default HoursSelection;
