import { FC } from "react";
import { IHeader } from "./header.type";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Person2Icon from "@mui/icons-material/Person2";
import WorkIcon from "@mui/icons-material/Work";
import { useCart } from "../../contexts/cart";

export const Header: FC<IHeader> = ({ title }) => {
  const { calculateTotalPrice } = useCart();

  return (
    <Box >
      <AppBar
        sx={{display:"flex", flexDirection:"row"}}
        position="static"
        children={
          <Box sx={{ flexGrow: 1, display:"flex", flexDirection:"row"}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              {title}
            </Typography>
            <input />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <WorkIcon />
              
              {calculateTotalPrice()}
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Person2Icon />
              Kerem
            </Typography>
          </Box>
        }
      />
    </Box>
  );
};
