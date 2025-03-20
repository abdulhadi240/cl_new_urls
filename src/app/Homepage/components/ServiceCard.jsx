import React from "react";
const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="flex items-start p-4 space-x-4 bg-white rounded-lg shadow-lg w-96">
        <img src={icon} alt={title} className="w-12 h-12" />
        <div>
          <h4 className="text-base font-bold text-gray-800">{title}</h4>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    );
  };
  
export default ServiceCard