import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { Button, Card,  Chip,  Grid, Typography } from "@mui/material";
import cart from "../assets/Images/cart.gif";
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import NavBar from "../components/NavBar";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //states
  const [emptycart, setEmptycart] = useState(false);
  const [itemquantity, setItemquantity] = useState(1);

  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleAdd = (product) => {
    navigate("/address");
  };
  const totalPrice = products.reduce((sum, item) => sum + item.price * itemquantity, 0);  

  const handleAddClick = () => {
    setItemquantity(itemquantity + 1);
  };

  const handleRemoveClick = () => {
    setItemquantity(itemquantity - 1);
  };


  useEffect(() => {
    setEmptycart(products.length === 0);
  }, [products]);

  return (
    <div>
      <NavBar/>

      <h3 sx={{ p: 2 }}>All Cart Items</h3>

      <div className="cartWrapper">
        {products.map((product) => (
          <>
            <div key={product.id} className="cartCard">
              <Grid container >
                <Grid item lg={2}>
                  <img src={product.image} alt="" />
                </Grid>
                <Grid item lg={2} sx={{mt:2}}>
                  <Button><RemoveIcon onClick={handleRemoveClick}/></Button><Chip size="large" label={itemquantity} />
                  <Button><AddIcon onClick={handleAddClick}/></Button>
                </Grid>
                <Grid item lg={3}>
                  <h4>{product.title}</h4>
                </Grid>
                <Grid item lg={3}>
                  <h4 >Items Price : <span style={{fontWeight:"normal"}}> &nbsp; Rs &nbsp;{product.price * itemquantity}</span></h4>
                </Grid>
               
                <Grid item lg={2} sx={{ p:2 }}>
                  <Button
                    color="warning"
                    variant="contained"
                    sx={{ textTransform: "initial" , backgroundColor:"#fca50f" }}
                    size="large"
                    onClick={() => handleAdd(product)}
                  >
                   Save For Later
                  </Button>
                  &nbsp;
                  <Button
                    variant="contained"
                    size="large"
                    color="error"
                    sx={{ textTransform: "initial" }}
                    
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </div>
            <br />
          </>
        ))}

            
      </div>

      {emptycart ? (
        <div className="card">
          <img src={cart} alt="" style={{ height: "150px", width: "150px" }} />
          <Typography fontFamily="cursive" variant="h5" fontWeight="bold" color="primary">
            Your cart is empty now 🥲
          </Typography>
          <br />
        </div>
      ) : (
        <Card sx={{p:1}}>
                  <Grid container spacing={1}>
                    <Grid item lg={3}>
                     <Typography variant="h6" >Total No of  Items : {products.length}</Typography> 
                    </Grid>
                    <Grid item lg={3}>
                    <Typography variant="h6" > Total Amount : {totalPrice} </Typography>
                    </Grid>
                    <Grid item lg={4}>
                    <Typography variant="h6" > Delivery Charges : <span style={{color:"#119013"}}>FREE</span> </Typography>
                    </Grid>
                 
                    <Grid item lg={2}>
                      <Button size="large" onClick={handleAdd} style={{float:"right"}} variant="contained" color="warning" >Place Order</Button>
                    </Grid>

                  </Grid>
              </Card>
        
      )}
    </div>
  );
};

export default Cart;
