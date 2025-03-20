import React from 'react';
import Link from 'next/link';

const ContactCard = ({ Ricons, Heading, text, link, label, size, isArabic, children }) => {
  return (
    <Link href={link} target="_blank">
      <div className={`border-[1px] shadow-lg w-64 h-64 p-3 group transition-all ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
        <div className={`w-10 p-2 rounded-lg border-[1px] flex justify-center items-center bg-primary text-white transition-all ${isArabic ? 'ml-auto' : 'ml-4'}`}>
          <Ricons size={size} color="white" />
        </div>
        <div className={`flex flex-col gap-1 mt-8 ${isArabic ? 'items-end' : 'ml-4'}`}>
          <div className="text-lg font-bold">{Heading}</div>
          <div className="mt-1 text-xs">{children}</div>
          <div>
            <div className="mt-6 text-sm font-semibold underline">{label}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContactCard;
