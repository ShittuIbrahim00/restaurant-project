import React, { useState } from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { motion } from "framer-motion";
import { TfiWorld } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import aboutUsImg from "../assets/about-us-image.jpg";
import aboutUsImgTwo from "../assets/about-us-img-2.jpg";
import iconCompany from "../assets/icon-company-experience.svg";
import aboutDetailsOne from "../assets/icon-about-detail-1.svg";
import aboutDetailsTwo from "../assets/icon-about-detail-2.svg";
import aboutDetailsThree from "../assets/icon-about-detail-3.svg";
import DailyOffers from "../components/DailyOffers";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const [selected, setSelected] = useState("mission"); //default vision
  const chefs = [
    {
      id: 1,
      img: "https://html.awaikenthemes.com/spicyhunt/images/team-1.jpg",
      name: "Sophia Martinez",
      position: "Executive Chef",
    },
    {
      id: 2,
      img: "https://html.awaikenthemes.com/spicyhunt/images/team-2.jpg",
      name: "Liam Patel",
      position: "Sous Chef",
    },
    {
      id: 3,
      img: "https://html.awaikenthemes.com/spicyhunt/images/team-3.jpg",
      name: "Isabella Carter",
      position: "Pastry Chef",
    },
    {
      id: 4,
      img: "https://html.awaikenthemes.com/spicyhunt/images/team-4.jpg",
      name: "Ethan Johnson",
      position: "Restaurant Manager",
    },
  ];
  //data
  const content = {
    mission: {
      text: "At SpicyHunt, our vision is to redefine the dining experience by bringing people together over authentic, flavorful meals crafted with love and passion.We aim to be a beacon of culinary excellence, where every dish tells a story of tradition, innovation, and uncompromising quality.",
      image:
        "https://html.awaikenthemes.com/spicyhunt/images/our-mission-img.jpg",
    },
    vision: {
      text: "At SpicyHunt, our vision is to redefine the dining experience by bringing people together over authentic, flavorful meals crafted with love and passion.We aim to be a beacon of culinary excellence, where every dish tells a story of tradition, innovation, and uncompromising quality.",
      image:
        "https://html.awaikenthemes.com/spicyhunt/images/our-vision-img.jpg",
    },

    values: {
      text: "At SpicyHunt, our vision is to redefine the dining experience by bringing people together over authentic, flavorful meals crafted with love and passion.We aim to be a beacon of culinary excellence, where every dish tells a story of tradition, innovation, and uncompromising quality.",
      image:
        "https://html.awaikenthemes.com/spicyhunt/images/our-value-img.jpg",
    },
  };

  const data = [
    {
      id: 1,
      img: aboutDetailsOne,
      title: "premium dining",
      descp: "It's very personal, and can only be a positive experience.",
    },
    {
      id: 2,
      img: aboutDetailsTwo,
      title: "abundant flavors",
      descp: "At secret recipe, we take immense pride in crafting.",
    },
    {
      id: 3,
      img: aboutDetailsThree,
      title: "indigenous meal",
      descp: "With local ingredients, unique spins on traditional flavors.",
    },
  ];

  const handleClick = (section) => {
    setSelected(section);
  };

  const renderText = (text) => {
    return text.split("\n").map((line, index) => (
      <p key={index} className="text-sm md:text-lg text-[#AEB0B4] ">
        {line}
      </p>
    ));
  };

  const buttonClasses = (section) => {
    return selected === section
      ? `text-[#A6A182]`
      : `text-white hover:text-[#A6A182]`;
  };

  const navigate = useNavigate();
  const linkToReadMoreAboutUs = () => {
    navigate("/about");
  };
  const linkToMenu = () => {
    navigate("/menu");
  };

  const [open, setOpen] = useState({});

  const handleMouseOver = (id) => {
    setOpen((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setOpen((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <div className="">
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
            alt="Pizza"
            className="w-full h-full object-cover opacity-85"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white">
            ABOUT US
          </h2>
        </div>
      </div>

      <div className="bg-customBlack p-4 min-h-screen font-merienda">
        {/* Content */}
        <div className="w-[90%] mx-auto text-white px-4 border-b border-gray-700 pb-8 sm:pb-8 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            {/* Hero Image */}
            <div className="flex justify-center lg:justify-start lg:mt-32 lg:mb-10 relative">
              {/* Hero Image Wrapper */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-92 xl:w-96">
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
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-1 md:mt-1 uppercase leading-tight">
                Our Commitment to
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-2xl xl:text-4xl font-bold mt-1 md:mt-1 uppercase leading-tight">
                Authenticity &{" "}
                <span className="text-customColor">excellence</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-lg">
                Every dish we create is a celebration of connection, crafted
                with passion and inspired by diverse flavors. Join us in an
                inviting space where every bite sparks joy and every moment
                becomes a cherished memory.
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
                <button
                  onClick={linkToMenu}
                  className="relative overflow-hidden text-white bg-customColor px-8 lg:px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    Order Now
                  </span>
                  <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
                  <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </button>
                {/* "Book a Table" Button */}
                <button
                  onClick={linkToReadMoreAboutUs}
                  className="relative overflow-hidden bg-white text-black px-8 lg:px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group"
                >
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
              <div
                key={about.id}
                className="flex justify-between items-center gap-6 my-2 lg:my-8"
              >
                <div className="w-1/4 p-5 border rounded-full">
                  <img
                    src={about.img}
                    alt={about.title}
                    className="transition-transform w-full object-contain duration-300 transform hover:rotate-180 "
                  />
                </div>
                <div>
                  <h1 className="text-md md:text-lg lg:text-xl mb-2 font-extrabold capitalize">
                    {about.title}
                  </h1>
                  <p className="text-gray-400">{about.descp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1F2120] px-4">
        <div className="w-[90%] mx-auto">
          <div>
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <h5 className="text-[#A6A182] font-bold mt-6 md:mt-10 text-sm md:text-base">
                OUR APPROACH
              </h5>
              <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                DELIVERING MEMORABLE
              </h2>
              <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                DINING{" "}
                <span className="text-[#A6A182] font-bold">EXPERIENCES</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mt-4">
              <div className="flex justify-center gap-4 md:gap-10 bg-[#363837] rounded-full px-4 sm:px-6 md:px-10 py-2 text-sm w-full max-w-lg">
                <button
                  onClick={() => handleClick("mission")}
                  className={buttonClasses("mission")}
                >
                  Mission
                </button>
                <button
                  onClick={() => handleClick("vision")}
                  className={buttonClasses("vision")}
                >
                  Vision
                </button>
                <button
                  onClick={() => handleClick("values")}
                  className={buttonClasses("values")}
                >
                  Values
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col lg:flex-row gap-10 mt-5 lg:mt-12">
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-[#A6A182] font-bold text-sm">
                {selected === "mission"
                  ? "OUR MISSION"
                  : selected === "vision"
                  ? "OUR VISION"
                  : "OUR VALUES"}
              </h2>
              <h1 className="text-white text-xl lg:text-4xl md:text-3xl font-bold my-2">
                CREATING MOMENTS AROUND FLAVOUR
              </h1>
              {renderText(content[selected].text)}
            </div>

            {/* Image Section */}
            <div className="flex-1 mb-10 lg:mb-20 md:mb-16">
              <img
                src={content[selected].image}
                alt={selected}
                className="rounded-3xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <DailyOffers />

      <div className="bg-[#1F2120] px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center pt-10 text-center">
            <h5 className="text-[#A6A182] font-bold py-2 text-sm sm:text-base">
              ALWAYS QUALITY
            </h5>
            <h2 className="text-white text-2xl lg:w-[60%] lg:text-4xl md:text-3xl font-bold">
              THE TALENTED MINDS BEHIND EVERY{" "}
              <span className="text-[#A6A182]">FLAVOURFUL DISH</span>
            </h2>
          </div>

          {/* Team Cards */}
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
            {chefs.map((e) => (
              <div key={e.id} className="mx-auto">
                <div
                  onMouseOver={() => handleMouseOver(e.id)}
                  onMouseLeave={() => handleMouseLeave(e.id)}
                  className="relative"
                >
                  <Link to={`/chefs/${e.id}`} className="mx-auto">
                    <div
                      style={{ backgroundImage: `url(${e.img})` }}
                      className="rounded-2xl object-cover bg-cover bg-center lg:w-[280px] h-[400px] mt-10"
                    >
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-0 left-0  w-full p-4 flex flex-col items-center text-white">
                        <h1 className="font-bold text-2xl text-center font-merienda">
                          {e.name}
                        </h1>
                        <p className="text-gray-400 text-lg leading-7">
                          {e.position}
                        </p>

                        {/* Motion Div for Smooth Pop-up */}
                        {open[e.id] && (
                          <motion.div
                            initial={{ opacity: 0, y: 30 }} // Start hidden and lower
                            animate={{ opacity: 1, y: 0 }} // Animate into view
                            exit={{ opacity: 0, y: 30 }} // Animate out when hiding
                            transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth slow effect
                            className="flex items-center mt-3 gap-6"
                          >
                            <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none">
                              <TfiWorld />
                            </div>
                            <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none">
                              <FaFacebookF />
                            </div>
                            <div className="rounded-full h-[40px] w-[40px] flex items-center justify-center border border-white hover:bg-customColor hover:text-black hover:border-none">
                              <FaInstagram />
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <h3 className="text-center mt-6 text-white text-sm sm:text-base">
            Meet the passionate team behind every flavour and experience. Meet
            our team.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
