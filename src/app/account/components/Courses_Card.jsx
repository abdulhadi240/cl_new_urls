import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { BiCalendarEvent } from "react-icons/bi";
import Link from "next/link";

const Courses_Card = ({ active, data ,params , carasoul}) => {
  return (
    <div className="flex justify-center hover:scale-105 transition-all">
  <div className="bg-white border-[1px] w-72 p-3 rounded-md shadow-md flex flex-col h-full">
    {/* Image Section */}
    <div className="relative flex">
      <div className="h-44 w-64">
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          alt="image"
          priority
          className="rounded-md"
        />
      </div>
      <div className="absolute top-1 left-1 bg-[#a0a3a4]/30 px-3 py-1 rounded-md text-black/70 dark:text-black dark:font-bold font-base text-xs">
        {data.available_cities[0]?.name}
      </div>
      {data.is_featured === "1" && (
        <div className="absolute bottom-1 left-1 bg-[#627381]/70 px-3 py-1 rounded-md text-white dark:font-bold font-extralight text-xs">
          Featured
        </div>
      )}
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-between my-3 text-[15px] text-black/80">
      {/* Title and Summary */}
      <div className="">
        <h1 className={`font-bold text-sm ${carasoul ? 'h-10 ': 'h-auto'} overflow-hidden `}>{data?.title}</h1>
        <p className="text-xs mt-1 h-12 overflow-hidden line-clamp-3">{data.meta_description}</p>
      </div>

      {/* Dates */}
      {!carasoul && (
      <div className=" text-base mt-2">
        {data?.available_dates.map((dateItem) => (
          <div key={dateItem.id}>
            <p className="flex items-center gap-2 text-sm">
              <BiCalendarEvent size={20} />
              {dateItem?.date}
            </p>
          </div>
        ))}
      </div>
      )}
    </div>
    

    {/* Buttons */}
    <div className="flex gap-4 mt-auto">
      <Link href={`/register?course=${data.slug}&date=${data.available_dates[0].date}`}
        className={cn(
          "w-full p-2 text-xs text-center hover:bg-primary text-white rounded-md bg-secondary",
          { "disabled bg-secondary/50 cursor-not-allowed": active }
        )}
      >
        REGISTER
      </Link>
      <Link
        href={`/${params}/${data.available_cities[0].slug}/${data.slug}`}
        className="w-full p-2 text-xs text-center hover:bg-primary transition-all text-white rounded-md bg-secondary"
      >
        DETAILS
      </Link>
    </div>
  </div>
</div>

  );
};

export default Courses_Card;
