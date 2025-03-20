'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const tabsData = [
  {
    id: 'videos',
    label: 'Videos',
    title: 'What Is The Marketing?',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.webp',
  },
  {
    id: 'careers',
    label: 'Careers',
    title: 'Career Opportunities in Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.webp',
  },
  {
    id: 'blogs',
    label: 'Blogs',
    title: 'Latest Blogs on Marketing',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.webp',
  },
  {
    id: 'consultancy',
    label: 'Consultancy',
    title: 'Marketing Consultancy Services',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.webp',
  },
  {
    id: 'workwithus',
    label: 'Work With Us',
    title: 'Join Our Marketing Team',
    description: `Marketing is one of the most important administrative sciences in all countries and economic fields. Marketing activities have witnessed many notable developments over the years, and the marketing function has become a means of ensuring that businesses achieve career success and sustainability in the business environment.`,
    image: '/g1.webp',
  },
];

const WorkWithUsForm = () => {
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [residence, setResidence] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('degree', degree);
    formData.append('residence', residence);
    formData.append('specialization', specialization);
    if (file) {
      formData.append('cv', file);
    }

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="container sm:mx-auto sm:p-6">
      <form onSubmit={handleSubmit} className="w-full bg-white dark:bg-black sm:p-6 ">

        <div className="w-full mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:placeholder:text-black dark:text-black "
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="degree">The highest scientific degree</label>
          <input
            type="text"
            id="degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="residence">Place of residence</label>
          <input
            type="text"
            id="residence"
            value={residence}
            onChange={(e) => setResidence(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 dark:text-white" htmlFor="specialization">Specialization</label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="block w-full p-2 mt-1 border border-gray-300 dark:text-black"
            required
          />
        </div>

        

        <div className="flex justify-between mt-6">
          <button type="submit" className="bg-[#152765] text-white text-sm font-light py-2 px-4 rounded-lg">
            Accept
          </button>
          <button type="button" className="bg-[#152765] text-white text-sm  font-light py-2 px-4 rounded-lg">
            Upload CV
          </button>
        </div>
      </form>
    </div>
  );
};

const DynamicTabs = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const activeContent = tabsData.find((tab) => tab.id === activeTab);

  return (
    <section className="py-6 overflow-hidden">
      <div className="container ">
        {/* Tabs Navigation */}
        <nav className="rounded-xl flex justify-center text-center   w-auto ">
          <div className="flex justify-center text-center shadow-md p-3 sm:p-3  ">
            {/* First row with 3 tabs */}
            <div className="flex flex-wrap gap-6 justify-center">
              {tabsData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-6 text-center rounded-lg text-sm ${
                    activeTab === tab.id ? 'bg-[#B12E33] text-white' : 'bg-[#152765] text-white'
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            
            
          </div>
        </nav>

        {/* Dynamic Content */}
        <div className="flex flex-col gap-10 p-2 mt-10 sm:mt-32 sm:items-center sm:justify-between sm:mx-6 md:mx-16 lg:flex-row">
          {/* Text Content */}
          <div className="space-y-4 lg:w-1/2">
            {activeTab === 'workwithus' ? (
              <WorkWithUsForm /> // Render custom component for "Work With Us" tab
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{activeContent.title}</h2>
                <p className="text-gray-600 dark:text-white">{activeContent.description}</p>
                <a href="#" className="font-extralight text-xs text-[#152765] dark:text-white">Learn more</a>
              </>
            )}
          </div>

          {/* Image with Decorative Boxes */}
          <div className="relative mt-6 lg:w-1/2 lg:mt-0">
            {/* Top-left decorative box */}
            <div className="absolute w-32 h-32 -top-6 -left-6 bg-[#152765] rounded-3xl -z-10" />

            {/* Main Image */}
            <Image
              src={activeContent.image}
              alt={activeContent.title}
              height={500}
              width={500}
              className="z-10 rounded-lg shadow-lg"
              loading="lazy"
            />

            {/* Bottom-right decorative box */}
            <div className="absolute w-32 h-32 -bottom-6 right-5 bg-[#B12E33] rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicTabs;
