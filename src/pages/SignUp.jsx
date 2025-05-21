import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const restaurantURL = "https://restaurant-backend-wwjm.onrender.com/api/v1";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await axios.post(`${restaurantURL}/register`, formData);
      if (response.status === 201) {
        console.log(response);
        setIsLoading(false)
        navigate("/login");
        setFormData({
          name: "",
          email: "",
          password: "",
          role: "",
        });
      } else {
        setIsLoading(false)
        toast.error("Fill all fields");
      }
    } catch (error) {
      setIsLoading(false)
      console.error(error);
      toast.error("Unable to register you, try again");
    }
  };

  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-center items-center font-Merienda">
      <div className="flex flex-col text-center mb-4 mt-10">
        <div className="text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug">
          Register and{" "}
          <p className="text-customColor"> enjoy dining experience.</p>
        </div>
      </div>

      <div className="md:max-w-md lg:max-w-xl max-w-xs w-full bg-white rounded-2xl mb-10">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:pt-12 lg:pb-7 p-5 lg:px-9"
        >
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="name" className="font-normal text-md">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g John"
              className="w-full border border-gray-300 p-4 rounded-xl"
              required
            />
          </div>

          <div className="lg:flex w-full items-center gap-6 mt-4">
            <div className="flex flex-col gap-3 items-start w-full">
              <label htmlFor="email" className="font-normal text-md">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g John@example.com"
                className="w-full border border-gray-300 p-4 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="lg:flex w-full items-center gap-6 mt-4">
            <div className="flex flex-col gap-3 items-start w-full">
              <label htmlFor="password" className="font-normal text-md">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="w-full mt-4 lg:mt-12">
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={isLoading}
              className="bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full"
            >
              {isLoading ? "Registering..." : "Submit"}
            </button>
          </div>

          <p className="text-sm mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-customColor underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
