import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import heroBG from "../assets/hero-bg.jpg";
import {
  FaChair,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaIdBadge,
} from "react-icons/fa";

export default function ReservationDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state;

  useEffect(() => {
    if (!reservation) {
      // No reservation info? Redirect to tables or fallback page
      navigate("/tables");
    }
  }, [reservation, navigate]);

  if (!reservation) return null;

  const { tableId, userId, qty_persons, reservationTime, reservationDate } =
    reservation;

  return (
    <div className="">
      <div className="relative font-merienda min-h-64 w-full">
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center flex flex-col items-center px-4 text-white space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl mt-10 lg:mt-20 font-bold uppercase">
              Reservation Confirmed 🎉
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-customGray p-6 w-full text-center space-y-6">
        <div className="text-white space-y-3  max-w-md mx-auto">
          <p className="flex items-center gap-2">
            <FaIdBadge className="text-customColor" />
            <span className="font-semibold">Table ID:</span> {tableId}
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-customColor" />
            <span className="font-semibold">User ID:</span> {userId}
          </p>
          <p className="flex items-center gap-2">
            <FaChair className="text-customColor" />
            <span className="font-semibold">Guests:</span> {qty_persons}
          </p>
          {reservationDate && (
            <p className="flex items-center gap-2">
              <FaCalendarAlt className="text-customColor" />
              <span className="font-semibold">Date:</span> {reservationDate}
            </p>
          )}
          {reservationTime && (
            <p className="flex items-center gap-2">
              <FaClock className="text-customColor" />
              <span className="font-semibold">Time:</span> {reservationTime}
            </p>
          )}
          <button
            onClick={() => navigate("/tables")}
            className="flex relative overflow-hidden font-merienda text-white bg-customColor px-8 py-2 xl:px-8 xl:py-2 lg:py-1 lg:px-4 rounded-full font-bold lg:font-normal xl:font-bold text-sm gap-2 cursor-pointer capitalize items-center group transition-all duration-300 ease-in-out"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Check Available Tables
            </span>
            <IoIosArrowRoundForward className="relative z-10 text-3xl xl:text-3xl lg:text-2xl transition-colors duration-300 group-hover:text-black" />
            <span className="absolute inset-0 bg-white w-0 left-0 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
