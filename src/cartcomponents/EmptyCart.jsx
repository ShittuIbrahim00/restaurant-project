import React from "react";
import { LiaOpencart } from "react-icons/lia";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="bg-customBlack px-4 font-merienda text-white py-20 flex flex-col justify-center items-center">
      <LiaOpencart className="text-9xl mb-3"/>
      <h1 className="text-5xl font-bold">No Item(s) in cart.</h1>
      <p className="my-2 text-xl">Add items you want to shop</p>
      <Link
        to={`/`}
        className="relative overflow-hidden text-white mt-3 w-fit bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group"
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
          START SHOPPING
        </span>
        <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
        <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </Link>
    </div>
  );
};

export default EmptyCart;
