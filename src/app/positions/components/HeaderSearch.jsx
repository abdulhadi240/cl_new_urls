import Image from "next/image";
import StatsSection from "./StatsSection";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
const HeaderSearch = () => {
  return (
    <div className="bg-[#F1F2F499]  md:p-4">
      <div className="flex justify-between md:px-10 ">
        <div className="flex flex-col md:p-8 text-start">
          <h1 className="p-1 mt-2 text-2xl font-semibold text-center md:text-4xl md:text-start md:max-w-9/12 ">
            Find a job that suits your interest & skills.
          </h1>
          <p className="mt-4 text-xs text-center text-gray-600 md:text-start md:w-7/12">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
            in scelerisque leo, eget sollicitudin velit bestibulum.
          </p>
          <div className="flex flex-col overflow-hidden p-2 md:flex-row md:max-w-[500px] h-auto md:gap-3 mt-8 text-sm bg-white">
            <div className="flex flex-col md:flex-row">
            <div className="flex items-center gap-2 ml-3 md:mx-4 md:m-0 text-primary">
              <IoIosSearch size={25} />
              <input
                type="text"
                className="w-full px-1 py-3 md:w-36 active:border-0 rounded-l-md"
                placeholder="Job title, keyword..."
              />
            </div>
            <div className="items-center hidden mr-3 text-xl font-thin md:flex text-black/60">|</div>
            <div className="w-full md:hidden text-primary border-[1px] border-primary"/>
            <div className="flex items-center gap-2 mx-4 ml-3 md:m-0 text-primary">
              <CiLocationOn size={25} />
              <input
                type="text"
                className="w-full px-1 py-3 border-0 border-gray-300 md:w-36 active:border-0"
                placeholder="Your location..."
              />
            </div>
            </div>
            <button className="w-full py-2 text-sm text-center text-white bg-primary">
              Search
            </button>
            
          </div>
          <p className="p-2 mt-2 text-xs text-center md:text-start">
            <span className="font-bold text-primary">Suggestion</span> : Designer , Programming ,{" "}
            <span className="font-bold text-primary">Digital Marketing</span>,Video
            ,Animation{" "}
          </p>
        </div>

        <div className="hidden md:block">
          <Image src={"/main.png"} width={500} height={500} alt="hero" priority />
        </div>
      </div>

      <StatsSection />
    </div>
  );
};

export default HeaderSearch;