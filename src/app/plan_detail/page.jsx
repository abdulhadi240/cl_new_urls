import React from "react";
import Features_detail from "./components/Features_detail";
import Link from "next/link";
import HeaderSection from "@/components/HeaderSection";

const page = () => {
  return (
    <>
    <HeaderSection/>
      <div className="container  overflow-hidden bg-[#DEEEFD] ">
        <div className="flex flex-col gap-3 p-6 md:p-10">
          <h1 className="flex justify-center mx-2 text-base font-semibold text-center dark:text-black md:mx-48 md:text-3xl">
            The Most Prominent Courses That We Offer In Our Academy Share With
            Us To Get Better
          </h1>
          <Link href='/plan'><div className="flex justify-center">
            <div className="py-2  px-7 shadow-2xl text-sm font-light rounded-md brightness-125 bg-[#111F51] text-white">
              Show Plan
            </div>
          </div></Link>
        </div>
      </div>
      <Features_detail
        image={"/000.png"}
        heading={"Management"}
        number={"01"}
        right={true}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
        }
      />
    </>
  );
};

export default page;
