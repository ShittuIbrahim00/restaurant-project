import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useNavigate } from "react-router-dom";
import heroBG from "../assets/hero-bg.jpg";
import toast from "react-hot-toast";

const TableResevationPayment = () => {
  const navigate = useNavigate();
  const reserveInfo = JSON.parse(localStorage.getItem("reserveTable"));
  const user = JSON.parse(localStorage.getItem("restaurant-customer"));

  const config = {
    public_key: "FLWPUBK_TEST-991df54ae6aa9436a02d826fa4a3ed27-X", // Replace with your Flutterwave public key
    tx_ref: Date.now(),
    amount: reserveInfo?.totalAmount || 100, // Or set fixed amount
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user?.email || "guest@example.com",
      phonenumber: user?.phone || "0000000000",
      name: user?.name || "Guest User",
    },
    customizations: {
      title: "Table Reservation",
      description: `Reservation for table ${reserveInfo?.tableNumber}`,
      logo: "https://yourdomain.com/logo.png", // Optional
    },
    callback: (response) => {
      console.log("Payment response:", response);
      if (response.status === "successful") {
        toast.success("Payment successful!");
        localStorage.removeItem("reserveTable");
        navigate("/");
      } else {
        toast.error("Payment not completed");
      }
      closePaymentModal(); // Closes modal programmatically
    },
  };

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
              Payment
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-customGray text-white py-8 font-merienda flex justify-center">
        <FlutterWaveButton
          {...config}
          className="bg-customColor rounded-full text-white px-6 py-3 font-bold text-lg transition hover:bg-black"
        />
      </div>
    </div>
  );
};

export default TableResevationPayment;
