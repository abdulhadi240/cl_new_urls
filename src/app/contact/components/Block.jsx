import Image from 'next/image'
import React from 'react'

const Block = ({Icon , title , text}) => {
  return (
    <div className='flex items-center gap-4 mt-4 dark:text-black'>
        <div>
            <Icon size={20}/>
        </div>
        <div className='flex flex-col'>
            <h1 className='text-xl'>{title}</h1>
            <p className='text-xs max-w-56'>{text}</p>

        </div>
        
    </div>
  )
}

export default Block