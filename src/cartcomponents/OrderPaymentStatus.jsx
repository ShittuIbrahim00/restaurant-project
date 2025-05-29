import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroBG from "../assets/hero-bg.jpg";

const OrderPaymentStatus = () => {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying payment...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyPayment = async () => {
      const tx_ref = searchParams.get("tx_ref");
      const transaction_id = searchParams.get("transaction_id");
      console.log("🧾 Verifying with:", { tx_ref, transaction_id });

      if (!tx_ref || !transaction_id) {
        setMessage("Missing transaction details.");
        setLoading(false);
        return;
      }
  
      try {
        const res = await axios.post(
          `${renderUrl}/api/v1/flutterwave/verify-order`,
          { tx_ref, transaction_id }
        );
        console.log(res);
        if (res.data.message) {
          setMessage("Payment verified successfully! Your order is complete.");
          setTimeout(() => {
            navigate("/");
          }, 10000); 
        } else {
          setMessage("Payment verification failed.");
          setTimeout(() => {
            navigate("/menu");
          }, 10000); 
        }
      } catch (err) {
        console.error(err.response?.data || err.message);
        setMessage("❌ Server error or invalid transaction.");
      } finally {
        setLoading(false); // ✅ This was missing
      }
    };
  
    verifyPayment();
  }, [searchParams]);
  

  return (
    <div className="">
      <div className="relative font-merienda min-h-[380px] w-full">
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center px-4 text-white space-y-4">
            <h1 className={`text-xl md:text-2xl lg:text-3xl mt-10 lg:mt-20 font-bold uppercase}`}>
            {message}
            </h1>
            <button
              onClick={()=>navigate("/menu")}
              className="flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Try Again
              </span>
              <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />
              <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPaymentStatus;
