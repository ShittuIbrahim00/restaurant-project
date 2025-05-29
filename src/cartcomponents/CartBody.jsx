import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AuthContext, initiateOrderPayment } from "../context/AuthContext";
import beverages6 from "../assets/beverages-img-3.png";
import toast from "react-hot-toast";
import EmptyCart from "./EmptyCart";

const CartBody = () => {
  const localHost = "http://localhost:5000";
  const renderUrl = "https://restaurant-backend-wwjm.onrender.com";
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderType, setOrderType] = useState("Takeaway"); // default to Takeaway
  const [tableNumber, setTableNumber] = useState("");
  const [address, setAddress] = useState("");
  const [availableTables, setAvailableTables] = useState([]);

  const { user } = useContext(AuthContext);
  const userId = user?._id;
  const token = user?.token;
  const email = user?.email;

  const nonEmptyOrders = orders.filter(
    (order) =>
      order.menuItems &&
      order.menuItems.length > 0 &&
      order.paymentStatus !== "Completed"
  );

  const allItems = nonEmptyOrders.reduce((acc, order) => {
    const items = order.menuItems.map((item) => ({
      ...item.menu_id,
      quantity: item.quantity,
      customization: item.customization,
      total: item.quantity * item.menu_id.price,
      orderId: order._id,
      menu_id: item.menu_id._id,
    }));
    return acc.concat(items);
  }, []);

  const totalQuantity = allItems.reduce((acc, item) => acc + item.quantity, 0);
  const baseTotal = allItems.reduce((acc, item) => acc + item.total, 0);

  const selectedTable = availableTables.find((t) => t._id === tableNumber);
  const tableFee = Number(selectedTable?.price) || 0;
  const deliveryFee = 5000;

  let grandTotal = baseTotal;
  if (orderType === "Dine-in") {
    grandTotal += tableFee;
  } else if (orderType === "Delivery") {
    grandTotal += deliveryFee;
  }

  const fetchAvailableTables = async () => {
    try {
      const { data } = await axios.get(
        `${renderUrl}/api/v1/get-all-table`
      );
      console.log(data);
      setAvailableTables(data.data || []);
    } catch (error) {
      console.error("Error fetching available tables:", error);
      toast.error("Failed to load tables");
    }
  };

  const handleCheckout = async () => {
    if (!orderType) return toast.error("Please select an order type");
    if (orderType === "Dine-in" && !tableNumber)
      return toast.error("Please select a table");
    if (orderType === "Delivery" && !address)
      return toast.error("Enter delivery address");
  
    try {
      setLoading(true);
      const orderIds = nonEmptyOrders.map((order) => order._id);
      const paymentLink = await initiateOrderPayment({
        email,
        amount: grandTotal,
        userId,
        orderIds,
        orderType,
        tableNumber: orderType === "Dine-in" ? tableNumber : undefined,
        address: orderType === "Delivery" ? address : undefined,
      });
  
      toast.success("Redirecting to payment...");
      window.location.href = paymentLink;
    } catch (err) {
      toast.error("Payment initiation failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        `${renderUrl}/api/v1/orders/${userId}`
      );
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchOrders();
  }, [userId]);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const paymentStatus = queryParams.get("status");
    if (paymentStatus === "successful") {
      toast.success("Payment completed!");
      fetchOrders();
    }
  }, []);

  useEffect(() => {
    if (orderType === "Dine-in") {
      fetchAvailableTables();
    }
  }, [orderType]);

  const updateOrderItem = async (orderId, menu_id, quantity, customization) => {
    try {
      await axios.put(
        `${renderUrl}/api/v1/orders/${orderId}`,
        { menu_id, quantity, customization },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Item updated successfully!");
      fetchOrders();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update item");
    }
  };

  const removeOrderItem = async (orderId, menu_id) => {
    try {
      await axios.delete(
        `${renderUrl}/${orderId}/item/${menu_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Item removed from your order.");
      fetchOrders()
    } catch (error) {
      console.error("Remove item error:", error);
      toast.error(error.response?.data?.message || "Failed to remove item");
    }
  };

  if (loading) return <p>Loading orders...</p>;
  if (nonEmptyOrders.length === 0) return <EmptyCart />;

  return (
    <div className="bg-customGray px-4 min-h-screen font-merienda pt-10 pb-16">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-[90%] mx-auto text-white">
        <div className="col-span-2">
          <p className="text-2xl my-6">Order(s)</p>

          {allItems.map((item, index) => (
            <div
              key={index}
              className="bg-customRoundedBg rounded-md w-full mb-6 overflow-clip"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <img
                  src={item.image || beverages6}
                  alt={item.name}
                  className="w-40 h-28 object-contain"
                />

                <div className="flex flex-col gap-1 text-center md:text-left flex-1 mt-4">
                  <h1 className="font-bold text-lg truncate">{item.name}</h1>
                  <p className="text-sm text-gray-300 line-clamp-1">
                    {item.desc || "A random description text"}
                  </p>
                  {(item.customization && (
                    <p className="text-xs italic text-yellow-300">
                      Custom: {item.customization}
                    </p>
                  )) ||
                    "Custom text"}
                </div>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => removeOrderItem(item.orderId, item.menu_id)}
                    className="text-red-500 hover:underline my-12"
                  >
                    Remove
                  </button>
                </div>

                <div className="flex flex-col gap-2 text-center md:text-left flex-initial mt-1 mr-5">
                  <p className="flex justify-between">
                    Price: <span className="font-semibold">#{item.price}</span>
                  </p>

                  <label>
                    Quantity:{" "}
                    <select
                      className="text-black rounded px-2 py-1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateOrderItem(
                          item.orderId,
                          item.menu_id,
                          parseInt(e.target.value),
                          item.customization
                        )
                      }
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>

                  <p className="flex justify-between">
                    Total: <span className="font-semibold">#{item.total}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1">
          <p className="text-2xl my-6">Order Summary</p>
          <div className="flex flex-col justify-center gap-4 bg-customGray p-3 rounded-md">
            <p className="flex justify-between">
              Total Quantity: <span className="font-semibold">{totalQuantity}</span>
            </p>
            <p className="flex justify-between">
              Base Total: <span className="font-semibold">#{baseTotal}</span>
            </p>

            {/* Show fees if applicable */}
            {orderType === "Dine-in" && (
              <p className="flex justify-between text-sm text-yellow-300">
                Table Fee: <span className="font-semibold">#{tableFee}</span>
              </p>
            )}

            {orderType === "Delivery" && (
              <p className="flex justify-between text-sm text-yellow-300">
                Delivery Fee: <span className="font-semibold">#{deliveryFee}</span>
              </p>
            )}

            <p className="flex justify-between font-bold text-lg mt-2">
              Grand Total: <span className="font-semibold">#{grandTotal}</span>
            </p>

            {/* Order Type Selection */}
            <div className="flex flex-col gap-3 text-sm">
              <label className="font-semibold">
                Order Type:
                <select
                  className="w-full mt-1 px-2 py-1 rounded bg-white text-black"
                  value={orderType}
                  onChange={(e) => {
                    setOrderType(e.target.value);
                    setTableNumber("");
                    setAddress("");
                  }}
                >
                  <option value="Takeaway">Takeaway</option>
                  <option value="Dine-in">Dine-in</option>
                  <option value="Delivery">Delivery</option>
                </select>
              </label>

              {orderType === "Dine-in" && (
                <label className="font-semibold">
                  Select Table:
                  <select
                    className="w-full mt-1 px-2 py-1 rounded bg-white text-black"
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                  >
                    <option value="">-- Select a table --</option>
                    {availableTables.filter((t)=> t.isReserved == false).map((table) => (
                      <option key={table._id} value={table._id}>
                        {table.categoryId.name} - {`${table.capacity} seats`} - #{table.price}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              {orderType === "Delivery" && (
                <label className="font-semibold">
                  Delivery Address:
                  <textarea
                    className="w-full mt-1 px-2 py-1 rounded bg-white text-black"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your delivery address"
                    rows={3}
                  />
                </label>
              )}
            </div>

            <button
              onClick={handleCheckout}
              disabled={loading || nonEmptyOrders.length === 0}
              className={`mt-6 px-4 py-3 rounded font-bold text-xl transition-colors ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-400 hover:bg-yellow-300 text-black"
              }`}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
