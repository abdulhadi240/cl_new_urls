'use client';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export default function CityListing({ cities }) {
  const cityData = cities || [];  // Make sure cities data exists

  return (
    <div className="w-screen md:w-[900px] overflow-hidden bg-white rounded-md shadow-md">
      <Table className="w-full border-collapse">
        <TableHeader>
          <TableRow className="border-b border-gray-200">
            <TableHead
              className="py-3 px-4 text-left text-sm font-semibold text-primary"
              style={{ width: '70%' }}  // City Title takes more space
            >
              City Title
            </TableHead>
            <TableHead
              className="py-3 px-4 text-center text-sm font-semibold text-primary"
              style={{ width: '30%' }}  // Options column is smaller
            >
              Options
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cityData.map((city) => (
            <TableRow key={city.id} className="hover:bg-gray-50 transition-colors">
              <TableCell
                className="py-3 px-4 text-sm font-medium text-primary"
                style={{ width: '70%' }}  // City Title takes more space
              >
                {city.name}
              </TableCell>
              <TableCell
                className="py-3 px-4 text-center"
                style={{ width: '30%' }}  // Options column is smaller
              >
                <Link
                  href={`/${city.slug}`}
                  className="px-4 sm:hidden py-2 w-full sm:text-sm text-xs font-medium text-white bg-secondary rounded-md hover:bg-secondary/70 transition-colors"
                >
                  View All
                </Link>
                <Link
                  href={`/${city.slug}`}
                  className="px-4 hidden sm:block py-2  sm:text-sm text-xs font-medium text-white bg-secondary rounded-md hover:bg-secondary/70 transition-colors"
                >
                  View All Courses
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
