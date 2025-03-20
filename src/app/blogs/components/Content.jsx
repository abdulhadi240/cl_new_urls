"use client";
import React, { useState } from "react";
import { TiWorld } from "react-icons/ti";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
const sidemenu = [
  {
    icon: TiWorld,
    name: "Destinazione",
    dropdown: ["Surf Camp", "Junior"],
  },
  {
    icon: TiWorld,
    name: "Blog",
    dropdown: [
      "Surf Camp",
      "Junior",
      "Surf Lodge",
      "Boat Trip",
      "Viaggio di Gruppo",
    ],
  },
  {
    icon: TiWorld,
    name: "Careers",
    dropdown: ["Surf Camp", "Junior"],
  },
  {
    icon: TiWorld,
    name: "Video",
    dropdown: ["Surf Camp", "Junior"],
  },
  {
    icon: TiWorld,
    name: "Advertisement",
    dropdown: ["Surf Camp", "Junior"],
  },
];

const blog = [
  {
    name: "Minimal Post With A Preview Image",
    image: "/item.webp",
  },
  {
    name: "Minimal Post With A Preview Image",
    image: "/item.webp",
  },
  {
    name: "Minimal Post With A Preview Image",
    image: "/item.webp",
  },
  {
    name: "Minimal Post With A Preview Image",
    image: "/item.webp",
  },
  {
    name: "Minimal Post With A Preview Image",
    image: "/item.webp",
  },
];

const Content = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='flex justify-center sm:justify-between border-[1px]'>
      <div className="hidden p-4 sm:block">
        <div className="w-64 h-auto p-3 shadow-md">
          <h1 className="mb-4 text-sm">All Category</h1>
          {sidemenu.map((item, index) => {
            return (
              <div key={index} className="mb-2">
                <div
                  className={cn(
                    "flex items-center justify-between px-4 w-full h-10 cursor-pointer transition-all duration-300",
                    openIndex === index
                      ? "bg-secondary text-white"
                      : "bg-transparent"
                  )}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="icon">
                      <item.icon size={20}/>
                    </div>
                    <div className="text-xs font-semibold name">
                      {item.name}
                    </div>
                  </div>
                  <div className="icon">{openIndex === index ? <IoIosArrowDown/> : <IoIosArrowForward/>}</div>
                </div>
                <div
                  className={cn(
                    "overflow-hidden transition-max-height duration-500 ease-in-out",
                    openIndex === index ? "max-h-screen" : "max-h-0"
                  )}
                >
                  {openIndex === index && (
                    <div className="mt-2 ml-8">
                      {item.dropdown.map((data, idx) => {
                        return (
                          <div
                            key={idx}
                            className="flex items-center mb-2 text-xs"
                          >
                            <input
                              type="checkbox"
                              name={data}
                              id={data}
                              className="mr-2 accent-primary"
                            />
                            <label htmlFor={data}>{data}</label>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          <div className="p-3 ">
            <h1 className="text-sm">Latest Post</h1>
            <div>
              {blog.map((items, index) => {
                return (
                  <div className="flex gap-4 mt-5">
                    <Image
                      src={items.image}
                      width={30}
                      height={30}
                      alt="image"
                      className="rounded-full"
                    />
                    <p className="text-xs">{items.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Content;
