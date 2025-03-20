import Image from 'next/image';
import React from 'react';

const MyComponent = ({ image }) => {
  return (
    <div className="flex ml-8 items-center justify-center w-[100px] h-[100px] overflow-hidden">
      <Image src={image} width={100} height={100} alt="logo" objectFit="contain" />
    </div>
  );
};

export default MyComponent;
