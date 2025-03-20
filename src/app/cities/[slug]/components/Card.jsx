import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidBadge } from "react-icons/bi";

const Card = ({ image, title, paragraph, country, link ,params ,city,specialization , check }) => {
  
console.log(params);

  return (
    <div className="flex flex-col shadow-sm items-center gap-3 md:flex-row p-6 md:p-2 hover:scale-105 transition-all">
      <div className="relative w-full md:w-56 h-44">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          sizes="90vw"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-auto gap-2 text-center md:text-start">
        <h1 className="font-bold w-80 px-4 md:px-0">{title}</h1>
        <p className="text-sm w-full px-4 md:px-0 md:w-72 h-10 overflow-hidden text-center md:text-start">
          {paragraph}
        </p>
        <div className="flex items-center justify-center gap-2 md:justify-start country">
          {country?.map((city) => (
            <>
              <div className="icon text-[#49bbbd]">
                <BiSolidBadge />
              </div>
              <div className="text-sm country_name">{city.name}</div>
            </>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-2 px-4 md:px-0 md:flex-row">
          {city && !check ? (
            <Link
              href={`${params}/${link}`} // Add current city dynamically
              className="px-8 hover:bg-primary/80 py-2 text-sm text-white rounded-full bg-primary"
            >
              Details
            </Link>
          ) : city && check ? (
            <Link
              href={`${params}/${specialization}/${link}`} // Add current city dynamically
              className="px-8 hover:bg-primary/80 py-2 text-sm text-white rounded-full bg-primary"
            >
              Details
            </Link>
          ) : null}

          <Link href={`/register?course=${link}`} className="px-8 py-2 text-sm text-white rounded-full bg-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
