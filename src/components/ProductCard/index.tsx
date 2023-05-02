import { IProductCard } from "./productCard.types";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router-dom";

const ProductCard: FC<IProductCard> = ({ product }) => {
  const { addItemToCart } = useCart();
  const navigate = useNavigate();

  const onCardClickHandle = () => {
    navigate(`/detail/${product.id}`);
  };

  return (
    <Card
      sx={{
        padding: "10px",
        margin: "5px",
        height: "320px",
        borderRadius: "0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box onClick={onCardClickHandle}>
          <CardMedia
            component="img"
            sx={{ width: "180px", height: "180px", margin: "auto" }}
            image={product.image}
            alt={product.name}
          />
          <Typography
            variant="subtitle1"
            sx={{ color: "#6587FE" }}
            component="div"
            align="left"
          >
            {product.price} ₺
          </Typography>
          <Typography
            variant="subtitle1"
            color="bold"
            align="left"
            sx={{ margin: 0 }}
          >
            {product.name}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Button
            size="large"
            sx={{ backgroundColor: "#2A59FE", width: "100%" }}
            variant="contained"
            onClick={() => addItemToCart(product)}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
