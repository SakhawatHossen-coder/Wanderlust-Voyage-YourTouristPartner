import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
import TouristSpots from "../components/TouristSpots";
import { useLoaderData } from "react-router-dom";
import CountrySection from "../components/countries/CountrySection";
import { ThemeProvider, Typography } from "@material-tailwind/react";
import ThemeToggle from "../components/ThemeToggle";
// import Navbar from "../"
const Home = () => {
  const touristData = useLoaderData();

  //
  const theme = {
    extend: {
      colors: {
        primary: {
          light: "#007bff",
          dark: "#3f5775", // Example for dark mode
        },
        secondary: {
          light: "#ffc107",
          dark: "#ffc107", // You can set the same color for both modes
        },
        // ... other colors
      },
    },
  };

  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <ThemeProvider value={theme}> */}
      <div className="my-10">
        <Typography
          variant="lead"
          className="font-bold flex justify-center items-center pop"
        >
          Ignite Your Wanderlust: Travel the World with Us!
        </Typography>
      </div>
      <Slider />
      <TouristSpots touristData={touristData} />
      <div className="divider"></div>
      <CountrySection />
      <Newsletter />
      <Faq />
      {/* </ThemeProvider> */}
    </div>
  );
};

export default Home;
