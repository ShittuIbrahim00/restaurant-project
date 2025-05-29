import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("restaurant-customer");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("restaurant-customer");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};


// context/initiateOrderPayment.js
const localHost = "http://localhost:5000";
const renderUrl = "https://restaurant-backend-wwjm.onrender.com";

export const initiateOrderPayment = async ({
  email,
  amount,
  userId,
  orderIds,
  orderType,
  tableNumber,
  address,
}) => {
  try {
    const res = await axios.post(`${renderUrl}/api/v1/flutterwave/cart-checkout`, {
      email,
      amount,
      userId,
      orderIds, // array of order IDs
      orderType,
      tableNumber,
      address,
    });

    return res.data.link;
  } catch (error) {
    console.error("Payment initiation error:", error);
    throw error;
  }
};



