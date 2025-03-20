import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Card = ({ number, title, description , slug }) => {
  return (
    <div className="flex flex-col border-[1px] border-primary items-center justify-center p-6 rounded-lg hover:shadow-md hover:bg-white group">
      <div
        className={cn(
          'h-12 w-12 flex items-center justify-center bg-primary text-white rounded-full font-bold mb-4',
         
        )}
      >
        {number}.
      </div>
      <h3 className="mb-2 font-semibold text-md text-center">{title}</h3>
      <div className='text-xs'>
        <p className="mb-4 text-center text-gray-600 line-clamp-3">{description}</p>
      </div>
      <Link href={`consulting-services/${slug}`} 
              className="text-white py-2 rounded-full px-4 shadow-lg text-center flex justify-center font-medium tracking-wide mt-4 text-xs transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #FBBA07 0%, #F8C63D 50%, #F5D273 100%)",
              }}
            >
              More Details
            </Link>
   
    </div>
  );
};

export default Card;