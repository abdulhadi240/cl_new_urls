"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Cities from "./Cities";

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
      <div className="flex flex-col items-center justify-center gap-4 mt-10 overflow-hidden sm:mt-32">
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
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.webp"} name={"Manchester"} country={"UK"} />
            <Cities image={"/img.webp"} name={"London"} country={"UK"} />
            <Cities image={"/img.webp"} name={"Paris"} country={"France"}  />
            <Cities image={"/img.webp"} name={"New York"} country={"USA"} mobile/>
            <Cities image={"/img.webp"} name={"Berlin"} country={"Germany"} mobile />
            <Cities image={"/img.webp"} name={"Tokyo"} country={"Japan"} mobile/>
          </div>

          {/* Slide 2 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.webp"} name={"Sydney"} country={"Australia"} />
            <Cities image={"/img.webp"} name={"Toronto"} country={"Canada"} />
            <Cities image={"/img.webp"} name={"Barcelona"} country={"Spain"} />
            <Cities image={"/img.webp"} name={"Moscow"} country={"Russia"} mobile/>
            <Cities image={"/img.webp"} name={"Shanghai"} country={"China"} mobile/>
            <Cities image={"/img.webp"} name={"Dubai"} country={"UAE"} mobile />
          </div>

          {/* Slide 3 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.webp"} name={"Los Angeles"} country={"USA"} />
            <Cities image={"/img.webp"} name={"Madrid"} country={"Spain"} />
            <Cities image={"/img.webp"} name={"Rome"} country={"Italy"} />
            <Cities image={"/img.webp"} name={"Moscow"} country={"Russia"} mobile/>
            <Cities image={"/img.webp"} name={"Shanghai"} country={"China"} mobile/>
            <Cities image={"/img.webp"} name={"Dubai"} country={"UAE"} mobile/>
          </div>
        

          {/* Slide 4 with cities */}
          <div className="flex justify-center max-w-6xl gap-4 mx-auto">
            <Cities image={"/img.webp"} name={"Bangkok"} country={"Thailand"} />
            <Cities image={"/img.webp"} name={"Singapore"} country={"Singapore"} />
            <Cities image={"/img.webp"} name={"Istanbul"} country={"Turkey"} />
            <Cities image={"/img.webp"} name={"Moscow"} country={"Russia"} mobile/>
            <Cities image={"/img.webp"} name={"Shanghai"} country={"China"} mobile/>
            <Cities image={"/img.webp"} name={"Dubai"} country={"UAE"} mobile/>
          
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
