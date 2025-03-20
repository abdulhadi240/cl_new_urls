import React from 'react'

const Cards_Information = ({title , Icon , des}) => {
  return (
    <div className='w-64 h-28 mt-3 flex flex-col gap-3  border-[1px] rounded-md shadow-md'>
        <div className='flex items-center justify-between mx-5 mt-4'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex items-center justify-center w-8 h-8 font-bold text-white rounded-full bg-primary'>
            <Icon size={24}/>
            </div>
        </div>

        <h1 className='mx-5 text-sm'>{des}</h1>
    </div>
  )
}

export default Cards_Information