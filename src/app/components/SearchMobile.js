import DateSelection from "./DateSelection";
import HoursSelection from "./HoursSelection";
import LocationSelection from "./LocationSelection";



export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          {/* location selection */}
          <LocationSelection />
          {/* date selection */}
          <DateSelection />
          {/* hours selection */}
          <HoursSelection />
          {/* button */}
          <div className=' flex items-center px-6'>
            <button className=' btn btn-sm font-bold btn-accent w-[164px] mx-auto'> جست و جو </button>
          </div>
        </div>
      </div>
    </div>
  );
}
