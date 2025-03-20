import React from 'react'

const Category_card = ({Icon , title , Icon1}) => {
  return (
    <div className='flex items-center justify-between md:w-64  min-w-36 border-[1px] transition-all hover:border-secondary rounded-lg group h-auto p-2 md:p-3'>
        <div className='flex items-center gap-4'>
            <Icon size={20}/>
            <h1 className='text-xs md:text-base'>{title}</h1>
            
        </div>
        <div>
        <div className='p-2 group-hover:transition-all group-hover:bg-secondary group-hover:text-white group-hover:rounded-lg'><Icon1/></div>
        </div>
    </div>
  )
}

export default Category_card