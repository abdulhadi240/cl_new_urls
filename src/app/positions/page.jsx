import React from "react";
import HeaderSearch from "./components/HeaderSearch";
import StatsSection from "./components/StatsSection";
import JobCard from "./components/JobCard";
import Vacancies from "./components/Vacancies";
import TopCompanies from "./components/TopCompanies";
import HeaderSection from "@/components/HeaderSection";

const page = () => {
  const jobs = [
    {
      title: "Senior UX Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Technical Support Specialist",
      type: "Part-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Technical Support Specialist",
      type: "Part-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Senior UX Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Technical Support Specialist",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Senior UX Designer",
      type: "Full-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Technical Support Specialist",
      type: "Part-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Technical Support Specialist",
      type: "Part-Time",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    {
      title: "Senior UX Designer",
      type: "Internship",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
    },
    // Add more jobs here
  ];
  return (
    <>
      <HeaderSection />
      <div>
        <div className="container mx-auto md:p-4">
          <HeaderSearch />
          <div>
            <div className="">
              <h1 className="flex justify-center mt-8 mb-8 text-2xl font-bold md:block md:mx-20">
                Most Popular Vacancies
              </h1>
              <div className="flex justify-center p-4 sm:p-0">
                <Vacancies />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mx-10 mt-8 ">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <h1 className="text-[#0a65cc] text-xs border-[1px] border-[#0a65cc] p-2">
              View All
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 mx-5 mt-6 md:mx-10 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <TopCompanies />
        </div>
      </div>
    </>
  );
};

export default page;
