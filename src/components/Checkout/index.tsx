import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useCart } from "../../contexts/cart";

const Checkout = () => {
  const { calculateTotalPrice } = useCart();
  const { emptyCart } = useCart();
  return (
    <Box sx={{
      width: "250px",
      backgroundColor:"#FFFFFF",
      boxShadow:"1px 0px 1px -1px rgba(0, 0, 0, 0.4), -1px 0px 1px -1px rgba(0, 0, 0, 0.4), 0px 4px 4px -2px rgba(0, 0, 0, 0.4)",
      justifyContent: "center",
      margin:"40px"
    }}>
      <Box sx={{display:"flex", flexDirection:"row",padding:"10px 10px 0 10px"}}>
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
        sx={{color:"#486FFE", fontWeight:"bold"}}
        component="div"
        align="left"
      >
        {`${(calculateTotalPrice())}₺`}
      </Typography>
      </Box>
      <Box sx={{display:"flex", flexDirection:"row",padding:"10px"}}>
      <Button
        size="large"
        sx={{backgroundColor:"#2A59FE",width:"100%", }}
        variant="contained"
        onClick={() => emptyCart()}
      >
        Checkout
      </Button>
      </Box>
    </Box>
  );
};

export default Checkout;
