import React from 'react';
import Marquee from "react-fast-marquee";
import MyComponent from './MyComponent';

const CustomerCarasoul = () => {
  return (
    <div className="flex items-center justify-center w-full mt-10">
      <div className="sm:w-[70%]">
        <Marquee gradient pauseOnHover autoFill>
          <MyComponent image={'/logo1.webp'} />
          <MyComponent image={'/logo2.webp'} />
          <MyComponent image={'/logo3.webp'} />
          <MyComponent image={'/logo1.webp'} />
          <MyComponent image={'/logo2.webp'} />

        </Marquee>
      </div>
    </div>
  );
}

export default CustomerCarasoul;
