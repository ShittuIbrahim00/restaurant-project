import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-center items-center font-Merienda">
      <div className="flex flex-col text-center mb-4">
        <div className="text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug">
          login and{" "}
          <p className="text-customColor"> enjoy dining experience.</p>
        </div>
      </div>
      <div className="md:max-w-md lg:max-w-xl max-w-xs w-full bg-white rounded-2xl">
        <form action="" className="w-full lg:pt-12 lg:pb-7 p-5 lg:px-9">
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="email" className="font-normal text-md">
              Email Address
            </label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="e.g John@example.com"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-3 items-start mt-4">
            <label htmlFor="password" className="font-normal text-md">
              Password
            </label>
            <input
              type="password"
              name=""
              id="password"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />
          </div>
          <div className="w-full mt-4 lg:mt-12">
            <button className="bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full">
              Submit
            </button>
          </div>
          <p className="text-sm mt-3">Don't have an account? <Link to={'/signup'} className="text-customColor underline">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
