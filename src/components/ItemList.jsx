"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function CourseListing({
  filteredCourses,
  params,
  cities,
  cities_,
  check_city_courses,
}) {
  // Use object state instead of array for better updates
  const [selectedOptions, setSelectedOptions] = useState({});

  // Handle change in selected date or city for a course
  const handleSelectChange = (courseId, type, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [courseId]: {
        ...prev[courseId],
        [type]: value,
      },
    }));
  };

  return (
    <>
      <Card className="w-full max-w-6xl mx-auto shadow-md rounded-lg">
        <CardContent className="p-6">
          {cities ? (
            <>
              <div className="hidden md:block">
                <Table className="w-[300px] border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="py-3 px-4 text-left text-sm font-semibold text-primary">
                        City Title
                      </TableHead>
                      <TableHead className="py-3 px-4 text-center text-sm font-semibold text-primary">
                        Options
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cities.map((course) => (
                      <TableRow key={course.id} className="hover:bg-gray-50">
                        <TableCell className="py-3 px-4 text-sm font-medium text-primary hover:text-secondary">
                          <Link href={`/${course.slug}`}>{course.name}</Link>
                        </TableCell>
                        <TableCell className="py-3 px-4 text-center">
                          <Link
                            href={`/${course.slug}`}
                            className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-secondary"
                          >
                            View All Courses
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:block">
                <Table className="w-full border-collapse">
                  <TableHeader>
                    <TableRow className="border-b border-gray-200">
                      <TableHead className="py-3 px-4 text-left text-sm font-semibold text-primary">
                        Course Title
                      </TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-semibold text-primary">
                        Dates
                      </TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-semibold text-primary">
                        Cities
                      </TableHead>
                      <TableHead className="py-3 px-4 text-left text-sm font-semibold text-primary">
                        Price
                      </TableHead>
                      <TableHead className="py-3 px-4 text-center text-sm font-semibold text-primary">
                        Options
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCourses.map((course) => (
                      <TableRow key={course.id} className="hover:bg-gray-50">
                        <TableCell className="py-3 px-4 text-sm font-medium text-primary hover:text-secondary">
                          <Link
                            href={`${
                              check_city_courses
                                ? `/${params}/${course.specialization_slug}/${course.slug}`
                                : `/${selectedOptions[course.id]?.selectedCity || course.available_cities[0].slug}/${course.specialization_slug}/${course.category_slug}/${course.slug}`
                            }`}
                          >
                            {course.title}
                          </Link>
                        </TableCell>
                        <TableCell className="py-3 px-4">
                          <select
                            className="w-full border border-gray-300 rounded px-5  py-2 text-sm focus:ring-secondary focus:border-secondary"
                            value={
                              selectedOptions[course.id]?.selectedDate || ""
                            }
                            onChange={(e) =>
                              handleSelectChange(
                                course.id,
                                "selectedDate",
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Select Date
                            </option>
                            {course.available_dates.map((date) => (
                              <option key={date.id} value={date.date}>
                                {date.date}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell className="py-3 px-4">
                          <select
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-secondary focus:border-secondary"
                            value={
                              selectedOptions[course.id]?.selectedCity || ""
                            }
                            onChange={(e) =>
                              handleSelectChange(
                                course.id,
                                "selectedCity",
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Select City
                            </option>
                            {course.available_cities.map((city) => (
                              <option key={city.id} value={city.slug}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </TableCell>
                        <TableCell className="py-3 px-4 text-sm text-primary">
                        £ {course.price}
                        </TableCell>
                        <TableCell className="py-3 px-4 text-center">
                          <Link
                            href={`/register?course=${course.slug}&date=${
                              selectedOptions[course.id]?.selectedDate || ""
                            }&city=${
                              selectedOptions[course.id]?.selectedCity || ""
                            }`}
                            className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md hover:bg-secondary"
                          >
                            Register
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Version with Date, City, Price, and Register Button */}
              <div className="space-y-4 md:hidden">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="rounded-lg shadow-sm border border-gray-200"
                  >
                    <CardContent className="p-4 space-y-4">
                      <Link
                        href={`${
                          check_city_courses
                            ? `/${params}/${course.specialization_slug}/${course.slug}`
                            : `/${selectedOptions[course.id]?.selectedCity || course.available_cities[0].slug}/${course.specialization_slug}/${course.slug}`
                          }`}
                        className="text-base font-semibold text-gray-800"
                      >
                        {course.title}12
                      </Link>
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Select Date
                          </label>
                          <select
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-secondary focus:border-secondary"
                            value={
                              selectedOptions[course.id]?.selectedDate || ""
                            }
                            onChange={(e) =>
                              handleSelectChange(
                                course.id,
                                "selectedDate",
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Select Date
                            </option>
                            {course.available_dates.map((date) => (
                              <option key={date.id} value={date.date}>
                                {date.date}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Select City
                          </label>
                          <select
                            className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-secondary focus:border-secondary"
                            value={
                              selectedOptions[course.id]?.selectedCity || ""
                            }
                            onChange={(e) =>
                              handleSelectChange(
                                course.id,
                                "selectedCity",
                                e.target.value
                              )
                            }
                          >
                            <option value="" disabled>
                              Select City
                            </option>
                            {course.available_cities.map((city) => (
                              <option key={city.id} value={city.slug}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-base font-semibold text-gray-800">
                        £ {course.price}
                        </span>
                        <Link
                          href={`/register?course=${course.slug}&date=${
                            selectedOptions[course.id]?.selectedDate || ""
                          }&city=${
                            selectedOptions[course.id]?.selectedCity || ""
                          }`}
                          className="px-4 py-2 text-sm font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600"
                        >
                          Register
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
