import React, { useEffect, useRef, useState } from "react";
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

  const menuRef = useRef(null);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // ✅ Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(e.target)) {
        setIsHomeDropdownOpen(false);
        setIsPagesDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(e.target)) {
        setIsMobileHomeDropdownOpen(false);
        setIsMobilePagesDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="top-0 absolute w-full z-10 border-b">
      <nav className="flex justify-between items-center px-6 w-[87%] mx-auto py-6 font-merienda">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="sm:w-full w-32 lg:w-36 xl:w-full font-merienda" />
        </Link>

        {/* Desktop Menu */}
        <div
          ref={desktopDropdownRef}
          className="hidden lg:flex items-center text-md text-white gap-10 lg:gap-6 lg:text-sm xl:gap-10 xl:text-lg font-merienda"
        >
          {["About Us", "Services", "Menu", "Pages", "Contact Us", "Cart"].map((item, index) => (
            <div key={index} className="relative">
              <p
                className="flex items-center hover:text-customColor cursor-pointer font-semibold"
                onClick={() => {
                  if (item === "Home") setIsHomeDropdownOpen(!isHomeDropdownOpen);
                  if (item === "Pages") setIsPagesDropdownOpen(!isPagesDropdownOpen);
                  if (item === "Cart") navigate("/cart");
                  if (item === "About Us") navigate("/about");
                  if (item === "Services") navigate("/service");
                  if (item === "Contact Us") navigate("/contact");
                  if (item === "Menu") navigate("/menu");
                }}
              >
                {item}
                {(item === "Home" || item === "Pages") && (
                  <MdOutlineKeyboardArrowDown className="text-xl" />
                )}
              </p>

              {/* Desktop Dropdowns */}
              {item === "Home" && isHomeDropdownOpen && (
                <div className="absolute bg-customColor text-white text-sm p-4 mt-2 rounded-xl shadow-lg w-max">
                  <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Slider</p>
                  <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Images</p>
                  <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Gallery</p>
                </div>
              )}

              {item === "Pages" && isPagesDropdownOpen && (
                <div className="absolute bg-customColor text-white p-4 mt-2 text-sm rounded-xl shadow-lg w-max">
                  <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Services Details</p>
                  <Link to="/chefs" className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Our Chefs</Link>
                  <Link to="/menudetail" className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">Menu Details</Link>
                  <p className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">FAQs</p>
                  <Link to="*" className="hover:text-black cursor-pointer my-2 hover:translate-x-2 transition-all duration-200">404</Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Book a Table */}
        <button
          onClick={() => navigate("/reservation")}
          className="hidden lg:flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Book a table</span>
          <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />
          <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <div
            className={`bg-customColor p-1 rounded-lg transition-all duration-300 ${
              isOpen ? "scale-110 opacity-100" : "scale-100 opacity-90"
            }`}
          >
            {isOpen ? (
              <FiX className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className="text-white text-3xl cursor-pointer" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`lg:hidden transition-all duration-500 ease-in-out transform origin-top ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-customColor flex flex-col items-center text-white`}
      >
        <div ref={mobileDropdownRef} className="w-full">
          {["About Us", "Services", "Menu", "Pages", "Contact Us", "Cart"].map((item, index) => (
            <div key={index} className="w-full">
              <p
                className="py-2 px-6 hover:text-black text-sm font-merienda cursor-pointer justify-between flex items-center"
                onClick={() => {
                  if (item === "Home") setIsMobileHomeDropdownOpen(!isMobileHomeDropdownOpen);
                  if (item === "Pages") setIsMobilePagesDropdownOpen(!isMobilePagesDropdownOpen);
                  if (item === "Cart") {
                    navigate("/cart");
                    setIsOpen(false);
                  }
                  if (item === "About Us") {
                    navigate("/about");
                    setIsOpen(false);
                  }
                  if (item === "Services") {
                    navigate("/service");
                    setIsOpen(false);
                  }
                  if (item === "Contact Us") {
                    navigate("/contact");
                    setIsOpen(false);
                  }
                  if (item === "Menu") {
                    navigate("/menu");
                    setIsOpen(false);
                  }
                }}
              >
                {item}
                {(item === "Home" || item === "Pages") &&
                  ((item === "Home" && isMobileHomeDropdownOpen) || (item === "Pages" && isMobilePagesDropdownOpen) ? (
                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                  ))}
              </p>

              {/* Mobile Dropdowns */}
              {item === "Home" && isMobileHomeDropdownOpen && (
                <div className="text-white px-6 ml-4 text-sm font-merienda transition-all duration-300 max-h-screen">
                  <p className="hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>Slider</p>
                  <p className="hover:text-black cursor-pointer my-2" onClick={() => setIsOpen(false)}>Gallery</p>
                  <p className="hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>Images</p>
                </div>
              )}

              {item === "Pages" && isMobilePagesDropdownOpen && (
                <div className="text-white px-6 ml-4 flex flex-col gap-2 text-sm font-merienda transition-all duration-300 max-h-screen">
                  <p className="hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>Service Details</p>
                  <Link to="/menudetail" onClick={() => setIsOpen(false)} className="hover:text-black cursor-pointer w-full">Menu Details</Link>
                  <Link to="/chefs" onClick={() => setIsOpen(false)} className="hover:text-black cursor-pointer">Chefs</Link>
                  <p className="hover:text-black cursor-pointer" onClick={() => setIsOpen(false)}>FAQs</p>
                  <Link to="*" onClick={() => setIsOpen(false)} className="hover:text-black cursor-pointer">404</Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
