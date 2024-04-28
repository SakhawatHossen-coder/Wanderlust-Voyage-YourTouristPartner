import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import TouristSpots from "../components/TouristSpots";
import { useLoaderData } from "react-router-dom";
import CountrySection from "../components/countries/CountrySection";
import { Typography } from "@material-tailwind/react";
// import Navbar from "../"
const Home = () => {
  const touristData=useLoaderData()
  return (
    <div>
      <div className="my-10">
        <Typography variant="lead" className="font-bold flex justify-center items-center pop">
          Ignite Your Wanderlust: Travel the World with Us!
        </Typography>
      </div>
      <Slider />
      <TouristSpots touristData={touristData} />
      <div className="divider"></div>
      <CountrySection />
      <Newsletter />
      <Faq />
    </div>
  );
};

export default Home;
