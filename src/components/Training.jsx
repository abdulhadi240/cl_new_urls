import Image from "next/image";
import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
const Training = () => {
  return (
    <div className="flex justify-between mx-20 mt-20">
      <div className="max-w-96 left">
        <h1 className="font-semibold text-[#111F51] text-xl">British Academy</h1>
        <p>
          The British Academy for Training and Development is a British
          institution specialized in the training and development of human and
          institutional staff in the areas of management, business management,
          media, public relations, information technology, public health and
          other related disciplines. The Academy holds courses, training
          programs and graduate studies in Britain, Germany, France, Switzerland
          and the rest of the European continent and other countries around the
          world periodically throughout the year.
        </p>
        <div className="flex gap-2 mt-6 text-xs">
        <div className="bg-[#111F51]  text-white w-auto flex items-center gap-2 p-3 rounded-xl">How We Are <span><HiOutlineArrowSmRight size={15}/></span></div>
        <div className="bg-[#111F51] text-white w-auto flex items-center gap-2 p-3 rounded-xl">Tracing Plan <span><HiOutlineArrowSmRight size={15}/></span></div>
        <div className="bg-[#111F51] text-white w-auto flex items-center gap-2 p-3 rounded-xl">Academy Profile <span><HiOutlineArrowSmRight size={15}/></span></div>
        </div>
      </div>
      <div className="right">
        <Image src={'/12.webp'} width={500} height={500} alt="iamge" className="rounded-lg"/>
      </div>
    </div>
  );
};

export default Training;
