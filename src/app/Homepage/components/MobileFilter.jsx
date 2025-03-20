// components/SearchForm.js
import { AiOutlineSearch, AiOutlineCalendar } from 'react-icons/ai';

export default function SearchForm() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-black">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Search bar */}
        <div className='flex gap-2'>
        <div className="flex items-center w-full bg-gray-100 border rounded-md dark:text-black ">
          <div className='dark:text-black'>
        <AiOutlineSearch size={25}/>
        </div>

          <input
            type="text"
            placeholder="Find Your Course"
            className="w-full p-1 bg-gray-100 rounded-md focus:outline-none"
          />
          
        </div>          
          <button className="flex items-center justify-between gap-4 py-1 px-2 text-white bg-[#152765] rounded-md ">
            <div>Search</div>

          </button>
        </div>

        {/* Year field */}
        <div className='flex gap-2 '>
        {/* Year Field */}
<div className="flex items-center w-full bg-gray-100 space-x-2 border-[1px]">
  <input
    type="number"
    placeholder="Year"
    className="w-full p-2 bg-gray-100 rounded-md dark:text-black placeholder:text-black"
    min="1900"
    max="2100"
  />
  <button className="p-2 rounded-md dark:text-black">
    <AiOutlineCalendar size={20} />
  </button>
</div>

{/* Month Field */}
<div className="flex items-center w-full bg-gray-100 space-x-2 border-[1px]">
  <select
    className="w-full p-2 bg-gray-100 rounded-md placeholder:text-black dark:text-black"
  >
    <option value="" disabled selected>Month</option>
    <option value="1">January</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    <option value="5">May</option>
    <option value="6">June</option>
    <option value="7">July</option>
    <option value="8">August</option>
    <option value="9">September</option>
    <option value="10">October</option>
    <option value="11">November</option>
    <option value="12">December</option>
  </select>
 
</div>

        </div>
        <div className='grid grid-cols-2 gap-2'>
        {/* Subject dropdown */}
        <select className="p-2 bg-gray-100 border dark:text-black">
          <option className='dark:text-black '>Subject</option>
          {/* Add more options here */}
        </select>

        {/* Language dropdown */}
        <select className="p-2 bg-gray-100 border dark:text-black">
          <option className='dark:text-black '>Language</option>
          {/* Add more options here */}
        </select>

        {/* Category dropdown */}
        <select className="p-2 bg-gray-100 border dark:text-black">
          <option className='dark:text-black '>Category</option>
          {/* Add more options here */}
        </select>

        {/* Place dropdown */}
        <select className="p-2 bg-gray-100 border dark:text-black">
          <option className='dark:text-black '>Place</option>
          {/* Add more options here */}
        </select>
        </div>
      </div>
      </div>

      
    
  );
}
