"use client";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import LocationSelection from "./LocationSelection";
import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";

function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <>
      <div
        className={`${
          searchActive
            ? "bg-[#ef0008fb] top-2 xl:h-[80px]"
            : "bg-[#ef0008d8] py-6 "
        } hidden xl:block  w-full xl:pr-4 rounded-[20px]  relative shadow-lg`}
      >
         <div className=" text-primary xl:h-full flex items-center   px-6 xl:px-0">
         <LocationSelection/> 
         <DateSelection/>
         <HoursSelection/>
         {/* btn */}
         <div className=" ml-10 xl:h-full flex justify-center items-center px-6 xl:px-0">
          <button className="  btn btn-sm font-bold bg-red-600 xl:w-[164px]">
             جست و جو
          </button>
         </div>
         </div>
      </div>
    </>
  );
}

export default Search;
