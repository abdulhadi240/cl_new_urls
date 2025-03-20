import React from 'react'
import Cards_Information from './Cards_Information'
import { CiUser } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { FaGlobeAmericas } from "react-icons/fa";
import { LiaLanguageSolid } from "react-icons/lia";
import { BiLogoGmail } from "react-icons/bi";
const Personal_Information = () => {
  return (
    <div>
        <h1 className='flex justify-center mt-10 text-xl uppercase '>Personal Information</h1>
        <p className='mb-10 text-xs text-center'>Manage your information including phone numbers and email address where you can be contacted</p>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
        <Cards_Information title={'Name'} Icon={CiUser} des={'Jhon Doe'}/>
        <Cards_Information title={'Date Of Birth'} Icon={CiCalendarDate} des={'07 july 1993'}/>
        <Cards_Information title={'Country Region'} Icon={FaGlobeAmericas} des={'United Kingdom'}/>
        <Cards_Information title={'Language'} Icon={LiaLanguageSolid} des={'English (UK) - English'}/>
        <Cards_Information title={'Contactable at'} Icon={BiLogoGmail} des={'ah912425@gmail.com'}/>

        </div>
        </div>

    </div>
  )
}

export default Personal_Information