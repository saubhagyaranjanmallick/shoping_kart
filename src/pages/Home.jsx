import React from "react";
import Products from "../components/Products";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <section>
        <Typography sx={{ p: 2 }} fontWeight="" color="primary" variant="h6">
          Hi, Welcome to Shoping Kart
        </Typography>

        <Products />
      </section>
    </div>
  );
};

export default Home;
