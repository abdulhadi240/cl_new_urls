import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
  } from './Carousel';
  
  export default function Carasoul() {
    return (
      <div className='relative w-full px-4'>
        <Carousel>
          <CarouselContent className='-ml-4'>
            <CarouselItem className='basis-1/1 md:basis-1/4 pl-4'>
              <div className='flex flex-col aspect-square p-2 items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                <Image src={'/member.webp'} height={100} width={500} alt='member'/>
                <div className='py-3'>
                    <h1 className='font-bold '>Cameron Williamson</h1>
                    <p className='text-sm text-center'>Assistant Manager</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/1 md:basis-1/4 pl-4'>
              <div className='flex flex-col aspect-square p-2 items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                <Image src={'/member.webp'} height={100} width={500} alt='member'/>
                <div className='py-3'>
                    <h1 className='font-bold '>Cameron Williamson</h1>
                    <p className='text-sm text-center'>Assistant Manager</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/1 md:basis-1/4 pl-4'>
              <div className='flex flex-col aspect-square p-2 items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                <Image src={'/member.webp'} height={100} width={500} alt='member'/>
                <div className='py-3'>
                    <h1 className='font-bold '>Cameron Williamson</h1>
                    <p className='text-sm text-center'>Assistant Manager</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/1 md:basis-1/4 pl-4'>
              <div className='flex flex-col aspect-square p-2 items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                <Image src={'/member.webp'} height={100} width={500} alt='member'/>
                <div className='py-3'>
                    <h1 className='font-bold '>Cameron Williamson</h1>
                    <p className='text-sm text-center'>Assistant Manager</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1/1 md:basis-1/4 pl-4'>
              <div className='flex flex-col aspect-square p-2 items-center justify-center border border-zinc-200 dark:border-zinc-800'>
                <Image src={'/member.webp'} height={100} width={500} alt='member'/>
                <div className='py-3'>
                    <h1 className='font-bold '>Cameron Williamson</h1>
                    <p className='text-sm text-center'>Assistant Manager</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNavigation
            className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
            classNameButton='bg-primary *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
            alwaysShow
          />
        </Carousel>
      </div>
    );
  }
  