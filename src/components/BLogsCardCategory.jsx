import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BLogsCardCategory({index , list}) {
  return (
    <div key={index}>
      <Link href={`/Blog/${list.slug}`} key={index}>
        <div className="rounded-lg p-2 bg-white text-primary transform scale-100 transition-transform duration-300 hover:scale-105 w-[280px] min-h-[300px]">
        <div className="p-2 border-[1px] shadow-lg border-[#bfbfbf] rounded-lg">
          <div className="relative overflow-hidden w-full h-[150px]">
            <Image
              src={`${list.image}`}
              layout="fill"
              objectFit="cover"
              alt={list.name}
              className="rounded-md"
              priority
            />
            <h1 className="absolute top-3 right-3 bg-[#efefef] px-5 py-1 text-xs rounded-full shadow-lg opacity-80">
              {list.number_of_blogs}
            </h1>
          </div>
          <div className="flex flex-col gap-4 justify-center mt-1">
            <h1 className="text-center line-clamp-2 text-lg text-primary py-2">
              {list.name}
            </h1>
          </div>
          <div className="flex justify-center">
            <button
              className="text-white p-1 rounded-full px-8 shadow-lg text-center flex justify-center font-medium tracking-wide mt-4 text-xs transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, #FBBA07 0%, #F8C63D 50%, #F5D273 100%)",
              }}
            >
              Details
            </button>
          </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BLogsCardCategory