"use client";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel"; // Import the carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Feature_Mobile from "./Feature_Mobile";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default class ExternalControlledCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0, // Initialize the current slide index
      autoPlay: true, // Set autoplay state
    };
  }

  // Function to move to the next slide
  next = () => {
    this.setState((state) => ({
      currentSlide: (state.currentSlide + 1) % 5, // Assuming there are 3 slides
    }));
  };

  // Function to move to the previous slide
  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide === 0 ? 2 : state.currentSlide - 1, // Loop backwards
    }));
  };

  // Toggle autoplay on and off
  changeAutoPlay = () => {
    this.setState((state) => ({
      autoPlay: !state.autoPlay,
    }));
  };

  // Update current slide based on external input
  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    const buttonStyle = {
      fontSize: 20,
      padding: "5px 20px",
      margin: "5px 0px",
    }; // Button style
    const containerStyle = { margin: "5px 0 20px" }; // Container style

    return (
      <div className="flex flex-col gap-4 mt-32">
        {/* External control buttons */}

        {/* Carousel Component */}
        <Carousel
          autoPlay={this.state.autoPlay} // Autoplay state
          selectedItem={this.state.currentSlide} // Set current slide
          onChange={this.updateCurrentSlide} // Update on slide change
          infiniteLoop={true} // Enable looping
          showThumbs={false} // Hide thumbnails
          showStatus={false} // Hide status
          showIndicators={false} // Show navigation dots
          showArrows={false}
          swipeable={false}
        >
          {/* Carousel slides */}
          <Feature_Mobile
            image={"/plan1.png"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
          <Feature_Mobile
            image={"/plan1.png"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
          <Feature_Mobile
            image={"/plan1.png"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
          <Feature_Mobile
            image={"/plan1.png"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
          <Feature_Mobile
            image={"/plan1.png"}
            icon={"/icon1.png"}
            heading={"Management"}
            number={"05"}
            right={true}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"
            }
          />
        </Carousel>
        <div style={containerStyle} className="flex justify-center gap-3 mt-16">
          {/* Prev Button */}
          <button onClick={this.prev} style={buttonStyle} className="bg-[#152765] rounded-lg text-white font-semibold">
            <MdKeyboardArrowLeft size={30}/>

          </button>
          {/* Next Button */}
          <button onClick={this.next} style={buttonStyle} className="bg-[#152765] rounded-lg text-white font-semibold">
          <MdKeyboardArrowRight size={30}/>

          </button>
        </div>
      </div>
    );
  }
}
