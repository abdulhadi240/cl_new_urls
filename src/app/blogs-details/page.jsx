import Image from "next/image";
import React from "react";
import Content from "../blogs/components/Content";
import Link from "next/link";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import DesktopCarasoul from "./components/DesktopCarasoul";
import Carasoul from "../blogs/components/Carasoul";
import HeaderSection from "@/components/HeaderSection";

const page = () => {
  return (
    <div>
      <HeaderSection/>
      <div className="overflow-hidden">
        <div className="banner-container">
          <div className="relative h-32 banner sm:h-64">
            {" "}
            {/* Set height and make container relative */}
            <Image
              src="/plan.webp"
              alt="banner"
              layout="fill" // Fill the entire container
              objectFit="cover" // Maintain aspect ratio without stretching
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <Content>
            <div className="mx-5 sm:mx-10">
              <h1 className="flex justify-center mt-10 mb-10 text-2xl font-bold text-center text-primary">
                Why Swift UI Should Be On The Radar Of Every Mobile Developer
              </h1>
              <p className="text-base text-black/70">
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
                <br />
                <br />
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
                TOTC is a platform that allows educators to create online
                classes whereby they can store the course materials online;
                manage assignments, quizzes and exams; monitor due dates; grade
                results and provide students with feedback all in one place.
                TOTC is a platform
              </p>
              <div className="flex flex-col justify-between mt-10 md:flex-row">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 btns">
                  <button className="bg-[#9194B41A] hover:bg-[#9194B4] py-2 px-4 rounded-lg text-sm">
                    Stunning
                  </button>
                  <button className="bg-[#9194B41A] hover:bg-[#9194B4] py-2 px-4 rounded-lg text-sm">
                    Stunning
                  </button>
                  <button className="bg-[#9194B41A] hover:bg-[#9194B4] py-2 px-4 rounded-lg text-sm">
                    Stunning
                  </button>
                  <button className="bg-[#9194B41A] hover:bg-[#9194B4] py-2 px-4 rounded-lg text-sm">
                    Stunning
                  </button>
                </div>
                <div className="flex justify-center mt-6 icons md:mt-0">
                  <div className="flex mb-4 space-x-2">
                    <Link href="#" className="text-red-600">
                      <FaYoutube size={25} />
                    </Link>
                    <Link href="#" className="text-pink-500">
                      <FaInstagram size={25} />
                    </Link>
                    <Link href="#" className="text-blue-400">
                      <FaTwitter size={25} />
                    </Link>
                    <Link href="#" className="text-blue-700">
                      <FaLinkedin size={25} />
                    </Link>
                    <Link href="#" className="text-blue-600">
                      <FaFacebook size={25} />
                    </Link>
                  </div>
                </div>
                
              </div>
              
            </div>
            <div className='hidden sm:block'>
            <DesktopCarasoul/>
            </div>
            <div className='flex justify-center sm:hidden'>
                <Carasoul/>
            </div>
          </Content>
          
        </div>
      </div>
    </div>
  );
};

export default page