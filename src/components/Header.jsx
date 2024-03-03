import {
  Avatar,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import skart from "../assets/Images/skart.png";




export default function Header() {
  return (
    <div>
      <>
        <Typography
          variant="h6"
          style={{
            backgroundColor: "#212121",
            color: "white",
            padding: "15px",
            textAlign: "center",
          }}
        >
          25% OFF on all Men's Shirt & Jeans.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item lg={2} md={2}>
            <img
              src={skart}
              alt=""
              style={{ height: "120px", width: "180px", paddingLeft: "10px" }}
            />
          </Grid>
          <Grid item lg={6} md={7}>
            <Typography
              variant="h4"
              style={{
                textAlign: "left",
                alignContent: "center",
                padding: "35px",
                color: "#1565C0",
                fontWeight: "bold",
              }}
            >
              India's
              <span style={{ fontSize: "24px", color: "#1B5E20" }}>
                {" "}
                online shopping platform...
              </span>{" "}
              <span style={{ fontSize: "14px", color: "#FF6D00" }}>
                भारत के आपन ऑनलाइन दुकान
              </span>
            </Typography>
          </Grid>
          <Grid item lg={3} md={2}>
            <div
              className="example"
              style={{ margin: "auto", maxWidth: "350px" }}
            >
              <input
                type="text"
                placeholder="Search here .."
                name="search2"
                // style={inputStyle}
                style={{
                  width: "80%",
                  padding: "10px",
                  fontSize: "17px",
                  float: "left",
                  background: "#f1f1f1",
                  borderRadius: "10px",
                  marginTop: "25px",
                  borderColor: "2px blue",
                }}
              />
            </div>
          </Grid>

          <Grid item lg={1} md={1}>
            <Stack direction="row" spacing={2}>
              <Avatar
                style={{
                  height: "65px",
                  marginTop: "25px",
                  width: "65px",
                  justifyContent: "center",
                  alignSelf: "center",
                  marginTop: "20px",
                  float: "right",
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </>
    </div>
  );
}
