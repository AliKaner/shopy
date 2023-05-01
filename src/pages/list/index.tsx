import { useState, useEffect } from "react";
import { IProduct } from "../../api/models/IProduct";
import { getProducts } from "../../api/routes/products";
import { Layout } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { Box, Grid, Pagination } from "@mui/material";
import FilterForm from "../../components/FilterForm";
import SortRadio from "../../components/SortRadio";
import ProductPagination from "../../components/Pagination";

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
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: "flex", flexDirection:"column", alignContent:"flex-end", flex:1, flexFlow:"column wrap" }}>
            <SortRadio />
            <FilterForm title={"brand"} filter={"brand"} />
            <FilterForm title={"model"} filter={"model"} />
          </Box>
          <Box sx={{ flexGrow: 1, flex: 2 }}>
            <Grid
              container
              spacing={1}
              columns={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 4 }}
            >
              {products.map((product) => (
                <Grid xs={1}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <Pagination />
          </Box>
        </Box>
      </>
    </Layout>
  );
}
