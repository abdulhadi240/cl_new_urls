import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
const JobCard = ({ job }) => {
    return (
      <Link href={`/job/${job.slug}`}>
      <div className={`p-6 max-w-72 transition-shadow rounded-md shadow-md ${job.job_type === 'Full Time' ? "bg-gradient-to-r from-yellow-50" : "bg-white"}  hover:shadow-lg`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold md:text-xl text-primary">{job.title}</h3>
          <span className={`text-center py-1 rounded-md  text-xs md:text-sm ${
            job.job_type === "Full-Time" ? "bg-green-100 w-20 text-green-600" : "bg-yellow-100 w-24 text-yellow-600"
          }`}>
            {job.job_type}
          </span>
        </div>
        <p className="mt-2 text-gray-600">Salary: {job.min_salary} - {job.max_salary}</p>
        <div className='flex items-center gap-2 mt-2'>
          <div className='flex flex-col '>
        <p className="text-gray-500 text-md">{job.company.name}</p>
        <div className='flex gap-1 text-primary'>
          <CiLocationOn/>
        <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        </div>
        </div>
        </div>
        </Link>
      
    );
  };
  
  export default JobCard;
  