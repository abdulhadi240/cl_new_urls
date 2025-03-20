import Image from "next/image";
import ServiceCard from "./ServiceCard";

// components/MainContent.js
const MainContent = () => {
    return (
      <div className="flex justify-between gap-8 mx-20 mt-8">
        
        {/* Left Column */}
        <div className="flex flex-col items-start">
          <Image
            src="/group401.webp"
            width={600}
            height={600}
            alt="Laptop meeting"
            className="rounded-lg shadow-lg"
          />
          <div className="w-[600px]">
          <h3 className="text-xl font-semibold tracking-wide text-gray-800 mt-14">
            The annual training plan for the courses and programs of the British Academy
          </h3>
          <p className="mt-3 text-gray-500">
          The annual training plan for the courses and programs of the British Academy
          </p>
          </div>
          <button className="px-4 py-2 mt-3 text-sm text-white bg-[#111F51] rounded-lg">Go to Plan</button>
        </div>
  
        {/* Right Column - Service List */}
        <div className="space-y-2">
          <ServiceCard
            title="Courses with discount"
            description="We provide the latest international courses at suitable prices"
            icon="/icon9.png"
          />
          <ServiceCard
            title="Approved Courses"
            description="The participant with the courses offered by us has many services and features"
            icon="/icon9.png"
          />
          <ServiceCard
            title="Featured Courses"
            description="We update the list of courses according to the needs of the labor market"
            icon="/icon8.png"
          />
          <ServiceCard
            title="Courses by specialization"
            description="More than 20 specializations in many fields"
            icon="/icon7.png"
          />
          <ServiceCard
            title="Courses by city"
            description="Our favorite cities with attractive attractions"
            icon="/icon6.png"
          />
        </div>
      </div>
    );
  };
  

  
  export default MainContent;
  