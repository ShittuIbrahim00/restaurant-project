import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import heroBG from "../assets/hero-bg.jpg";

// Replace with your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51ROc5FGg893YVERIXPEk6VXtIxg1SqnptA497lmmdOXSKArxLdRWVdZ7wacFn1OXsRi4XSuSWuKg5OS9JJgCIR9m00GmI6eVfq"
); // Replace with your Stripe publishable key

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const clientSecret = localStorage.getItem("clientSecret");
    console.log("Using clientSecret:", clientSecret);
    if (!clientSecret) {
      toast.error("Missing payment secret");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      toast.error(result.error.message || "Payment failed");
    } else {
      if (result.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
        localStorage.removeItem("clientSecret");
        navigate("/");
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>
      <CardElement className="p-4 border border-gray-300 rounded-md mb-4" />
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={!stripe || loading}
          className="bg-customColor rounded-full text-white px-6 py-2 transition"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </div>
    </form>
  );
};

const TableResevationPayment = () => {
  return (
    <div className="">
      <div className="relative font-merienda min-h-64 w-full">
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center px-4 text-white space-y-4">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 lg:mt-20 font-bold uppercase">
              PAYMENt
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-customGray text-white py-8 font-merienda">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default TableResevationPayment;
