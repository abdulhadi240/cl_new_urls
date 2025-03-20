import Link from 'next/link';
import React from 'react';
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

const SpecializationCard = ({ title }) => {
  return (
    <Link
      href={`/${title.available_cities[0].slug}/${title.specialization_slug}/${title.slug}`}
      className="flex flex-col items-center justify-center text-center h-32 w-64 group-hover:transition-colors group hover:text-secondary" // Fixed height and consistent width
    >
      {/* Title */}
      <h4 className="mt-4 text-xs sm:text-sm text-[#152765] group-hover:transition-colors group-hover:text-secondary">
        {title.title}
      </h4>

      {/* Divider */}
      <div className="h-[2px] mt-2 bg-[#c3c3c3] shadow-2xl w-full" />
    </Link>
  );
};

export default SpecializationCard;
