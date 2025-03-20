import React from "react";
import Content_extend from "../course_detail/components/Content_extend";
import Image from "next/image";
import Category_card from "./components/Category_card";
import { FaHeartBroken } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import DesktopCarasoul from "../blogs-details/components/DesktopCarasoul";
import Carasoul from "../blogs/components/Carasoul";
import HeaderSection from "@/components/HeaderSection";

const page = () => {
  return (
    <div>
      <HeaderSection/>
      <Content_extend>
        <div className="flex flex-col gap-10 mx-2 md:mx-10">
          <h1 className="mt-10 text-lg font-bold text-primary dark:text-white">
            All Details For Course AES
          </h1>
          <div className="relative w-full h-[300px]">
            <Image
              src="/blog.png"
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </div>
          <div>
            <h1 className="text-lg font-medium text-primary dark:text-white">
              O6 Super Coins on the way
            </h1>
            <p className="text-sm text-black/70 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmod
            </p>
          </div>
          <div>
            <h1 className="text-lg font-medium text-primary dark:text-white">
              O6 Super Coins on the way
            </h1>
            <p className="text-sm text-black/70 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmod
            </p>
          </div>
          <div>
            <h1 className="text-lg font-medium text-primary dark:text-white">
              O6 Super Coins on the way
            </h1>
            <p className="text-sm text-black/70 dark:text-white/70">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmod
            </p>
          </div>
          <div className="flex flex-col bg-[#e2f0ff] p-2 md:p-5 rounded-xl">
            <div className="flex items-center gap-2">
              <Image
                src={"/author.png"}
                width={40}
                height={40}
                alt="image"
                className="my-2 bg-[#d9d9d9] rounded-lg "
              />
              <h1 className="text-xl text-primary ">Bulkin Simons</h1>
            </div>
            <p className="mt-4 text-xs md:text-sm text-black/70 ">
              Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum consectetur
              adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 mb-2 md:grid-cols-3">
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
              <Category_card
                Icon={MdHealthAndSafety}
                title={"Lifestyle"}
                Icon1={MdOutlineArrowOutward}
              />
            </div>
          </div>
          
        </div>
      </Content_extend>
      <div className="heading">
        <h1 className="mx-20 mt-20 text-xl text-center md:text-start text-primary dark:text-white">Similar Courses</h1>
      </div>
      <div className="hidden sm:block">
            <DesktopCarasoul />
          </div>
          <div className="flex justify-center sm:hidden">
            <Carasoul />
          </div>
    </div>
  );
};

export default page;
