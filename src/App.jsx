import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
<<<<<<< HEAD
=======
import OurChef from "./pages/OurChef";
import Footer from "./footer/Footer";
import ChefDetail from "./pages/ChefDetail";
>>>>>>> faa0656543913b2722bc969c56de73042fbb6e2a

function App() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
<<<<<<< HEAD
    <div>
      {!loading && <Navbar />}
=======
    <div className="min-h-full">
      <div className="">
        <Navbar />
      </div>
>>>>>>> faa0656543913b2722bc969c56de73042fbb6e2a
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
