"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import { FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { useSwipeable } from "react-swipeable";

const CARD_WIDTH = 320; // Width of each card
const MARGIN = 20; // Margin between cards
const CARD_SIZE = CARD_WIDTH + MARGIN;
const CARDS_PER_DOT = 1; // Number of cards per dot

const CourseCarousel = ({ courses }) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalDots = Math.ceil(courses.length / CARDS_PER_DOT);

  const shiftLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setOffset((prev) => prev + CARD_SIZE * CARDS_PER_DOT);
    }
  };

  const shiftRight = () => {
    if (currentIndex < totalDots - 1) {
      setCurrentIndex((prev) => prev + 1);
      setOffset((prev) => prev - CARD_SIZE * CARDS_PER_DOT);
    }
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: shiftRight,
    onSwipedRight: shiftLeft,
    preventScrollOnSwipe: true,
    trackMouse: true, // Also allows desktop swiping
  });

  return (
    <section className="pb-8" ref={ref} {...handlers}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto">
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="flex gap-5 md:gap-0 md:pl-4"
          >
            {courses?.map(
              (article, index) =>
                index < 6 && (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: CARD_WIDTH }}
                  >
                    <div
                      className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 w-[300px] md:w-[280px] flex flex-col items-center relative"
                      style={{
                        outline: "3px solid white", // Creates an inner border effect
                        boxShadow: "0 0 0 3px #E5C17C", // Outer border effect
                      }}
                    >
                      {/* Course Image */}
                      <div className="w-full h-[150px] rounded-md overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={200}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Course Title */}
                      <h3 className="text-center line-clamp-2 text-base font-semibold mt-3">
                        {article.title}
                      </h3>

                      {/* Course Details */}
                      <div className="mt-3 w-full">
                        {/* Available Dates */}
                        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                          {article.available_dates.slice(0, 2).map((date) => (
                            <div key={date.id} className="flex items-center">
                              <FaCalendarAlt className="text-primary mr-2" />
                              {date.date}
                            </div>
                          ))}
                        </div>

                        {/* City & Price */}
                        <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
                          {article.available_cities.length > 0 && (
                            <div className="flex items-center">
                              <MdLocationOn className="text-primary mr-2" />
                              {article.available_cities[0].name}
                            </div>
                          )}
                          <span className="text-primary text-lg font-semibold">
                          £ {article.price}
                          </span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex justify-between w-full">
                        <Link
                          href={`/${article.available_cities[0].slug}/${article.specialization_slug}/${article.slug}`}
                          className="bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-secondary transition"
                        >
                          Details
                        </Link>
                        <Link
                          href={`/register?course=${article.slug}`}
                          className="bg-secondary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary transition"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                )
            )}
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center md:justify-end items-end mt-4 md:mr-32">
        <div className="flex items-center gap-4 mb-2">
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex > 0 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === 0}
            onClick={shiftLeft}
          >
            <FiArrowLeft color="white" />
          </button>
          <button
            className={`rounded-lg border-[1px] bg-primary p-2 text-2xl transition-opacity ${
              currentIndex < totalDots - 1 ? "" : "opacity-30"
            }`}
            disabled={currentIndex === totalDots - 1}
            onClick={shiftRight}
          >
            <FiArrowRight color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseCarousel;
