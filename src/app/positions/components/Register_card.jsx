import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BiArrowFromRight, BiArrowToLeft, BiRightArrowAlt } from 'react-icons/bi'


const Register_card = ({Title , paragraph , button , white , image}) => {
  return (
    <div>
        <div className="relative md:w-[450px] h-56 overflow-hidden ">
        <div className='relative w-screen md:w-[450px] h-56'>
        {/* Add width and height for Image to maintain aspect ratio */}
        <Image src={image} alt='card-image' layout='fill' objectFit='cover' className="absolute inset-0 bottom-0 rounded-lg hover:scale-105 hover:transition-all" />
      </div>
            <div className='absolute z-10 flex flex-col gap-4 p-3 bottom-14'>
                <h1 className={cn('text-lg tracking-wide ',{'text-white':white})}>{Title}</h1>
                <p className={cn('text-xs w-72 tracking-wide',{'text-white/80':white})}>{paragraph}</p>
                <button className='flex items-center w-32 gap-3 p-3 text-xs text-center bg-white text-[#0a65cc] hover:bg-[#0a65cc] hover:text-white transition-all'>
                  {button}
                  <BiRightArrowAlt/>
                  </button>
            </div>
        </div>

    </div>
  )
}

export default Register_card