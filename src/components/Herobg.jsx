import React from "react";
import heroBG from "../assets/hero-bg.jpg";

const Herobg = () => {
  return (
    <div className="relative font-merienda min-h-screen w-full">
      {/* Hero Background */}
      <img
        src={heroBG}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
        <div className="text-center px-4 text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base md:text-lg capitalize">
            Home / 404 Error Page
          </p>
          {/* "Book a Table" Button */}
        </div>
      </div>
    </div>
  );
};

export default Herobg;
