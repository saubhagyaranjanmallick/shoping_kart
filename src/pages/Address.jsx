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
  Modal,
  Box,
  Fade,
  TextField,
  InputAdornment,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import offer from "../assets/Images/offer.jpg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ContactlessIcon from "@mui/icons-material/Contactless";
import NavBar from "../components/NavBar";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 14,
  p: 4,
};

const Address = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProceed, setShowProceed] = useState(false);
  const [ordersummary, setOrdersummary] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleChange = () => {
    setOrdersummary(true);
  };
  const [paymentMethod, setPaymentMethod] = useState("COD"); // Default to Cash On Delivery
  const [showButton, setShowButton] = useState(false);
  const [showTextField, setShowTextField] = useState(false);
  const [showEMIButton, setShowEMIButton] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setPaymentMethod(selectedValue);
    setShowButton(selectedValue === "COD");
    setShowTextField(selectedValue === "Phonepay");
    setShowEMIButton(selectedValue === "EMI");
    setShowCaptcha(selectedValue === "COD");
  };
  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <NavBar />

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
                  style={{ float: "right", fontWeight: "bold" }}
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
                      style={{ float: "right", fontWeight: "bold" }}
                    >
                      CHANGE
                    </Button>
                  </Grid>
                </Grid>
              </Card>

              <br />
              {ordersummary ? (
                <>
                  <Card sx={{ p: 1 }}>
                    <Grid container spacing={2} sx={{ p: 1 }}>
                      <Grid item lg={1}>
                        <Chip variant="extended" label="03" />
                      </Grid>
                      <Grid item lg={9}>
                        <Typography
                          variant="h6"
                          color="#858383"
                          fontWeight="bold"
                        >
                          ORDER SUMMARY{" "}
                          <DoneIcon fontSize="small" color="primary" />
                          <br />
                          <span
                            style={{
                              color: "#262626",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            14 items
                          </span>
                        </Typography>
                      </Grid>
                      <Grid item lg={2}>
                        <Button
                          variant="outlined"
                          size="medium"
                          style={{ float: "right", fontWeight: "bold" }}
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
                        label="04"
                      />
                      &nbsp;&nbsp;PAYMENT OPTIONS
                    </Typography>
                    <br />

                    <Grid container>
                      <Grid item lg={7}>
                        <FormControl
                          style={{ paddingLeft: "10px", padding: "10px" }}
                        >
                          <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            onChange={handleOptionChange}
                          >
                            <FormControlLabel
                              value="COD"
                              control={<Radio />}
                              label="Cash On Delivery"
                            />
                            <FormControlLabel
                              value="EMI"
                              control={<Radio />}
                              label="Easy Monthly Installments (EMI)"
                            />
                            <FormControlLabel
                              value="Phonepay"
                              control={<Radio />}
                              label="BHIM UPI"
                            />
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                      <Grid item lg={5}>
                        {showButton && (
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            {showCaptcha && (
                              <div style={{ marginLeft: "10px" }}>
                                {/* Insert your CAPTCHA component here */}
                                <TextField size="small" label="Enter CAPTCHA" />
                              </div>
                            )}{" "}
                            &nbsp; &nbsp;
                            <Button
                              variant="contained"
                              size="medium"
                              color="warning"
                              onClick={() => console.log("ORDER HERE")}
                            >
                              Confirm Order
                            </Button>
                          </div>
                        )}

                        {showEMIButton && (
                          <Button
                            variant="contained"
                            color="warning"
                            onClick={() => console.log("EMI")}
                          >
                            EMI Options
                          </Button>
                        )}
                        {showTextField && (
                          <div>
                            <TextField
                              label="UPI ID"
                              size="small"
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <ContactlessIcon color="secondary" />
                                  </InputAdornment>
                                ),
                              }}
                            />
                            &nbsp; &nbsp; &nbsp;
                            <Button
                              variant="contained"
                              color="warning"
                              onClick={() => console.log("Pay now")}
                            >
                              Continue
                            </Button>
                          </div>
                        )}
                      </Grid>
                    </Grid>
                  </Card>
                  <br />
                  <Card sx={{ p: 1 }}>
                    <Grid container spacing={2} sx={{ p: 1 }}>
                      <Grid item lg={9}>
                        <Typography
                          variant="h6"
                          color="#6E6E6E"
                          fontWeight="bold"
                          style={{ p: 2 }}
                        >
                          <AddIcon fontSize="medium" />
                          &nbsp; Add Gift Card
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </>
              ) : (
                <>
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
                    <br />

                    {products.map((product) => (
                      <>
                        <div key={product.id} className="cartCard">
                          <Grid container>
                            <Grid item lg={2}>
                              <img src={product.image} alt="" />
                            </Grid>
                            <Grid item lg={2} sx={{ mt: 2 }}></Grid>
                            <Grid item lg={3}>
                              <h4>{product.title}</h4>
                            </Grid>
                            <Grid item lg={3}>
                              <h4>
                                Items Price :{" "}
                                <span style={{ fontWeight: "normal" }}>
                                  {" "}
                                  &nbsp; Rs &nbsp;{product.price}
                                </span>
                              </h4>
                            </Grid>

                            <Grid item lg={2} sx={{ p: 2 }}>
                              <Button
                                variant="outlined"
                                size="medium"
                                color="error"
                                sx={{
                                  textTransform: "initial",
                                  fontWeight: "bold",
                                }}
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
                            saubhagya99@gmail.com
                          </span>{" "}
                        </Typography>
                      </Grid>

                      <Grid item lg={2}>
                        <Button
                          variant="contained"
                          size="large"
                          style={{ float: "right" }}
                          color="warning"
                          onClick={handleChange}
                        >
                          Continue
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                  <br />
                  <Card sx={{ p: 1 }}>
                    <Grid container spacing={2} sx={{ p: 1 }}>
                      <Grid item lg={1}>
                        <Chip
                          variant="rectangle"
                          label="04"
                          style={{ color: "#2962FF", fontWeight: "bold" }}
                        />
                      </Grid>
                      <Grid item lg={11}>
                        <Typography
                          variant="h6"
                          color="#858383"
                          fontWeight="bold"
                        >
                          PAYMENT OPTIONS
                        </Typography>
                      </Grid>
                    </Grid>
                  </Card>
                </>
              )}
            </>
          ) : (
            <>
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
                            size="large"
                            variant="contained"
                            color="warning"
                            onClick={() => setShowProceed(true)}
                          >
                            Delivery Here
                          </Button>
                          &nbsp;
                          <Button size="large" variant="outlined" color="info">
                            Edit
                          </Button>
                        </>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Card>
              <br />
              <Card sx={{ p: 1 }}>
                <Grid container spacing={2} sx={{ p: 1 }}>
                  <Grid item lg={9}>
                    <Typography
                      variant="h6"
                      color="#2962FF"
                      fontWeight="bold"
                      style={{ p: 2 }}
                    >
                      <AddIcon fontSize="medium" /> Add a new address
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
              <br />
              <Card sx={{ p: 1 }}>
                <Grid container spacing={2} sx={{ p: 1 }}>
                  <Grid item lg={1}>
                    <Chip
                      variant="rectangle"
                      label="03"
                      style={{ color: "#2962FF", fontWeight: "bold" }}
                    />
                  </Grid>
                  <Grid item lg={11}>
                    <Typography variant="h6" color="#858383" fontWeight="bold">
                      ORDER SUMMARY
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
              <br />
              <Card sx={{ p: 1 }}>
                <Grid container spacing={2} sx={{ p: 1 }}>
                  <Grid item lg={1}>
                    <Chip
                      variant="rectangle"
                      label="04"
                      style={{ color: "#2962FF", fontWeight: "bold" }}
                    />
                  </Grid>
                  <Grid item lg={11}>
                    <Typography variant="h6" color="#858383" fontWeight="bold">
                      PAYMENT OPTIONS
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </>
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
                <Typography variant="h6">
                  {" "}
                  Price ({products.length} item)
                </Typography>
                <br />
                <Typography variant="h6"> Discount</Typography>
                <br />
                <Typography variant="h6"> Coupons for you</Typography>
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
                  -
                  <CurrencyRupeeIcon
                    style={{ height: "17px", width: "20px" }}
                  />
                  00.00
                </Typography>
                <br />
                <Typography variant="h6" color="#0c9527">
                  -
                  <CurrencyRupeeIcon
                    style={{ height: "17px", width: "20px" }}
                  />
                  10.00
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
          <Stack direction="row" spacing={1}>
            <VerifiedUserIcon fontSize="large" sx={{ color: "#6E6E6E" }} />
            <Typography fontWeight="bold" color="#6E6E6E" variant="body1">
              Safe and Secure Payments.Easy returns.100% Authentic Products
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Order Placed Successfully.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Address;
