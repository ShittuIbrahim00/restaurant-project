import React from "react";
import {
  IoIosArrowRoundForward,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import aboutUsImg from "../assets/about-us-image.jpg";
import aboutUsImgTwo from "../assets/about-us-img-2.jpg";
import iconCompany from "../assets/icon-company-experience.svg";
import aboutDetailsOne from "../assets/icon-about-detail-1.svg";
import aboutDetailsTwo from "../assets/icon-about-detail-2.svg";
import aboutDetailsThree from "../assets/icon-about-detail-3.svg";

const AboutUs = () => {
  const data = [
    {
      img: aboutDetailsOne,
      title: "premium dining",
      descp: "It's very personal, and can only be a positive experience.",
    },
    {
      img: aboutDetailsTwo,
      title: "abundant flavors",
      descp: "At secret recipe, we take immense pride in crafting.",
    },
    {
      img: aboutDetailsThree,
      title: "indigenous meal",
      descp: "With local ingredients, unique spins on traditional flavors.",
    },
  ];
  return (
    <div className="bg-customBlack p-4 min-h-screen font-merienda">
      {/* Content */}
      <div className="w-[90%] mx-auto text-white px-4 border-b border-gray-700 pb-8 sm:pb-8 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          {/* Hero Image */}
          <div className="flex justify-center lg:justify-start lg:mt-32 lg:mb-10 sm:mt-64 mt-64 md:mt-64 relative">
            {/* Hero Image Wrapper */}
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
              {/* Main Hero Image */}
              <div className="relative overflow-hidden rounded-full group">
                <img
                  src={aboutUsImg}
                  alt="Hero"
                  className="w-full object-cover rounded-full shadow-xl"
                />
                {/* White Overlay - Expands from center */}
                <div className="absolute inset-0 bg-white opacity-0 scale-0 transition-all duration-500 ease-out group-hover:opacity-30 group-hover:scale-110 rounded-full"></div>
              </div>

              {/* First Circle Image (Top Right) */}
              <div className="absolute w-28 sm:w-32 md:w-40 rounded-md object-cover top-40 -right-5 transform translate-x-6 -translate-y-6">
                <div className="relative overflow-hidden rounded-lg group">
                  <div className="bg-customColor p-2">
                    <img
                      src={iconCompany}
                      alt=""
                      className="w-fit object-contain"
                    />
                    <p className="font-merienda my-2">
                      30+ years of experience
                    </p>
                  </div>
                  {/* Overlay - Appears from Right */}
                  <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0"></div>
                </div>
              </div>

              {/* Second Circle Image (Bottom Left) */}
              <div className="absolute w-28 sm:w-32 md:w-36 border-8 rounded-full object-cover bottom-10 left-0 transform -translate-x-6 translate-y-6">
                <div className="relative overflow-hidden rounded-full group">
                  <img
                    src={aboutUsImgTwo}
                    alt=""
                    className="w-full object-cover rounded-full"
                  />
                  {/* Overlay - Appears from Left */}
                  <div className="absolute inset-0 bg-white opacity-0 translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Text Content */}
          <div className="text-center lg:text-left mx-auto">
            <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
              about us
            </p>
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mt-4 uppercase leading-tight">
              Our Commitment to
            </h1>
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-4 uppercase leading-tight">
              Authenticity &{" "}
              <span className="text-customColor">excellence</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-lg">
              Every dish we create is a celebration of connection, crafted with
              passion and inspired by diverse flavors. Join us in an inviting
              space where every bite sparks joy and every moment becomes a
              cherished memory.
            </p>
            <div className="flex flex-col justify-between mt-3 gap-3 sm:mx-auto">
              <p className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base max-w-lg">
                <IoIosCheckmarkCircleOutline className="bg-customColor rounded-full text-black font-bold" />
                seasonal & locally sourced ingredients
              </p>
              <p className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base">
                <IoIosCheckmarkCircleOutline className="bg-customColor rounded-full text-black font-bold" />
                vegetarian & dietary-friendly options
              </p>
              <p className="flex items-center gap-2 capitalize text-gray-400 text-sm sm:text-base">
                <IoIosCheckmarkCircleOutline className="bg-customColor rounded-full text-black font-bold" />
                exquisite pairings & unique flavors
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              {/* "Book a Table" Button */}
              <button className="relative overflow-hidden text-white bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Order Now
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
              {/* "Book a Table" Button */}
              <button className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Read More
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-white" />
                <span className="absolute inset-0 bg-customColor w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-white w-[90%] mx-auto">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-4 sm:grid-cols-1 px-6">
          {data?.map((about) => (
            <div className="flex justify-between items-center gap-6 my-2 lg:my-8">
              <div className="w-1/4 p-5 border rounded-full">
                <img
                  src={about.img}
                  alt={about.title}
                  className="transition-transform w-full object-contain duration-300 transform hover:rotate-180 "
                />
              </div>
              <div>
                <h1 className="text-2xl mb-2 font-extrabold capitalize">{about.title}</h1>
                <p className="text-gray-400">
                  {about.descp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
