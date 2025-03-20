import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Features = ({ image, icon, number, heading, text, right }) => {
  return (
    <Link href='/plan_detail'><div className='mt-32 overflow-hidden'>
      {right ? (
        <div className='flex-col justify-between mx-2 overflow-hidden sm:flex sm:flex-row sm:mx-16 lg:mx-44'>
          {/* Left side with Image */}
          <div>
            <Image src={image} width={300} height={300} alt='image' />
          </div>
          {/* Right side with content */}
          <div className='flex flex-col gap-4 w-80'>
            <div className='flex items-center justify-between'>
              <Image src={icon} width={50} height={50} alt='icon' />
              <h1 className='text-2xl sm:text-4xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold'>{heading}</h1>
              <p>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
      ) : (
        <div className='flex-col justify-between mx-2 overflow-hidden sm:flex sm:flex-row-reverse sm:mx-44 lg:mx-44'>
          {/* Right side with Image */}
          <div>
            <Image src={image} width={300} height={300} alt='image' />
          </div>
          {/* Left side with content */}
          <div className='flex flex-col gap-4 w-80'>
            <div className='flex items-center justify-between'>
              <Image src={icon} width={50} height={50} alt='icon' />
              <h1 className='text-2xl sm:text-4xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='text-xl font-bold'>{heading}</h1>
              <p>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
      )}
    </div></Link>
  );
};

export default Features;
