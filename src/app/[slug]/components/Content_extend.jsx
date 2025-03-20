"use client";
import React, { useState } from "react";
import { TiWorld } from "react-icons/ti";
import { cn } from "@/lib/utils";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { FaRegBookmark } from "react-icons/fa";

const dropdown = ["Surf Camp", "Junior", "Surf Lodge", "Boat Trip", "Viaggio di Gruppo"];

const Content_extend = ({ children, categories, params }) => {
  const [openIndex, setOpenIndex] = useState(null); // Use null for no dropdown initially open
  const [category, setCategory] = useState(categories);

  const handleToggle = (index) => {
    // Toggle the specific dropdown; if already open, close it
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center sm:justify-normal">
      <div className="hidden p-4 sm:block">
        <div className="w-64 h-auto p-3 shadow-md">
          <h1 className="mb-4 text-sm">All Category</h1>
          {category?.map((item, index) => {
            return (
              index > 0 && (
                <div key={index} className="mb-2">
                  <div
                    className={cn(
                      "flex items-center justify-between px-4 w-full h-10 cursor-pointer transition-all duration-300",
                      openIndex === index ? "bg-secondary text-white" : "bg-transparent"
                    )}
                    onClick={() => handleToggle(index)} // Handle toggle for this index
                  >
                    <div className="flex items-center gap-4">
                      <div className="icon">
                        <BiCategory size={20} />
                      </div>
                      <div className="text-xs font-semibold name">{item.name}</div>
                    </div>
                    <div className="icon">
                      {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "overflow-hidden transition-max-height duration-500 ease-in-out",
                      openIndex === index ? "max-h-screen" : "max-h-0"
                    )}
                  >
                    {openIndex === index && (
                      <div className="mt-2 ml-5">
                        {item.categories?.map((data, i) => {
                          return (
                            <Link
                              href={`/diploma?course=${data.slug}`}
                              key={i}
                              className="flex gap-2 hover:bg-secondary p-2 hover:text-white items-center mb-2 text-xs"
                              scroll={false}
                            >
                              <FaRegBookmark />
                              {data.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            );
          })}
        </div>
        <div className="w-64 h-auto p-3 mt-10 shadow-md">
          <h1 className="mb-4 text-sm font-bold">Category</h1>
          {category?.map((item, index) => {
            return (
              index > 0 && (
                <div key={index} className="flex items-center justify-between p-2">
                  <div className="text-sm">{item.name}</div>
                  <div className="w-auto h-auto p-1 border-[1px] text-sm text-black/50">{item.number_of_courses}</div>
                </div>
              )
            );
          })}
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Content_extend;
