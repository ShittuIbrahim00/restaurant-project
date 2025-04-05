import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import OurChef from "./pages/OurChef";
import Footer from "./footer/Footer";
import ChefDetail from "./pages/ChefDetail";

function App() {
  return (
    <div className="min-h-full">
      <div className="">
        <Navbar />
      </div>
      <CustomCursor />
      {/* Defining Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chefs" element={<OurChef />} />
        <Route path="/chefs/:id" element={<ChefDetail/>}/>
        {/* You can add a default route for 404-like behavior */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
