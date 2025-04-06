import React, { useState } from "react";
import dishImgOne from "../assets/our-dish-image-1.jpg";
import dishImgTwo from "../assets/our-dish-image-2.jpg";
const categories = ["Appetizer", "Main Course", "Desserts", "Drinks"];

const products = {
  Appetizer: [
    { id: 1, name: "Chips & Dipper", price: "$16.00", img: dishImgOne },
    { id: 2, name: "Mozzarella Sticks", price: "$12.00", img: dishImgTwo },
  ],
  "Main Course": [
    { id: 3, name: "Grilled Chicken", price: "$25.00" },
    { id: 4, name: "Pasta Alfredo", price: "$18.00" },
  ],
  Desserts: [
    { id: 5, name: "Chocolate Cake", price: "$10.00" },
    { id: 6, name: "Ice Cream Sundae", price: "$8.00" },
  ],
  Drinks: [
    { id: 7, name: "Lemonade", price: "$5.00" },
    { id: 8, name: "Iced Coffee", price: "$6.00" },
  ],
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <div className="bg-customGray px-4 min-h-screen font-merienda pt-10 pb-16">
      <div className="grid gap-4">
        {/* Text Content */}
        <div className="text-center mx-auto mt-10">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-customColor">
            from our menu
          </p>
          <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            an inspired menu that
          </h1>
          <h1 className="text-3xl sm:text-2xl text-white w-10/12 mx-auto md:text-3xl lg:text-4xl font-bold mt-4 uppercase tracking-wide leading-snug">
            <span className="text-customColor">blends tradition</span>
          </h1>
        </div>
        {/* Category Selector */}
        <div className="bg-customRoundedBg flex flex-wrap justify-center gap-4 rounded-full px-4 py-3 w-full sm:w-4/5 md:w-2/3 lg:w-1/3 mx-auto my-4">
          {categories.map((category) => (
            <p
              key={category}
              className={`cursor-pointer text-white hover:text-customColor transition-colors ${
                selectedCategory === category
                  ? "text-customColor font-bold"
                  : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[92%] sm:w-[90%] lg:w-[82%] mx-auto my-8">
          {products[selectedCategory]?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl"
            >
              {/* Image */}
              <img
                src={product.img}
                alt="Dish"
                className="w-[100px] h-[100px] object-contain rounded-full"
              />

              {/* Text Content */}
              <div className="flex flex-col gap-4 text-white w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                  <h1 className="uppercase font-bold text-md flex-1 truncate text-center sm:text-left">
                    {product.name}
                  </h1>

                  <div className="hidden sm:block flex-1 border border-gray-600"></div>

                  <button className="px-6 py-1 min-w-[120px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
                    {product.price}
                  </button>
                </div>

                <p className="leading-relaxed text-gray-400 text-center sm:text-left">
                  A perfect pairing of crispy, freshly made chips and rich,
                  flavorful dips that bring a burst of taste in every bite.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white text-center text-lg">
        Ready to Savor the Best?{" "}
        <span className="underline text-customColor hover:text-white">
          Check Our Dishes!
        </span>
      </p>
    </div>
  );
};

export default Menu;
