'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Personal_Information from './components/Personal_Information';
import { cn } from '@/lib/utils';
import Courses_Selected from './components/Courses_Selected';
import Design from '../homepage1/components/Design';
import Cards_Information from './components/Cards_Information';
import { CiUser } from 'react-icons/ci';
import { FaGlobeAmericas } from 'react-icons/fa';
import { LiaLanguageSolid } from 'react-icons/lia';
import { BiLogoGmail } from 'react-icons/bi';

const Account = () => {
  const router = useRouter();
  const [select, setSelect] = useState('Personal_Information');
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<Personal_Information />);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token'); // Retrieve token

      if (!token) {
        router.push('/sign-in'); // Redirect if token is missing
        return;
      }

      try {
        const response = await fetch('https://backendbatd.clinstitute.co.uk/api/user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [router]);

  const handleSelect = (newSelection) => {
    setIsAnimating(true);

    setTimeout(() => {
      setSelect(newSelection);
      setCurrentComponent(newSelection === 'Personal_Information' ? <Personal_Information userData={userData} /> : <Courses_Selected />);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div>
      <Design secondary={true} bg />
      <div className='flex justify-center gap-4 mb-6 select-none text-sm'>
        <div className='flex items-center p-1 mt-20 text-white rounded-full md:p-2 md:px-4 bg-primary'>
          <div
            onClick={() => handleSelect('Personal_Information')}
            className={cn('p-1 px-2 cursor-pointer', select === 'Personal_Information' && 'border-primary rounded-full text-white transition-all delay-200')}
          >
            Personal Information
          </div>
        </div>
      </div>
      
      {userData && (
        <div>
        <h1 className='flex justify-center mt-10 text-xl uppercase '>Personal Information</h1>
        <p className='mb-10 text-xs text-center'>Manage your information including phone numbers and email address where you can be contacted</p>
        <div className='flex justify-center'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 mb-10 text-base'>
        <Cards_Information title={'Name'} Icon={CiUser} des={userData.name}/>
        <Cards_Information title={'status'} Icon={FaGlobeAmericas} des={userData.status}/>
        <Cards_Information title={'Language'} Icon={LiaLanguageSolid} des={'English (UK) - English'}/>
        <Cards_Information title={'Contactable at'} Icon={BiLogoGmail} des={userData.email}/>

        </div>
        </div>

    </div>
      )}
    </div>
  );
};

export default Account;
