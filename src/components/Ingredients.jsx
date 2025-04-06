import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import aboutUsImg from "../assets/our-ingredients-image.png";
import bestQualities from "../assets/icon-ingredients-list-1.svg";
import discountSystem from "../assets/icon-ingredients-list-2.svg";
import firstDelivery from "../assets/icon-ingredients-list-3.svg";
import ProfessionalChef from "../assets/icon-ingredient-counter-1.svg";
import itemOfFood from "../assets/icon-ingredient-counter-2.svg";
import yearsOfExperience from "../assets/icon-ingredient-counter-2.svg";
import satisfiedClients from "../assets/icon-ingredient-counter-4.svg";

const Ingredients = () => {
  return (
    <div className="bg-customBlack p-4 min-h-screen font-merienda">
      {/* Content */}
      <div className="w-[90%] mx-auto text-white px-4 pb-8 sm:pb-8 sm:px-8 md:px-16 border-b border-gray-800">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-start lg:mt-16 lg:mb-10 sm:mt-20 relative">
            {/* Hero Image Wrapper */}
            <div className="relative ">
              {/* Main Hero Image */}
              <div className="relative overflow-hidden group">
                <img
                  src={aboutUsImg}
                  alt="Hero"
                  className="w-full object-cover"
                />
              </div>

              {/* First Circle Image (Top Right) */}
              <div className="absolute w-fit rounded-md object-cover -bottom-8 left-5 transform translate-x-6 -translate-y-6">
                <div className="relative overflow-hidden rounded-lg group">
                  <div className="bg-customColor py-6 px-6 flex flex-col justify-center items-center">
                    <p className="font-bold text-xl">620+ Exclusive</p>
                    <p className="text-md">Happy Customer</p>
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
              our ingredients
            </p>
            <h1 className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold mt-4 uppercase leading-tight">
              crafting dishes with
            </h1>
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 uppercase leading-tight">
              <span className="text-customColor">freshest flavors</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-lg">
              We take pride in using only the freshest, hand-picked ingredients
              that are free from preservatives and artificial additives. Taste
              the difference with every bite as we serve dishes made from
              nature's finest.
            </p>

            <div className="grid lg:grid-cols-3 gap-4 md:grid mt-6 text-center">
              <div className="flex justify-between gap-4 flex-col items-center">
                <img src={bestQualities} alt="" />
                <p className="font-extrabold md:text-md text-sm lg:text-xl">
                  Best Qualites
                </p>
              </div>
              <div className="flex justify-between gap-4 flex-col items-center">
                <img src={discountSystem} alt="" />
                <p className="font-extrabold md:text-md text-sm lg:text-xl">
                  Discount System
                </p>
              </div>
              <div className="flex justify-between gap-4 flex-col items-center">
                <img src={firstDelivery} alt="" />
                <p className="font-extrabold md:text-md text-sm lg:text-xl">
                  First Delivery
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              {/* "Book a Table" Button */}
              <button className="relative overflow-hidden text-white bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Book Table
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        <div className="flex gap-4 items-center justify-center text-center sm:text-left">
          <img
            src={ProfessionalChef}
            alt=""
            className="rounded-full p-4 border border-gray-600 hover:bg-white w-fit object-contain transition"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-white">309</h1>
            <p className="text-gray-400">Professional Chefs</p>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center text-center sm:text-left">
          <img
            src={itemOfFood}
            alt=""
            className="rounded-full p-4 border border-gray-600 hover:bg-white w-fit object-contain transition"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-white">453</h1>
            <p className="text-gray-400">Items Of Food</p>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center text-center sm:text-left">
          <img
            src={yearsOfExperience}
            alt=""
            className="rounded-full p-4 border border-gray-600 hover:bg-white w-fit object-contain transition"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-white">25+</h1>
            <p className="text-gray-400">Years Of Experience</p>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center text-center sm:text-left">
          <img
            src={satisfiedClients}
            alt=""
            className="rounded-full p-4 border border-gray-600 hover:bg-white w-fit object-contain transition"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold text-white">300+</h1>
            <p className="text-gray-400">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
