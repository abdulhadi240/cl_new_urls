'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";


const FooterMobile = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="px-4 pt-12 pb-10 bg-[#F0F5FC] sm:px-16">
      <div className="container mx-auto">
        {/* Accordion Sections */}
        <div className="space-y-4">
          {/* Support Section */}
          <div className='w-full border-b-[1px] border-[#111F51]'>
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection('support')}
            >
              Support
              <span>{openSection === 'support' ? <MdOutlineKeyboardArrowUp size={20}/> : <MdOutlineKeyboardArrowDown size={20}/>}</span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === 'support' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/account">Account</Link>
                </li>
                <li>
                  <Link href="/support">Support Center</Link>
                </li>
                <li>
                  <Link href="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company Section */}
          <div className='w-full border-b-[1px] border-[#111F51]'>
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection('company')}
            >
              Company
              <span>{openSection === 'company' ? <MdOutlineKeyboardArrowUp size={20}/> : <MdOutlineKeyboardArrowDown size={20}/>}</span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === 'company' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/why-2rism">Why 2rism</Link>
                </li>
                <li>
                  <Link href="/partner-with-us">Partner With Us</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* About Section */}
          <div className='w-full border-b-[1px] border-[#111F51]'>
            <div
              className="flex items-center justify-between w-full py-2 font-bold text-gray-800 text-md"
              onClick={() => toggleSection('about')}
            >
              About
              <span>{openSection === 'about' ? <MdOutlineKeyboardArrowUp size={20}/> : <MdOutlineKeyboardArrowDown size={20}/>}</span>
            </div>
            <div
              className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                openSection === 'about' ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <ul className="flex flex-col gap-3 pl-4 mb-2 space-y-1 text-sm text-gray-600">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo and Social Media Links */}
        <div className="flex flex-col items-center mt-8">
          <Image
            src="/logobat.png"
            alt="British Academy Logo"
            width={100}
            height={100}
            className="mb-4"
          />
          <div className="flex mt-2 space-x-4">
            <Link href="https://www.youtube.com" aria-label="YouTube" target="_blank">
              <FaYoutube size={24} className="text-red-600" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" target="_blank">
              <FaInstagram size={24} className="text-pink-600" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" target="_blank">
              <FaTwitter size={24} className="text-blue-400" />
            </Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank">
              <FaLinkedin size={24} className="text-blue-600" />
            </Link>
            <Link href="https://www.facebook.com" aria-label="Facebook" target="_blank">
              <FaFacebook size={24} className="text-blue-800" />
            </Link>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="flex flex-col items-center mt-8">
          <p className="text-sm text-center text-gray-600">
            2023 - Copyright © All Rights Reserved By British Academy.
            <br />
            <Link href="https://shiftict.com" target="_blank" rel="noopener noreferrer" className="underline">
              Created by Shiftict
            </Link>
          </p>
          <div className="flex items-center w-full max-w-sm p-2 mt-4 bg-white rounded shadow-md">
            <FaEnvelope className="mr-2 text-xl text-yellow-500" />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email subscription"
              className="flex-grow text-sm text-gray-600 outline-none"
              required
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="p-2 ml-2 text-white bg-[#111F51] rounded"
            >
              <FaEnvelope />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMobile;
