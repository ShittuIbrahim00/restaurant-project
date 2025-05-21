import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import { useEffect, useState } from "react";
import Loader from "./components/SpicyLoader";
import { Toaster } from "react-hot-toast";
import OurChef from "./pages/OurChef";
import ChefDetail from "./pages/ChefDetail";
import Footer from "./footer/Footer";
import BookTable from "./pages/BookTable";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./pages/CheckoutForm";
import { Analytics } from "@vercel/analytics/react";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

// Other Pages
import Testimonial from "./pages/Testimonial";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import MenuItemDetail from "./pages/MenuItemDetail";
<<<<<<< HEAD
import Inventry from "./pages/Inventry";
=======
import AllTable from "./ReserveTable/AllTable";
import OrderDetails from "./ReserveTable/orderDetail";

// Protected Routes
import ProtectedRoute from "./routes/ProtectedRoute";
import TableResevationPayment from "./pages/TableReservationPayment";
import ReservationDetails from "./ReserveTable/ReservationDetails";
import PaymentStatus from "./ReserveTable/PaymentSuccess";

const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY_HERE");
>>>>>>> 1683f6612b8ad7343e11c47054d6a73794b1071e

function App() {
  const [loading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Paths without Navbar and Footer
  const hideNavAndFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <div className="font-merienda min-h-screen overflow-hidden">
      <Toaster/>
      {!loading && !hideNavAndFooter && <Navbar />}
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route 
            path="/cart-checkout" 
            element={
              <ProtectedRoute>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </ProtectedRoute>
            } 
          />
          <Route path="/chefs" element={<OurChef />} />
          <Route path="/reservepayment" element={<TableResevationPayment />} />
          <Route path="/chefs/:id" element={<ChefDetail />} />
          <Route 
            path="/reservation/:id" 
            element={<ProtectedRoute><BookTable /></ProtectedRoute>} 
          />
          <Route path="/service" element={<Service />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/reservation-details" element={<ReservationDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
<<<<<<< HEAD
          <Route path="/menudetail" element={<MenuItemDetail />} />
          <Route path="/inventry" element={<Inventry />} />
=======
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/menu" element={<Menu />} />

          {/* Special Routes without Navbar/Footer */}
          <Route path="/tables" element={<AllTable />} />
          <Route path="/orderDetail" element={<OrderDetails />} />

          {/* Catch-all */}
>>>>>>> 1683f6612b8ad7343e11c47054d6a73794b1071e
          <Route path="*" element={<Error404 />} />
        </Routes>
      )}
      {!loading && !hideNavAndFooter && <Footer />}
      <Analytics />
    </div>
  );
}

export default App;
