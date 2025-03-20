'use client';
import React, { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import JobCard from '@/app/positions/components/JobCard';

const Filteration = ({ category, data }) => {
  const [title, setTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [filtered, setFiltered] = useState(data?.data || []); // Initially, show all jobs

  useEffect(() => {
    setFiltered(data?.data || []); // Ensure all jobs are shown when data is updated
  }, [data]); // Re-run when data changes

  const handleSearch = () => {
    let filteredData = data.data;

    // Filter by title (case-insensitive partial match)
    if (title) {
      filteredData = filteredData.filter((service) =>
        service.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    // Filter by category (company slug comparison)
    if (selectedCategory) {
      filteredData = filteredData.filter(
        (service) => service.company?.slug === selectedCategory
      );
    }

    // Filter by month (assuming selectedMonth is in "YYYY-MM" format)
    if (selectedMonth) {
      const [selectedYear, selectedMonthNum] = selectedMonth.split('-');
      filteredData = filteredData.filter((service) => {
        const [serviceYear, serviceMonth] = service.consulting_date.split('-');
        return (
          serviceYear === selectedYear && serviceMonth === selectedMonthNum
        );
      });
    }
    setFiltered(filteredData);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-3 mb-8 bg-white shadow-xl rounded-lg text-base">
        <div className='border-[1.5px] border-[#f5d273] p-2 rounded-lg'>
          <div className="flex items-center gap-4 flex-row  bg-white">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}  // Add the event listener here
              placeholder="Search Jobs"
              className="flex-1 text-primary w-4/5  md:w-full p-3 text-sm border rounded-lg shadow-md"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex-1 p-3 hidden md:block border rounded-lg shadow-md"
            >
              <option value="">Company</option>
              {category.data && category.data.length > 0 ? (
                category.data.map((cat, index) => (
                  <option key={index} value={cat.slug} className="text-black">
                    {cat.name}
                  </option>
                ))
              ) : (
                <option disabled>No categories available</option>
              )}
            </select>
            <button
              onClick={handleSearch}
              className=" py-3 text-sm px-4  text-center items-center flex justify-center text-primary transition rounded-lg bg-[#f5d273] hover:bg-[#f5d273]/70"
            >
              <CiSearch size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className='flex justify-center  text-base'>
        <div className="grid grid-cols-1 gap-8 md:mx-28 max-w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filtered && filtered.length > 0 ? (
            filtered.map((service, index) => (
              <JobCard
                key={index}
                job={service}
              />
            ))
          ) : (
            <p className='text-center flex w-full justify-center'>No jobs found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filteration;
