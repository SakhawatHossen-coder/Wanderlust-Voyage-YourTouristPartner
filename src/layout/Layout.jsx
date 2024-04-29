import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation";
import Footer from "../components/Footer";
// import Navigation from "swiper/modules";

const Layout = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* <Navigation /> */}
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
