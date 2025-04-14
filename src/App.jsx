import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import { useEffect, useState } from "react";
import Loader from "./components/SpicyLoader";

import OurChef from "./pages/OurChef";
import ChefDetail from "./pages/ChefDetail";
import Footer from "./footer/Footer";
import BookTable from "./pages/BookTable";

import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Testimonial from "./pages/Testimonial";
import Menu from "./pages/Menu";

// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./pages/CheckoutForm";

// const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY_HERE");


function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="font-merienda">
      {!loading && <Navbar />}

      <div className="">
        <div className="">
          <Navbar />
        </div>

        <CustomCursor />

        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route
              path="/cart-checkout"
              element={
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              }
            /> */}
            <Route path="/chefs" element={<OurChef />} />
            <Route path="/chefs/:id" element={<ChefDetail />} />
            <Route path="/reservation" element={<BookTable />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        )}
        <div className="">
          {!loading && <Footer />}
        </div>
      </div>
    </div>

  );
}

export default App;