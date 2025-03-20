import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="relative overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src={"/hero-bg.webp"}
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          className="absolute top-0 left-0 brightness-90"
          priority
          loading="eager"
        />

        {/* Navbar (z-index 10 to ensure visibility over image) */}
        <div className="relative z-10">
          <HeaderSection />
        </div>
      </div>
      <div className="z-10">
        <h1>Developing people to improve performance</h1>
      </div>
    </>
  );
};

export default Hero;
