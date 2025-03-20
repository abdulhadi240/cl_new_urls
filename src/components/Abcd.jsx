'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const SpecializationSection = ({ data }) => {
  // Select the first specialization by default if available.
  const [selectedSpec, setSelectedSpec] = useState(data && data.length > 0 ? data[0] : null)

  return (
    <div className="py-8">
      {/* Specializations Horizontal List */}
      <div className="mb-6">
        <h1 className="text-[#a9becc] text-5xl max-w-4xl mx-auto text-center">
          Take Your <span className="text-primary font-bold">First Step</span> Towards Achieving Professional Goals
        </h1>
        {/* Container with fixed maximum width to show only 5 specializations */}
        <div className="overflow-x-auto py-2 mx-10 my-10" style={{ maxWidth: '1794px' }}>
          <div className="flex space-x-4">
            {data && data.length > 0 ? (
              data.map((spec) => (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpec(spec)}
                  className={`h-[75px] w-[346px] text-center overflow-hidden rounded-lg border transition-colors text-sm ${
                    selectedSpec && selectedSpec.id === spec.id
                      ? 'bg-primary text-white border-blue-500'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <span className="block break-words p-2">{spec.name}</span>
                </button>
              ))
            ) : (
              <p className="text-sm">No specializations available</p>
            )}
          </div>
        </div>
      </div>

      {/* Courses List for the Selected Specialization */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-10 justify-items-center border-[2px] rounded-lg p-4">
          {selectedSpec && selectedSpec.courses && selectedSpec.courses.length > 0 ? (
            selectedSpec.courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`}>
                <div className="p-4 rounded-lg shadow hover:shadow-md transition-shadow w-full text-center cursor-pointer h-20 flex flex-col justify-between">
                  <h1 className="text-gray-700 break-words line-clamp-2 text-sm hover:text-secondary">
                    {course.title}
                  </h1>
                  <hr className="mt-2 border-gray-300" />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm">No courses available for this specialization.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SpecializationSection
