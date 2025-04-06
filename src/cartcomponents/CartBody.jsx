import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import postImg from "../assets/post-1.jpg";
import { Link } from "react-router-dom";

const CartBody = () => {
  // Simulate cart items (You would fetch this from your state management or context)
  const cartItems = [
    {
      id: 1,
      name: "Food Salad",
      description: "Delicious mixed salad with fresh ingredients.",
      price: 13.0,
      quantity: 60,
      total: 780.0,
      image: postImg,
    },
    // Add more items as necessary
  ];

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = cartItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="bg-customBlack px-4 min-h-screen font-merienda pt-10 pb-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-[90%] mx-auto text-white">
        <div className="col-span-2">
          <p className="text-2xl my-6">Order(s)</p>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 rounded-md w-full mb-6 overflow-clip"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                {/* Image */}
                <img
                  src={item.image}
                  alt="Food"
                  className="w-40 h-auto object-contain"
                />

                {/* Title & Description */}
                <div className="flex flex-col gap-1 text-center md:text-left flex-1 mt-4">
                  <h1 className="font-bold text-lg truncate">{item.name}</h1>
                  <p className="text-sm text-gray-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                {/* Quantity Selector + Remove Button */}
                <div className="flex flex-col gap-2 items-center md:items-start mt-4">
                  <select className="text-black px-2 py-1 rounded-md border border-gray-300">
                    <option value="">Select Quantity</option>
                    {/* Dynamically populate quantity options */}
                    {[...Array(10).keys()].map((qty) => (
                      <option key={qty} value={qty + 1}>
                        {qty + 1}
                      </option>
                    ))}
                  </select>
                  <button className="underline text-red-500 hover:text-red-700 transition">
                    Remove
                  </button>
                </div>

                {/* Price & Totals */}
                <div className="flex flex-col gap-1 text-center md:text-left flex-initial mt-1 mr-5">
                  <p className="flex justify-between">
                    Price: <span className="font-semibold">${item.price}</span>
                  </p>
                  <h1 className="truncate">
                    Quantity:{" "}
                    <span className="font-semibold text-right">
                      {item.quantity}
                    </span>
                  </h1>
                  <p className="truncate flex justify-between">
                    Total: <span className="font-semibold">${item.total}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1">
          <p className="text-2xl my-6">Order Summary</p>
          <div className="flex flex-col justify-center gap-2">
            <p className="flex justify-between">
              Total Quantity:{" "}
              <span className="font-semibold">{totalQuantity}</span>
            </p>
            <p className="flex justify-between">
              Grand Total: <span className="font-semibold">${grandTotal}</span>
            </p>
            <Link
              to={{
                pathname: "/cart-checkout",
                state: { cartItems, totalQuantity, grandTotal }, // Passing the cart data
              }}
              className="relative overflow-hidden text-white mt-3 w-fit bg-customColor px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Proceed To Checkout
              </span>
              <IoIosArrowRoundForward className="relative z-10 text-3xl transition-colors duration-300 group-hover:text-black" />
              <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
