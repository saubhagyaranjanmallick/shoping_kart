import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarRateIcon from "@mui/icons-material/StarRate";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <Card className="card" key={product.id}>
          <img src={product.image} alt="" style={{ height: "90px" , padding:"10px"}} />

          <CardContent style={{ minHeight: "120px" }}>
          <Grid container sx={{mt:3}}>
            <Grid item lg={9}>
            <Typography variant="h6" style={{textAlign:"left"}}>{product.title}</Typography>

            </Grid>
            <Grid item lg={3} sx={{mt:3}}>
            <Button
              variant="contained"
              size="small"
              color="success"
              style={{float: "right" , fontWeight:"bold" , fontSize:"16px" }}
            >{product.rating.rate}<StarRateIcon fontSize="small"/></Button>
            <br/>&nbsp;
            <Typography variant="body2" sx={{ color:"#6E6E6E" }} fontWeight="bold">{product.rating.count} ratings</Typography>
            </Grid>

          </Grid> 
          </CardContent>

          <CardActionArea>
            <Grid container>
              <Grid item lg={4} xs={4}>
                <Typography
                  variant="body2"
                  sx={{ color: "#1e5715", fontWeight: "bold" }}
                >
                  Special Price
                </Typography>
                <Typography variant="h5">
                  <CurrencyRupeeIcon fontSize="medium" />
                  {product.price}
                </Typography>
              </Grid>
              <Grid item lg={3} xs={3}></Grid>
              <Grid item lg={5} xs={5}>
                <Button
                  onClick={() => handleAdd(product)}
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "initial" }}
                  size="medium"
                >
                  <AddShoppingCartIcon fontSize="small" /> &nbsp; Add to cart
                </Button>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
};

export default Products;
