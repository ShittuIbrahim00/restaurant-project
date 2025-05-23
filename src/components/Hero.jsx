import React from "react";
import herobg from "../assets/hero-bg.jpg";
import heroimg from "../assets/hero-img.jpg";
import heroCircleImg from "../assets/hero-circle-img-1.jpg";
import heroCircleImgTwo from "../assets/hero-circle-img-2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const loggedUser = JSON.parse(localStorage.getItem("restaurant-customer"));
  const limitedName = loggedUser?.name?.slice(0, 10) || "";
  console.log(limitedName);

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
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-full px-4 text-center sm:top-28 md:top-[104px] lg:top-28 xl:top-36">
          {limitedName && (
            <p className="text-white text-sm sm:text-base xl:text-xl font-semibold text-center">
              Hello <span className="text-customColor">{limitedName}</span>,
              Welcome to <span className="text-customColor">SpicyHunt</span>
            </p>
          )}
        </div>

        {/* Content */}
        <div className="w-[90%] mx-auto text-white px-4 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left mx-auto mt-64 xs: lg:mt-4 md:mt-56 md:py-0 lg:py-32">
              <p className="text-xs md:text-sm mt-24 lg:mt-20 md:mt-40 font-bold uppercase tracking-widest text-customColor">
                Art of Fine Dining
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-2 md:mt-1 uppercase leading-tight">
                Dining Redefined
              </h1>

              <h1 className="text-2xl sm:text-3xl md:hidden lg:block xl:block lg:text-4xl xl:text-5xl font-bold md:mt-1 uppercase leading-tight">
                With <span className="text-customColor">Every Bite</span>
              </h1>

              <p className="mt-1 md:mt-2 text-sm sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
                Immerse yourself in a dining experience like no other, where
                every dish is a masterpiece of flavor, crafted with care and
                precision from the freshest ingredients.
              </p>

              {/* Buttons */}
              <div className="mt-3 md:mt-3 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                {/* "Book a Table" Button */}
                <button
                  onClick={() => navigate("/tables")}
                  className="relative overflow-hidden text-white bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group"
                >
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
            <div className="flex justify-center lg:mt-40 xl:mt-64 relative">
              {/* Hero Image Wrapper */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-92 xl:w-96">
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
