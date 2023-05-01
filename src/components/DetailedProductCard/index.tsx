import { Card, CardMedia, Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { IDetailedProductCard } from "./detailedProductCard.type";
import { useCart } from "../../contexts/cart";

const DetailedProductCard: FC<IDetailedProductCard> = ({ product }) => {
  const { addItemToCart } = useCart();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: "60px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <CardMedia component="img" image={product.image} alt={product.name} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          marginLeft: "20px",
        }}
      >
        <Box>
          <Typography variant="h5" color="black" component="div">
            {product?.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#6587FE" }} component="div">
            {product?.price}₺
          </Typography>
        </Box>
        <Box sx={{ marginTop: "20px" }}>
          <Button
            sx={{ backgroundColor: "#2A59FE", width: "100%" }}
            size="large"
            variant="contained"
            onClick={() => addItemToCart(product)}
          >
            Add to Cart
          </Button>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ marginTop: "20px" }}
          >
            {product?.description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default DetailedProductCard;
