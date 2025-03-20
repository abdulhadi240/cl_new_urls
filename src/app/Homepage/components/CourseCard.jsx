import React from 'react'
import { GoDatabase } from "react-icons/go";
const CourseCard = ({title,desc}) => {
  return (
    <div>
        <div className="flex flex-col items-center gap-1 p-4 text-center bg-white/60 border-[#F2F2F2] shadow-md h-36 w-44 rounded-3xl">
            <div className='bg-[#FFF7E3] p-2'>
                <GoDatabase size={20}/>
            </div>
                <h4 className="text-base font-light">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
    </div>
  )
}

export default CourseCard