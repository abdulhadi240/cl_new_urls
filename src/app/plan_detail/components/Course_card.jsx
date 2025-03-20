import Image from 'next/image';
import Link from 'next/link';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaYoutube, FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Course_card = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden bg-transparent shadow-lg rounded-xl">
      {/* Image Section */}
      <Image
        src="/123.png" // Replace with the actual image path
        width={300}
        height={300}
        alt="Zoom-friendly edtech solution"
        className="object-cover w-full h-48"
      />

      {/* Content Section */}
      <div className="p-6">
        {/* Date */}
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500 dark:text-white ">
          <BiCalendarEvent size={20}/>
          2020-12-30 10:30:55
        </div>
        {/* Title */}
        <h2 className="mb-3 font-semibold dark:text-white ">
          Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
        </h2>
        {/* Social Icons */}
        <div className="flex mb-4 space-x-2">
          <Link href="#" className="text-red-600">
            <FaYoutube size={20} />
          </Link>
          <Link href="#" className="text-pink-500">
            <FaInstagram size={20} />
          </Link>
          <Link href="#" className="text-blue-400">
            <FaTwitter size={20} />
          </Link>
          <Link href="#" className="text-blue-700">
            <FaLinkedin size={20} />
          </Link>
          <Link href="#" className="text-blue-600">
            <FaFacebook size={20} />
          </Link>
        </div>
        {/* Details Button */}
        <button className="w-full px-6 py-2 text-sm text-white transition-all rounded-md bg-primary hover:bg-primary">
          Details
        </button>
      </div>
    </div>
  );
};

export default Course_card;