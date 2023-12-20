import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Chip,
  Fab,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            // size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ height: 35, width: 35 }}
          >
            <ShoppingCartIcon />
          </IconButton>
          <Typography
            variant="subtitel2"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "28px" }}
          >
            S<span style={{fontSize: "20px"}}>hopping</span> K<span style={{fontSize: "20px"}} >art</span>
          </Typography>
          <Link className="navLink" to="/">
           <Fab variant="extended" size="small">&nbsp;&nbsp; Home &nbsp;&nbsp;</Fab> 
          </Link>&nbsp;
          
          <Link className="navLink" to="/cart">
          <Fab variant="extended" size="small">View Cart</Fab> 


          </Link>
         
            &nbsp;
            Cart Items : &nbsp;
            <Chip
            size="small"
            color="warning"
            label={items.length}
            sx={{p:1}}
              // style={{ backgroundColor: "#f0f0f0", color: "#121212" }}
            />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
