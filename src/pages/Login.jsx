import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if credentials match what's in context
    if (
      user &&
      formData.email === user.email &&
      formData.password === user.password
    ) {
      setError("");
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-center items-center font-Merienda">
      <div className="flex flex-col text-center mb-4">
        <div className="text-white uppercase font-extrabold font-jakarta md:text-[30px] sm:text-[25px] text-[25px] lg:text-[40px] leading-snug">
          login and <p className="text-customColor"> enjoy dining experience.</p>
        </div>
      </div>

      <div className="md:max-w-md lg:max-w-xl max-w-xs w-full bg-white rounded-2xl">
        <form onSubmit={handleSubmit} className="w-full lg:pt-12 lg:pb-7 p-5 lg:px-9">
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="email" className="font-normal text-md">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g John@example.com"
              className="w-full border border-gray-300 p-4 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col gap-3 items-start mt-4">
            <label htmlFor="password" className="font-normal text-md">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-4 rounded-xl"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="w-full mt-4 lg:mt-12">
            <button
              type="submit"
              className="bg-customColor transition-all duration-300 ease-in-out hover:bg-black text-white font-bold w-full p-4 rounded-full"
            >
              Submit
            </button>
          </div>

          <p className="text-sm mt-3">
            Don't have an account?{" "}
            <Link to="/signup" className="text-customColor underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
