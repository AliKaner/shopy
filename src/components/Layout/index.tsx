import { FC } from "react";
import { ILayout } from "./layout.type";
import Cart from "../Cart";
import Checkout from "../Checkout";
import { Header } from "../Header";
import { Box } from "@mui/material";

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
      <Header title="eteration" />
      <Box sx={{display:"flex",flexDirection:"row", marginTop:"30px" }}>
        <Box sx={{flex:3}}>{children}</Box>
        <Box sx={{ display: "flex", flexDirection:"column", alignContent:"flex-start", flex:1, flexFlow:"column wrap" }}>
          <Cart/>
          <Checkout />
        </Box>
      </Box>
    </Box>
  );
};
