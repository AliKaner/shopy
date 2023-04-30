import { IProductCard } from "./productCard.types";
import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useCart } from "../../contexts/cart";
import {useNavigate} from 'react-router-dom';
import { useDetail } from "../../contexts/detail";


const ProductCard: FC<IProductCard> = ({ product }) => {
  const { addItemToCart } = useCart();
  const {setProduct} = useDetail();
  const navigate = useNavigate();

  const onCardClickHandle =() => {
    setProduct(product);
    navigate('/detail');
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={onCardClickHandle}>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            color={blue[500]}
            component="div"
            align="left"
          >
            {product.price} ₺
          </Typography>
          <Typography variant="h6" color="bold" align="left">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => addItemToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
