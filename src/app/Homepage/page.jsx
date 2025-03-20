// app/page.js (or any component inside the `app` directory)

import Image from 'next/image';
import dynamic from 'next/dynamic';
import SearchFilters from './components/SearchFilters';
import SectionTitle from './components/SectionTitle';
import MainContent from './components/MainContent';
import MobileFilter from './components/MobileFilter';

// Dynamically imported components
const CourseCard = dynamic(() => import('./components/CourseCard'));
const SpecializationSection = dynamic(() => import('./components/SpecializationSection'));
const Carasoul = dynamic(() => import('./components/Carasoul'));
const Training = dynamic(() => import('./components/Training'));
const RequestCourse = dynamic(() => import('./components/RequestCourse'));
const DynamicTabs = dynamic(() => import('./components/DynamicTabs'));
const Team = dynamic(() => import('./components/Team'));
// const CustomerCarasoul = dynamic(() => import('./components/CustomerCarasoul'), { ssr: false });

// Metadata for the page


const Page = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="container p-6 overflow-hidden sm:py-16 sm:px-24 bg-[#DEEEFD] sm:flex sm:flex-col-reverse sm:items-center sm:justify-between mx-auto lg:flex-row">
        <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
          <h1 className="~text-sm/4xl font-bold leading-tight text-gray-800 ">
            The Most Prominent Courses That{' '}
            <span className="">We Offer</span> In Our Academy Share With Us To Get
            Better
          </h1>
          <button className="py-2 px-7 shadow-2xl text-sm font-light rounded-full bg-[#111F51] text-white">
            Show Plan
          </button>

          {/* Course Cards */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-7">
            {[
              { title: 'Health & Fitness', desc: 'Provides you with the latest' },
              { title: 'Personal Develop', desc: 'Provides you with the latest' },
              { title: 'Management', desc: 'Provides you with the latest' },
              { title: 'Office Management', desc: 'Provides you with the latest' },
              { title: 'Marketing', desc: 'Provides you with the latest' }
            ].map((course, index) => (
              <CourseCard key={index} title={course.title} desc={course.desc} />
            ))}
          </div>
        </div>

        {/* Image and Button */}
        <div className="relative hidden sm:block">
          <Image
            src="/hero.webp"
            height={400}
            width={400}
            alt="Person holding books at the academy"
            className=""
            priority={true} // Ensure hero image loads faster
          />
        </div>
      </div>
      <div className="block sm:hidden">
        <MobileFilter />
      </div>

      {/* Search and Main Content */}
      <div className="container hidden mt-10 sm:block sm:px-4 sm:mt-0 sm:py-16">
        <div className="flex justify-center">
          <SearchFilters />
        </div>
        <SectionTitle title="What is" highlight="BRITISH ACADEMY?" />
        <MainContent />
      </div>

      {/* Specialization Section */}
      <SpecializationSection />

      {/* Courses by Cities Carousel */}
      <div className=" sm:mt-16">
        <SectionTitle title="Courses by" highlight="Cities" />
        <Carasoul />
      </div>

      {/* Training Section */}
      <div className="hidden mt-32 sm:block">
        <SectionTitle title="British Academy" highlight="For Training" />
        <Training />
      </div>

      {/* Request Course Section */}
      <div className="mt-32">
        <SectionTitle title="Request A" highlight="Course" />
        <RequestCourse />
      </div>

      {/* Latest Publications Section */}
      <div className="mt-32">
        <SectionTitle title="Latest" highlight="Publication" />
        <DynamicTabs />
      </div>

      {/* Team Section */}
      <div className="mt-32 team">
        <SectionTitle title="Team" highlight="Work" />
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4 mt-10 overflow-hidden sm:grid-cols-3">
            {[
              {
                image: '/4.webp',
                name: 'Nattasha Julie',
                designation: 'Design, Australia',
                number: '+1 (378) 400-1234',
                email: 'julie@email.com'
              },
              {
                image: '/Photo.webp',
                name: 'John Doe',
                designation: 'Developer, USA',
                number: '+1 (555) 123-4567',
                email: 'john@email.com'
              },
              {
                image: '/2.webp',
                name: 'Jane Smith',
                designation: 'Marketing, UK',
                number: '+44 (20) 7000-1234',
                email: 'jane@email.com'
              }
            ].map((teamMember, index) => (
              <Team
                key={index}
                image={teamMember.image}
                name={teamMember.name}
                designation={teamMember.designation}
                number={teamMember.number}
                email={teamMember.email}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Uncomment if necessary for customer carousel */}
      {/* <div className="mt-32 overflow-hidden customer">
        <SectionTitle title="Most Of" highlight="Our Customers" />
        <CustomerCarasoul />
      </div> */}
    </section>
  );
};

export default Page;
