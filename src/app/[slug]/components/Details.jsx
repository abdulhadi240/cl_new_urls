'use client'
import React, { useState } from 'react'
import Summary from './Summary';
import { cn } from '@/lib/utils';
import Download from './Download';

const Details = ({course}) => {
    const [select, setSelect] = useState('Summary');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<Summary summary={course.data}/>);

  const handleSelect = (newSelection) => {
    setIsAnimating(true);

    // Delay the switch of the component to allow animation to play out
    setTimeout(() => {
      setSelect(newSelection);
      setCurrentComponent(newSelection === 'Summary' ? <Summary summary={course.data}/> : <Summary summary={course.data}/>);
      setIsAnimating(false);
    }, 300); // Matches the duration of the animation
  };
  return (
    <div>
        <div className='flex justify-center gap-4 mb-6 select-none md:justify-start'>
        <div className='flex items-center p-1 mt-10 text-white rounded-full md:p-2 md:px-4 bg-primary'>
          <div
            onClick={() => handleSelect('Summary')}
            className={cn('p-1 px-2 text-sm md:text-base cursor-pointer', select === 'Summary' && 'border-primary bg-white rounded-full text-primary transition-all delay-200')}
          >
            Summary
          </div>
          <div
            onClick={() => handleSelect('Quick_Inquiry')}
            className={cn('border-primary text-sm md:text-base p-1 px-2 cursor-pointer', select === 'Quick_Inquiry' && 'border-primary bg-white rounded-full text-primary transition-all delay-200')}
          >
            Quick Inquiry
          </div>
          <div
            onClick={() => handleSelect('Download_PDF')}
            className={cn('border-primary text-sm md:text-base p-1 px-2 cursor-pointer', select === 'Download_PDF' && 'border-primary bg-white rounded-full text-primary transition-all delay-200')}
          >
            Download PDF
          </div>
        </div>
      </div>
      
      <div className={`transition-all duration-300 mb-6 ${isAnimating ? 'slide-out' : 'slide-in'}`}>
        {currentComponent}
      </div>
    </div>
  )
}

export default Details