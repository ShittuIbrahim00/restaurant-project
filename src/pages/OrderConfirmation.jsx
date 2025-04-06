import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="bg-customBlack min-h-screen flex flex-col justify-center items-center text-white font-merienda">
      <h1 className="text-3xl font-bold mb-4">Thank you for your order!</h1>
      <p>Your payment was successful, and your order is being processed.</p>
      <p>We'll send you an email with the order details shortly.</p>
      <Link to="/" className="mt-4 text-lg text-customColor hover:opacity-80">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default OrderConfirmation;
