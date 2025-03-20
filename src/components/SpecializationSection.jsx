'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const SpecializationSection = ({ data }) => {
  // State to track the currently selected specialization.
  // By default, we select the first one if available.
  const [selectedSpec, setSelectedSpec] = useState(data && data.length > 0 ? data[0] : null)

  return (
    <div className="container md:px-16 p-4 ">
      <div className="mb-6 -mt-16">
        <div className="flex space-x-4 overflow-x-auto py-2 custom-scrollbar">
          {data && data.length > 0 ? (
            data.map((spec) => (
              <div
                key={spec.id}
                onClick={() => setSelectedSpec(spec)}
                className={`w-48 px-4 py-4 h-10  flex items-center justify-center text-center cursor-pointer rounded-lg text-base border transition-colors  ${selectedSpec && selectedSpec.id === spec.id
                  ? 'bg-primary text-white border-blue-500'
                  : 'bg-white text-primary border-gray-300 hover:bg-gray-100'}`}
              >
                {spec.name.split(' ')[0] + ' ' + spec.name.split(' ')[1]}
              </div>
            ))
          ) : (
            <p className='text-primary text-xs'>No specializations available</p>
          )}
        </div>

      </div>




      {/* Courses List for the Selected Specialization */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 text-center  md:px-20 border-[2px] py-6 rounded-lg">
          {selectedSpec && selectedSpec.categories && selectedSpec.categories.length > 0 ? (
            selectedSpec.categories.map((course) => (
              <Link
                key={course.id}
                href={`/${selectedSpec.slug}/${course.slug}`}
                passHref
                className="mt-2 text-gray-700 text-sm font-light relative p-4 rounded-lg transition-all ease-in-out duration-300 hover:text-primary hover:shadow-lg"
              >
                <div className="relative flex justify-center line-clamp-2">
                  <p className="mb-2 line-clamp-2 text-center w-64 pb-3 flex justify-center">{course.name}</p>
                  <div className="absolute bottom-0 left-0 w-full h-[1px]  bg-primary transition-all duration-300"></div>
                </div>
              </Link>
            ))
          ) : (
            <div className='flex justify-center'>
              <p className='flex justify-center text-center text-sm text-primary mx-auto w-screen'>No courses available for this specialization.</p>
            </div>
          )}
        </div>
      </div>


    </div>
  )
}

export default SpecializationSection
