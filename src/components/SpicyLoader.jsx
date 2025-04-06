import React from "react";
import loaderSvg from "../assets/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-customColor bg-opacity-80">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <img src={loaderSvg} alt="loading" className="w-16 h-16 z-10 object-contain" />
        <div className="absolute w-full h-full rounded-full border-loader-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
