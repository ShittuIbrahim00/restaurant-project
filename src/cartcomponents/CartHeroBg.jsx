import React from "react";
import heroBG from "../assets/hero-bg.jpg";

const CartHeroBg = () => {
  return (
    <div className="relative font-merienda min-h-64 w-full">
      {/* Hero Background */}
      <img
        src={heroBG}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
        <div className="text-center px-4 text-white space-y-4">
          <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 lg:mt-20 font-bold uppercase">
            your shopping cart
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartHeroBg;
