'use client'
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import BLogsCard from './BLogsCard';
import BLogsCardIndiviual from './BLogsCardIndiviual';
import BLogsCardCategory from './BLogsCardCategory';
const BlogsCategory = ({ category }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategory, setFilteredCategory] = useState(category);
  console.log(category , " blogs")
  const handleSearch = () => {
    const filtered = category.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategory(filtered);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col  mx-4 md:mx-0 items-center mt-10 mb-10 text-base">
      {/* Search Filter */}
      <div className="w-full max-w-[600px] flex items-center bg-[#f8f8f8] rounded-lg shadow-md p-2 mb-6 border-[1.5px] border-[#e0e0e0]">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-grow p-2 text-primary rounded-md border-none outline-none bg-transparent"
        />
        <button
          onClick={handleSearch}
          className="bg-[#FBBA07] text-white p-2 px-4 rounded-lg flex items-center justify-center shadow-sm hover:bg-[#f8c63d] transition-all"
        >
          <FaSearch/>
        </button>
      </div>

      {/* Mapped Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {filteredCategory.map((list, index) => (
          <div key={index}>
          <BLogsCardCategory
                      list={list}
                      index={index}
                    />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCategory;
