import React from 'react'
import Courses_Card from './Courses_Card'

const Courses_Selected = () => {
  return (
    <div>
      <div>
        <h1 className='flex justify-center m-10 text-xl font-bold text-center'>Courses You have Selected</h1>
      </div >
      <div className='flex justify-center '>
      <div className='grid gap-3 md:grid-cols-4 gird-cols-1 sm:grid-cols-2'>
      <Courses_Card/>
      <Courses_Card/>
      <Courses_Card/>
      <Courses_Card/>
      <Courses_Card/>
      </div>
      </div>
    </div>
  )
}

export default Courses_Selected