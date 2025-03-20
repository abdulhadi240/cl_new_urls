"use client";
import React, { useState } from "react";
import Image from "next/image";
import HeaderSection from "@/components/HeaderSection";
import Design from "../homepage1/components/Design";
import Link from "next/link";

const Page = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
    <Design secondary={true} bg={true}></Design>

      <div className="container p-4 mx-auto md:p-10 ">
        {/* FAQ Section */}
        <div className="flex flex-col p-2 md:mt-16 md:flex-row md:justify-between">
        <section className="mb-12 ">
          <h2 className="text-2xl font-bold text-[#1B2559] dark:text-white mb-6">
            Every Question Answered
          </h2>
          <div className="space-y-4">
            {/* FAQ 1 */}
            <div>
              <div
                onClick={() => toggleFAQ(1)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                What types of courses does Crown London Institute offer?
                </h3>
                <span>{openFAQ === 1 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height  duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 1 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[80%] text-gray-500 dark:text-white/80">
                We offer a wide range of professional training courses, including corporate training, executive development, compliance and regulatory programs, industry-specific certifications, and skill-based workshops.

                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div>
              <div
                onClick={() => toggleFAQ(2)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                Who can enroll in your courses?
                </h3>
                <span>{openFAQ === 2 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 2 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                Our courses are designed for professionals, business leaders, entrepreneurs, and organizations looking to enhance their skills and stay ahead in their industries.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div>
              <div
                onClick={() => toggleFAQ(3)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                Do you provide in-person or online training?
                </h3>
                <span>{openFAQ === 3 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 3 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                Crown London Institute specializes in in-person training, offering hands-on, interactive sessions at our London-based facility and corporate locations.                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div>
              <div
                onClick={() => toggleFAQ(4)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                How can I register for a course?
                </h3>
                <span>{openFAQ === 4 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 4 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                You can register by filling out our online registration form, contacting us via <Link href={'/contact'} className="font-bold">email</Link>, or <Link href={'/contact'} className="font-bold">calling</Link> our support team for assistance.                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div>
              <div
                onClick={() => toggleFAQ(5)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                What payment methods do you accept?
                </h3>
                <span>{openFAQ === 5 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 5 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                We accept various payment methods, including credit/debit cards, bank transfers, and corporate invoicing for business clients.
                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => toggleFAQ(6)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                Do you offer corporate training for companies?
                </h3>
                <span>{openFAQ === 6 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 6 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                Yes, we provide customized corporate training programs tailored to meet the specific needs of organizations and their teams.                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => toggleFAQ(7)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                Will I receive a certificate upon completion?
                </h3>
                <span>{openFAQ === 7 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 7 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                Yes, all participants who successfully complete a course receive a recognized certificate from Crown London Institute.                </div>
              </div>
            </div>

            <div>
              <div
                onClick={() => toggleFAQ(8)}
                className="flex items-center justify-between md:w-[80%] py-3 border-b border-gray-200 cursor-pointer"
              >
                <h3 className="text-lg font-medium text-[#1B2559] dark:text-white">
                Can I reschedule or cancel my course registration?
                </h3>
                <span>{openFAQ === 8 ? "−" : "+"}</span>
              </div>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openFAQ === 8 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="mb-4 text-sm md:w-[85%] text-gray-500 dark:text-white/80">
                Yes, rescheduling and cancellation options are available. Please refer to our cancellation policy or <Link href={'/contact'} className="font-bold">contact our support team</Link> for assistance.              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <div className="">
          <Image
            src="/faq.webp"
            width={900}
            height={500}
            alt="Planning Image"
            className=""
          />
        </div>

        </div>

        {/* Video Section 
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-[#1B2559] text-center mb-6 dark:text-white">
            Show <span className="text-secondary">video's</span>
          </h2>
          <div className="flex items-center justify-center">
 
            <div className="relative w-full h-64 overflow-hidden bg-gray-200 rounded-lg shadow-lg lg:w-2/3 sm:h-96">
              <video controls className="object-cover w-full h-full">
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>*/}
      </div>
    </>
  );
};

export default Page;
