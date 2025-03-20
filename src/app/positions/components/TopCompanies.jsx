// components/TopCompanies.js
import Image from 'next/image';
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { FaLocationCrosshairs, FaLocationDot, FaLocationPin, FaLocationPinLock } from 'react-icons/fa6';
import Register_card from './Register_card';

const TopCompanies = () => {
  const companies = [
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
    { name: "Dribbble", location: "Dhaka, Bangladesh", openPositions: 3 },
  ];

  return (
    <div className="p-1 mt-16 sm:px-10 sm:py-10">
      <h2 className="text-2xl font-bold text-center">Top Companies</h2>
      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <div key={index} className="px-4 py-6 bg-white border border-gray-300 rounded-lg shadow-md max-w-80 ">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-2 bg-primary">
                <Image src="/drible.png" alt={`${company.name} logo`} width={30} height={30}/>
              </div>
              <div className="ml-3">
                <div className="flex gap-3">
                    <h1 className='flex items-center'>{company.name}</h1>
                    <div className='bg-[#fceeee] text-xs text-primary flex items-center text-center px-4 py-1 rounded-full'>
                        Featured
                    </div>
                    </div>
                <div className="flex items-center gap-1 mt-1 text-gray-500">
                    <div className='text-primary'>
                    <FaLocationDot/>
                    </div>
                    <h1 className='text-xs'>
                    {company.location}</h1></div>
              </div>
            </div>
            <button className="flex justify-center px-4 py-2 mt-4 text-sm text-center text-[#0a65cc] rounded w-72 bg-[#e7f0fa] hover:bg-primary/80">
              Open Position ({company.openPositions})
            </button>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-20'>
      <div className="flex flex-col gap-4 cards md:flex-row">
        <Register_card Title={'Become a Candidate'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.'} button={'Register now'} image={'/card-image.png'}/>
        <Register_card Title={'Become an Employee'} paragraph={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.'} white button={'Register now'} image={'/card-image2.png'}/>

      </div>
      </div>
    </div>
  );
};

export default TopCompanies;
