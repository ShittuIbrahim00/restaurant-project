import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <CustomCursor />
      
      {/* Defining Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* You can add a default route for 404-like behavior */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
