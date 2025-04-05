import React from "react";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import MainDishes from "../components/MainDishes";
import DailyOffers from "../components/DailyOffers";
import Menu from "../components/Menu";
import ResponsiveVideo from "../components/SpicyVideo";
import Ingredients from "../components/Ingredients";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
       <Hero />
       <AboutUs />
       <MainDishes /> 
       <DailyOffers /> 
       <Menu />
       <ResponsiveVideo />
       <Ingredients />
       <Testimonials />
    </div>
  );
};

export default Home;
