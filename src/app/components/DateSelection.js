// "use client";

// import React, { useState } from "react";

// // headless ui
// import { Menu } from "@headlessui/react";

// import { FaCalendarAlt } from "react-icons/fa";
// import { FaArrowRightLong } from "react-icons/fa6";

// // react date
// import { DateRange } from "react-date-range";
// import { format, addDays } from "date-fns";

// // react date range css
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// function DateSelection() {
//   const [date, setDate] = useState([
//     {
//       startDate: new Date(),
//       endDate: null,
//       key: "selection",
//     },
//   ]);
//   return (
//     <>
//       <Menu as="div" className="w-full h-full flex xl:flex-row">
//         <div className="relative flex-1">
//           {/* Button */}
//           <Menu.Button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
//             <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
//               <FaCalendarAlt className="text-accent" />
//               <div className=" text-[15px] font-bold">انتخاب مکان</div>
//             </div>
//           </Menu.Button>
//           {/* menu */}
//           <Menu.Items className="dropdown-menu shadow-lg font-bold text-md absolute -top-96 xl:top-[90px] left-1/2 xl:right-0 z-50 transform -translate-x-1/2 xl:translate-x-0 rounded-[10px] overflow-hidden">
//             <DateRange
//               onChange={(item) => setDate([item.selection])}
//               editableDateInputs={true}
//               moveRangeOnFirstSelection={false}
//               ranges={date}
//               rangeColors={["#ed1d24"]}
//               minDate={addDays(new Date(), 0)}
//             />
//           </Menu.Items>
//         </div>
//       </Menu>
//     </>
//   );
// }

// export default DateSelection;

"use client";

import React, { useEffect, useState } from "react";

// headless ui
import { Menu } from "@headlessui/react";

import { FaCalendarAlt } from "react-icons/fa";

// react multi-date picker
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Icon from "react-multi-date-picker/components/icon";
import "react-multi-date-picker/styles/colors/red.css";

function DateSelection() {
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });

  const [numberOfMonths, setNumberOfMonths] = useState(1); // Default for mobile

  // Update numberOfMonths based on screen size
  useEffect(() => {
    const updateNumberOfMonths = () => {
      if (window.innerWidth >= 1300) {
        setNumberOfMonths(2); // Large screens
      } else {
        setNumberOfMonths(1); // Mobile
      }
    };

    updateNumberOfMonths(); // Initial check
    window.addEventListener("resize", updateNumberOfMonths); // Listen to window resize

    return () => window.removeEventListener("resize", updateNumberOfMonths); // Cleanup
  }, []);

  return (
    <>
      <div as="div" className="w-full h-full flex xl:flex-row">
        <div className="relative flex-1">
          {/* Button */}
          <button className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
              <FaCalendarAlt className="text-accent" />
              <DatePicker
                range
                type="input-icon"
                inputClass="custom-input"
                className="red"
                calendarPosition="bottom-right"
                calendar={persian}
                locale={persian_fa}
                value={[date.startDate, date.endDate]}
                onChange={(value) =>
                  setDate({
                    startDate: value[0]?.format("YYYY/MM/DD"),
                    endDate: value[1]?.format("YYYY/MM/DD"),
                  })
                }
                numberOfMonths={numberOfMonths} // Dynamic number of months
                arrowClassName="custom-arrow"
                theme={{
                  background: "#fff",
                  color: "#000",
                  selected: {
                    background: "#ed1d24",
                    color: "#fff",
                  },
                  header: {
                    background: "#ed1d24",
                    color: "#fff",
                  },
                }}
              />
            </div>
          </button>
          {/* Menu */}
        </div>
      </div>
    </>
  );
}

export default DateSelection;
