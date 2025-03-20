import Image from "next/image";
import React from "react";
import Features from "./components/Features";
import FeatureMobile from "./components/FeatureMobile";
import HeaderSection from "@/components/HeaderSection";

const Page = () => {
  return (
    <>
      <HeaderSection />
      <div className="overflow-hidden">
        <div className="banner-container">
          <div className="relative h-32 banner sm:h-64">
            {" "}
            {/* Set height and make container relative */}
            <Image
              src="/plan.webp"
              alt="banner"
              layout="fill" // Fill the entire container
              objectFit="cover" // Maintain aspect ratio without stretching
              priority
              className="object-cover"
            />
            {/* Text box overlay */}
            <div className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] sm:w-[300px] flex justify-center items-center h-[60px] sm:h-[80px] rounded-t-2xl bg-white shadow-lg">
              <div>
                <p className="sm:text-xl font-semibold text-[#152765]">
                  PLAN PAGES
                </p>
                <p className="text-xs sm:text-sm font-normal text-[#152765] flex justify-center">
                  Home / Plan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Features
            image={"/plan1.webp"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"01"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />

          <Features
            image={"/plan1.webp"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"02"}
            right={false}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />

          <Features
            image={"/plan1.webp"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"03"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />

          <Features
            image={"/plan1.webp"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"04"}
            right={false}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />

          <Features
            image={"/plan1.webp"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
        </div>
        <div className="p-5 sm:hidden">
          <FeatureMobile />
        </div>
      </div>
    </>
  );
};

export default Page;
