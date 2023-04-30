import { Card, CardMedia, Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import { IDetailedProductCard } from "./detailedProductCard.type";
import { useCart } from "../../contexts/cart";

const DetailedProductCard: FC<IDetailedProductCard> = ({ product }) => {
  const { addItemToCart } = useCart();
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {product?.name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {product?.price}
        </Typography>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </Button>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {product?.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default DetailedProductCard;
