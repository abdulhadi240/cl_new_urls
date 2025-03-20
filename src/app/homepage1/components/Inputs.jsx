'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const Inputs = () => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <div>
        <div className="flex justify-center w-98 mt-6">
        <div className="flex items-center p-2 bg-white rounded-full">
          <input
            type="text"
            className="p-2 max-w-4xl rounded-full outline-none focus:ring-0 focus:border-none"
            placeholder="What Do You Want To Learn"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link href={`/diploma?search=${searchQuery}`} >
          <div className="flex items-center justify-center h-10 w-10 text-white rounded-full bg-primary">
              <FaSearch />
              </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Inputs