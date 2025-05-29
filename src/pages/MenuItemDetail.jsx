import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import beverages6 from "../assets/beverages-img-2.png";

const MenuItemDetail = () => {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const loggedInUserId = user?._id;

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState("");
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchMenuDetail = async () => {
      try {
        const res = await axios.get(`${renderUrl}/api/v1/menu/${id}`);
        setDish(res.data?.data);
        console.log(res.data.data)
      } catch (error) {
        console.error("Error fetching menu detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuDetail();
  }, [id]);

  // useEffect(() => {
  //   const checkCart = async () => {
  //     if (!loggedInUserId) return;

  //     try {
  //       const resp = await axios.get(
  //         `http://localhost:5000/api/v1/orders/${loggedInUserId}`
  //       );
  //       const orders = resp.data.orders || [];

  //       const allMenuItems = orders.flatMap((order) =>
  //         Array.isArray(order.menuItems) ? order.menuItems : []
  //       );

  //       const alreadyInCart = allMenuItems.some(
  //         (item) => item.menu_id?._id === id
  //       );

  //       setIsInCart(alreadyInCart);
  //     } catch (error) {
  //       console.error("Error checking cart:", error);
  //     }
  //   };
  //   checkCart();
  // }, [id, loggedInUserId]);

  const handleAddToCart = async () => {
    if (!loggedInUserId) {
      toast.error("Please login to add to cart.");
      navigate("/login");
      return;
    }
  
    if (isInCart) {
      toast.error("This item is already in your cart.");
      return;
    }
  
    if (quantity < 1) {
      toast.error("Quantity must be at least 1.");
      return;
    }
  
    const orderPayload = {
      customer_id: loggedInUserId,
      menuItems: [
        {
          menu_id: id,
          quantity,
          customization: customization.trim() || undefined,
        },
      ],
    };
  
    try {
      const res = await axios.post(
        `${renderUrl}/api/v1/orders/add-to-cart`,
        orderPayload
      );
      console.log(res);
      toast.success("Item added to cart!");
      setIsInCart(true);
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add to cart:", error.response?.data || error.message);
      toast.error("Failed to add to cart.");
    }
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-t-customColor border-white rounded-full animate-spin"></div>
          <p className="absolute w-full text-center text-white top-[72px] text-sm animate-pulse">
            Fetching dish details...
          </p>
        </div>
      </div>
    );
  }
  if (!dish)
    return <div className="text-white text-center py-20">Dish not found</div>;

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
            alt="Banner"
            className="w-full h-full object-cover opacity-85"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
          <h2 className="text-4xl font-bold text-white text-center uppercase">
            {dish.name || "Menu Item"}
          </h2>
        </div>
      </div>

      {/* Dish Details */}
      <div className="bg-customRoundedBg py-12 px-4 font-merienda">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-72 md:w-96">
              <div className="overflow-hidden group rounded-xl">
                <img
                  src={dish.img || beverages6}
                  alt={dish.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor px-3 py-2 w-[200px] shadow-lg">
                <p className="font-bold text-lg">{dish.name}</p>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <TiStar key={i} />
                  ))}
                </div>
                {dish.ingredients?.length > 0 && (
                  <ul className="space-y-1">
                    {dish.ingredients.map((item, i) => (
                      <li
                        key={i}
                        className="flex truncate items-center gap-2 text-sm font-semibold"
                      >
                        <span className="bg-white p-[4px] rounded-full">
                          <GiCheckMark className="text-customColor text-xs" />
                        </span>
                        {item.inventoryItem}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="text-sm">{dish.desc}</p>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="text-center lg:text-left px-2 sm:px-4">
            <h1 className="text-3xl font-bold uppercase mt-2">
              About the <span className="text-customColor">dish</span>
            </h1>
            <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto lg:mx-0">
              {dish.desc}
            </p>
            <p className="mt-4 text-lg font-semibold text-customColor">
              Price: #{dish.price}
            </p>

            <div className="mt-6 space-y-4 max-w-xs mx-auto lg:mx-0 text-left">
              {/* Quantity */}
              <label className="block text-white font-semibold mb-1">
                Quantity:
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md text-black"
              />

              {/* Customization */}
              <label className="block text-white font-semibold mb-1">
                Customization (optional):
              </label>
              <textarea
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
                placeholder="Add notes or preferences"
                className="w-full px-3 py-2 rounded-md text-black"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={handleAddToCart}
                className="relative overflow-hidden px-8 py-3 rounded-full font-bold flex items-center gap-2 group bg-customColor text-white"
              >
                <span className="relative z-10">Add to Cart</span>
                <IoIosArrowRoundForward className="relative z-10 text-2xl" />
              </button>

              <button
                onClick={() => navigate("/menu")}
                className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
              >
                <span className="relative z-10 group-hover:text-white">
                  Back to Menu
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
