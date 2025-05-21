import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { useNavigate, useParams } from "react-router-dom"; // assuming you're using React Router
import { starters } from "../assets/Data/MenuData";

// Sample data (you would probably import this from a central data file)
// import { starters, vegetables, seafood, desserts, beverages, salads } from "../data/menuData";

const allDishes = [
  ...starters,
  // ...vegetables,
  // ...seafood,
  // ...desserts,
  // ...beverages,
  // ...salads,
];

const MenuItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the dish id from the URL

  // Find the dish by id
  const dish = allDishes.find((d) => d.id.toString() === id);

  if (!dish) {
    return (
      <div className="text-white text-center py-20">
        <h1 className="text-2xl font-bold">Dish not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Section */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0">
          <img
            src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
            alt="Dish Banner"
            className="w-full h-full object-cover opacity-85"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center">
            {dish.title.toUpperCase()}
          </h2>
        </div>
      </div>

      {/* About Dish Section */}
      <div className="bg-customBlack py-12 px-4 font-merienda">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
          {/* Left Image Section */}
          <div className="flex justify-center relative">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
              <div className="overflow-hidden group rounded-xl">
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Card on Image */}
              <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[180px] md:w-[180px] lg:w-[200px] shadow-lg">
                <p className="font-bold text-lg mb-2 hidden lg:block md:block">{dish.title}</p>
                <div className="lg:flex hidden text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <TiStar key={i} className="text-xl" />
                  ))}
                </div>
                <ul className="space-y-1">
                  {dish.ingredients.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold">
                      <span className="bg-white p-[4px] rounded-full">
                        <GiCheckMark className="text-customColor text-xs" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="text-center lg:text-left px-2 sm:px-4">
            <p className="text-sm uppercase font-bold text-customColor tracking-widest">
              Dish
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-1">
              about the <span className="text-customColor">dish</span>
            </h1>
            <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              {dish.description}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={() => navigate("/cart")}
                className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
              >
                <span className="relative z-10 group-hover:text-black">
                  Proceed To Order
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
                <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
              </button>
              <button onClick={() => navigate("/menu")} className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group">
                <span className="relative z-10 group-hover:text-white">
                  Explore Menu
                </span>
                <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
                <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
