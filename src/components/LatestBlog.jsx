import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import postImg from "../assets/post-1.jpg";
import { useNavigate } from "react-router-dom";

const LatestBlog = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-customBlack px-4 min-h-screen font-merienda pt-10 pb-16">
      <div className="grid gap-4 w-[90%] mx-auto">
        {/* Text Content */}
        <div className="text-center mx-auto mt-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
            latest blog
          </p>
          <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            explore our latest news
          </h1>
          <h1 className="text-3xl sm:text-2xl text-white w-10/12 mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            <span className="text-customColor">and updates</span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 md:grid mt-10">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col gap-6 justify-between">
              {/* Image with hover effect */}
              <div className="relative rounded-3xl overflow-hidden group">
                <img
                  src={postImg}
                  alt=""
                  className="rounded-3xl w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Transparent white overlay on hover */}
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-3xl" />
              </div>

              <h1 className="text-md lg:text-xl md:text-xl font-bold text-white">
                5 Tips for perfecting your home dining experience
              </h1>

              <button onClick={()=>navigate("/reservation")} className="relative overflow-hidden text-white font-bold text-sm flex items-center transition-all duration-300 ease-in-out">
                <span className="relative z-10 transition-colors duration-300 hover:text-white text-customColor">
                  Book Table
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300" />
                <span className="absolute inset-0 w-0 left-0 transition-all duration-300 ease-in-out"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
