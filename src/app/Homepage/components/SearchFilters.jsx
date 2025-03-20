// components/SearchFilters.js
const SearchFilters = () => {
    return (
      <div className="w-[700px]  shadow-xl rounded-xl">
      <div className="grid grid-cols-3 gap-4 p-3 sm:flex sm:justify-center sm:gap-4 sm:p-4 rounded-xl">
        <select defaultValue={'Select'} className="p-2 border border-gray-300 rounded-lg w-28">
          <option>Place</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>Month</option> 
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>Year</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>Category</option>
        </select>
        <select className="p-2 border border-gray-300 rounded-lg w-28">
          <option>Subject</option>
        </select>
        <button className="px-6 py-2 text-white bg-blue-900 rounded-lg">Search</button>
      </div>
      </div>
    );
  };
  
  export default SearchFilters;
  