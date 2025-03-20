import React from 'react'

const Card_Quality = ({Icon , text , para}) => {
  return (
    <div className='max-w-56 h-56 border-[1px] p-2 rounded-2xl flex flex-col gap-3 justify-center bg-primary text-white'>
        <div className="flex justify-center image ">
            <Icon size={44}/>
        </div>
        <div className="flex flex-col gap-2 text">
            <h1 className='flex justify-center font-bold'>{text}</h1>
            <h1 className='flex justify-center text-sm font-light text-center'>{para}</h1>
        </div>
    </div>
  )
}

export default Card_Quality