import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobileHomeDropdownOpen, setIsMobileHomeDropdownOpen] = useState(false);
  const [isMobilePagesDropdownOpen, setIsMobilePagesDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="top-0 absolute w-full z-10 border-b">
      <nav className="flex justify-between items-center px-6 w-[87%] mx-auto py-6 font-merienda">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="sm:w-full w-32 lg:w-36 xl:w-full font-merienda" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center text-md text-white gap-10 lg:gap-6 lg:text-sm xl:gap-10 xl:text-lg font-merienda">
          {["About Us", "Services", "Menu", "Pages", "Contact Us", "Cart"].map(
            (item, index) => (
              <div key={index} className="relative">
                <p
                  className="flex items-center hover:text-customColor cursor-pointer font-semibold"
                  onClick={() => {
                    if (item === "Home")
                      setIsHomeDropdownOpen(!isHomeDropdownOpen);
                    if (item === "Pages")
                      setIsPagesDropdownOpen(!isPagesDropdownOpen);
                    if (item === "Cart") {
                      navigate("/cart");
                    }
                    if (item === "About Us") {
                      navigate("/about");
                    };
                    if (item === "Services") {
                      navigate("/service");
                    };
                    if (item === "Contact Us") {
                      navigate("/contact");
                    };
                  }}
                >
                  {item}
                  {(item === "Home" || item === "Pages") && (
                    <MdOutlineKeyboardArrowDown className="text-xl" />
                  )}
                </p>

                {/* Dropdowns */}
                {item === "Home" && isHomeDropdownOpen && (
                  <div
                    className="absolute bg-customColor text-white text-sm p-4 mt-2 rounded-xl shadow-lg"
                    style={{ width: "max-content" }} // Make the width auto-fit the content
                    onMouseLeave={() => setIsHomeDropdownOpen(false)}
                  >
                    <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Slider
                    </p>
                    <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Images
                    </p>
                    <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Gallery
                    </p>
                  </div>
                )}

                {item === "Pages" && isPagesDropdownOpen && (
                  <div
                    className="absolute bg-customColor text-white p-4 mt-2 text-sm rounded-xl shadow-lg"
                    style={{ width: "max-content" }}
                    onMouseLeave={() => setIsPagesDropdownOpen(false)}
                  >
                    <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Services Details
                    </p>
                    <Link to={'/chefs'} className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Our Chefs
                    </Link>
                    <Link to={'/menudetail'} className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Menu Details
                    </Link>
                    <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      FAQs
                    </p>
                    <Link to={'/*'} className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      404
                    </Link>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* "Book a Table" Button - Only on Large Screens */}
        <button onClick={()=>navigate("/tables")} className="hidden lg:flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out">
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
            Book a table
          </span>
          <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />

          {/* Background effect */}
          <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <div
            className={`bg-customColor p-1 rounded-lg transition-all duration-300 ${
              isOpen ? "transform scale-110 opacity-100" : "transform scale-100 opacity-90"
            }`}
          >
            {isOpen ? (
              <FiX
                className="text-white text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-white text-3xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-customColor py-4 z-10 text-white">
          {["About Us", "Services", "Menu", "Pages", "Contact Us", "Cart"].map(
            (item, index) => (
              <div key={index} className="w-full">
                <p
                  className="py-2 px-6 hover:text-black text-sm font-merienda cursor-pointer justify-between flex items-center"
                  onClick={() => {
                    if (item === "Home")
                      setIsMobileHomeDropdownOpen(!isMobileHomeDropdownOpen);
                    if (item === "Pages")
                      setIsMobilePagesDropdownOpen(!isMobilePagesDropdownOpen);
                    if (item === "Cart") {
                      navigate("/cart");
                    };
                    if (item === "About Us") {
                      navigate("/about");
                    };
                    if (item === "Services") {
                      navigate("/service");
                    };
                    if (item === "Contact Us") {
                      navigate("/contact");
                    };
                  }}
                >
                  {item}
                  {(item === "Home" || item === "Pages") && (
                    (item === "Home" && isMobileHomeDropdownOpen) || 
                    (item === "Pages" && isMobilePagesDropdownOpen) ? (
                      <MdOutlineKeyboardArrowUp className="text-2xl transition-transform duration-300" />
                    ) : (
                      <MdOutlineKeyboardArrowDown className="text-2xl transition-transform duration-300" />
                    )
                  )}
                </p>

                {/* Mobile Dropdowns */}
                {item === "Home" && isMobileHomeDropdownOpen && (
                  <div className="text-white px-6 ml-4 text-sm font-merienda transition-all duration-300 max-h-screen">
                    <p className="hover:text-black cursor-pointer">Slider</p>
                    <p className="hover:text-black cursor-pointer my-2">Gallery</p>
                    <p className="hover:text-black cursor-pointer">Images</p>
                  </div>
                )}

                {item === "Pages" && isMobilePagesDropdownOpen && (
                  <div className="text-white px-6 ml-4 text-sm font-merienda transition-all duration-300 max-h-screen">
                    <p className="hover:text-black cursor-pointer">Service Details</p>
                    <Link to={'/menudetail'} className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">
                      Menu Details
                    </Link>
                    <Link to={'/chefs'} className="hover:text-black cursor-pointer my-2">Chefs</Link>
                    <p className="hover:text-black cursor-pointer">FAQs</p>
                    <Link to={'/*'} className="hover:text-black cursor-pointer my-2">404</Link>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
