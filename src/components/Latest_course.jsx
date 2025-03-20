import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
const Latest_course = ({ courses }) => {
  return (
    <Wrapper>
      <div className="flex justify-center -z-10">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 w-[300px] md:w-[250px]  flex flex-col items-center relative"
              style={{
                outline: "3px solid white", // Creates an inner border effect
                boxShadow: "0 0 0 3px #E5C17C", // Outer border effect
              }}
            >
              {/* Course Image */}
              <div className="w-full h-[150px] rounded-md overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={200}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Course Title */}
              <h3 className="text-center line-clamp-2 text-primary text-base font-semibold mt-3">
                {course.title}
              </h3>

              {/* Course Details */}
              <div className="mt-3 w-full">
                {/* Available Dates (Show first 2 dates only) */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                  {course.available_dates.slice(0, 2).map((date) => (
                    <div key={date.id} className="flex items-center">
                      <FaCalendarAlt className="text-primary mr-2" />
                      {date.date}
                    </div>
                  ))}
                </div>

                {/* City & Price in the same row */}
                <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
                  {/* City */}
                  {course.available_cities.length > 0 && (
                    <div className="flex items-center">
                      <MdLocationOn className="text-primary mr-2" />
                      {course.available_cities[0].name}
                    </div>
                  )}

                  {/* Price */}
                  <span className="text-primary text-lg font-semibold">
                    $ {course.price}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between w-full">
                <Link href={`/${course.available_cities[0].slug}/${course.specialization_slug}/${course.slug}`} className="bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-secondary transition">
                  Details
                </Link>
                <Link href={`/register?course=${course.slug}`} className="bg-secondary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary transition">
                  Register
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Latest_course;
