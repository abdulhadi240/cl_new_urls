"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Course_card from "@/app/plan_detail/components/Course_card";

export default class Carasoul extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  // Move to the next slide
  next = () => {
    this.setState((prevState) => ({
      currentIndex: Math.min(prevState.currentIndex + 1, 3), // Assuming you have 4 slides (0-3)
    }));
  };

  // Move to the previous slide
  prev = () => {
    this.setState((prevState) => ({
      currentIndex: Math.max(prevState.currentIndex - 1, 0),
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="flex flex-col items-center justify-center w-64 gap-4 mt-10 overflow-hidden text-center bg-transparent sm:mt-32">
        {/* Carousel Component */}
        <Carousel
          selectedItem={currentIndex}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          onChange={(index) => this.setState({ currentIndex: index })} // Update state on slide change
        >
          {/* Slide 1 with cities */}
          <div className="flex justify-center gap-4 pl-4 mx-auto text-start w-80">
          <Course_card/>
          </div>

          {/* Slide 2 with cities */}
          <div className="flex justify-center gap-4 pl-4 mx-auto text-start w-80">
          <Course_card/>
          </div>

          {/* Slide 3 with cities */}
          <div className="flex justify-center gap-4 pl-4 mx-auto text-start w-80">
          <Course_card/>
          </div>
        

          {/* Slide 4 with cities */}
          <div className="flex justify-center gap-4 pl-4 mx-auto text-start w-80">
            <Course_card/>
          </div>
        </Carousel>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-16">
          <button
            onClick={this.prev}
            style={{ fontSize: 20, padding: "5px 20px", margin: "5px 0px" }}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
          <button
            onClick={this.next}
            style={{ fontSize: 20, padding: "5px 20px", margin: "5px 0px" }}
            className="bg-[#152765] rounded-lg text-white font-semibold"
          >
            <MdKeyboardArrowRight size={30} />
          </button>
        </div>
      </div>
    );
  }
}
