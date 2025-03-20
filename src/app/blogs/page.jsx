import Image from "next/image";
import React from "react";
import Content from "./components/Content";
import SectionTitle from "../Homepage/components/SectionTitle";
import Course_card from "../plan_detail/components/Course_card";
import Carasoul from "./components/Carasoul";
import HeaderSection from "@/components/HeaderSection";

const page = () => {
  return (
    <>
    <HeaderSection/>
      <div className="container p-6 overflow-hidden sm:py-16 sm:px-24 flex flex-col-reverse bg-[#DEEEFD] sm:flex sm:flex-col-reverse sm:items-center sm:justify-between mx-auto lg:flex-row">
        <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
          <h1 className="mt-5 text-2xl font-bold leading-tight text-gray-800 md:text-5xl sm:text-3xl">
            Studying Online Is Now Much Easier
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className="py-2 px-7 shadow-2xl text-sm font-light rounded-full bg-[#111F51] text-white">
            Show Plan
          </button>
        </div>
        <div className="">
          <Image
            src={"/item.webp"}
            width={500}
            height={500}
            className="rounded-2xl"
            priority
            alt='image-hero'
          />
        </div>
      </div>
      <div className='h-auto'>
        <Content>
          
          <div>
          <SectionTitle title="Show" highlight="Video's" />
          <div className="video">
            {/* Video Section */}
        <section className="">
          
          <div className="flex items-center justify-center">
            {/* Video Container */}
            <div className="relative w-64 overflow-hidden bg-gray-200 rounded-lg shadow-lg h-44 lg:w-4/6 sm:h-80">
              {/* Video Placeholder */}
              <video controls className="object-cover w-full h-full">
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
          </div>
            <div className="hidden gap-2 mt-4 sm:flex-col para sm:flex">
              <h1 className='flex justify-center text-2xl font-semibold text-primary'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
              <p className='mx-5 text-start'>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manTOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.age assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
          </div>
        </Content>
      </div>
      <div className="hidden gap-10 p-10 sm:grid sm:grid-cols-2 md:grid-cols-3 cards">
        <Course_card/>
        <Course_card/>
        <Course_card/>
        <Course_card/>
        <Course_card/>
        <Course_card/>
      </div>
      <div className='flex justify-center mt-10 sm:hidden'>
        <Carasoul/>
      </div>
    </>
  );
};

export default page;
