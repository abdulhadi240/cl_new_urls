"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation"; // Ensure correct import

export default function SearchForm({ cities, specialization }) {
  const router = useRouter(); // Router instance for navigation

  // State for search fields
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  // List of months
  const months = [
    { name: "January", value: "1" },
    { name: "February", value: "2" },
    { name: "March", value: "3" },
    { name: "April", value: "4" },
    { name: "May", value: "5" },
    { name: "June", value: "6" },
    { name: "July", value: "7" },
    { name: "August", value: "8" },
    { name: "September", value: "9" },
    { name: "October", value: "10" },
    { name: "November", value: "11" },
    { name: "December", value: "12" },
  ];

  // Handle search button click
  const handleSearch = () => {
    // Construct query parameters
    const queryParams = new URLSearchParams({
      month: selectedMonth,
      specialization: selectedSpecialization,
      city: selectedCity,
      language: selectedLanguage,
    });

    // Include search keyword if provided
    if (searchQuery.trim() !== "") {
      queryParams.append("search", searchQuery);
    }

    // Redirect to /diploma with query parameters
    router.push(`/diploma?${queryParams.toString()}`);
  };

  return (
    <div className="h-auto md:absolute mt-10  md:top-10 md:right-20 md:w-[500px] w-full bg-white rounded-lg shadow-2xl p-6 border border-gray-300">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 border border-[#E5C17C] rounded-lg md:px-4 px-2 md:py-3 w-full">
        <input
          type="text"
          placeholder="Search in specific course"
          value={searchQuery} // Binds input to state
          onChange={(e) => setSearchQuery(e.target.value)} // Updates state on change
          className="w-full bg-gray-100 text-primary  placeholder-gray-400 focus:outline-none text-base"
        />
        <button onClick={handleSearch} className="p-2 text-[#E5C17C] cursor-pointer hover:bg-secondary hover:text-white transition-all rounded-full">
          <AiOutlineSearch className="" size={26} />
        </button>
      </div>

      {/* Filters Section */}
      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        {/* Specialization Dropdown */}
        <select
          className="w-full p-3 bg-white  appearance-none border border-[#E5C17C] rounded-lg  text-gray-700 text-sm md:text-base focus:outline-none"
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
        >
          <option value="Specialization" className="text-sm">Select Specialization</option>
          {specialization?.map((spec) => (
            <option key={spec.slug} value={spec.slug} className='text-sm'>
              {spec.name}
            </option>
          ))}
        </select>

        {/* Language Dropdown */}
        <select
          className="w-full p-3 bg-white border  appearance-none border-[#E5C17C] rounded-lg text-sm text-gray-700  md:text-base focus:outline-none"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </select>

        {/* City Dropdown */}
        <select
          className="w-full p-3 bg-white border border-[#E5C17C] rounded-lg text-sm text-gray-700  md:text-base focus:outline-none"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" className='text-sm'>Select City</option>
          {cities?.map((city) => (
            <option key={city.slug} value={city.slug}>
              {city.name}
            </option>
          ))}
        </select>

        {/* Month Dropdown */}
        <select
          className="w-full p-3 bg-white border border-[#E5C17C] rounded-lg text-sm text-gray-700  md:text-base focus:outline-none"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="" className='text-sm'>Select Month</option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
