import React from 'react'
import { BiSolidBuildings } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdWork } from "react-icons/md";
const StatsSection = () => {
    const stats = [
      { label: "Live Job", value: "1,75,324",icon:  BiSolidBuildings},
      { label: "Companies", value: "97,354",icon:FiUsers,color : true},
      { label: "Candidates", value: "38,47,154",icon: MdWork },
      { label: "New Jobs", value: "7,532",icon: BiSolidBuildings },
    ];
  
    return (
      <div className="grid grid-cols-1 gap-6 p-10 mt-4 text-center md:p-16 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-12 p-4 bg-white rounded-md shadow-md">
            <div className={`w-auto  h-auto p-3 ${stat.color ? 'bg-primary text-white' : 'bg-[#e7f0fa] text-primary'}`}>
                <stat.icon size={24} />
            </div>
            <div>
            <h3 className="text-xl font-semibold">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default StatsSection;
  