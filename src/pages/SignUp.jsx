import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-center items-center font-Merienda">
      <div className="flex flex-col text-center mb-4 mt-10">
        <div className="text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug">
          Register and{" "}
          <p className="text-customColor"> enjoy dining experience.</p>
        </div>
      </div>
      <div className="md:max-w-md lg:max-w-xl max-w-xs w-full bg-white rounded-2xl mb-10">
        <form action="" className="w-full lg:pt-12 lg:pb-7 p-5 lg:px-9">
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="name" className="font-normal text-md">
              Your Name
            </label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="e.g John"
              className="w-full border border-gray-300 p-4 rounded-xl"
            />
          </div>
          <div className="lg:flex w-full items-center gap-6 mt-4">
            <div className="flex flex-col gap-3 items-start w-full">
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
            <div className="flex flex-col gap-3 items-start w-full lg:mt-0 md:mt-4">
              <label htmlFor="phone" className="font-normal text-md">
                Phone Number
              </label>
              <input
                type="number"
                name=""
                id="phone"
                placeholder="09135611021"
                className="w-full border border-gray-300 p-4 rounded-xl"
              />
            </div>
          </div>
          <div className="lg:flex w-full items-center gap-6 mt-4">
            <div className="flex flex-col gap-3 items-start w-full">
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
            <div className="flex flex-col gap-3 items-start w-full lg:mt-0 md:mt-4">
              <label htmlFor="phone" className="font-normal text-md">
                Gender
              </label>
              <select name="" id="" className="w-full rounded-xl border p-5 ">
                <option value="">Select</option>
                <option value="">Female</option>
                <option value="">Male</option>
              </select>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-12">
            <button className="bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full">
              Submit
            </button>
          </div>
          <p className="text-sm mt-3">
            Already have an account?{" "}
            <Link to={"/"} className="text-customColor underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
