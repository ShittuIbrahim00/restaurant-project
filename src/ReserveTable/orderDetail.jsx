import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomModal from "./Modal";
import heroBG from "../assets/hero-bg.jpg";
import {
  CalendarIcon,
  ClockIcon,
  EnvelopeIcon,
  UserCircleIcon,
  UsersIcon,
  TableCellsIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const OrderDetails = () => {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const reserveId = JSON.parse(localStorage.getItem("reserveTable"));
    const id = reserveId?._id;
    setId(id);

    const fetchData = async () => {
      try {
        const resp = await axios.get(`${renderUrl}/api/v1/get-single-resevertable/${id}`);
        if (resp.data.success) setData(resp.data.data);
      } catch (err) {
        toast.error("Failed to fetch reservation details");
      }
    };
    fetchData();
  }, []);

  const cancelReservation = async () => {
    try {
      const resp = await axios.delete(`${renderUrl}/api/v1/cancel-reservation/${id}`);
      if (resp.data.success) {
        toast.success(resp.data.msg);
        setShowModal(false);
        localStorage.removeItem("reserveTable");
        navigate("/");
      } else {
        toast.error(resp.data.msg);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  const handlePayment = async () => {
    if (!data || !data.table) {
      toast.error("Invalid reservation data");
      return;
    }
  
    setLoader(true);
  
    try {
      const res = await axios.post(`${renderUrl}/api/v1/flutterwave/pay`, {
        email: data?.user?.email,
        amount: data?.table?.price,
        userId: data?.user?._id,
        tableId: data?.table?._id,
        qty_persons: data?.qty_persons,
        reservation_Date: data?.reservation_Date,
        reservation_Time: data?.reservation_Time,
      });
  
      if (res.data?.link) {
        window.location.href = res.data.link;
      } else {
        toast.error("Failed to initiate payment");
      }
    } catch (err) {
      console.error(err.response?.data || err.message);
      toast.error("An error occurred while initiating payment");
    } finally {
      setLoader(false);
    }
  };
  

  return (
    <div className="">
      {/* Hero */}
      <div className="relative font-merienda min-h-64 w-full">
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center px-4 text-white space-y-4">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 lg:mt-20 font-bold uppercase">
              Reservation Summary
            </h1>
          </div>
        </div>
      </div>

      {/* Reservation Details */}
      <div className="bg-customGray text-white min-h-screen py-8 font-merienda">
        <div className="max-w-4xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem
              icon={<TableCellsIcon className="h-5 w-5 text-customColor" />}
              label="Table Number"
              value={data?.table?.tableNumber}
            />
            <InfoItem
              icon={<UsersIcon className="h-5 w-5 text-customColor" />}
              label="Qty Persons"
              value={data.qty_persons}
            />
            <InfoItem
              icon={<ClockIcon className="h-5 w-5 text-customColor" />}
              label="Reservation Time"
              value={data?.reservation_Time}
            />
            <InfoItem
              icon={<UserCircleIcon className="h-5 w-5 text-customColor" />}
              label="Username"
              value={data?.user?.name}
            />
            <InfoItem
              icon={<EnvelopeIcon className="h-5 w-5 text-customColor" />}
              label="Email"
              value={data?.user?.email}
            />
            <InfoItem
              icon={<CalendarIcon className="h-5 w-5 text-customColor" />}
              label="Reservation Date"
              value={
                data?.reservation_Date
                  ? new Date(data?.reservation_Date).toLocaleDateString()
                  : ""
              }
            />
            <InfoItem
              icon={<ClockIcon className="h-5 w-5 text-customColor" />}
              label="Status"
              value={data?.status || "Pending"}
            />
          </div>

          <div className="flex justify-end gap-2 items-center mt-8 border-t pt-4">
            <div className="flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 text-green-600" />
              <span className="text-lg font-semibold text-gray-700">Total:</span>
            </div>
            <span className="text-2xl font-bold text-customColor">
              ₦{data?.table?.price || 0}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">
            <button
              onClick={handlePayment}
              disabled={loader}
              className={`${
                loader ? "bg-customRoundedBg text-white" : "bg-customColor"
              } text-white py-3 px-6 rounded-full font-semibold transition`}
            >
              {loader ? "Processing..." : "Proceed to Payment"}
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="bg-customGray text-white py-3 px-6 rounded-full font-semibold transition"
            >
              Cancel Reservation
            </button>
          </div>

          {showModal && (
            <CustomModal
              cancelReservation={cancelReservation}
              setShowModal={setShowModal}
            />
          )}

          <div className="mt-8 text-center text-gray-500 text-sm">
            <p>{data.msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-md shadow-sm">
    {icon}
    <div className="flex flex-col">
      <span className="text-xs text-gray-500">{label}</span>
      <span className="font-semibold text-sm">{value}</span>
    </div>
  </div>
);

export default OrderDetails;
