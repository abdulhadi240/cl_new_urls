import React from 'react'

const Items = ({Title , para}) => {
  return (
    <div className='group'>
        <h1 className='text-sm font-semibold group-hover:text-primary hover:cursor-pointer'>{Title}</h1>
        <p className='text-xs text-gray-500 group-hover:underline hover:cursor-pointer'>{para}</p>
    </div>
  )
}

export default Items