import Image from 'next/image'
import React from 'react'

const Cities = ({image , name , country ,mobile }) => {
  return (
    <div className={`flex flex-col  text-[9px] text-start w-24 sm:w-36 ${mobile ? 'hidden sm:block' : 'block'}`}>
        <Image src={image} width={100} height={100} alt='cities' className='rounded-xl'/>
        <h1 className='font-semibold'>{name}</h1>
        <p>{country}</p>
    </div>
  )
}

export default Cities