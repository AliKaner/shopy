import { FC } from "react";
import { Grid } from "@mui/material";
import { IProduct } from "../../api/models/IProduct";
import ProductCard from "../ProductCard";

interface IProductList {
  products: IProduct[];
}

const ProductList: FC<IProductList> = ({ products }) => {
  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
