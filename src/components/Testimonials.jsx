import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <div>
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 ">
          {/* Testimonial Wall */}
          <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row items-center">
                <Avatar className="text-sm text-primary mr-2">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">AA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base font-semibold -mt-4">Ahmed Al-Mansoori</h6>
                  <p className="text-sm text-gray-500">
                    Project Management Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “The Project Management course at Crown London Institute was an
                exceptional experience. The trainers are highly professional,
                and the content is rich with practical insights. I now feel more
                confident in managing projects effectively."
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row">
                <Avatar className="text-sm mr-2 text-primary">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">FA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base -mt-4 font-semibold">Fatima Al-Sayed</h6>
                  <p className="text-sm text-gray-500">
                    Leadership Training Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “This leadership training course transformed my approach to team
                management. The interactive sessions and real-life case studies
                helped me develop strong leadership skills. I highly recommend
                this course!"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row">
                <Avatar className="text-sm text-primary mr-2">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">KA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base -mt-4 font-semibold"> Khalid Al-Farsi</h6>
                  <p className="text-sm text-gray-500">
                    Business Communication Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “The Business Communication course improved my ability to
                communicate effectively in a corporate environment. The
                practical exercises and expert guidance made a significant
                difference in my professional interactions."
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row">
                <Avatar className="text-sm text-primary mr-2">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">LH</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base -mt-4 font-semibold">Layla Hassan</h6>
                  <p className="text-sm text-gray-500">
                    Human Resource Management Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “The HR Management course provided in-depth knowledge about
                modern HR practices. I now have a better understanding of
                recruitment, employee relations, and performance management. An
                excellent program!"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row">
                <Avatar className="text-sm mr-2 text-primary">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">OA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base -mt-4 font-semibold">Omar Al-Dabbagh</h6>
                  <p className="text-sm text-gray-500">
                    Digital Marketing Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                "I gained valuable digital marketing skills that I immediately
                applied to my business. The course covered SEO, social media
                strategies, and content marketing in great detail. Truly a
                game-changer!"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
            {/* Item */}
            <div className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-gray-300 bg-white p-8">
              <div className="mb-4 flex flex-row">
                <Avatar className="text-sm mr-2 text-primary">
                  <AvatarImage src="https://github.com/shadcn.png1" />
                  <AvatarFallback className="text-primary">HA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h6 className="text-base -mt-4 font-semibold">Huda Al-Najjar</h6>
                  <p className="text-sm text-gray-500">
                    {" "}
                    Financial Management Course
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm text-gray-500">
                “The Financial Management course helped me enhance my financial
                planning and analysis skills. The instructors explained complex
                financial concepts in a simple and practical way. A must-attend
                course!"
              </p>
              <div className="flex">
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
                <img
                  src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg"
                  alt=""
                  className="mr-1.5 inline-block w-4 flex-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
