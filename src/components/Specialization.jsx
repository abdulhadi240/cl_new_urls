"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Design from "@/app/homepage1/components/Design";
import CourseListing from "./ItemList";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion } from "framer-motion";
import SectionTitle1 from "./SectionTitle1";
const Specialization = ({
  SpecializationCategory,
  params,
  data,
  category,
  city,
  specialization,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = params;

  const [coursedata, setCourseData] = useState(data); // Full data
  const [filteredCourses, setFilteredCourses] = useState(data?.data || []); // Filtered data for rendering
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  ); // Search input
  const [selectedLanguage, setSelectedLanguage] = useState(
    searchParams.get("language") || ""
  );
  const [selectedMonth, setSelectedMonth] = useState(
    searchParams.get("month") || ""
  );
  const [selectedYear, setSelectedYear] = useState(
    searchParams.get("year") || ""
  );
  const [selectedSpecialization, setSelectedSpecialization] = useState(
    searchParams.get("specialization") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );
  const [selectedCity, setSelectedCity] = useState(
    searchParams.get("city") || ""
  );

  // Update URL search params
  const updateSearchParams = (key, value) => {
    const currentParams = new URLSearchParams(searchParams);
    if (value) {
      currentParams.set(key, value);
    } else {
      currentParams.delete(key);
    }
    router.push(`?${currentParams.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const fetchData = async () => {
      // Build query string dynamically, excluding empty parameters
      const params = {
        year: selectedYear,
        specialization: selectedSpecialization,
        category: selectedCategory,
        city: selectedCity,
        language: selectedLanguage,
        month: selectedMonth,
      };

      // Create query string by filtering out empty parameters
      const query = new URLSearchParams(
        Object.entries(params).filter(([_, value]) => value) // Only include keys with non-empty values
      ).toString();

      try {
        const response = await fetch(
          `https://backendbatd.clinstitute.co.uk/api/courses/${slug}/specializations?query=${query}&per_page=50&page=${page}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": "en",
            },
          }
        );
        const result = await response.json();
        setCourseData(result);
        setFilteredCourses(result?.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [
    selectedYear,
    selectedSpecialization,
    selectedCategory,
    selectedCity,
    selectedLanguage,
    selectedMonth,
    page,
  ]);

  useEffect(() => {
    if (!searchInput) {
      setFilteredCourses(coursedata?.data || []); // Reset to full data if input is empty
    } else {
      const filtered = coursedata?.data?.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchInput, coursedata]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const filtered = coursedata?.data?.filter((course) =>
        course.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": (filteredCourses || []).map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course?.title || "Unnamed Course",
        "description": course?.summary || "No description available.",
        "category": course?.category || "Training",
        "url": `https://clinstitute.co.uk/${params || "default-category"}/${(course?.available_cities?.[0]?.slug) || "default-city"}/${course?.slug || "default-course"}`,
        "provider": {
          "@type": "Organization",
          "name": "London Crown Institute of Training",
          "sameAs": "https://clinstitute.co.uk/"
        },
        "image": {
          "@type": "ImageObject",
          "url": course?.image || "https://clinstitute.co.uk/default-course-image.webp"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "courseWorkload": "PT22H",
          "courseSchedule": {
            "@type": "Schedule",
            "duration": "P1W",
            "repeatCount": "1",
            "repeatFrequency": "Weekly"
          },
          "location": {
            "@type": "Place",
            "name": course?.available_cities?.length > 0 
              ? course?.available_cities.map(city => city.name).join(", ") 
              : "Default City"
          }
        },
        "offers": {
          "@type": "Offer",
          "category": "Paid",
          "price": course?.price || "3000",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "validFrom": (course?.available_dates?.length > 0 && course?.available_dates[0]?.date) || "2025-01-01"
        }
      }
    }))
  };
  
  return (
    <>
      {/* Inject JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Design
        icon_white
        iamge={"/image_consult.png"}
        center
        input={false}
        image_height={false}
        search_height={true}
        search
        
      >
        <div className="">
          <SectionTitle1
            title={slug}
            highlight={'Training Courses'}
          />

          <div className="relative flex items-center justify-center">
            {/* Overlay Content */}
            <div className="relative mb-6 flex flex-col items-center w-full max-w-4xl p-6  bg-opacity-90 rounded-lg  md:p-8">
              {/* Search Input */}
              <div className="w-full mb-4">
                <div className="flex items-center p-2 bg-white  rounded-md shadow-md md:p-3">
                  <input
                    type="text"
                    placeholder="Search in specific course"
                    value={searchInput}
                    onKeyDown={handleSearch}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-grow text-primary px-4 py-2 text-sm rounded-md md:text-base placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 ml-2 text-sm text-white transition-colors bg-primary rounded-md md:text-base md:px-6 md:py-2 hover:bg-primary/80"
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full">
                <select
                  value={selectedMonth}
                  onChange={(e) => {
                    setSelectedMonth(e.target.value);
                    updateSearchParams("month", e.target.value);
                  }}
                  className="w-full px-4 text-primary py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Month</option>
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, index) => (
                    <option key={index} value={index + 1}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    setSelectedYear(e.target.value);
                    updateSearchParams("year", e.target.value);
                  }}
                  className="w-full px-4 text-primary py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Year</option>
                  {[2024, 2025, 2026].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    updateSearchParams("category", e.target.value);
                  }}
                  className="w-full px-4 text-primary py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Category</option>
                  {category?.data?.map((cat) => (
                    <option key={cat.id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    updateSearchParams("city", e.target.value);
                  }}
                  className="w-full px-4 text-primary py-2 text-sm border border-gray-300 rounded-md md:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">City</option>
                  {city?.data?.map((c) => (
                    <option key={c.id} value={c.slug}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </Design>

      <div className="mt-6">
        <CourseListing filteredCourses={filteredCourses} params={slug} />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Previous Button */}
        <motion.button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`w-9 h-9 flex items-center justify-center rounded-md text-base ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary text-white"
          }`}
          whileHover={{ scale: page === 1 ? 1 : 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoIosArrowBack className="text-lg" />
        </motion.button>

        {/* Page Buttons */}
        {coursedata?.pagination?.total_pages > 1 &&
          (() => {
            let firstPage =
              page === coursedata.pagination.total_pages ? page - 1 : page;
            let secondPage =
              firstPage + 1 > coursedata.pagination.total_pages
                ? coursedata.pagination.total_pages
                : firstPage + 1;

            return [firstPage, secondPage].map((pageNumber) => (
              <motion.button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-9 h-9 flex items-center justify-center rounded-md text-base  ${
                  pageNumber === page
                    ? "bg-primary text-white"
                    : "bg-gray-400 text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {pageNumber}
              </motion.button>
            ));
          })()}

        {/* Next Button */}
        <motion.button
          onClick={() =>
            setPage((prev) =>
              Math.min(prev + 1, coursedata?.pagination?.total_pages)
            )
          }
          disabled={page === coursedata?.pagination?.total_pages}
          className={`w-9 h-9 flex items-center justify-center rounded-md text-base ${
            page === coursedata?.pagination?.total_pages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-primary text-white"
          }`}
          whileHover={{
            scale: page === coursedata?.pagination?.total_pages ? 1 : 1.1,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <IoIosArrowForward className="text-base" />
        </motion.button>
      </div>
      <main className="min-h-screen bg-white p-6 md:p-12 text-sm">
        <article className=" text-start max-w-4xl">
          {/* Header */}
          <h1 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            Mastering the Project Stages: A Comprehensive Training Course
          </h1>

          {/* Introduction */}
          <p className="mb-8 text-gray-700">
            Managing projects successfully requires a deep understanding of the
            project lifecycle and the skills to navigate each stage effectively.
            Our Project Stages Training Course is designed to equip you with the
            knowledge and tools to excel in every phase of project management,
            from initiation to closure.
          </p>

          {/* Course Content */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              What Does the Course Cover?
            </h2>
            <p className="mb-6 text-gray-700">
              This course takes a structured approach to the key stages of
              project management:
            </p>

            <div className="space-y-6">
              {/* Initiation */}
              <section>
                <h3 className="mb-2 font-semibold text-gray-900">
                  1. Initiation:
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    Learn how to define the project scope, objectives, and
                    deliverables.
                  </li>
                  <li>
                    Develop skills to identify key stakeholders and create a
                    project charter.
                  </li>
                  <li>
                    Gain insights into feasibility analysis and risk
                    identification.
                  </li>
                </ul>
              </section>

              {/* Planning */}
              <section>
                <h3 className="mb-2 font-semibold text-gray-900">
                  2. Planning:
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    Master the art of creating detailed project plans,
                    timelines, and budgets.
                  </li>
                  <li>
                    Understand resource allocation and learn how to develop a
                    robust risk management plan.
                  </li>
                  <li>
                    Explore tools and techniques for setting milestones and
                    performance metrics.
                  </li>
                </ul>
              </section>

              {/* Execution */}
              <section>
                <h3 className="mb-2 font-semibold text-gray-900">
                  3. Execution:
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    Discover how to implement project plans effectively while
                    managing resources.
                  </li>
                  <li>
                    Learn team management, task delegation, and conflict
                    resolution strategies.
                  </li>
                  <li>
                    Understand how to track progress using project management
                    software.
                  </li>
                </ul>
              </section>

              {/* Monitoring and Controlling */}
              <section>
                <h3 className="mb-2 font-semibold text-gray-900">
                  4. Monitoring and Controlling:
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    Explore techniques for tracking performance and making
                    real-time adjustments.
                  </li>
                  <li>
                    Learn how to manage change requests, ensure quality control,
                    and maintain alignment with project goals.
                  </li>
                  <li>
                    Gain insights into reporting tools to keep stakeholders
                    informed.
                  </li>
                </ul>
              </section>

              {/* Closure */}
              <section>
                <h3 className="mb-2 font-semibold text-gray-900">
                  5. Closure:
                </h3>
                <ul className="ml-6 list-disc space-y-2 text-gray-700">
                  <li>
                    Understand the importance of proper project closure,
                    including delivering outcomes and final documentation.
                  </li>
                  <li>
                    Learn how to conduct post-project evaluations to identify
                    successes and lessons learned.
                  </li>
                  <li>
                    Explore best practices for celebrating achievements and
                    disbanding project teams.
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Specialization;
