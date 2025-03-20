import Image from "next/image";
import React from "react";
import { FaSearch, FaPrint } from 'react-icons/fa';
import Course_column from "./components/Course_column";
import HeaderSection from "@/components/HeaderSection";

const cities = ['London', 'New York', 'Paris', 'Tokyo', 'Karachi', 'Islamabad'];

const courseData = [
    {
      course_name: 'Project Managment',
      date1: '2023-01-02',
      date2: '2023-04-03',
      price_week: '3200$',
      price_two_week: '5000$',
      price_three_week: '6000$'
    },
    {
      course_name: 'Data Science',
      date1: '2023-05-10',
      date2: '2023-07-12',
      price_week: '3500$',
      price_two_week: '5400$',
      price_three_week: '6700$'
    },
    {
      course_name: 'Digital Marketing',
      date1: '2023-08-15',
      date2: '2023-10-15',
      price_week: '3000$',
      price_two_week: '4800$',
      price_three_week: '5800$'
    },
    {
      course_name: 'Web Development',
      date1: '2023-02-10',
      date2: '2023-04-22',
      price_week: '4000$',
      price_two_week: '6200$',
      price_three_week: '7300$'
    },
    {
      course_name: 'Cybersecurity',
      date1: '2023-06-01',
      date2: '2023-09-01',
      price_week: '3800$',
      price_two_week: '5200$',
      price_three_week: '6200$'
    },
    {
      course_name: 'Artificial Intelligence',
      date1: '2023-11-01',
      date2: '2024-02-01',
      price_week: '4500$',
      price_two_week: '6800$',
      price_three_week: '8000$'
    }
  ];

const page = () => {
  return (
    <div>
      <HeaderSection/>
      <div className="banner-container">
        <div className="relative h-32 banner sm:h-64">
          {/* Set height and make container relative */}
          <Image
            src="/plan.webp"
            alt="banner"
            layout="fill" // Fill the entire container
            objectFit="cover" // Maintain aspect ratio without stretching
            priority
            className="object-cover"
          />
          {/* Text box overlay */}
          <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[300px] flex justify-center items-center h-[60px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
            <div>
              <p className="sm:text-xl font-semibold text-[#152765]">
                PLAN PAGES
              </p>
              <p className="text-xs sm:text-sm font-normal text-[#152765] flex justify-center">
                Home / Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="flex justify-center mt-10 text-xs text-center sm:text-sm">
        The annual training plan for the courses and programs of the British Academy
      </h1>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1
          style={{
            display: "inline-block",
            position: "relative",
            fontSize: "28px",
            color: "#b91c1c",
          }}
          className="font-bold"
        >
          Plan British Academy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 30"
            style={{
              position: "absolute",
              width: "100%",
              height: "100px",
              top: "1px",
              left: "0",
            }}
          >
            <path
              d="M0 4 Q300 10 500 50"
              stroke="#b91c1c"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        {/* Dropdown */}
        <div className="relative w-full mx-3 sm:mx-0 sm:w-64">
          <select
            name="city"
            id="city"
            className="block w-full h-12 px-4 py-2 text-gray-700 transition ease-in-out bg-white border-[1px] border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-1 focus:ring-[#152765] focus:border-[#152765]"
            defaultValue=""
          >
            <option value="" disabled>Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.toLowerCase()}>{city}</option>
            ))}
          </select>
          {/* Dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        {/* Print Button */}
        <div>
          <button className="flex items-center text-sm justify-between gap-6 px-2 py-2 text-white bg-[#152765] rounded w-32 sm:w-auto hover:bg-[#0c1639]">
            <span>Print</span>
            <FaPrint />

          </button>
        </div>

        {/* Search Button */}
        <div>
          <button className="flex items-center text-sm justify-between gap-6 px-2 py-2 text-white bg-[#152765] rounded w-32 sm:w-auto hover:bg-[#0c1639]">
            <span>Search</span>
            <FaSearch />

          </button>
        </div>
      </div>
      <div className="mb-10">
      {courseData.map((course, index) => (
        <Course_column
        key={index}
        course_name={course.course_name}
        date1={course.date1}
        date2={course.date2}
        price_week={course.price_week}
        price_two_week={course.price_two_week}
        price_three_week={course.price_three_week}
        backgroundClass={index % 2 === 0 ? 'bg-[#9DCCFF4D] dark:bg-black dark:text-white sm:shadow-lg' : 'bg-white sm:shadow-lg text-gray-500'}
      />
      ))}
    </div>

    </div>
  );
};

export default page;
