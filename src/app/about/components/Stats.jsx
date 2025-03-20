'use client';
import { AnimatedNumber } from './AnimatedNumber';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export default function Stats({number,icon,text}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(number);
  }

  return (
    <div className='flex flex-col'><div className='flex w-full items-center justify-center' ref={ref}>
          <AnimatedNumber
              className='inline-flex items-center font-medium text-4xl text-zinc-800 dark:text-zinc-50'
              springOptions={{
                  bounce: 0,
                  duration: 10000,
              }}
              value={value} />
          <span className='font-bold text-4xl ml-1 items-center text-secondary'>
              {icon}
          </span>

      </div><h1 className='text-xs font-bold mt-1'>{text}</h1></div>
  );
}
