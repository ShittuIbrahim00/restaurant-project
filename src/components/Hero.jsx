import React from "react";
import herobg from "../assets/hero-bg.jpg";
import heroimg from "../assets/hero-img.jpg";
import heroCircleImg from "../assets/hero-circle-img-1.jpg";
import heroCircleImgTwo from "../assets/hero-circle-img-2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="relative font-merienda min-h-screen">
      {/* Hero Background */}
      <img
        src={herobg}
        alt="Hero Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center">
        {/* Content */}
        <div className="w-[90%] mx-auto text-white px-4 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left mx-auto mt-64 lg:mt-4 md:mt-6 sm:py-32 md:py-40 lg:py-32">
              <p className="text-xs md:text-sm mt-24 lg:mt-20 md:mt-10 font-bold uppercase tracking-widest text-customColor">
                Art of Fine Dining
              </p>

              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mt-2 uppercase leading-tight">
                Dining Redefined
              </h1>

              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mt-2 uppercase leading-tight">
                With <span className="text-customColor">Every Bite</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
                Immerse yourself in a dining experience like no other, where
                every dish is a masterpiece of flavor, crafted with care and
                precision from the freshest ingredients.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                {/* "Book a Table" Button */}
                <button className="relative overflow-hidden text-white bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Book a table
                  </span>
                  <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                  <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>

                {/* "Download App" Button */}
                <button className="text-sm underline flex items-center gap-2 text-customColor hover:text-white transition duration-300">
                  Download App <BiLogoPlayStore className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end lg:mt-40 relative">
              {/* Hero Image Wrapper */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
                {/* Main Hero Image */}
                <div className="relative overflow-hidden rounded-full group">
                  <img
                    src={heroimg}
                    alt="Hero"
                    className="w-full object-cover rounded-full shadow-xl"
                  />
                  {/* White Overlay - Expands from center */}
                  <div className="absolute inset-0 bg-white opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-30 group-hover:scale-110 rounded-full"></div>
                </div>

                {/* First Circle Image (Top Right) */}
                <div className="absolute w-28 sm:w-32 md:w-40 border-8 rounded-full object-cover top-0 right-0 transform translate-x-6 -translate-y-6">
                  <div className="relative overflow-hidden rounded-full group">
                    <img
                      src={heroCircleImg}
                      alt=""
                      className="w-full object-cover rounded-full"
                    />
                    {/* Overlay - Appears from Right */}
                    <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                  </div>
                </div>

                {/* Second Circle Image (Bottom Left) */}
                <div className="absolute w-28 sm:w-32 md:w-40 border-8 rounded-full object-cover bottom-0 left-0 transform -translate-x-6 translate-y-6">
                  <div className="relative overflow-hidden rounded-full group">
                    <img
                      src={heroCircleImgTwo}
                      alt=""
                      className="w-full object-cover rounded-full"
                    />
                    {/* Overlay - Appears from Left */}
                    <div className="absolute inset-0 bg-white opacity-0 translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
