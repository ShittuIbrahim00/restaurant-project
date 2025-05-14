import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CurrencyDollarIcon,
  UsersIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import heroBG from "../assets/hero-bg.jpg";

const AllTable = () => {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const [category, setCategory] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredTables =
    filter === "All"
      ? table
      : table.filter((t) => t.categoryId?.name === filter);

  useEffect(() => {
    const fetchCategory = async () => {
      const resp = await axios.get(`${renderUrl}/api/v1/get-all-category`);
      if (resp.data.sucess === true) {
        setCategory(resp.data.data);
      } else {
        setCategory([]);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    const fetchAllTable = async () => {
      setLoading(true);
      const resp = await axios.get(`${renderUrl}/api/v1/get-all-table`);
      console.log(resp.data.data);
      if (resp.data.success === true) {
        setTable(resp.data.data);
      } else {
        setTable([]);
      }
      setLoading(false);
    };
    fetchAllTable();
  }, []);

  // useEffect(() => {
  //   const fetchAllTable = async () => {
  //     // setLoading(true);
  //     const resp = await axios.get(
  //       `${localHost}/api/v1/reservedtablewithinfomation`
  //     );
  //     console.log(resp.data.data);
  //     // if (resp.data.success === true) {
  //     //   setTable(resp.data.data);
  //     // } else {
  //     //   setTable([]);
  //     // }
  //     setLoading(false);
  //   };
  //   fetchAllTable();
  // }, []);

  return (
    <div className="">
      <div className="relative font-merienda min-h-64 w-full">
        {/* Hero Background */}
        <img
          src={heroBG}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center">
          <div className="text-center px-4 text-white space-y-4">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-10 lg:mt-20 font-bold uppercase">
              Tables
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-customBlack p-4 font-merienda">
        {loading ? (
          <p className="text-center text-white font-bold text-3xl mt-9">
            Please wait while we retrieve all available tables...
          </p>
        ) : (
          <div className="w-11/12 mx-auto py-6">
            {/* Filter Header */}
            <div className="flex justify-center gap-4 mb-6">
              {["All", "Regular", "Executive"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold border transition 
                    ${
                      filter === type
                        ? "bg-customColor text-white border-transparent"
                        : "border-gray-300 text-white hover:bg-gray-100 hover:text-black"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Table Cards */}
            <div className="grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTables.map((e) => {
                const isReserved = e.isReserved;

                return (
                  <div
                    key={e._id}
                    className={`${
                      isReserved ? "pointer-events-none opacity-50" : ""
                    } bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group border border-gray-100 hover:border-gray-300`}
                  >
                    {!isReserved ? (
                      <Link to={`/reservation/${e._id}`} className="block">
                        {/* Entire clickable content */}
                        <TableCardContent e={e} />
                      </Link>
                    ) : (
                      <TableCardContent e={e} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TableCardContent = ({ e }) => (
  <>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold text-customColor group-hover:text-black transition-colors">
        Table {e.tableNumber}
      </h2>

      <span
        className={`text-xs font-semibold px-2 py-1 rounded-full ${
          e.isReserved
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {e.isReserved ? (
          <span className="inline-flex items-center gap-1">
            <XCircleIcon className="h-4 w-4" />
            Booked
          </span>
        ) : (
          <span className="inline-flex items-center gap-1">
            <CheckCircleIcon className="h-4 w-4" />
            Available
          </span>
        )}
      </span>

      <span className="bg-customColor text-white text-xs font-semibold px-2 py-1 rounded-full">
        {e?.categoryId?.name}
      </span>
    </div>

    <div className="text-sm space-y-3 text-gray-700">
      <div className="flex items-center gap-2">
        <CurrencyDollarIcon className="h-4 w-4 text-gray-500" />
        <span className="font-medium">Price:</span> ${e.price}
      </div>
      <div className="flex items-center gap-2">
        <UsersIcon className="h-4 w-4 text-gray-500" />
        <span className="font-medium">Capacity:</span> {e.capacity} persons
      </div>
    </div>

    <div className="mt-4">
      <button
        disabled={e.isReserved}
        className={`w-full text-sm font-semibold py-2 rounded-md transition ${
          e.isReserved
            ? "bg-gray-300 text-gray-600 cursor-not-allowed"
            : "bg-customColor text-white hover:bg-black"
        }`}
      >
        {e.isReserved ? "Unavailable" : "Reserve Now"}
      </button>
    </div>
  </>
);

export default AllTable;
