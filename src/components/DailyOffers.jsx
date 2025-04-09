import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { TiStar } from "react-icons/ti";
import aboutUsImg from "../assets/daily-offer-image.png";
import { useNavigate } from "react-router-dom";

const DailyOffers = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-customBlack p-4 min-h-screen font-merienda">
      {/* Content */}
      <div className="w-[90%] mx-auto mt-6 text-white px-4 pb-8 sm:pb-8 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-start lg:mt-16 lg:mb-10 sm:mt-20 relative">
            {/* Hero Image Wrapper */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-92 xl:w-96">
              {/* Main Hero Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={aboutUsImg}
                  alt="Hero"
                  className="w-full object-cover"
                />
              </div>

              {/* First Circle Image (Top Right) */}
              <div className="absolute w-fit rounded-md object-cover -bottom-6 -right-5 transform translate-x-6 -translate-y-6">
                <div className="relative overflow-hidden rounded-lg group">
                  <div className="bg-customColor py-6 px-6">
                    <p className="font-bold text-xl">Delicious Burger</p>
                    <div className="flex items-center my-2">
                      <TiStar className="text-xl text-yellow-500" />
                      <TiStar className="text-xl text-yellow-500" />
                      <TiStar className="text-xl text-yellow-500" />
                      <TiStar className="text-xl text-yellow-500" />
                      <TiStar className="text-xl text-yellow-500" />
                    </div>
                    <div className="flex flex-col justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="p-1 w-fit bg-white rounded-full">
                          <GiCheckMark className="rounded-full text-customColor text-[.5em]" />
                        </span>
                        <p className="text-[.8em] font-bold">Tomato Sauses</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="p-1 w-fit bg-white rounded-full">
                          <GiCheckMark className="rounded-full text-customColor text-[.5em]" />
                        </span>
                        <p className="text-[.8em] font-bold">Vegetables</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="p-1 w-fit bg-white rounded-full">
                          <GiCheckMark className="rounded-full text-customColor text-[.5em]" />
                        </span>
                        <p className="text-[.8em] font-bold">Lettuce</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="p-1 w-fit bg-white rounded-full">
                          <GiCheckMark className="rounded-full text-customColor text-[.5em]" />
                        </span>
                        <p className="text-[.8em] font-bold">Cheese Slice</p>
                      </div>
                    </div>
                  </div>
                  {/* Overlay - Appears from Right */}
                  <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="text-center lg:text-left mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
              our daily offers
            </p>
            <h1 className="text-xl md:text-3xl lg:text-[1.7rem] xl:text-4xl font-bold mt-1 uppercase leading-tight">
            taste the savings with our <span className="text-customColor">daily specials</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-lg">
              Every day is an opportunity to enjoy your favorites at a
              discounted price. Explore our daily rotating specials and indulge
              in flavorful meals at a fraction of the cost.
            </p>
            <div className="flex flex-col justify-between gap-3 sm:mx-auto my-4">
              <div className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base max-w-lg">
                <span className="p-1 w-fit bg-customColor rounded-full">
                  <GiCheckMark className="rounded-full text-black text-[.5em]" />
                </span>
                <p className="text-md font-bold">
                  seasonal & locally sourced ingredients
                </p>
              </div>
              <div className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base max-w-lg">
                <span className="p-1 w-fit bg-customColor rounded-full">
                  <GiCheckMark className="rounded-full text-black text-[.5em]" />
                </span>
                <p className="text-md font-bold">
                  vegetarian & dietary-friendly options
                </p>
              </div>
              <div className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base max-w-lg">
                <span className="p-1 w-fit bg-customColor rounded-full">
                  <GiCheckMark className="rounded-full text-black text-[.5em]" />
                </span>
                <p className="text-md font-bold">
                  exquisite pairings & unique flavors
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              {/* "Book a Table" Button */}
              <button onClick={()=>navigate("/reservation")} className="relative overflow-hidden text-white bg-customColor lg:px-6 px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Book Table
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
              {/* "Book a Table" Button */}
              <button className="relative overflow-hidden bg-white text-black px-8 lg:px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Explore Menu
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-white" />
                <span className="absolute inset-0 bg-customColor w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOffers;
