import {
  Grid,
  Card,
  Typography,
  Divider,
  Button,
  Chip,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import offer from "../assets/Images/offer.jpg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import {useNavigate} from "react-router-dom";


const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProceed, setShowProceed] = useState(false);

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);  


  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <Card sx={{ p: 1 }}>
            <Grid container spacing={2} sx={{ p: 1 }}>
              <Grid item lg={1}>
                <Chip variant="extended" label="01" />
              </Grid>
              <Grid item lg={9}>
                <Typography variant="h6" color="#858383" fontWeight="bold">
                  LOGIN <DoneIcon fontSize="small" color="primary" />
                  <br />
                  <span
                    style={{
                      color: "#262626",
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Saubhagya Ranjan Mallick{" "}
                  </span>
                  &nbsp;
                  <span style={{ fontWeight: "normal", color: "#121212" }}>
                    {" "}
                    +91 8984140247
                  </span>
                </Typography>
              </Grid>
              <Grid item lg={2}>
                <Button
                  variant="outlined"
                  size="medium"
                  style={{ float: "right" }}
                >
                  CHANGE
                </Button>
              </Grid>
            </Grid>
          </Card>
          <br />

          {showProceed ? (
            <>
              <Card sx={{ p: 1 }}>
                <Grid container spacing={2} sx={{ p: 1 }}>
                  <Grid item lg={1}>
                    <Chip variant="extended" label="02" />
                  </Grid>
                  <Grid item lg={9}>
                    <Typography variant="h6" color="#858383" fontWeight="bold">
                      DELIVERY ADDRESS{" "}
                      <DoneIcon fontSize="small" color="primary" />
                      <br />
                    </Typography>
                    <Typography sx={{ mt: 1 }} variant="subtitle1">
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        Saubhagya Ranjan Mallick
                      </span>
                      &nbsp; Plot No- 55/2799 , Sai Vihar, Chandrasekharpur,
                      Bhubaneswar, Odisha - 751021
                    </Typography>
                  </Grid>
                  <Grid item lg={2}>
                    <Button
                      variant="outlined"
                      size="medium"
                      style={{ float: "right" }}
                    >
                      CHANGE
                    </Button>
                  </Grid>
                </Grid>
              </Card>

              <br />

              <Card sx={{ minHeight: "250px" }}>
                <Typography
                  variant="h6"
                  sx={{
                    p: 1,
                    fontWeight: "bold",
                    backgroundColor: "#2962cb",
                    color: "#fff",
                  }}
                >
                  <Chip
                    sx={{ backgroundColor: "#fff", color: "#3073f0" }}
                    label="03"
                  />{" "}
                  &nbsp;&nbsp; ORDER SUMMARY
                </Typography>
                <br/>
                {products.map((product) => (
          <>
            <div key={product.id} className="cartCard">
              <Grid container >
                <Grid item lg={2}>
                  <img src={product.image} alt="" />
                </Grid>
                <Grid item lg={2} sx={{mt:2}}>
                  {/* <Button><RemoveIcon onClick={handleRemoveClick}/></Button><Chip size="large" label={itemquantity} /> */}
                  {/* <Button><AddIcon onClick={handleAddClick}/></Button> */}
                </Grid>
                <Grid item lg={3}>
                  <h4>{product.title}</h4>
                </Grid>
                <Grid item lg={3}>
                  <h4>Items Price : <span style={{fontWeight:"normal"}}> &nbsp; Rs &nbsp;{product.price}</span></h4>
                </Grid>
               
                <Grid item lg={2} sx={{ p:2 }}>
                  <Button
                    variant="outlined"
                    size="medium"
                    color="error"
                    sx={{ textTransform: "initial",fontWeight: "bold" }}
                    onClick={() => handleRemove(product.id)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
              <Card></Card>
            </div>
            <br />
          </>
        ))}


              </Card>
              <br />
              <Card sx={{ p: 1 }}>
                <Grid container spacing={2} sx={{ p: 1 }}>
                  <Grid item lg={10}>
                    <Typography sx={{ p: 1 }}>
                      Order confirmation will be sent to{" "}
                      <span style={{ fontWeight: "bold" }}>
                        saubhagya@gmail.com
                      </span>{" "}
                    </Typography>
                  </Grid>

                  <Grid item lg={2}>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ float: "right" }}
                      color="warning"
                    >
                      continue
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </>
          ) : (
            <Card sx={{ minHeight: "300px" }}>
              <Typography
                variant="h6"
                sx={{
                  p: 1,
                  fontWeight: "bold",
                  backgroundColor: "#2962cb",
                  color: "#fff",
                }}
              >
                <Chip
                  sx={{ backgroundColor: "#fff", color: "#3073f0" }}
                  label="02"
                />{" "}
                &nbsp;&nbsp; DELIVERY ADDRESS
              </Typography>

              <br />
              <FormControl sx={{ p: 2 }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label={
                      <>
                        <Stack direction="row" spacing={2}>
                          <Typography fontWeight="bold" variant="h6">
                            Saubhagya Ranjan Mallick
                          </Typography>
                          <Button
                            variant="contained"
                            size="small"
                            fontWeight="bold"
                            disabled
                          >
                            Home
                          </Button>
                          <Typography variant="subtitle1" fontWeight="bold">
                            8984140247
                          </Typography>
                        </Stack>
                        <Typography sx={{ mt: 1 }} variant="subtitle1">
                          Plot No- 55/2799 , Sai Vihar, Chandrasekharpur,
                          Bhubaneswar, Odisha - 751021
                        </Typography>
                        <br />
                        <Button
                          size="small"
                          variant="contained"
                          color="warning"
                          onClick={() => setShowProceed(true)}
                        >
                          Delivery Here
                        </Button>
                        &nbsp;
                        <Button size="small" variant="outlined" color="info">
                          Edit
                        </Button>
                      </>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </Card>
          )}
        </Grid>
        <Grid item lg={4}>
          <Card sx={{ p: 1 }}>
            <Typography
              sx={{ p: 0.5 }}
              variant="h6"
              color="#858383"
              fontWeight="bold"
            >
              PRICE DETAILS
            </Typography>
            <Divider />
            <Grid container sx={{ p: 2 }}>
              <Grid item lg={10}>
                <Typography variant="h6"> Price ({products.length} item)</Typography>
                <br />
                <Typography variant="h6"> Delivery Charges</Typography>
              </Grid>
              <Grid item lg={2}>
                <Typography variant="h6">
                  <CurrencyRupeeIcon
                    style={{ height: "17px", width: "20px" }}
                  />
                  {totalPrice}
                </Typography>
                <br />

                <Typography variant="h6" color="#0c9527">
                  FREE
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ p: 2 }}>
              <Grid item lg={10}>
                <Typography variant="h6" fontWeight="bold">
                  {" "}
                  Total Payable
                </Typography>
              </Grid>
              <Grid item lg={2}>
                <Typography variant="h6" fontWeight="bold">
                  <CurrencyRupeeIcon
                    style={{ height: "17px", width: "20px" }}
                  />
                 {totalPrice}
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Typography
              sx={{
                backgroundColor: "#f7f5e9",
                p: 1,
                color: "#147527",
                fontWeight: "bold",
              }}
              variant="h6"
            >
              Your Total Savings on this order Rs 209.
            </Typography>
          </Card>
          <br />
          <img
            src={offer}
            alt="offer"
            style={{
              width: "510px",
              height: "250px",
              justifyContent: "center",
            }}
          />
          <br />
          <Stack direction="row" spacing={1}>
            <VerifiedUserIcon fontSize="large" sx={{ color: "#6E6E6E" }} />
            <Typography fontWeight="bold" color="#6E6E6E" variant="body1">
              Safe and Secure Payments.Easy returns.100% Authentic Products
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Address;
