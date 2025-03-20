import Image from 'next/image';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineBook } from 'react-icons/ai';
import React from 'react';

const RequestCourse = () => {
  return (
    <section className="bg-[#152765] text-white py-24 px-4 relative rounded-lg">
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row">
        
        {/* Text and Form Container */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h2 className="flex justify-center text-3xl">Request Course</h2>
          <p className="flex justify-center text-white">You can contact us for a special course</p>

          {/* Form */}
          <form className="mt-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="flex items-center w-full mb-2 border-b-2">
                <AiOutlineUser className="mr-2 text-white " size={24} />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full py-2 bg-transparent border-0 border-white placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="flex items-center w-full mb-2 border-b-2">
                <AiOutlineMail className="mr-2 text-white" size={24} />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full py-2 bg-transparent border-white placeholder:text-white focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="flex items-center w-full mb-2 border-b-2">
                <AiOutlinePhone className="mr-2 text-white" size={24} />
                <input 
                  type="text" 
                  placeholder="Mobile" 
                  className="w-full py-2 bg-transparent border-white placeholder:text-white focus:outline-none"
                />
              </div>
              <div className="flex items-center w-full mb-2 border-b-2">
              <AiOutlineBook className="mr-2 text-gray-300" size={24} />
                <select 
                  className="w-full py-2 text-white bg-transparent border-white focus:outline-none "
                >
                  <option value="request_course text-black">Request Course</option>
                  <option value="course_1 text-black">Course 1</option>
                  <option value="course_2 text-black">Course 2</option>
                </select>
              </div>
            </div>

            <button className="w-full p-2 mt-5 text-white bg-[#B12E33] rounded-lg">Send</button>
          </form>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-4 left-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 right-4 lg:block">
          <div className="grid grid-cols-4 gap-2">
            {Array(20).fill().map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Circular Profile Images */}
        <div className="absolute top-32 left-32 lg:top-32 lg:left-8">
          <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="hidden rounded-full sm:block"
          />
        </div>

        <div className="absolute top-32 left-32 lg:bottom-32">
          <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="hidden rounded-full sm:block"
          />
        </div>

        <div className="absolute top-32 right-32">
          <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="hidden rounded-full sm:block"
          />
        </div>

        <div className="absolute bottom-32 right-8">
          <Image
            src="/1.png" 
            alt="Profile"
            height={50}
            width={50} 
            className="hidden rounded-full sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default RequestCourse;
