import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import heroBG from "../assets/hero-bg.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PaymentStatus() {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const [status, setStatus] = useState("Verifying...");
  const [success, setSuccess] = useState(false);
  const [reservationInfo, setReservationInfo] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const txRef = searchParams.get("tx_ref");
    const transactionId = searchParams.get("transaction_id");

    if (txRef && transactionId) {
      axios
        .post(`${renderUrl}/api/v1/flutterwave/verify`, {
          tx_ref: txRef,
          transaction_id: transactionId,
        })
        .then((res) => {
          setStatus("Payment Successful! Reservation confirmed.");
          setSuccess(true);
          console.log(res)
          setReservationInfo(res.data?.meta || null);

          // Optionally redirect after a few seconds
          setTimeout(() => {
            navigate("/tables");
          }, 10000); // 10 seconds
        })
        .catch((err) => {
          console.error(err.response?.data || err.message);
          setStatus("Payment Failed or Invalid. Please try again.");
        });
    } else {
      setStatus("Missing transaction reference or ID.");
    }
  }, []);

  const handleCheckReservation = () => {
    navigate("/reservation-details", {
      state: reservationInfo,
    });
  };

  return (
    <div className="">
      <div className="relative font-merienda min-h-[330px] w-full">
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center px-4 text-white space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl mt-10 lg:mt-20 font-bold uppercase">
              {status}
            </h1>
            <button
              onClick={()=>navigate("/tables")}
              className="flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Try Again
              </span>
              <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />
              <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
            {success && (
            <button
              onClick={handleCheckReservation}
              className="flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                Check Reservation Details
              </span>
              <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />
              <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
