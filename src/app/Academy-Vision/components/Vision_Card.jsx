import React from 'react'

const Vision_Card = ({text , paragraph , children}) => {
  return (
    <div className='flex flex-col gap-3 '>
        <div className='mt-4 text-xl font-bold text-primary'>
            {text}
        </div>
        <div>
            {paragraph}
        </div>
        <div className='max-w-[1200px] text-sm'>
        {children}
        </div>
    </div>
  )
}

export default Vision_Card