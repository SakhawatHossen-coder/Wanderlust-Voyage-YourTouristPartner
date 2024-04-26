import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Faq from "../components/Faq";
// import Navbar from "../"
const Home = () => {
  return (
    <div>
      <Slider />
    <Newsletter/>
    <Faq/>
    </div>
  );
};

export default Home;
