import React from "react";
import testimonialBg from "../assets/testimonials-bg.jpg";
import authorOne from "../assets/author-1.jpg";
import authorTwo from "../assets/author-2.jpg";
import AutoSlider from "./AutoSlider";

const Testimonials = () => {
  return (
    <div className="relative font-merienda w-full min-h-screen overflow-hidden overflow-x-hidden">
      {/* Hero Background */}
      <img
        src={testimonialBg}
        alt="Hero Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center">
        {/* Content */}
        <div className="w-[90%] mx-auto text-white px-4 sm:px-8 md:px-16">
          <div className="grid gap-4 mt-32 lg:mt-0">
            {/* Text Content */}
            <div className="text-center mx-auto">
              <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
                our Testimonials
              </p>
              <h1 className="text-2xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold mt-2 uppercase tracking-wide leading-snug">
                real stories of memorable
              </h1>
              <h1 className="text-2xl sm:text-xl text-white  mx-auto md:text-2xl lg:text-3xl font-bold mt-2 uppercase tracking-wide leading-snug">
                <span className="text-customColor">meals and experiences</span>
              </h1>
            </div>
            {/* Category Selector */}
          </div>
          <div className="">
            <AutoSlider
              images={[authorOne, authorTwo, authorOne]}
              slidesContent={[
                {
                  title: "Savory Soup",
                  description:
                    "From the moment we walked in, the ambiance was welcoming, and the service was top-notch. The dish was absolutely delicious, full of fresh flavors, and perfectly cooked. I especially loved how the staff took the time to explain the menu and suggest pairings for our meal.",
                },
                {
                  title: "Fresh Salad",
                  description:
                    "From the moment we walked in, the ambiance was welcoming, and the service was top-notch. The dish was absolutely delicious, full of fresh flavors, and perfectly cooked. I especially loved how the staff took the time to explain the menu and suggest pairings for our meal.",
                },
                {
                  title: "Juicy Burger",
                  description:
                    "From the moment we walked in, the ambiance was welcoming, and the service was top-notch. The dish was absolutely delicious, full of fresh flavors, and perfectly cooked. I especially loved how the staff took the time to explain the menu and suggest pairings for our meal.",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
