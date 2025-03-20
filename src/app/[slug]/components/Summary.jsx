import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
const dates = [
  {
    dates: "23-05-17",
  },
  {
    dates: "24-06-17",
  },
  {
    dates: "25-05-17",
  },
  {
    dates: "26-05-17",
  },
];
const Summary = ({ summary }) => {
  const [selectedCities, setSelectedCities] = useState(
    summary?.available_dates.map(() => "")
  );

  const handleCityChange = (index, value) => {
    const updatedCities = [...selectedCities];
    updatedCities[index] = value;
    setSelectedCities(updatedCities);
  };
  return (
    <div className="flex flex-col justify-start">
      <div className="flex flex-col gap-10 p-3 md:flex-row md:justify-between">
        <div className="flex text-start">
          {" "}
          {/* Text will align to the start */}
          <div className="toggle"></div>
          <div className="flex flex-col items-start justify-start gap-10 text-start">
            <div className="flex flex-col gap-3 summary">
              <h1 className="p-2 text-2xl font-bold text-left md:p-0 text-primary">
                Summary
              </h1>
              <p
                className="max-w-2xl p-2 text-base text-left md:p-0 text-black/60"
                dangerouslySetInnerHTML={{ __html: summary?.summary }}
              ></p>
            </div>
            <div className="flex flex-col gap-3 objective">
              <h1 className="p-2 text-2xl font-bold text-left md:p-0 text-primary">
                Objectives and target group
              </h1>
              <p
                className="max-w-2xl p-2 text-base text-left md:p-0 text-black/60"
                dangerouslySetInnerHTML={{ __html: summary?.objectives }}
              ></p>
            </div>
            <div className="flex flex-col gap-3 content">
              <h1 className="p-2 text-2xl font-bold text-left md:p-0 text-primary">
                Course Content
              </h1>
              <p
                className="max-w-2xl p-2 text-base text-left md:p-0 text-black/60"
                dangerouslySetInnerHTML={{ __html: summary?.content }}
              ></p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
        <div className="course_details flex flex-col gap-3 w-80 text-left h-80 p-3 bg-[#e2f0ff]">
          <div className="flex justify-between tags">
            <h1 className="">Price</h1>
            <p className="font-bold text-secondary">${summary?.price}</p>
          </div>
          <div className="flex justify-between tags">
            <h1 className="">Instructor</h1>
            <p>Wade Warren</p>
          </div>
          <div className="flex justify-between tags">
            <h1>Ratings</h1>
            <Image src={"/stars.png"} height={90} width={90} alt="stars" />
          </div>
          <div className="flex justify-between tags">
            <h1 className="">Durations</h1>
            <p>10 Days</p>
          </div>
          <div className="flex justify-between tags">
            <h1>Modules</h1>
            <p>30</p>
          </div>
          <div className="flex justify-between tags">
            <h1>Certificate</h1>
            <p>Yes</p>
          </div>
          <div className="flex justify-between tags">
            <h1>Language</h1>
            <p>English1</p>
          </div>
          <Link href={`/register?course=${summary.slug}`} className="p-2 text-white bg-primary text-center">Register Now</Link>
        </div>
        </div>
      </div>
      <div className="border-[1px] border-dashed mt-10 mb-5 mx-10 " />
      <h1 className="pr-8 text-xl font-bold text-center md:text-start text-primary">
        Available Dates
      </h1>
      <div className="flex md:justify-start justify-center">
        <div className="flex flex-wrap justify-start gap-4 mr-4 mt-6">
          {summary?.available_dates.map((item, index) => {
            return (
              <div
                key={index}
                className="h-auto px-2  py-4 mx-4  flex flex-col gap-3 rounded-md   bg-[#e2f0ff]"
              >
                <div className="flex items-center gap-2">
                  <BiCalendarEvent />

                  <h1 className="text-sm text-primary">{item.date}</h1>
                </div>
                <div className="flex gap-2 button">
                  <div className="">
                    <select
                      name="place"
                      id=""
                      className="px-2 text-sm rounded-md h-9"
                      value={selectedCities[index]}
                      onChange={(e) => handleCityChange(index, e.target.value)}
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {summary.available_cities.map((city, i) => (
                        <option key={i} value={city.name}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="px-5 text-sm text-white rounded-md bg-primary">
                    Register
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summary;
