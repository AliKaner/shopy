import { FC } from "react";
import { ICart } from "./cart.types";
import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../contexts/cart";
import Typography from "@mui/material/Typography/Typography";

const Cart: FC<ICart> = () => {
  const { addItemToCart } = useCart();
  const { removeItemFromCart } = useCart();
  const { cartItems } = useCart();
  return (
    <Box>
      {cartItems.map((cartItem) => (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {cartItem.product?.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {cartItem.product?.price}
            </Typography>
          </Box>
          <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
            <IconButton
              sx={{ flex: 1 }}
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => removeItemFromCart(cartItem.product.id)}
            >
              <input hidden accept="image/*" type="file" />
              <RemoveIcon />
            </IconButton>
            <Box
              color="primary"
              sx={{
                width: 50,
                height: 50,
                textAlign: "center",
                backgroundColor: "primary.dark",
                color: "white",
                flex: 1,
              }}
            >
              {cartItem.quantity}
            </Box>
            <IconButton
              sx={{ flex: 1 }}
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => addItemToCart(cartItem.product)}
            >
              <input hidden accept="image/*" type="file" />
              <AddIcon />
            </IconButton>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
