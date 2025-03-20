"use client";

import React, { useEffect, useState } from "react";
import Courses_Card from "@/app/account/components/Courses_Card";

const CoursesFilter = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    month: "",
    year: "",
    category: "",
    specialization: "",
    place: "",
  });

  const [filteredCourses, setFilteredCourses] = useState([]);

  // Fetch courses data on mount
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`, {
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": "en",
        },
      });
      const data = await response.json();
      setCourses(data?.data || []);
      setFilteredCourses(data?.data || []); // Set initial state
    };
    fetchCourses();
  }, []);

  // Update filtered courses when filters change
  useEffect(() => {
    const filtered = courses.filter((course) => {
      return (
        (!filters.language || course.language === filters.language) &&
        (!filters.month || course.month === filters.month) &&
        (!filters.year || course.year === filters.year) &&
        (!filters.category || course.category === filters.category) &&
        (!filters.specialization || course.specialization === filters.specialization) &&
        (!filters.place || course.place === filters.place)
      );
    });
    setFilteredCourses(filtered);
  }, [filters, courses]);

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* Filters UI */}
      <div className="grid grid-cols-2 gap-2 md:space-y-0 md:flex md:space-x-2 mb-4">
        <select name="language" onChange={handleFilterChange} className="filter-select">
          <option value="">Language</option>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
        </select>
        <select name="month" onChange={handleFilterChange} className="filter-select">
          <option value="">Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
        </select>
        <select name="year" onChange={handleFilterChange} className="filter-select">
          <option value="">Year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
        <select name="category" onChange={handleFilterChange} className="filter-select">
          <option value="">Category</option>
          <option value="Management">Management</option>
          <option value="IT">IT</option>
        </select>
        <select name="specialization" onChange={handleFilterChange} className="filter-select">
          <option value="">Specialization</option>
          <option value="Leadership">Leadership</option>
          <option value="Data Science">Data Science</option>
        </select>
        <select name="place" onChange={handleFilterChange} className="filter-select">
          <option value="">Place</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>

      {/* Filtered Courses */}
      <div className="grid grid-cols-1 gap-4 mt-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredCourses.map((course) => (
          <Courses_Card key={course.id} data={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesFilter;
