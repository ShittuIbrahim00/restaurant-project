// import React from "react";
// import { GiCheckMark } from "react-icons/gi";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { TiStar } from "react-icons/ti";
// import { useNavigate, useParams } from "react-router-dom"; // assuming you're using React Router
// import { starters } from "../assets/Data/MenuData";

// // Sample data (you would probably import this from a central data file)
// // import { starters, vegetables, seafood, desserts, beverages, salads } from "../data/menuData";

// const allDishes = [
//   ...starters,
//   // ...vegetables,
//   // ...seafood,
//   // ...desserts,
//   // ...beverages,
//   // ...salads,
// ];

// const MenuItemDetail = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // Get the dish id from the URL

//   // Find the dish by id
//   const dish = allDishes.find((d) => d.id.toString() === id);

//   if (!dish) {
//     return (
//       <div className="text-white text-center py-20">
//         <h1 className="text-2xl font-bold">Dish not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="relative w-full min-h-screen">
//         <div className="absolute inset-0">
//           <img
//             src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
//             alt="Dish Banner"
//             className="w-full h-full object-cover opacity-85"
//           />
//         </div>
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
//           <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center">
//             {dish.title.toUpperCase()}
//           </h2>
//         </div>
//       </div>

//       {/* About Dish Section */}
//       <div className="bg-customBlack py-12 px-4 font-merienda">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
//           {/* Left Image Section */}
//           <div className="flex justify-center relative">
//             <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
//               <div className="overflow-hidden group rounded-xl">
//                 <img
//                   src={dish.img}
//                   alt={dish.title}
//                   className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Info Card on Image */}
//               <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[180px] md:w-[180px] lg:w-[200px] shadow-lg">
//                 <p className="font-bold text-lg mb-2 hidden lg:block md:block">{dish.title}</p>
//                 <div className="lg:flex hidden text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <TiStar key={i} className="text-xl" />
//                   ))}
//                 </div>
//                 <ul className="space-y-1">
//                   {dish.ingredients.map((item, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm font-semibold">
//                       <span className="bg-white p-[4px] rounded-full">
//                         <GiCheckMark className="text-customColor text-xs" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Text Section */}
//           <div className="text-center lg:text-left px-2 sm:px-4">
//             <p className="text-sm uppercase font-bold text-customColor tracking-widest">
//               Dish
//             </p>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-1">
//               about the <span className="text-customColor">dish</span>
//             </h1>
//             <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
//               {dish.description}
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-black">
//                   Proceed To Order
//                 </span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
//                 <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//               <button onClick={() => navigate("/menu")} className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group">
//                 <span className="relative z-10 group-hover:text-white">
//                   Explore Menu
//                 </span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
//                 <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;


// import React from "react";
// import { GiCheckMark } from "react-icons/gi";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { TiStar } from "react-icons/ti";
// import { useNavigate, useLocation } from "react-router-dom";

// const MenuItemDetail = () => {
//   const navigate = useNavigate();
//   const { state: dish } = useLocation();

//   if (!dish) {
//     return (
//       <div className="text-white text-center py-20">
//         <h1 className="text-2xl font-bold">Dish not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Banner Section */}
//       <div className="relative w-full min-h-screen">
//         <div className="absolute inset-0">
//           <img
//             src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
//             alt="Dish Banner"
//             className="w-full h-full object-cover opacity-85"
//           />
//         </div>
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
//           <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center">
//             {dish.name.toUpperCase()}
//           </h2>
//         </div>
//       </div>

//       {/* About Dish Section */}
//       <div className="bg-customBlack py-12 px-4 font-merienda">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
//           {/* Left Image Section */}
//           <div className="flex justify-center relative">
//             <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
//               <div className="overflow-hidden group rounded-xl">
//                 <img
//                   src={dish.img}
//                   alt={dish.name}
//                   className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Info Card on Image */}
//               <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[180px] md:w-[180px] lg:w-[200px] shadow-lg">
//                 <p className="font-bold text-lg mb-2 hidden lg:block md:block">{dish.name}</p>
//                 <div className="lg:flex hidden text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <TiStar key={i} className="text-xl" />
//                   ))}
//                 </div>
//                 <ul className="space-y-1">
//                   {(dish.ingredients || []).map((item, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm font-semibold">
//                       <span className="bg-white p-[4px] rounded-full">
//                         <GiCheckMark className="text-customColor text-xs" />
//                       </span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Right Text Section */}
//           <div className="text-center lg:text-left px-2 sm:px-4">
//             <p className="text-sm uppercase font-bold text-customColor tracking-widest">
//               Dish
//             </p>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mt-1">
//               about the <span className="text-customColor">dish</span>
//             </h1>
//             <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
//               {dish.desc || dish.description}
//             </p>
//             <p className="mt-4 text-lg font-bold text-customColor">
//               ${dish.price}
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-black">
//                   Place Order
//                 </span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
//                 <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//               <button
//                 onClick={() => navigate("/menu")}
//                 className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-white">
//                   Explore Menu
//                 </span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
//                 <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { GiCheckMark } from "react-icons/gi";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { TiStar } from "react-icons/ti";
// import axios from "axios";

// const MenuItemDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [dish, setDish] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMenuDetail = async () => {
//     try {
//       const res = await axios.get(`https://restaurant-backend-wwjm.onrender.com/api/v1/menu/${id}`);
//       setDish(res.data?.menu);
//     } catch (error) {
//       console.error("Error fetching menu detail:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuDetail();
//   }, [id]);

//   if (loading) {
//     return <div className="text-white text-center py-20">Loading...</div>;
//   }

//   if (!dish) {
//     return <div className="text-white text-center py-20">Dish not found</div>;
//   }

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
//         <div className="absolute inset-0">
//           <img
//             src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
//             alt="Banner"
//             className="w-full h-full object-cover opacity-85"
//           />
//         </div>
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
//           <h2 className="text-4xl font-bold text-white text-center uppercase">
//             {dish.name}
//           </h2>
//         </div>
//       </div>

//       {/* Detail Section */}
//       <div className="bg-customBlack py-12 px-4 font-merienda">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
//           {/* Image */}
//           <div className="flex justify-center">
//             <div className="relative w-72 md:w-96">
//               <div className="overflow-hidden group rounded-xl">
//                 <img
//                   src={dish.img}
//                   alt={dish.name}
//                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Overlay Info */}
//               <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[200px] shadow-lg">
//                 <p className="font-bold text-lg mb-2">{dish.name}</p>
//                 <div className="flex text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <TiStar key={i} className="text-xl" />
//                   ))}
//                 </div>
//                 {dish.ingredients && (
//                   <ul className="space-y-1">
//                     {dish.ingredients.map((item, i) => (
//                       <li key={i} className="flex items-center gap-2 text-sm font-semibold">
//                         <span className="bg-white p-[4px] rounded-full">
//                           <GiCheckMark className="text-customColor text-xs" />
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Info Text */}
//           <div className="text-center lg:text-left px-2 sm:px-4">
//             <p className="text-sm uppercase font-bold text-customColor tracking-widest">
//               Dish Info
//             </p>
//             <h1 className="text-3xl font-bold uppercase mt-2">
//               About the <span className="text-customColor">dish</span>
//             </h1>
//             <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto lg:mx-0">
//               {dish.desc}
//             </p>
//             <p className="mt-4 text-lg font-semibold text-customColor">
//               Price: ${dish.price}
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//               <button
//                 onClick={() => navigate("/cart")}
//                 className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-black">Place Order</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
//                 <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//               <button
//                 onClick={() => navigate("/menu")}
//                 className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-white">Back to Menu</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
//                 <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;



// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { GiCheckMark } from "react-icons/gi";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { TiStar } from "react-icons/ti";
// import axios from "axios";

// const MenuItemDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [dish, setDish] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMenuDetail = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/v1/menu/${id}`);
//       setDish(res.data?.menu);
//     } catch (error) {
//       console.error("Error fetching menu detail:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuDetail();
//   }, [id]);

//   const handlePlaceOrder = () => {
//     // You can add item to cart here and navigate
//     navigate("/cart");
//   };

//   if (loading) {
//     return <div className="text-white text-center py-20">Loading...</div>;
//   }

//   if (!dish) {
//     return <div className="text-white text-center py-20">Dish not found</div>;
//   }

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
//         <div className="absolute inset-0">
//           <img
//             src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
//             alt="Banner"
//             className="w-full h-full object-cover opacity-85"
//           />
//         </div>
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
//           <h2 className="text-4xl font-bold text-white text-center uppercase">
//             {dish.name || "Menu Item"}
//           </h2>
//         </div>
//       </div>

//       {/* Dish Details */}
//       <div className="bg-customBlack py-12 px-4 font-merienda">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
//           {/* Image + Overlay */}
//           <div className="flex justify-center">
//             <div className="relative w-72 md:w-96">
//               <div className="overflow-hidden group rounded-xl">
//                 <img
//                   src={dish.img}
//                   alt={dish.name}
//                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Floating Info Card */}
//               <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[200px] shadow-lg">
//                 <p className="font-bold text-lg mb-2">{dish.name}</p>
//                 <div className="flex text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <TiStar key={i} className="text-xl" />
//                   ))}
//                 </div>
//                 {dish.ingredients?.length > 0 && (
//                   <ul className="space-y-1">
//                     {dish.ingredients.map((item, i) => (
//                       <li key={i} className="flex items-center gap-2 text-sm font-semibold">
//                         <span className="bg-white p-[4px] rounded-full">
//                           <GiCheckMark className="text-customColor text-xs" />
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Description Text */}
//           <div className="text-center lg:text-left px-2 sm:px-4">
//             <p className="text-sm uppercase font-bold text-customColor tracking-widest">
//               Dish Info
//             </p>
//             <h1 className="text-3xl font-bold uppercase mt-2">
//               About the <span className="text-customColor">dish</span>
//             </h1>
//             <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto lg:mx-0">
//               {dish.desc}
//             </p>
//             <p className="mt-4 text-lg font-semibold text-customColor">
//               Price: ${dish.price}
//             </p>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//               <button
//                 onClick={handlePlaceOrder}
//                 className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-black">Place Order</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
//                 <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//               <button
//                 onClick={() => navigate("/menu")}
//                 className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-white">Back to Menu</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
//                 <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { GiCheckMark } from "react-icons/gi";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import { TiStar } from "react-icons/ti";

// const MenuItemDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Simulated logged-in user ID (replace with your auth logic)
//   const loggedInUserId = "YOUR_LOGGED_IN_USER_ID";

//   const [dish, setDish] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // For order form inputs
//   const [orderType, setOrderType] = useState("Takeaway");
//   const [quantity, setQuantity] = useState(1);
//   const [customization, setCustomization] = useState("");

//   // Fetch menu item detail
//   const fetchMenuDetail = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/v1/menu/${id}`);
//       setDish(res.data?.menu);
//     } catch (error) {
//       console.error("Error fetching menu detail:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMenuDetail();
//   }, [id]);

//   // Place order handler
//   const handlePlaceOrder = async () => {
//     if (!loggedInUserId) {
//       alert("Please login to place an order.");
//       navigate("/login");
//       return;
//     }

//     if (quantity < 1) {
//       alert("Quantity must be at least 1.");
//       return;
//     }

//     const orderPayload = {
//       customer_id: loggedInUserId,
//       menuItems: [
//         {
//           menu_id: id,
//           quantity,
//           customization: customization.trim() || undefined,
//         },
//       ],
//       orderType,
//     };
//     console.log("Order Payload:", orderPayload);


//     // Add tableNumber or address based on orderType if needed
//     if (orderType === "Dine-in") {
//       orderPayload.tableNumber = "1"; // You may add input to get this from user
//     }
//     if (orderType === "Delivery") {
//       orderPayload.address = "123 Delivery Address"; // Replace with user input
//     }

//     try {
//       const res = await axios.post("http://localhost:5000/api/v1/place-orders", orderPayload);
//       alert("Order placed successfully!");
//       navigate("/cart");
//     } catch (error) {
//       console.error("Failed to place order:", error.response?.data || error.message);
//       alert("Failed to place order, please try again.");
//     }
//   };

//   if (loading) {
//     return <div className="text-white text-center py-20">Loading...</div>;
//   }

//   if (!dish) {
//     return <div className="text-white text-center py-20">Dish not found</div>;
//   }

//   return (
//     <div>
//       {/* Banner */}
//       <div className="relative w-full min-h-[300px] sm:min-h-[400px]">
//         <div className="absolute inset-0">
//           <img
//             src="https://html.awaikenthemes.com/spicyhunt/images/page-header-bg.jpg"
//             alt="Banner"
//             className="w-full h-full object-cover opacity-85"
//           />
//         </div>
//         <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70">
//           <h2 className="text-4xl font-bold text-white text-center uppercase">
//             {dish.name || "Menu Item"}
//           </h2>
//         </div>
//       </div>

//       {/* Dish Details */}
//       <div className="bg-customBlack py-12 px-4 font-merienda">
//         <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
//           {/* Image + Overlay */}
//           <div className="flex justify-center">
//             <div className="relative w-72 md:w-96">
//               <div className="overflow-hidden group rounded-xl">
//                 <img
//                   src={dish.img}
//                   alt={dish.name}
//                   className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Floating Info Card */}
//               <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[200px] shadow-lg">
//                 <p className="font-bold text-lg mb-2">{dish.name}</p>
//                 <div className="flex text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <TiStar key={i} className="text-xl" />
//                   ))}
//                 </div>
//                 {dish.ingredients?.length > 0 && (
//                   <ul className="space-y-1">
//                     {dish.ingredients.map((item, i) => (
//                       <li key={i} className="flex items-center gap-2 text-sm font-semibold">
//                         <span className="bg-white p-[4px] rounded-full">
//                           <GiCheckMark className="text-customColor text-xs" />
//                         </span>
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Description & Order Form */}
//           <div className="text-center lg:text-left px-2 sm:px-4">
//             <p className="text-sm uppercase font-bold text-customColor tracking-widest">
//               Dish Info
//             </p>
//             <h1 className="text-3xl font-bold uppercase mt-2">
//               About the <span className="text-customColor">dish</span>
//             </h1>
//             <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto lg:mx-0">
//               {dish.desc}
//             </p>
//             <p className="mt-4 text-lg font-semibold text-customColor">
//               Price: ${dish.price}
//             </p>

//             {/* Order Form */}
//             <div className="mt-6 space-y-4 max-w-xs mx-auto lg:mx-0 text-left">
//               <label className="block text-white font-semibold mb-1">
//                 Order Type:
//               </label>
//               <select
//                 value={orderType}
//                 onChange={(e) => setOrderType(e.target.value)}
//                 className="w-full px-3 py-2 rounded-md text-black"
//               >
//                 <option value="Dine-in">Dine-in</option>
//                 <option value="Takeaway">Takeaway</option>
//                 <option value="Delivery">Delivery</option>
//               </select>

//               <label className="block text-white font-semibold mb-1">
//                 Quantity:
//               </label>
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="w-full px-3 py-2 rounded-md text-black"
//               />

//               <label className="block text-white font-semibold mb-1">
//                 Customization (optional):
//               </label>
//               <textarea
//                 value={customization}
//                 onChange={(e) => setCustomization(e.target.value)}
//                 placeholder="Add notes or preferences"
//                 className="w-full px-3 py-2 rounded-md text-black"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
//               <button
//                 onClick={handlePlaceOrder}
//                 className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-black">Place Order</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
//                 <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//               <button
//                 onClick={() => navigate("/menu")}
//                 className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
//               >
//                 <span className="relative z-10 group-hover:text-white">Back to Menu</span>
//                 <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-white" />
//                 <span className="absolute inset-0 bg-customColor w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;


// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import  {AuthContext } from "../context/AuthContext";

// const MenuItemDetail = () => {
//   const { user } = useContext(AuthContext);
//   const loggedInUserId = user?._id;

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [menuItem, setMenuItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [customization, setCustomization] = useState("");
//   const [orderType, setOrderType] = useState("Dine-in");

//   useEffect(() => {
//     // Fetch single menu item from backend
//     const fetchMenuItem = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/menu/${id}`);
//         setMenuItem(response.data.menu);
//       } catch (error) {
//         console.error("Failed to fetch menu item", error);
//       }
//     };

//     fetchMenuItem();
//   }, [id]);

//   const handlePlaceOrder = async () => {
//     if (!loggedInUserId) {
//       alert("Please login to place an order.");
//       navigate("/login");
//       return;
//     }

//     if (quantity < 1) {
//       alert("Quantity must be at least 1.");
//       return;
//     }

//     const orderPayload = {
//       customer_id: loggedInUserId,
//       menuItems: [
//         {
//           menu_id: id,
//           quantity,
//           customization: customization.trim() || undefined,
//         },
//       ],
//       orderType,
//     };

//     if (orderType === "Dine-in") {
//       orderPayload.tableNumber = "1"; // You can replace with user input later
//     }

//     if (orderType === "Delivery") {
//       orderPayload.address = "123 Delivery Address"; // Replace with user input later
//     }

//     try {
//       await axios.post("http://localhost:5000/api/v1/place-orders", orderPayload);
//       alert("Order placed successfully!");
//       navigate("/cart");
//     } catch (error) {
//       console.error("Failed to place order:", error.response?.data || error.message);
//       alert("Failed to place order, please try again.");
//     }
//   };

//   if (!menuItem) {
//     return <div>Loading menu item...</div>;
//   }

//   return (
//     <div>
//       <h2>{menuItem.name}</h2>
//       <p>{menuItem.desc}</p>
//       <p>Price: ${menuItem.price}</p>

//       <label>
//         Quantity:
//         <input
//           type="number"
//           min={1}
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//         />
//       </label>

//       <label>
//         Customization (optional):
//         <input
//           type="text"
//           value={customization}
//           onChange={(e) => setCustomization(e.target.value)}
//           placeholder="Add any special instructions"
//         />
//       </label>

//       <label>
//         Order Type:
//         <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
//           <option value="Dine-in">Dine-in</option>
//           <option value="Takeaway">Takeaway</option>
//           <option value="Delivery">Delivery</option>
//         </select>
//       </label>

//       <button onClick={handlePlaceOrder}>Place Order</button>
//     </div>
//   );
// };

// export default MenuItemDetail;


// import React, { useContext, useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";
// import {AuthContext} from "../context/AuthContext";

// const MenuItemDetail = () => {
//   const { user } = useContext(AuthContext);
//   const loggedInUserId = user?._id;

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [menuItem, setMenuItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [customization, setCustomization] = useState("");
//   const [orderType, setOrderType] = useState("Dine-in");

//   useEffect(() => {
//     const fetchMenuItem = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/v1/menu/${id}`);
//         setMenuItem(response.data.menu);
//       } catch (error) {
//         console.error("Failed to fetch menu item", error);
//       }
//     };

//     fetchMenuItem();
//   }, [id]);

//   const handlePlaceOrder = async () => {
//     if (!loggedInUserId) {
//       alert("Please login to place an order.");
//       navigate("/login");
//       return;
//     }

//     if (quantity < 1) {
//       alert("Quantity must be at least 1.");
//       return;
//     }

//     const orderPayload = {
//       customer_id: loggedInUserId,
//       menuItems: [
//         {
//           menu_id: id,
//           quantity,
//           customization: customization.trim() || undefined,
//         },
//       ],
//       orderType,
//     };

//     if (orderType === "Dine-in") {
//       orderPayload.tableNumber = "1";
//     } else if (orderType === "Delivery") {
//       orderPayload.address = "123 Delivery Address";
//     }

//     try {
//       await axios.post("http://localhost:5000/api/v1/place-orders", orderPayload);
//       alert("Order placed successfully!");
//       navigate("/cart");
//     } catch (error) {
//       console.error("Failed to place order:", error.response?.data || error.message);
//       alert("Failed to place order, please try again.");
//     }
//   };

//   if (!menuItem) {
//     return <div className="text-white text-center py-10">Loading menu item...</div>;
//   }

//   return (
//     <div className="bg-customBlack min-h-screen py-10 px-5 flex justify-center font-Merienda">
//       <div className="bg-white max-w-2xl w-full rounded-2xl p-8 shadow-lg">
//         <h2 className="text-3xl font-bold text-customColor mb-4">{menuItem.name}</h2>
//         <p className="text-gray-700 mb-2">{menuItem.desc}</p>
//         <p className="text-lg font-semibold text-gray-900 mb-6">Price: ${menuItem.price}</p>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
//           <input
//             type="number"
//             min={1}
//             value={quantity}
//             onChange={(e) => setQuantity(Number(e.target.value))}
//             className="w-full border border-gray-300 p-3 rounded-lg"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Customization (optional):
//           </label>
//           <input
//             type="text"
//             value={customization}
//             onChange={(e) => setCustomization(e.target.value)}
//             className="w-full border border-gray-300 p-3 rounded-lg"
//             placeholder="Add any special instructions"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Order Type:</label>
//           <select
//             value={orderType}
//             onChange={(e) => setOrderType(e.target.value)}
//             className="w-full border border-gray-300 p-3 rounded-lg"
//           >
//             <option value="Dine-in">Dine-in</option>
//             <option value="Takeaway">Takeaway</option>
//             <option value="Delivery">Delivery</option>
//           </select>
//         </div>

//         <button
//           onClick={handlePlaceOrder}
//           className="w-full bg-customColor text-white py-3 rounded-full font-bold hover:bg-black transition-all duration-300"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MenuItemDetail;


import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { GiCheckMark } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TiStar } from "react-icons/ti";
import { AuthContext } from "../context/AuthContext";

const MenuItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const loggedInUserId = user?._id;

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderType, setOrderType] = useState("Takeaway");
  const [quantity, setQuantity] = useState(1);
  const [customization, setCustomization] = useState("");

  const [category, setCategory] = useState([]);
  const [tables, setTables] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");



  useEffect(() => {
    const fetchMenuDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/menu/${id}`);
        setDish(res.data?.menu);
      } catch (error) {
        console.error("Error fetching menu detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenuDetail();
  }, [id]);

  

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const resp = await axios.get("http://localhost:5000/api/v1/get-all-category");
        console.log("Fetched categories:", resp.data);
        if (resp.data && resp.data.data) {
          setCategory(resp.data.data);
        } else {
          setCategory([]);
        }
        
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);
  


  useEffect(() => {
    const fetchAllTable = async () => {
      try {
        const resp = await axios.get("http://localhost:5000/api/v1/get-all-table");
        console.log("Tables:", resp.data.data);
        if (resp.data.success === true) {
          setTables(resp.data.data);
          const available = resp.data.data.filter((table) => table.isReserved === false);
          setAvailableTables(available);
        } else {
          setTables([]);
          setAvailableTables([]);
        }
      } catch (error) {
        console.error("Error fetching tables:", error);
      }
    };
    fetchAllTable();
  }, []);


  const handlePlaceOrder = async () => {
    if (!loggedInUserId) {
      alert("Please login to place an order.");
      navigate("/login");
      return;
    }

    if (quantity < 1) {
      alert("Quantity must be at least 1.");
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
      orderType,
   

    };

    if (orderType === "Dine-in") {
      if (!selectedTable) {
        alert("Please select a table.");
        return;
      }
      orderPayload.tableNumber = selectedTable;
    }
    
    if (orderType === "Delivery") {
      if (!deliveryAddress.trim()) {
        alert("Please enter a delivery address.");
        return;
      }
      orderPayload.address = deliveryAddress;
    }
    

    try {
      await axios.post("http://localhost:5000/api/v1/place-orders", orderPayload);
      alert("Order placed successfully!");
      navigate("/cart");
    } catch (error) {
      console.error("Failed to place order:", error.response?.data || error.message);
      alert("Failed to place order, please try again.");
    }
  };

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  if (!dish) {
    return <div className="text-white text-center py-20">Dish not found</div>;
  }

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
      <div className="bg-customBlack py-12 px-4 font-merienda">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-white">
          {/* Image + Overlay */}
          <div className="flex justify-center">
            <div className="relative w-72 md:w-96">
              <div className="overflow-hidden group rounded-xl">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 transform translate-x-6 -translate-y-6 rounded-lg bg-customColor p-6 w-[200px] shadow-lg">
                <p className="font-bold text-lg mb-2">{dish.name}</p>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <TiStar key={i} className="text-xl" />
                  ))}
                </div>
                {dish.ingredients?.length > 0 && (
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
                )}
              </div>
            </div>
          </div>

          {/* Description & Order Form */}
          <div className="text-center lg:text-left px-2 sm:px-4">
            <p className="text-sm uppercase font-bold text-customColor tracking-widest">Dish Info</p>
            <h1 className="text-3xl font-bold uppercase mt-2">
              About the <span className="text-customColor">dish</span>
            </h1>
            <p className="mt-4 text-gray-300 text-base max-w-xl mx-auto lg:mx-0">
              {dish.desc}
            </p>
            <p className="mt-4 text-lg font-semibold text-customColor">
              Price: ${dish.price}
            </p>

            {/* Order Form */}
            <div className="mt-6 space-y-4 max-w-xs mx-auto lg:mx-0 text-left">
              <label className="block text-white font-semibold mb-1">Order Type:</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className="w-full px-3 py-2 rounded-md text-black"
              >
                <option value="Dine-in">Dine-in</option>
                <option value="Takeaway">Takeaway</option>
                <option value="Delivery">Delivery</option>
              </select>

              <label className="block text-white font-semibold mb-1">Quantity:</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-md text-black"
              />
{/* 
              {category.length > 0 && (
                <div className="mt-4">
                  <label className="block text-white font-semibold mb-1">Select Category:</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-md text-black"
                  >
                    <option value="">-- Select Category --</option>
                    {category.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              )} */}

              {orderType === "Dine-in" && category.length > 0 && (
                <div className="mt-4">
                  <label className="block text-white font-semibold mb-1">Select Category:</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 rounded-md text-black"
                  >
                    <option value="">-- Select Category --</option>
                    {category.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}


               {orderType === "Dine-in" && (
                <>
                  <label className="block text-white font-semibold mb-1">Select Table:</label>
                  <select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="w-full px-3 py-2 rounded-md text-black"
                  >
                    <option value="">-- Select Available Table --</option>
                    {availableTables.map((table) => (
                      <option key={table._id} value={table.tableNumber}>
                        {table.tableNumber} - {table.category}
                      </option>
                    ))}
                  </select>
                </>
              )} 

              {orderType === "Delivery" && (
                <div className="mt-4">
                  <label className="block text-white font-semibold mb-1">Delivery Address:</label>
                  <textarea
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Enter delivery address"
                    className="w-full px-3 py-2 rounded-md text-black"
                  />
                </div>
              )}

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
                onClick={handlePlaceOrder}
                className="relative overflow-hidden bg-customColor text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
              >
                <span className="relative z-10 group-hover:text-black">Place Order</span>
                <IoIosArrowRoundForward className="relative z-10 text-2xl group-hover:text-black" />
                <span className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full" />
              </button>
              <button
                onClick={() => navigate("/menu")}
                className="relative overflow-hidden bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 group"
              >
                <span className="relative z-10 group-hover:text-white">Back to Menu</span>
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





