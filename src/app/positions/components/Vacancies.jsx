import React from 'react';
import Items from './Items';

const Vacancies = () => {
  const vacancies = [
    { title: "Anesthesiologists", para: "45,904 Open Positions" },
    { title: "Surgeons", para: "74,875 Open Positions" },
    { title: "Financial Manager", para: "61,391 Open Positions" },
    { title: "Surgeons", para: "50,364 Open Positions" },
    { title: "Software Developer", para: "43,359 Open Positions" },
    { title: "Management Analysis", para: "93,046 Open Positions" },
    { title: "Obstetricians", para: "4,339 Open Positions" },
    { title: "Psychiatrists", para: "18,599 Open Positions" },
    { title: "IT Manager", para: "50,963 Open Positions" },
    { title: "Orthodontists", para: "20,079 Open Positions" },
    { title: "Data Scientist", para: "28,200 Open Positions" },
    { title: "Operations", para: "16,627 Open Positions" },
  ];

  return (
    <div className='grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4'>
      {vacancies.map((vacancy, index) => (
        <Items key={index} Title={vacancy.title} para={vacancy.para} />
      ))}
    </div>
  );
};

export default Vacancies;
