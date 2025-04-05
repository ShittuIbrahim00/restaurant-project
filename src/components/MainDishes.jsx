import React from "react";
import {
  IoIosCheckmarkCircleOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import dishImgOne from "../assets/our-dish-image-1.jpg";
import dishImgTwo from "../assets/our-dish-image-2.jpg";
import dishImgThree from "../assets/our-dish-image-3.jpg";
import dishImgFour from "../assets/our-dish-image-4.jpg";

const MainDishes = () => {
  const data = [
    {
      img: dishImgOne,
      title: "soups",
      descp:
        "Warm, comforting, and full of flavor, our soups avre the perfect start to any meal.",
    },
    {
      img: dishImgTwo,
      title: "salads",
      descp:
        "Refreshing, vibrant, and full of fresh flavors, our salads are crafted to senses.",
    },
    {
      img: dishImgThree,
      title: "main dishes",
      descp:
        "Offering bold flavors and expertly crafted recipes that cater to every taste.",
    },
    {
      img: "https://html.awaikenthemes.com/spicyhunt/images/our-dish-image-4.jpg",
      title: "appetizers",
      descp:
        "Our appetizers are the perfect way to begin your dining experience flavors.",
    },
  ];
  return (
    <div className="bg-customGray p-4 min-h-screen font-merienda">
      <div className="grid gap-4">
        {/* Text Content */}
        <div className="text-center mx-auto mt-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
            our main dishes
          </p>
          <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            satisfy your cravings with
          </h1>
          <h1 className="text-3xl sm:text-2xl text-white w-10/12 mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            our <span className="text-customColor">signature mains</span>
          </h1>
        </div>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-[84%] text-white mx-auto py-10">
          {data?.map((mainDish) => (
            <div className="py-4 flex flex-col items-center gap-6">
              <div className="w-28 sm:w-32 md:w-44 rounded-full">
                <div className="relative overflow-hidden rounded-full group">
                  <img
                    src={mainDish.img}
                    alt=""
                    className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
                  />
                  {/* Overlay - Appears from Right */}
                  <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                </div>
              </div>
              <h1 className="text-2xl capitalize text-center">
                {mainDish.title}
              </h1>
              <h1 className="text-center text-gray-400">{mainDish.descp}</h1>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white text-center text-lg">
        Hungry for Something Delicious?{" "}
        <span className="underline text-customColor hover:text-white">
          View All Dishes!
        </span>
      </p>
    </div>
  );
};

export default MainDishes;
