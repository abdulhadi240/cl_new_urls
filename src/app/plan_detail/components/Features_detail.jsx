import Image from "next/image";
import React from "react";
import Course_card from "./Course_card";
import Link from "next/link";

const Features_detail = ({ image, number, heading, text }) => {
  return (
    <div className="mt-16 overflow-hidden">
      <div className="flex flex-col justify-center mx-5 sm:mx-10 sm:gap-32 sm:flex-row">
        {/* Left side with Image */}
        <div className="relative w-full max-w-sm mx-auto">
      <div className="overflow-hidden rounded-bl-[250px] rounded-tr-[50px]">
        <Image
          src="/000.webp" // Replace with the actual image path
          alt="Team Collaboration"
          width={400}
          height={400}
          priority
          className=""
        />
      </div>
    </div>
        {/* Right side with content */}
        <div className="flex flex-col max-w-[600px] gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-4xl">{number}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{heading}</h1>
            <p>{text}</p>
          </div>
          <button className="bg-[#152765] p-3 w-32 text-white rounded-md text-xs text-center">
            View Your Plans
          </button>
        </div>
      </div>
      <div className="container p-4 mx-auto">
      <div className="space-y-8">
        {/* Summary Section */}
        <section className="p-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold">Summary</h2>
          <p className="text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing{' '}
            <Link href="#" className="text-xs underline text-primary">Read More...</Link>
          </p>
        </section>

        {/* Objectives and Target Group */}
        <section className="px-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold dark:text-white">Objectives And Target Group</h2>
          <p className="text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit{' '}
            <Link href="#" className="text-xs underline text-primary">Read More...</Link>
          </p>
        </section>

        {/* Course Content */}
        <section className="px-6 rounded-lg ">
          <h2 className="mb-4 text-2xl font-semibold dark:text-white">Course Content</h2>
          <p className="mb-4 text-gray-700 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur{' '}
            <Link href="#" className="text-xs underline text-primary">Read More...</Link>
          </p>
          <ul className="text-gray-700 list-disc list-inside dark:text-white">
            <li>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</li>
          </ul>
        </section>
        <div className='border-[1px] w-full border-dashed'/>

        {/* Search Bar */}
        <div className='flex justify-center'>
        <div className="flex flex-col items-center justify-between gap-4 p-6 rounded-lg shadow-md md:flex-row">
          <div className="flex flex-wrap gap-4">
            <input type="text" placeholder="place" className="w-full p-2 border rounded-md md:w-32 dark:text-black placeholder:text-black" />
            <input type="month" className="w-full p-2 border rounded-md md:w-32 dark:text-black placeholder:text-black" />
            <input type="text" placeholder="year" className="w-full p-2 border rounded-md md:w-32 dark:text-black placeholder:text-black" />
            <input type="text" placeholder="category" className="w-full p-2 border rounded-md md:w-32 dark:text-black placeholder:text-black" />
            <input type="text" placeholder="subject" className="w-full p-2 border rounded-md md:w-32 dark:text-black placeholder:text-black" />
          </div>
          <button className="px-6 py-2 text-white transition-all rounded-md bg-primary hover:bg-primary">
            Search
          </button>
        </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-10 py-10 sm:mx-10 sm:grid-cols-2 md:grid-cols-3'>
      <Course_card/>
      <Course_card/>
      <Course_card/>
      <Course_card/>
      <Course_card/>
      <Course_card/>
      <Course_card/>
      </div>
    </div>
    </div>
  );
};

export default Features_detail;
