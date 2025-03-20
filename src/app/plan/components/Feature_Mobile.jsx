import Image from 'next/image'
import React from 'react'
import { MdHomeWork } from "react-icons/md";
const Feature_Mobile = ({ image, icon, number, heading, text }) => {
  return (
    <div className='overflow-hidden'>
        <div className=''>
          {/* Right side with Image */}
          <div>
            <Image src={image} width={100} height={100} alt='image' />
          </div>
          {/* Left side with content */}
          <div className=''>
            <div className='flex justify-between p-3'>
              <MdHomeWork size={30}/>
              <h1 className='text-3xl sm:text-4xl'>{number}</h1>
            </div>
            <div className='flex flex-col gap-2 mx-2'>
              <h1 className='text-xl font-bold text-start'>{heading}</h1>
              <p className='text-start'>{text}</p>
            </div>
            <button className='bg-[#152765] p-4 mt-2 w-44 text-white rounded-2xl text-sm text-center'>
              View Your Plans
            </button>
          </div>
        </div>
    </div>
  )
}

export default Feature_Mobile