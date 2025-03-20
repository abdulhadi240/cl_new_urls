import Image from 'next/image'
import React from 'react'

const course_card = ({src , city , feature , text , date1 , date2 , date3}) => {
  return (
    <div>
        <div className="iamge">
            <div>
            <Image src={src}/>
            </div>
            <div>
                <p>{city}</p>
                <p>{feature}</p>
                
            </div>
        </div>
        <div className="text">
            <div className="text">
            <p>{text}</p>
            </div>
            <div className="dates">
                <p>{date1}</p>
                <p>{date2}</p>
                <p>{date3}</p>
            </div>
        </div>
        <div className="btns"></div>
    </div>
  )
}

export default course_card