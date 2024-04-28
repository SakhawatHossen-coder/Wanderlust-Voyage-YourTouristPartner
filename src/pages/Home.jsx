import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import TouristSpots from "../components/TouristSpots";
import { useLoaderData } from "react-router-dom";
import CountrySection from "../components/countries/CountrySection";
// import Navbar from "../"
const Home = () => {
  const touristData=useLoaderData()
  return (
    <div>
      {/* <Slider /> */}
      <TouristSpots touristData={touristData}/>
      <div className="divider"></div>
      <CountrySection/>
    <Newsletter/>
    <Faq/>
    </div>
  );
};

export default Home;
