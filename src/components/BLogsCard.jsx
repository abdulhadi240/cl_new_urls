
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BLogsCard = ({list , index}) => {
  return (
    <div>
    <Link href={`/Blog/${list.slug}`} key={index}>
            <div className="border-[1.5px] p-4 rounded-lg border-[#bfbfbf] transform scale-100 transition-transform duration-300 hover:scale-105 w-[280px] min-h-[300px]">
              <div className="relative overflow-hidden w-full h-[200px]">
                <Image
                  src={`${list.image}`}
                  layout="fill"
                  objectFit="cover"
                  alt={list.name}
                  className="rounded-md"
                  priority
                />
                <h1 className="absolute top-3 right-3 bg-[#d9d9d9] px-5 py-1 text-xs rounded-full shadow-lg opacity-80">
                  Blogs: {list.number_of_blogs}
                </h1>
              </div>
              <div className="flex flex-col gap-4 justify-center mt-4">
                <h1 className="text-center text-base font-bold text-[#061839]">{list.name}</h1>
                
              </div>
              <div className="flex justify-center">
            <button
              className="text-white p-1 rounded-full px-8 shadow-lg text-center flex justify-center font-medium tracking-wide mt-4 text-xs transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #FBBA07 0%, #F8C63D 50%, #F5D273 100%)",
              }}
            >
              Explore
            </button>
          </div>
            </div>
          </Link></div>
  )
}

export default BLogsCard