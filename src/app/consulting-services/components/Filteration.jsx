'use client';
import React, { useState } from 'react';
import Card from './Card';
import { CiSearch } from "react-icons/ci";

const Filteration = ({ data, category }) => {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filtered, setFiltered] = useState(data.data);

  const handleSearch = () => {
    let filteredData = data.data;

    // Filter by title (case-insensitive partial match)
    if (title) {
      filteredData = filteredData.filter((service) =>
        service.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filteredData = filteredData.filter(
        (service) => service.category === selectedCategory
      );
    }

    // Filter by month (assuming selectedMonth is in "YYYY-MM" format)
    if (selectedMonth) {
      filteredData = filteredData.filter((service) => {
        const serviceDate = new Date(service.consulting_date.split('-').reverse().join('-'));
        const [year, month] = selectedMonth.split('-');
        return (
          serviceDate.getFullYear() === parseInt(year) &&
          (serviceDate.getMonth() + 1) === parseInt(month)
        );
      });
    }

    setFiltered(filteredData);
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-3 mb-8 bg-white shadow-xl rounded-lg">
        <div className='border-[1.5px] border-[#f5d273] p-2 rounded-lg'>
          <div className="items-center gap-4 flex-row flex bg-white">
            {/* Input Field with Enter Key Trigger */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyPress} // Handle Enter Key
              placeholder="Search Services"
              className="flex-1 text-primary p-3 w-2/3 md:w-9/12 text-sm border rounded-lg shadow-md"
            />
            <button
              onClick={handleSearch}
              className="py-3 text-sm w-1/3 md:w-3/12 px-4 text-center items-center flex justify-center text-primary transition rounded-lg bg-[#f5d273] hover:bg-[#f5d273]/70"
            >
              <CiSearch size={24}/>
            </button>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 gap-8 md:mx-28 max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((service, index) => (
          <Card
            key={index}
            number={index + 1}
            slug={service.slug}
            title={service.title}
            description={service.short}
          />
        ))}
      </div>
    </div>
  );
};

export default Filteration;
