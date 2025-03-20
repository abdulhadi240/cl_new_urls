import React from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";
import Design from "../homepage1/components/Design";
import CourseListing from "@/components/ItemList";
import CityListing from "@/components/CityCourseList";

// --------- GENERATE METADATA FUNCTION ---------
export async function generateMetadata({ params }) {
 
  return {
    title:"All Cities - London Crown Institute of Training",
    description:
      
      "Explore courses offered by city at Crown Academy  for Training & Development.",
    keywords:  "training, courses, cities, education",
    alternates: {
      canonical: `https://clinstitute.co.uk/cities`,
    },
    openGraph: {
      title: "All Cities - London Crown Institute of Training",
      description:
       
        "Explore courses offered by city at Crown Academy  for Training & Development.",
      url: `https://clinstitute.co.uk/cities`,
      images: [
        {
          url:  "https://clinstitute.co.uk/Logocrown.webp",
          width: 800,
          height: 600,
          alt:  "Crown Academy Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "All Cities - London Crown Institute of Training",
      description:
        
        "Explore courses offered by city at Crown Academy  for Training & Development.",
      images:  "https://clinstitute.co.uk/Logocrown.webp",
    },
  };
}

const Page = async () => {
  const data = await fetch(`${process.env.BACKEND_URL}/cities`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": `${process.env.LOCALE_LANGUAGE}`,
    },
    next: { revalidate: 60 },
  });

  const res = await data.json();
  console.log(res);

  return (
    <>
      <Design
        icon_white
        iamge={"/image_consult.png"}
        center
        input={false}
        image_height={false}
        search_height={true}
      >
        <h2 className="text-5xl mt-[25%] max-w-xl  font-bold text-white dark:text-white">
          Courses Offered By <span className="text-secondary">Location</span>
        </h2>
      </Design>
      <div className="container p-4 mx-auto">
        {/* Courses Grid */}
        <div className="flex justify-center ">
          <div className="mt-6">
            <CityListing cities={res.data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
