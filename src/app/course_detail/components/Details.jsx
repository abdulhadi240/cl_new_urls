"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";

const Details = ({ course }) => {
  // Preserve your original city-selection state: one city per available_date
  const [selectedCities, setSelectedCities] = useState(
    course?.available_dates?.map(() => "")
  );

  // Same handler for changing city selection on each date
  const handleCityChange = (index, cityValue) => {
    const updated = [...selectedCities];
    updated[index] = cityValue;
    setSelectedCities(updated);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-10 text-gray-800">
      
      {/* Top Heading + Table (Dates / Venues / Price) */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-primary">
          A Comprehensive Training Course
        </h1>
        <div className="border rounded-md p-4 bg-white shadow-sm">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                {/* Available Dates (Radio Buttons in a Table Cell) */}
                <td className="align-top w-1/3 pr-4 pb-4">
                  <h2 className="text-lg font-semibold mb-2">Available Dates</h2>
                  <div className="space-y-2">
                    {course?.available_dates?.map((item, index) => (
                      <label
                        key={index}
                        className="inline-flex items-center cursor-pointer block"
                      >
                        <input
                          type="radio"
                          name="selectedDate"
                          className="mr-2"
                          value={item.date}
                        />
                        {item.date}
                      </label>
                    ))}
                  </div>
                </td>

                {/* Venues (Radio Buttons in a Table Cell) */}
                <td className="align-top w-1/3 pr-4 pb-4">
                  <h2 className="text-lg font-semibold mb-2">Venues</h2>
                  <div className="space-y-2">
                    {course?.available_cities?.map((city, i) => (
                      <label
                        key={i}
                        className="inline-flex items-center cursor-pointer block"
                      >
                        <input
                          type="radio"
                          name="selectedVenue"
                          className="mr-2"
                          value={city.name}
                        />
                        {city.name}
                      </label>
                    ))}
                  </div>
                </td>

                {/* Price */}
                <td className="align-top w-1/3 pb-4">
                  <h2 className="text-lg font-semibold mb-2">Price</h2>
                  <p className="text-xl font-bold">
                    {course?.price ? `${course.price} PKR` : "N/A"}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Secondary Heading + Intro Paragraph */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-primary">
          Mastering the Project Stages: A Comprehensive Training Course
        </h1>
        <p className="leading-relaxed text-base text-gray-600">
          Managing projects successfully requires a deep understanding of
          the project lifecycle and the skills to navigate each stage effectively.
          Our Project Stages Training Course is designed to equip you with
          the knowledge and tools to excel in every phase of project management,
          from initiation to closure.
        </p>
      </div>

      {/* What Does the Course Cover */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-primary">
          What Does the Course Cover?
        </h2>
        <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
          <p>This course takes a structured approach to the key stages of project management:</p>

          <ol className="list-decimal list-inside space-y-2">
            <li>
              <strong>Initiation:</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Learn how to define the project scope, objectives, and deliverables.</li>
                <li>Develop skills to identify key stakeholders and create a project charter.</li>
                <li>Gain insights into feasibility analysis and risk identification.</li>
              </ul>
            </li>
            <li>
              <strong>Planning:</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Master the art of creating detailed project plans, timelines, and budgets.</li>
                <li>Understand resource allocation and learn how to develop a robust risk management plan.</li>
                <li>Explore tools and techniques for setting milestones and performance metrics.</li>
              </ul>
            </li>
            <li>
              <strong>Execution:</strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>Discover how to implement project plans effectively while managing resources.</li>
                <li>Learn team management, task delegation, and conflict resolution strategies.</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      {/* Right-Side Info & Another Table for Detailed Dates/City/Registration */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">

        {/* Course Info Box (Price, Ratings, etc.) */}
        <div className="w-full md:w-1/3 bg-[#e2f0ff] p-4 rounded-md space-y-3">
          <div className="flex justify-between">
            <h1>Price</h1>
            <p className="font-bold text-secondary">${course?.price}</p>
          </div>
          <div className="flex justify-between">
            <h1>Instructor</h1>
            <p>Wade Warren</p>
          </div>
          <div className="flex justify-between">
            <h1>Ratings</h1>
            <Image src={"/stars.png"} height={90} width={90} alt="stars" />
          </div>
          <div className="flex justify-between">
            <h1>Duration</h1>
            <p>10 Days</p>
          </div>
          <div className="flex justify-between">
            <h1>Modules</h1>
            <p>30</p>
          </div>
          <div className="flex justify-between">
            <h1>Certificate</h1>
            <p>Yes</p>
          </div>
          <div className="flex justify-between">
            <h1>Language</h1>
            <p>English</p>
          </div>
          {/* General "Register Now" Link */}
          <Link
            href={`/register?course=${course.slug}`}
            className="inline-block w-full text-center bg-primary text-white px-4 py-2 rounded-md"
          >
            Register Now
          </Link>
        </div>

        {/* Detailed Available Dates (Dropdown + Register) in Table Form */}
        <div className="w-full md:w-2/3">
          <h1 className="text-xl font-bold text-primary mb-4">Available Dates</h1>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-[#e2f0ff] rounded-md">
              <thead className="bg-[#d8e9ff]">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">City</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {course?.available_dates?.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="p-2 flex items-center gap-2">
                      <BiCalendarEvent className="text-primary" />
                      <span>{item.date}</span>
                    </td>
                    <td className="p-2">
                      <select
                        name="place"
                        className="px-2 text-sm rounded-md h-9"
                        value={selectedCities[index]}
                        onChange={(e) => handleCityChange(index, e.target.value)}
                      >
                        <option value="">Select City</option>
                        {course.available_cities.map((city, i) => (
                          <option key={i} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-2">
                      <Link
                        href={`/register?course=${course.slug}&date=${item.date}&city=${selectedCities[index]}`}
                        className="px-3 py-2 text-white rounded-md bg-primary"
                      >
                        Register
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Details;
