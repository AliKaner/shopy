import { useState, useEffect } from "react";
import { IProduct } from "../../api/models/IProduct";
import { getProducts } from "../../api/routes/products";
import { Layout } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { Box, Grid } from "@mui/material";
import FilterForm from "../../components/FilterForm";
import SortRadio from "../../components/SortRadio";

export default function ListPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    try {
      const allProducts = await getProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <>
        <Box sx={{display:"flex", flexDirection:"row", gap:"20px"}}>
          <Box>
            <SortRadio/>
            <FilterForm title={"brand"}/>
            <FilterForm title={"model"}/>
          </Box>
          <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={1} columns={4}>
              {products.map((product) => (
                <Grid xs={1}>
                <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </>
    </Layout>
  );
}
