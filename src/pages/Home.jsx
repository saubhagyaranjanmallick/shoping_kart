import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import { Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slider";
import Header from "../components/Header";

const Home = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener(<Header />, handleScroll);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      
        {showNavBar ? <NavBar /> : <Header />}
        <Slideshow />

        <div style={{ padding: "10px" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            fontFamily="sans-serif"
            color="primary"
          >
            Our Best Products....
          </Typography>
          <br /> <Products />
        </div>
      
    </div>
  );
};

export default Home;
