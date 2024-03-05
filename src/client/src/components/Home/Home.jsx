import React from "react";
import CalAnce from "./CalAnce/CalAnce";
import AboutUs from "./Aboutus/AboutUs";
import Councils from "./Councils/Councils";
import Footer from "./Footer/Footer";
import "./home.css";

const Home = () => {
  return (
    <div className="home" style={{ overflowY: "scroll", zIndex: "1" }}>
      <CalAnce />
      <AboutUs />
      <Councils />
      <Footer />
    </div>
  );
};

export default Home;
