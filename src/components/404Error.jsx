import React from 'react';
import error404 from "../assets/404-error-img.png"
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Error = () => {
  return (
    <div className="bg-customBlack text-white p-4 min-h-screen font-merienda flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img src={error404} alt="" className='w-full object-contain'/>
        <h1 className='uppercase text-2xl lg:text-4xl md:text-3xl'>oops! page not found</h1>
        <p className='capitalize text-md'>Sorry, we can't find the page you're looking.</p>
        <Link to={`/`} className="relative overflow-hidden text-white mt-3 bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Back To Home
            </span>
            <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
            <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
      </div>
    </div>
  )
}

export default Error;
