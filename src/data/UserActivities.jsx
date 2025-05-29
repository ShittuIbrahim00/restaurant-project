import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { HiOutlineSlash } from "react-icons/hi2";
import herobg from "../assets/hero-bg.jpg";

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-1 bg-customColor text-white rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="px-3 py-1 bg-customColor text-white rounded">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-1 bg-customColor text-white rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default function UserHistory() {
  const { user } = useContext(AuthContext);
  const userId = user?._id;
  const limit = 5;
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";

  // Orders states
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState(0);

  // Reservations states
  const [reservations, setReservations] = useState([]);
  const [totalReservations, setTotalReservations] = useState(0);

  // Pagination shared state (you can also separate if you want separate pagination)
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sorting and filtering states (apply to orders, you can extend to reservations if needed)
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [statusFilter, setStatusFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    async function fetchHistory() {
      setLoading(true);
      setError(null);
      try {
        const params = {
          page,
          limit,
          sortBy,
          order,
          ...(statusFilter && { status: statusFilter }),
          ...(startDate && { startDate }),
          ...(endDate && { endDate }),
        };

        // Fetch orders
        const ordersRes = await axios.get(
          `${renderUrl}/api/v1/history/user/${userId}`,
          { params }
        );
        setOrders(ordersRes.data.orders);
        setTotalOrders(ordersRes.data.totalOrders);
        setReservations(ordersRes.data.reservations);
        setTotalReservations(ordersRes.data.totalReservations);
        console.log(ordersRes);
      } catch (e) {
        setError("Failed to load history");
      } finally {
        setLoading(false);
      }
    }
    if (userId) {
      fetchHistory();
    }
  }, [userId, page, sortBy, order, statusFilter, startDate, endDate]);

  const totalPagesOrders = Math.ceil(totalOrders / limit);
  const totalPagesReservations = Math.ceil(totalReservations / limit);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <img
          src={herobg}
          alt="Hero Background"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-customBlack bg-opacity-70 flex items-center">
          <div className="text-center mx-auto mt-10">
            <h1 className="text-3xl sm:text-2xl text-white mx-auto md:text-3xl lg:text-6xl font-bold mt-4 uppercase tracking-wide leading-snug">
              {loading ? "Loading history..." : "My Spicyhunt History"}
            </h1>
            <div className="flex justify-center items-center mt-4 text-gray-400">
              <p className="text-xs md:text-sm font-bold tracking-widest">
                Home
              </p>
              <HiOutlineSlash size={20} />
              <p className="text-xs md:text-sm font-bold tracking-widest capitalize">
                Order & Reservation History
              </p>
            </div>
          </div>
        </div>
      </div>
      {error && <p className="text-red-600">{error}</p>}
      <div className="bg-customBlack">
        {/* Sorting & Filtering */}
        <div className="flex flex-wrap gap-4 items-center justify-center pt-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded px-3 py-2 bg-customColor text-white"
          >
            <option value="createdAt">Date</option>
            <option value="totalAmount">Total Amount</option>
            <option value="orderStatus">Status</option>
          </select>

          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="bg-customColor text-white rounded px-3 py-2"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-customColor text-white rounded px-3 py-2"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-customColor text-white rounded px-3 py-2"
            placeholder="Start Date"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-customColor text-white rounded px-3 py-2"
            placeholder="End Date"
          />
        </div>
        {/* Reservations Section */}
        <section className="mt-1 p-6 max-w-7xl mx-auto">
          <h3 className="text-2xl text-white font-semibold mb-4">Reservations</h3>

          {!loading && reservations.length === 0 && (
            <p>No reservations found.</p>
          )}

          {!loading && reservations.length > 0 && (
            <>
              <ul className="space-y-5">
                {reservations.map((reservation) => (
                  <li
                    key={reservation._id}
                    className="border rounded p-4 shadow-sm bg-white"
                  >
                    <div className="flex justify-between mb-2">
                      <div>
                        <p>
                          <strong>Date:</strong>{" "}
                          {reservation.date_created
                            ? new Date(
                                reservation.date_created
                              ).toLocaleString()
                            : "N/A"}
                        </p>
                        <p>
                          <strong>Status:</strong> {reservation.isReserved}
                        </p>
                        <p>
                          <strong>Table Number:</strong>{" "}
                          {reservation.table.tableNumber ?? "N/A"}
                        </p>
                        <p>
                          <strong>Reservation Date:</strong>{" "}
                          {reservation.updated_at
                            ? new Date(reservation.updated_at).toLocaleString()
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Pagination
                page={page}
                totalPages={totalPagesReservations}
                onPageChange={setPage}
              />
            </>
          )}
        </section>
      </div>
      <div className="bg-customGray">
        {/* Orders Section */}
        <section className="p-6 max-w-7xl mx-auto">
          <h3 className="text-2xl text-white font-semibold mb-4">Orders</h3>

          {!loading && orders.length === 0 && <p>No orders found.</p>}

          {!loading && orders.length > 0 && (
            <>
              <ul className="space-y-5">
                {orders.map((order) => (
                  <li
                    key={order._id}
                    className="border rounded p-4 shadow-sm bg-white"
                  >
                    <div className="flex justify-between mb-2">
                      <div>
                        <p>
                          <strong>Date:</strong>{" "}
                          {order.createdAt
                            ? new Date(order.createdAt).toLocaleString()
                            : "N/A"}
                        </p>
                        <p>
                          <strong>Status:</strong> {order.orderStatus}
                        </p>
                      </div>
                      <p className="font-semibold text-lg">
                        ₦{order.totalAmount?.toLocaleString() ?? "N/A"}
                      </p>
                    </div>

                    <div>
                      <strong>Items:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {order.menuItems.map((mi) => (
                          <li key={mi.menu_id._id}>
                            {mi.menu_id.name} x {mi.quantity} - ₦
                            {mi.menu_id.price?.toLocaleString() ?? "N/A"}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              <Pagination
                page={page}
                totalPages={totalPagesOrders}
                onPageChange={setPage}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
