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
    <Box
      sx={{
        width: "250px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: "40px",
        justifyContent: "center",
      }}
    >
      {cartItems.map((cartItem) => (
        <Box
          key={cartItem.id}
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "50px",
            justifyContent: "space-between",
            margin: "5px",
            paddingBottom: "5px",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="subtitle1"
              color="black"
              component="div"
              margin="0"
            >
              {cartItem.product?.name}
            </Typography>
            <Typography variant="subtitle1" color="#4F76FE" component="div">
              {cartItem.product?.price}
            </Typography>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ flex: 1 }}
              aria-label="upload picture"
              component="label"
              onClick={() => removeItemFromCart(cartItem.product.id)}
            >
              <RemoveIcon color="action" />
            </IconButton>
            <Box
              color="primary"
              sx={{
                backgroundColor: "#2A59FE",
                color: "white",
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "5px",
              }}
            >
              <Typography>{cartItem.quantity}</Typography>
            </Box>
            <IconButton
              sx={{ flex: 1 }}
              aria-label="upload picture"
              component="label"
              onClick={() => addItemToCart(cartItem.product)}
            >
              <AddIcon color="action" />
            </IconButton>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default Cart;
