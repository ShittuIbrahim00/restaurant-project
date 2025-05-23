import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CartBody = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const userId= user?._id;


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/v1/orders/${userId}`);
        setOrders(data.orders || []); // Adjust if your API returns differently
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [userId]);

  if (loading) return <p>Loading orders...</p>;
  if (!orders.length) return <p>Your cart is empty.</p>;

  // Use reduce instead of flatMap to flatten items array
  const allItems = orders.reduce((acc, order) => {
    const items = order.menuItems.map((item) => ({
      ...item.menu_id,
      quantity: item.quantity,
      customization: item.customization,
      total: item.quantity * item.menu_id.price,
    }));
    return acc.concat(items);
  }, []);

  const totalQuantity = allItems.reduce((acc, item) => acc + item.quantity, 0);
  const grandTotal = allItems.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="bg-customBlack px-4 min-h-screen font-merienda pt-10 pb-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-[90%] mx-auto text-white">
        <div className="col-span-2">
          <p className="text-2xl my-6">Order(s)</p>

          {allItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-md w-full mb-6 overflow-clip"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <img
                  src={item.image || "/default-image.jpg"}
                  alt={item.name}
                  className="w-40 h-auto object-contain"
                />

                <div className="flex flex-col gap-1 text-center md:text-left flex-1 mt-4">
                  <h1 className="font-bold text-lg truncate">{item.name}</h1>
                  <p className="text-sm text-gray-300 line-clamp-1">
                    {item.description}
                  </p>
                  {item.customization && (
                    <p className="text-xs italic text-yellow-300">
                      Custom: {item.customization}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1 text-center md:text-left flex-initial mt-1 mr-5">
                  <p>
                    Price: <span className="font-semibold">${item.price}</span>
                  </p>
                  <p>
                    Quantity:{" "}
                    <span className="font-semibold">{item.quantity}</span>
                  </p>
                  <p>
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
              Grand Total:{" "}
              <span className="font-semibold">${grandTotal}</span>
            </p>
            <Link
              to="/cart-checkout"
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


