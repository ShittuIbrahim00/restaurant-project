// import React, { useState, useEffect }  from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";
// import { Link } from "react-router-dom";

// // Import your dish and category images here (same as before)
// import dishImgOne from "../assets/special-menu-img-1.jpg";
// import dishImgTwo from "../assets/special-menu-img-2.jpg";
// import dishImgThree from "../assets/special-menu-img-3.jpg";
// import dishImgFour from "../assets/special-menu-img-4.jpg";
// import dishImgFive from "../assets/special-menu-img-5.jpg";
// import dishImgSix from "../assets/special-menu-img-6.jpg";

// import startImgOne from "../assets/starters-img-1.png";
// import startImgTwo from "../assets/starters-img-2.png";
// import startImgThree from "../assets/starters-img-3.png";
// import startImgFour from "../assets/starters-img-4.png";
// import startImgFive from "../assets/starters-img-5.png";
// import startImgSix from "../assets/starters-img-6.png";

// import vegetablesImgOne from "../assets/vegetables-img-1.png";
// import vegetablesImgTwo from "../assets/vegetables-img-2.png";
// import vegetablesImgThree from "../assets/vegetables-img-3.png";
// import vegetablesImgFour from "../assets/vegetables-img-4.png";
// import vegetablesImgFive from "../assets/vegetables-img-5.png";
// import vegetablesImgSix from "../assets/vegetables-img-6.png";

// import seafood1 from "../assets/seafood-img-1.png";
// import seafood2 from "../assets/seafood-img-2.png";
// import seafood3 from "../assets/seafood-img-3.png";
// import seafood4 from "../assets/seafood-img-4.png";
// import seafood5 from "../assets/seafood-img-5.png";
// import seafood6 from "../assets/seafood-img-6.png";

// import desserts1 from "../assets/desserts-img-1.png";
// import desserts2 from "../assets/desserts-img-2.png";
// import desserts3 from "../assets/desserts-img-3.png";
// import desserts4 from "../assets/desserts-img-4.png";
// import desserts5 from "../assets/desserts-img-5.png";
// import desserts6 from "../assets/desserts-img-6.png";

// import beverages1 from "../assets/beverages-img-1.png";
// import beverages2 from "../assets/beverages-img-2.png";
// import beverages3 from "../assets/beverages-img-3.png";
// import beverages4 from "../assets/beverages-img-4.png";
// import beverages5 from "../assets/beverages-img-5.png";
// import beverages6 from "../assets/beverages-img-6.png";

// import salads1 from "../assets/salads-img-1.png";
// import salads2 from "../assets/salads-img-2.png";
// import salads4 from "../assets/salads-img-4.png";
// import salads5 from "../assets/salads-img-5.png";
// import salads6 from "../assets/salads-img-6.png";




// // ✅ Reusable section component defined inline
// const MenuSection = ({ title, bgColor, items }) => (
//     <div className={`${bgColor} py-10`}>
//       <div className="flex flex-col justify-center items-center">
//         <div className="flex items-center gap-3 mt-4">
//           <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//           <h1 className="text-sm leading-9 font-bold uppercase text-customColor">
//             menu & pricing
//           </h1>
//         </div>
//         <div className="text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug">
//           {title}
//         </div>
//       </div>
//       <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:w-[90%] lg:w-[88%] mx-auto text-white">
//         <div className="col-span-3 sm:grid-cols-1">
//           <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
//             {items.map((dish) => (
//               <Link
//                 to={`/menu/${dish.id}`} // Unique per dish
//                 key={dish.id}
//                 className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl hover:bg-customColor/10 transition"
//               >
//                 <img
//                   src={dish.img}
//                   alt={dish.title}
//                   className="w-[100px] h-[100px] object-contain rounded-full"
//                 />
//                 <div className="flex flex-col gap-2 text-white w-full">
//                   <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
//                     <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
//                       {dish.title}
//                     </h1>
//                     <div className="hidden sm:block flex-1 border border-gray-600"></div>
//                     <p className="flex justify-center py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full mx-auto sm:mx-0">
//                       {dish.price}
//                     </p>
//                   </div>
//                   <p className="leading-relaxed text-gray-400 text-center sm:text-left">
//                     {dish.descp}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
// );

// // ✅ Data Arrays (unchanged from your original code)
// const starters = [
//   {
//     id: 1,
//     img: startImgOne,
//     title: "Spring rolls",
//     price: "$16.00",
//     descp: "Crispy rolls filled with vegetables, served with dipping sauce.",
//   },
//   {
//     id: 2,
//     img: startImgTwo,
//     title: "Aloo tikki",
//     price: "$12.00",
//     descp: "Golden potato patties served with chutney.",
//   },
//   {
//     id: 3,
//     img: startImgThree,
//     title: "Paneer tikka",
//     price: "$26.00",
//     descp: "Grilled paneer cubes, spiced to perfection.",
//   },
//   {
//     id: 4,
//     img: startImgFour,
//     title: "Hara kebab",
//     price: "$20.00",
//     descp: "Green vegetable and herb kebabs, grilled to perfection.",
//   },
//   {
//     id: 5,
//     img: startImgFive,
//     title: "Chili mushrooms",
//     price: "$10.00",
//     descp: "Spicy, crispy mushrooms with a tangy twist.",
//   },
//   {
//     id: 6,
//     img: startImgSix,
//     title: "Veg Pakoras",
//     price: "$22.00",
//     descp: "Crispy vegetable fritters with a dip.",
//   },
// ];

// const vegetables = [
//   {
//     id: 1,
//     img: vegetablesImgOne,
//     title: "Veg biryani",
//     price: "$06.00",
//     descp: "Octopus Fennel pairs tender octopus with fresh fennel.",
//   },
//   {
//     id: 2,
//     img: vegetablesImgTwo,
//     title: "Baingan bharta",
//     price: "$05.00",
//     descp: "Crispy, freshly made chips paired with rich, flavorful dips.",
//   },
//   {
//     id: 3,
//     img: vegetablesImgThree,
//     title: "Paneer Butter",
//     price: "$06.00",
//     descp: "Corn Tostada offers a crunchy base with tasty toppings.",
//   },
//   {
//     id: 4,
//     img: vegetablesImgFour,
//     title: "Palak Paneer",
//     price: "$08.00",
//     descp: "Zesty Rolls are filled with vibrant flavors wrapped in a crispy.",
//   },
//   {
//     id: 5,
//     img: vegetablesImgFive,
//     title: "Aloo gobi",
//     price: "$10.00",
//     descp:
//       "Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.",
//   },
//   {
//     id: 6,
//     img: vegetablesImgSix,
//     title: "Veg. curry",
//     price: "$08.00",
//     descp: "Fire Grill offers perfectly charred, smoky-flavored dishes.",
//   },
// ];

// const seafood = [
//   {
//     id: 1,
//     img: seafood1,
//     title: "grilled salmon",
//     price: "$12.99",
//     descp: "Octopus Fennel pairs tender octopus with fresh fennel.",
//   },
//   {
//     id: 2,
//     img: seafood2,
//     title: "calamari rings",
//     price: "$05.00",
//     descp: "Crispy, freshly made chips paired with rich, flavorful dips.",
//   },
//   {
//     id: 3,
//     img: seafood3,
//     title: "shrimp masala",
//     price: "$09.10",
//     descp: "Corn Tostada offers a crunchy base with tasty toppings.",
//   },
//   {
//     id: 4,
//     img: seafood4,
//     title: "lobster roll",
//     price: "$18.99",
//     descp: "Zesty Rolls are filled with vibrant flavors wrapped in a crispy.",
//   },
//   {
//     id: 5,
//     img: seafood5,
//     title: "fish tacos",
//     price: "$12.10",
//     descp:
//       "Spicy Bites features crispy, flavorful snacks with a bold, spicy kick.",
//   },
//   {
//     id: 6,
//     img: seafood6,
//     title: "fish curry",
//     price: "$18.50",
//     descp: "Fire Grill offers perfectly charred, smoky-flavored dishes.",
//   },
// ];

// const desserts = [
//   {
//     id: 1,
//     img: desserts1,
//     title: "chocolate lava",
//     price: "$10.10",
//     descp: "Molten chocolate cake served warm with ice cream.",
//   },
//   {
//     id: 2,
//     img: desserts2,
//     title: "gulab jamun",
//     price: "$06.00",
//     descp: "Soft milk-solid balls in rose-flavored sugar syrup.",
//   },
//   {
//     id: 3,
//     img: desserts3,
//     title: "cheesecake",
//     price: "$12.00",
//     descp: "Creamy cheesecake with a buttery crust.",
//   },
//   {
//     id: 4,
//     img: desserts4,
//     title: "kheer",
//     price: "$08.50",
//     descp: "Creamy rice pudding with saffron and nuts.",
//   },
//   {
//     id: 5,
//     img: desserts5,
//     title: "rasmalai",
//     price: "$07.00",
//     descp: "Soft paneer balls in saffron-flavored milk.",
//   },
//   {
//     id: 6,
//     img: desserts6,
//     title: "ice cream",
//     price: "$05.00",
//     descp: "Assorted flavors of creamy ice cream.",
//   },
// ];

// const beverages = [
//   {
//     id: 1,
//     img: beverages1,
//     title: "mango lassi",
//     price: "$04.00",
//     descp: "Sweet mango yogurt drink.",
//   },
//   {
//     id: 2,
//     img: beverages2,
//     title: "masala chai",
//     price: "$03.00",
//     descp: "Spiced Indian tea with milk.",
//   },
//   {
//     id: 3,
//     img: beverages3,
//     title: "cold coffee",
//     price: "$04.50",
//     descp: "Iced coffee with cream and sugar.",
//   },
//   {
//     id: 4,
//     img: beverages4,
//     title: "lemonade",
//     price: "$02.99",
//     descp: "Refreshing homemade lemonade.",
//   },
//   {
//     id: 5,
//     img: beverages5,
//     title: "soda",
//     price: "$01.99",
//     descp: "Assorted soft drinks.",
//   },
//   {
//     id: 6,
//     img: beverages6,
//     title: "mocktail",
//     price: "$05.99",
//     descp: "Fruity, non-alcoholic beverage.",
//   },
// ];

// const salads = [
//   {
//     id: 1,
//     img: salads1,
//     title: "caesar salad",
//     price: "$06.00",
//     descp: "Classic Caesar with lettuce, croutons & parmesan.",
//   },
//   {
//     id: 2,
//     img: salads2,
//     title: "greek salad",
//     price: "$06.50",
//     descp: "Tomatoes, cucumbers, olives & feta cheese.",
//   },
//   {
//     id: 3,
//     img: salads4,
//     title: "fruit salad",
//     price: "$05.50",
//     descp: "Fresh seasonal fruits with mint.",
//   },
//   {
//     id: 4,
//     img: salads5,
//     title: "sprout salad",
//     price: "$04.00",
//     descp: "Healthy sprouts with lime dressing.",
//   },
//   {
//     id: 5,
//     img: salads6,
//     title: "corn salad",
//     price: "$04.50",
//     descp: "Spiced corn with bell peppers and onions.",
//   },
// ];

// const data = [
//   {
//     id: 1,
//     img: dishImgOne,
//     title: "starter",
//   },
//   {
//     id: 2,
//     img: dishImgTwo,
//     title: "vegetables",
//   },
//   {
//     id: 3,
//     img: dishImgThree,
//     title: "seafood",
//   },
//   {
//     id: 4,
//     img: dishImgFour,
//     title: "desserts",
//   },
//   {
//     id: 5,
//     img: dishImgFive,
//     title: "beverages",
//   },
//   {
//     id: 6,
//     img: dishImgSix,
//     title: "salads & soups",
//   },
// ];
// // ✅ Final Exported Component
// const Menu = () => {

//     const [categories, setCategories] = useState([]);
//     const [menus, setMenus] = useState([]);

//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//         );
//         setCategories(res.data?.categories || []);
//         console.log("Fetched categories", res.data);
//       } catch (err) {
//         console.error("Error fetching categories", err);
//       }
//     };

//     const fetchMenus = async () => {
//       try {
//         const res = await axios.get(
//           "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu"
//         );
//         setMenus(res.data?.menus || []);
//         console.log("Fetched menus", res.data);
//       } catch (err) {
//         console.error("Error fetching menus", err);
//       }
//     };

//     useEffect(() => {
//       fetchCategories();
//       fetchMenus();
//     }, []);

//   return (
//     <>
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">
//                 Home
//               </p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories?.map((cat) => (
//             <div key={cat._id} className="py-4 flex flex-col items-center gap-6">
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt=""
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className="lg:text-xl capitalize text-center">
//                 {cat.name}
//               </h1>
//             </div>
//           ))}
//         </div>
//       </div>
//       <MenuSection title="Starters" bgColor="bg-customGray" items={starters} />
//       <MenuSection
//         title="Vegetables"
//         bgColor="bg-customBlack"
//         items={vegetables}
//       />
//       <MenuSection title="Seafood" bgColor="bg-customGray" items={seafood} />
//       <MenuSection title="Desserts" bgColor="bg-customBlack" items={desserts} />
//       <MenuSection
//         title="Beverages"
//         bgColor="bg-customGray"
//         items={beverages}
//       />
//       <MenuSection
//         title="Salads & Soups"
//         bgColor="bg-customBlack"
//         items={salads}
//       />
//     </>
//   );
// };

// export default Menu;



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function Menu() {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//       console.log("Fetched categories", res.data);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   const fetchMenus = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu"
//       );
//       setMenus(res.data?.menus || []);
//       console.log("Fetched menus", res.data);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   return (
//     <div>
//       {categories.map((category) => {
//         const filteredMenus = menus.filter(
//           (menu) => menu.category?._id === category._id
//         );

//         const menuItems = filteredMenus.map((menu) => ({
//           id: menu._id,
//           img: menu.image?.url || "",
//           title: menu.name,
//           price: `$${menu.price.toFixed(2)}`,
//           desc: menu.desc,
//         }));

//         const bgColor =
//           category.name.toLowerCase().includes("vegetable") ||
//           category.name.toLowerCase().includes("dessert")
//             ? "bg-customGray"
//             : "bg-customBlack";

//         return (
//           <section key={category._id} className={`${bgColor} py-10`}>
//             <div className="container mx-auto px-4">
//               <h2 className="text-3xl font-bold mb-6 text-white">
//                 {category.name}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {menuItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="bg-white text-black p-4 rounded shadow"
//                   >
//                     <img
//                       src={item.img}
//                       alt={item.title}
//                       className="w-full h-40 object-cover rounded mb-4"
//                     />
//                     <h3 className="text-xl font-semibold">{item.title}</h3>
//                     <p className="text-sm mt-1">{item.desc}</p>
//                     <p className="font-bold mt-2">{item.price}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// }




// import React, { useState, useEffect }  from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// const [filteredMenus, setFilteredMenus] = useState([]);
// import axios from "axios";
// import { Link } from "react-router-dom";

// // ✅ Final Exported Component
// const Menu = () => {

//     const [categories, setCategories] = useState([]);
//     const [menus, setMenus] = useState([]);
//     const [filteredMenus, setFilteredMenus] = useState([]);

//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//         );
//         setCategories(res.data?.categories || []);
//         console.log("Fetched categories", res.data);
//       } catch (err) {
//         console.error("Error fetching categories", err);
//       }
//     };

//     const fetchMenus = async () => {
//       try {
//         const res = await axios.get(
//           "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu"
//         );
//         setMenus(res.data?.menus || []);
//         console.log("Fetched menus", res.data);
//       } catch (err) {
//         console.error("Error fetching menus", err);
//       }
//     };

//     useEffect(() => {
//       fetchCategories();
//       fetchMenus();
//     }, []);

//   return (
//     <>
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">
//                 Home
//               </p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories?.map((cat) => (
//             <div key={cat._id} className="py-4 flex flex-col items-center gap-6">
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt=""
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className="lg:text-xl capitalize text-center">
//                 {cat.name}
//               </h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2 className="text-xl font-semibold mb-2">Menu Items</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {Menus.map((item) => (
//             <div key={item._id} onClick={() => toggleExpand(item._id)} className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition">
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-500">{item.desc}</p>
//               <p className="font-semibold text-red-500 mt-2">${item.price}</p>
//               {item.image && <img src={item.image} alt={item.name} className="mt-2 rounded-lg h-32 object-cover" />}
//               {expandedId === item._id && (
//                 <div className='mt-4 flex gap-2'>
//                   <button className='bg-blue-500 text-white px-3 py-1 rounded'>Edit</button>
//                   <button onClick={(e) => { e.stopPropagation(); deleteMenu(item._id); }} className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Menu;




// import React, { useState, useEffect } from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//       console.log("Fetched categories", res.data);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   const fetchMenus = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu"
//       );
//       setMenus(res.data?.menus || []);
//       console.log("Fetched menus", res.data);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   const toggleExpand = (id) => {
//     setExpandedId((prevId) => (prevId === id ? null : id));
//   };

  
//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>

//         {/* Category Grid */}
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories.map((cat) => (
//             <div key={cat._id} className="py-4 flex flex-col items-center gap-6">
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className="lg:text-xl capitalize text-center">{cat.name}</h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Menus Section */}
//       <div className="bg-black py-10">
//         <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase">
//           Menu Items
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto text-white">
//           {menus.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => toggleExpand(item._id)}
//               className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition bg-gray-900"
//             >
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-400">{item.desc}</p>
//               <p className="font-semibold text-customColor mt-2">${item.price}</p>
//               {item.img && (
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="mt-2 rounded-lg h-32 object-cover"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;



// import React, { useState, useEffect } from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   const fetchMenus = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu"
//       );
//       setMenus(res.data?.menus || []);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   const toggleExpand = (id) => {
//     setExpandedId((prevId) => (prevId === id ? null : id));
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   const filteredMenus = activeCategory === "all"
//     ? menus
//     : menus.filter((menu) => menu.category === activeCategory);

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-10">
//           <button
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${activeCategory === "all" ? "bg-customColor text-white" : "bg-white text-black"}`}
//             onClick={() => setActiveCategory("all")}
//           >
//             All
//           </button>
//           {categories.map((cat) => (
//             <button
//               key={cat._id}
//               onClick={() => setActiveCategory(cat._id)}
//               className={`px-4 py-2 rounded-full text-sm font-semibold ${activeCategory === cat._id ? "bg-customColor text-white" : "bg-white text-black"}`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* Category Grid */}
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories.map((cat) => (
//             <div key={cat._id} className="py-4 flex flex-col items-center gap-6">
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className="lg:text-xl capitalize text-center">{cat.name}</h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Menus Section */}
//       <div className="bg-black py-10">
//         <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase">
//           Menu Items
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto text-white">
//           {filteredMenus.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => toggleExpand(item._id)}
//               className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition bg-gray-900"
//             >
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-400">{item.desc}</p>
//               <p className="font-semibold text-customColor mt-2">${item.price}</p>
//               {item.img && (
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="mt-2 rounded-lg h-32 object-cover"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;



// import React, { useState, useEffect } from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   const fetchMenus = async (categoryId = null) => {
//     try {
//       const url = categoryId && categoryId !== "all"
//         ? `https://restaurant-backend-wwjm.onrender.com/api/v1/category/${categoryId}/menus`
//         : "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu";
//       const res = await axios.get(url);
//       setMenus(res.data?.menus || []);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   const toggleExpand = (id) => {
//     setExpandedId((prevId) => (prevId === id ? null : id));
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   useEffect(() => {
//     fetchMenus(activeCategory);
//   }, [activeCategory]);

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>

//         {/* All Button */}
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${activeCategory === "all" ? "bg-customColor text-white" : "bg-white text-black"}`}
//             onClick={() => setActiveCategory("all")}
//           >
//             All
//           </button>
//         </div>

//         {/* Category Grid */}
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories.map((cat) => (
//             <div
//               key={cat._id}
//               onClick={() => setActiveCategory(cat._id)}
//               className={`py-4 flex flex-col items-center gap-6 cursor-pointer ${activeCategory === cat._id ? "scale-105" : ""}`}
//             >
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className="lg:text-xl capitalize text-center">{cat.name}</h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Menus Section */}
//       <div className="bg-black py-10">
//         <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase">
//           Menu Items
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto text-white">
//           {menus.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => toggleExpand(item._id)}
//               className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition bg-gray-900"
//             >
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-400">{item.desc}</p>
//               <p className="font-semibold text-customColor mt-2">${item.price}</p>
//               {item.img && (
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="mt-2 rounded-lg h-32 object-cover"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;




// import React, { useState, useEffect } from "react";
// import herobg from "../assets/hero-bg.jpg";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [expandedId, setExpandedId] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("all");

//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   const fetchMenus = async (categoryId = null) => {
//     try {
//       const url = categoryId && categoryId !== "all"
//         ? `https://restaurant-backend-wwjm.onrender.com/api/v1/category/${categoryId}/menus`
//         : "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu";
//       const res = await axios.get(url);
//       setMenus(res.data?.menus || []);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   const toggleExpand = (id) => {
//     setExpandedId((prevId) => (prevId === id ? null : id));
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   useEffect(() => {
//     fetchMenus(activeCategory);
//   }, [activeCategory]);

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero Background"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
//           <div className="text-center mx-auto mt-10">
//             <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
//               Our menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400">
//               <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
//                 menu
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="bg-customBlack py-10">
//         <div className="text-center mx-auto pb-5">
//           <div className="flex items-center justify-center gap-3">
//             <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
//             <p className="text-sm leading-9 font-bold uppercase text-customColor">
//               taste the best that surprise you
//             </p>
//           </div>
//           <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
//             our special <span className="text-customColor">menu</span>
//           </h1>
//           <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
//             Enjoy the unique dishes from the basillico restaurant that only our
//             restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
//           </p>
//         </div>

//         {/* All Button */}
//         <div className="flex justify-center mb-6">
//           <button
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${activeCategory === "all" ? "bg-customColor text-white" : "bg-white text-black"}`}
//             onClick={() => setActiveCategory("all")}
//           >
//             All
//           </button>
//         </div>

//         {/* Category Grid */}
//         <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
//           {categories.map((cat) => (
//             <div
//               key={cat._id}
//               onClick={() => setActiveCategory(cat._id)}
//               className={`py-4 flex flex-col items-center gap-6 cursor-pointer ${activeCategory === cat._id ? "scale-105" : ""}`}
//             >
//               <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
//                 <div className="relative overflow-hidden rounded-full group">
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
//                 </div>
//               </div>
//               <h1 className={`lg:text-xl capitalize text-center ${activeCategory === cat._id ? "text-customColor font-bold" : ""}`}>{cat.name}</h1>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Menus Section */}
//       <div className="bg-black py-10">
//         <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase">
//           Menu Items
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto text-white">
//           {menus.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => toggleExpand(item._id)}
//               className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition bg-gray-900"
//             >
//               <h3 className="text-lg font-bold">{item.name}</h3>
//               <p className="text-sm text-gray-400">{item.desc}</p>
//               <p className="font-semibold text-customColor mt-2">${item.price}</p>
//               {item.img && (
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="mt-2 rounded-lg h-32 object-cover"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { HiOutlineSlash } from "react-icons/hi2";
// import axios from "axios";
// import herobg from "../assets/hero-bg.jpg";

// const Menu = () => {
//   const [categories, setCategories] = useState([]);
//   const [menus, setMenus] = useState([]);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const navigate = useNavigate();

//   // Fetch categories
//   const fetchCategories = async () => {
//     try {
//       const res = await axios.get(
//         "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
//       );
//       setCategories(res.data?.categories || []);
//     } catch (err) {
//       console.error("Error fetching categories", err);
//     }
//   };

//   // Fetch menu items (all or by category)
//   const fetchMenus = async (categoryId = null) => {
//     try {
//       const url =
//         categoryId && categoryId !== "all"
//           ? `https://restaurant-backend-wwjm.onrender.com/api/v1/category/${categoryId}/menus`
//           : "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu";
//       const res = await axios.get(url);
//       setMenus(res.data?.menus || []);
//     } catch (err) {
//       console.error("Error fetching menus", err);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//     fetchMenus();
//   }, []);

//   useEffect(() => {
//     fetchMenus(activeCategory);
//   }, [activeCategory]);

//   const handleMenuClick = (id) => {
//     navigate(`/menu/${id}`);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative min-h-screen">
//         <img
//           src={herobg}
//           alt="Hero"
//           className="w-full h-full object-cover absolute top-0 left-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center justify-center">
//           <div className="text-center mt-10">
//             <h1 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-wide leading-snug">
//               Our Menu
//             </h1>
//             <div className="flex justify-center items-center mt-4 text-gray-400 gap-2">
//               <p className="text-xs font-bold tracking-widest">Home</p>
//               <HiOutlineSlash size={20} />
//               <p className="text-xs font-bold tracking-widest capitalize">Menu</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="bg-customBlack py-10 text-white">
//         <div className="text-center mb-6">
//           <p className="text-sm font-bold uppercase text-customColor tracking-wide">
//             taste the best that surprise you
//           </p>
//           <h2 className="text-3xl font-bold uppercase tracking-wide mt-2">
//             Our Special <span className="text-customColor">Menu</span>
//           </h2>
//           <p className="text-sm text-gray-400 max-w-xl mx-auto mt-2">
//             Enjoy the unique dishes from our restaurant that only we have.
//           </p>
//         </div>

//         {/* Category Buttons */}
//         <div className="flex justify-center flex-wrap gap-4 mb-8">
//           <button
//             className={`px-4 py-2 rounded-full text-sm font-semibold ${
//               activeCategory === "all"
//                 ? "bg-customColor text-white"
//                 : "bg-white text-black"
//             }`}
//             onClick={() => setActiveCategory("all")}
//           >
//             All
//           </button>
//           {categories.map((cat) => (
//             <button
//               key={cat._id}
//               onClick={() => setActiveCategory(cat._id)}
//               className={`px-4 py-2 rounded-full text-sm font-semibold capitalize ${
//                 activeCategory === cat._id
//                   ? "bg-customColor text-white"
//                   : "bg-white text-black"
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Menu Items Section */}
//       <section className="bg-black py-10 text-white">
//         <h3 className="text-center text-2xl font-bold mb-8 uppercase">
//           Menu Items
//         </h3>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 max-w-7xl mx-auto">
//           {menus.map((item) => (
//             <div
//               key={item._id}
//               onClick={() => handleMenuClick(item._id)}
//               className="bg-gray-900 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-transform transform hover:scale-[1.02]"
//             >
//               <h4 className="text-lg font-bold">{item.name}</h4>
//               <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
//               <p className="text-customColor font-semibold mt-2">${item.price}</p>
//               {item.img && (
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-40 object-cover mt-3 rounded-lg"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Menu;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import herobg from "../assets/hero-bg.jpg";
import { HiOutlineSlash } from "react-icons/hi2";
import axios from "axios";

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        "https://restaurant-backend-wwjm.onrender.com/api/v1/get-category"
      );
      setCategories(res.data?.categories || []);
    } catch (err) {
      console.error("Error fetching categories", err);
    }
  };

  const fetchMenus = async (categoryId = null) => {
    try {
      const url =
        categoryId && categoryId !== "all"
          ? `https://restaurant-backend-wwjm.onrender.com/api/v1/category/${categoryId}/menus`
          : "https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu";
      const res = await axios.get(url);
      setMenus(res.data?.menus || []);
    } catch (err) {
      console.error("Error fetching menus", err);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchMenus();
  }, []);

  useEffect(() => {
    fetchMenus(activeCategory);
  }, [activeCategory]);

  const handleMenuClick = (id) => {
    navigate(`/menu/${id}`);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img
          src={herobg}
          alt="Hero Background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
          <div className="text-center mx-auto mt-10">
            <h1 className="text-3xl sm:text-2xl text-white md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
              Our menu
            </h1>
            <div className="flex justify-center items-center mt-4 text-gray-400">
              <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
              <HiOutlineSlash size={20} />
              <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
                menu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-customBlack py-10">
        <div className="text-center mx-auto pb-5">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
            <p className="text-sm leading-9 font-bold uppercase text-customColor">
              taste the best that surprise you
            </p>
          </div>
          <h1 className="text-3xl sm:text-2xl text-white md:text-3xl lg:text-4xl font-bold uppercase tracking-wide leading-snug">
            our special <span className="text-customColor">menu</span>
          </h1>
          <p className="text-xs md:text-sm tracking-widest text-gray-500 md:max-w-md mx-auto">
            Enjoy the unique dishes from the basillico restaurant that only our
            restaurant has, Fuscemalesuada, lorem vitae euismod lobortis.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold ${activeCategory === "all" ? "bg-customColor text-white" : "bg-white text-black"}`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-[90%] text-white mx-auto">
          {categories.map((cat) => (
            <div
              key={cat._id}
              onClick={() => setActiveCategory(cat._id)}
              className={`py-4 flex flex-col items-center gap-6 cursor-pointer ${activeCategory === cat._id ? "scale-105" : ""}`}
            >
              <div className="lg:w-32 sm:w-32 md:w-44 rounded-full">
                <div className="relative overflow-hidden rounded-full group">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full object-cover rounded-full transition-transform duration-500 ease-out group-hover:scale-90"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 ease-out group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
                </div>
              </div>
              <h1 className={`lg:text-xl capitalize text-center ${activeCategory === cat._id ? "text-customColor font-bold" : ""}`}>
                {cat.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-black py-10">
        <h2 className="text-xl font-semibold mb-4 text-white text-center uppercase">
          Menu Items
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] mx-auto text-white">
          {menus.map((item) => (
            <div
              key={item._id}
              onClick={() => handleMenuClick(item._id)}
              className="border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition bg-gray-900"
            >
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
              <p className="font-semibold text-customColor mt-2">${item.price}</p>
              {item.img && (
                <img
                  src={item.img}
                  alt={item.name}
                  className="mt-2 rounded-lg h-32 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;







