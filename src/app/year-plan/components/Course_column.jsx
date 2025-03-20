import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";

const Course_column = ({
  course_name,
  date1,
  date2,
  price_week,
  price_two_week,
  price_three_week,
  backgroundClass,
}) => {
  return (
    <div
      className={`flex flex-wrap items-center justify-center  sm:justify-between  sm:p-6 mt-4  sm:mx-4 p-6 sm:rounded-xl ${backgroundClass}`}
    >
        <div className="flex gap-4">
      {/* Left section: Course and Dates */}
      <div className="flex flex-col mb-4 text-center sm:mr-4 sm:text-left lg:mb-0">
        <div className="text-xs font-light ">course</div>
        <div className="text-[11px] sm:text-sm font-semibold  lg:w-44">
          {course_name}
        </div>
      </div>

      {/* Dates section */}
      <div className="flex gap-4 mb-4 text-center sm:flex-row sm:items-center sm:mb-0 sm:mr-4 sm:text-left">
        <div className="flex flex-col mb-2 sm:mb-0 sm:mr-2">
          <span className="text-xs ">date 1</span>
          <span className="text-[11px] sm:text-sm font-semibold ">
            {date1}
          </span>
        </div>
        <span className="hidden text-lg font-bold sm:inline">
          —
        </span>
        <div className="flex flex-col sm:ml-2">
          <span className="text-xs ">date 2</span>
          <span className="text-[11px] sm:text-sm font-semibold ">
            {date2}
          </span>
        </div>
      </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-full w-[1px] bg-gray-300 mx-4"></div>

      {/* Prices section */}
      <div className="flex justify-center gap-4 mb-4 sm:mb-0">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#9DCCFF4D]">
            <FaMoneyBillAlt className="text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-xs ">price week</span>
            <span className="text-xs ">{price_week}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#9DCCFF4D]">
            <FaMoneyBillAlt className="text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-xs ">
              price two week
            </span>
            <span className="text-xs ">{price_two_week}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="p-1 bg-[#9DCCFF4D]">
            <FaMoneyBillAlt className="text-blue-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] sm:text-xs ">
              price three week
            </span>
            <span className="text-xs ">{price_three_week}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block h-full w-[1px] bg-gray-300 mx-4"></div>

      {/* Buttons section */}
      <div className="w-full sm:w-auto">
        <div className="flex justify-center gap-2 sm:gap-4">
          <button className="px-6 py-3 text-xs sm:text-sm text-white bg-[#B12E33] rounded-md hover:bg-[#0c1639]">
            Details
          </button>
          <button className="px-6 py-3 text-xs sm:text-sm text-white bg-[#152765] rounded-md hover:bg-[#0c1639]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course_column;
