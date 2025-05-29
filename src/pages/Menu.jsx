import React, { useState, useEffect } from "react";
import herobg from "../assets/hero-bg.jpg";
import beverages6 from "../assets/beverages-img-6.png";
import { HiOutlineSlash } from "react-icons/hi2";
import axios from "axios";
import { Link } from "react-router-dom";

// MenuCard Component
const MenuCard = ({ items }) => {
  if (items.length === 0) {
    return <p className="text-gray-400 text-center">No menu items found.</p>;
  }

  return (
    <div className="grid lg:grid-cols-2 sm:w-[90%] lg:w-[88%] mx-auto gap-4 text-white">
      {items.map((dish) => (
        <Link
          to={`/menu/${dish._id}`}
          key={dish._id}
          className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl hover:bg-customColor/10 transition"
        >
          <img
            src={dish.img || beverages6}
            alt={dish.name}
            className="w-[100px] h-[100px] object-contain rounded-full"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
              <h1 className="uppercase font-bold text-md truncate text-center sm:text-left">
                {dish.name}
              </h1>
              <div className="hidden sm:block flex-1 border border-gray-600"></div>
              <p className="py-1 min-w-[85px] bg-customColor text-sm font-bold rounded-full text-center">
                #{dish.price}
              </p>
            </div>
            <p className="leading-relaxed text-gray-400 text-center sm:text-left">
              {dish.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

// Main Menu Component
const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [menus, setMenus] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchMenus();
  }, []);

  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://restaurant-backend-wwjm.onrender.com/api/v1/get-category");
      setCategories(res.data?.categories.slice(0, 6) || []);
    } catch (err) {
      console.error("Error fetching categories", err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMenus = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://restaurant-backend-wwjm.onrender.com/api/v1/get-menu");
      setMenus(res.data?.menus || []);
    } catch (err) {
      console.error("Error fetching menus", err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = () => {
    setActiveCategory("all");
    setSearchTerm("");
    setShowAvailableOnly(false);
    setSortOption("default");
  };

  const sortMenus = (data) => {
    switch (sortOption) {
      case "price-low":
        return [...data].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...data].sort((a, b) => b.price - a.price);
      case "name":
        return [...data].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return data;
    }
  };

  const filteredMenus = sortMenus(
    menus.filter((item) => {
      const matchCategory = activeCategory === "all" || item.category_id === activeCategory;
      const matchAvailable = !showAvailableOnly || item.available;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchAvailable && matchSearch;
    })
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img src={herobg} alt="Hero Background" className="w-full h-full object-cover absolute" />
        <div className="absolute inset-0 bg-customBlack bg-opacity-70 flex items-center">
          <div className="text-center mx-auto mt-10">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-6xl font-bold uppercase tracking-wide leading-snug text-white">
              Our menu
            </h1>
            <div className="flex justify-center items-center mt-4 text-gray-400">
              <p className="text-xs md:text-sm font-bold tracking-widest">Home</p>
              <HiOutlineSlash size={20} />
              <p className="text-xs md:text-sm font-bold tracking-widest capitalize">menu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-customBlack py-10">
        {/* Section Heading */}
        <div className="text-center pb-5">
          <div className="flex justify-center gap-3 items-center">
            <div className="h-[5px] w-[5px] bg-customColor rounded-full"></div>
            <p className="text-sm font-bold uppercase text-customColor">taste the best that surprise you</p>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-white mt-2">
            our special <span className="text-customColor">menu</span>
          </h1>
          <p className="text-xs md:text-sm tracking-widest text-gray-500 max-w-md mx-auto mt-2">
            Enjoy the unique dishes from the basillico restaurant that only our restaurant has.
          </p>
        </div>

        {/* Category Selector */}
        <div className="md:hidden flex justify-center mb-6 px-4">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full max-w-xs px-4 py-2 rounded-md text-black"
          >
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Categories */}
        <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-[90%] mx-auto text-white">
          {categories.map((cat) => (
            <div
              key={cat._id}
              onClick={() => setActiveCategory(cat._id)}
              className={`cursor-pointer flex flex-col items-center gap-4 p-4 rounded-xl transition duration-300 hover:scale-105 ${
                activeCategory === cat._id ? "scale-105 bg-white/5" : ""
              }`}
            >
              <div className="w-24 md:w-28 lg:w-32 rounded-full overflow-hidden relative group">
                <img
                  src={cat.img || beverages6}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-90"
                />
                <div className="absolute inset-0 bg-white opacity-0 -translate-x-full transition-all duration-500 group-hover:opacity-30 group-hover:translate-x-0 rounded-full"></div>
              </div>
              <h1
                className={`capitalize text-sm md:text-base lg:text-lg text-center ${
                  activeCategory === cat._id ? "text-customColor font-semibold" : "text-white"
                }`}
              >
                {cat.name}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* Search, Sort & Menu Display */}
      <div className="bg-customGray py-10 px-4">
        {isLoading ? (
          <p className="text-center text-white">Loading menu...</p>
        ) : (
          <>
            <div className="max-w-5xl mx-auto mb-6 flex flex-col lg:flex-row gap-4 items-center justify-between">
              <input
                type="text"
                placeholder="Search by name or description..."
                className="w-full lg:w-[40%] px-4 py-2 rounded-md text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full lg:w-[25%] px-4 py-2 rounded-md text-black"
              >
                <option value="default">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
              <label className="flex items-center gap-2 text-white text-sm w-full lg:w-[20%]">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                />
                Available only
              </label>
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-md bg-customColor text-white text-sm w-full lg:w-[15%]"
              >
                Clear Filters
              </button>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl text-customColor font-bold uppercase tracking-wide">
                {activeCategory === "all"
                  ? "All Dishes"
                  : categories.find((cat) => cat._id === activeCategory)?.name}
              </h2>
            </div>

            <MenuCard items={filteredMenus} />
          </>
        )}
      </div>
    </>
  );
};

export default Menu;
