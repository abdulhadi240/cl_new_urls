import Courses_Card from '@/app/account/components/Courses_Card'
import Content_extend from '@/app/course_detail/components/Content_extend'
import React from 'react'

const Inputs = ({data}) => {
  return (
    <div>
        {/* Overlay Content */}
        <div className="absolute flex items-center justify-center w-full max-w-4xl p-6 rounded-lg ">
          <div className="flex flex-col justify-center gap-2 text-black bg-transparent">
            {/* Search Input */}
            <div className="flex justify-between p-1 bg-white rounded-md md:p-3 ">
              <input
                type="text"
                placeholder="Search in specific course"
                value={''}
              
                className="w-full px-4 py-2 text-sm border border-gray-300 border-none rounded-md md:text-base placeholder:text-sm md:flex-1 focus:outline-none focus:ring-0"
              />
              <button className="px-4 py-1 text-sm text-white transition-colors rounded-md md:text-base md:px-6 md:py-2 bg-primary hover:bg-primary/80">
                Search
              </button>
            </div>
            <div className="flex justify-center gap-2 ">
              {/* Dropdowns */}
              <div className="grid justify-center grid-cols-2 gap-2 md:space-y-0 md:flex md:space-x-2">
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Language</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Month</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Year</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Category</option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">
                    Specialization
                  </option>
                </select>
                <select className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md md:text-base md:px-4 md:w-auto focus:outline-none focus:ring-2 focus:ring-primary">
                  <option className="text-white bg-primary">Place</option>
                </select>
              </div>
            </div>
        <Content_extend>
        <div className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3 ">
          {data.data.map((course) => {
            return (
              <Courses_Card data={course}/>
            )
          })}
          
        </div>
       
        <div className="flex flex-col gap-2 mt-10">
        <h1 className="flex items-center justify-center p-1 text-2xl font-bold text-center md:p-0">Mini Masters Programmes In Management</h1>
      <p className="mb-4 text-base text-center md:text-start">We offer different short and mini master courses across (Non-Academic) our branches in Europe. Course will help you improve your professional experience and give you more support to your CV. </p>
      </div>
      </Content_extend>
    </div>
    </div>
    </div>
  )
}

export default Inputs