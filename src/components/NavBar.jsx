import React from 'react';
import Link from 'next/link';    // For internal routing in Next.js
import dynamic from 'next/dynamic';

// Dynamic imports for icons to reduce bundle size
const FaFacebookF = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebookF));
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram));
const FaSkype = dynamic(() => import('react-icons/fa').then(mod => mod.FaSkype));
const FaTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter));
const FaYoutube = dynamic(() => import('react-icons/fa').then(mod => mod.FaYoutube));
const FaPhoneAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaPhoneAlt));
const FaEnvelope = dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope));

const Navbar = () => {
  return (
    <div
      className="flex flex-col items-center justify-between p-2 text-white sm:flex-row"
      style={{ background: 'linear-gradient(55deg, rgb(185, 28, 28) 50%, rgb(30, 58, 138) 50%)' }}
    >
      {/* Left Side Content (Social Media and Contact) */}
      <div className="flex flex-wrap items-center space-x-4">
        <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
        <Link href="https://www.skype.com" target="_blank" aria-label="Skype" rel="noopener noreferrer">
          <FaSkype />
        </Link>
        <a href="https://www.twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
          <FaYoutube />
        </Link>
        {/* Contact Info */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <span>(406) 555-0120</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <span>info@btadacademy.org.uk</span>
        </div>
      </div>

      {/* Right Side Content (Links and Arabic) */}
      <div className="flex mt-2 space-x-4 sm:mt-0">
        <Link href="/services" className="hover:underline">SERVICES</Link>
        <Link href="/special-request" className="hover:underline">SPECIAL REQUEST</Link>
        <Link href="/Blog/articles" className="hover:underline">BLOG</Link>
        <Link href="/faq" className="hover:underline">FAQ</Link>
        <div className="px-4 py-2 text-blue-900 bg-white rounded">
          <span>العربية</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
