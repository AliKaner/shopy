import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useCart } from "../../contexts/cart";

const Checkout = () => {
  const { calculateTotalPrice } = useCart();
  const { emptyCart } = useCart();
  return (
    <Box>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Total Price:
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        color="blue"
        component="div"
        align="left"
      >
        {calculateTotalPrice()}
      </Typography>

      <Button
        size="large"
        color="primary"
        variant="contained"
        onClick={() => emptyCart()}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Checkout;
