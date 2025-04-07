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
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutForm from "./pages/CheckoutForm";

// const stripePromise = loadStripe("pk_test_YOUR_PUBLIC_KEY_HERE");

import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import MenuItemDetail from "./pages/MenuItemDetail";

function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="font-merienda min-h-screen overflow-hidden">
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
            <Route path="/service" element={<Service/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/menudetail" element={<MenuItemDetail/>}/>
            <Route path="*" element={<Error404 />} />

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