import { FC, useState } from "react";
import { IHeader } from "./header.type";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Person2Icon from "@mui/icons-material/Person2";
import WorkIcon from "@mui/icons-material/Work";
import { useCart } from "../../contexts/cart";
import { useNavigate } from "react-router";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

export const Header: FC<IHeader> = ({ title, onChange }) => {
  const { calculateTotalPrice } = useCart();
  return (
    <Box
      sx={{
        backgroundColor: "#2a59fe",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#2a59fe",
        }}
        children={
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
            <Typography
              variant="h4"
              noWrap
              align="center"
              component="div"
              sx={{ flex: 1, fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <TextField
              sx={{ flex: 1, backgroundColor: "white", margin: "5px" }}
              placeholder="Search"
              name="search"
              onChange={onChange}
              variant="standard"
              id="Search"
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "grey" }} />,
                disableUnderline: true,
              }}
            />
            <Box
              sx={{
                flex: 1,
              }}
            ></Box>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "light",
                }}
              >
                <WorkIcon />
                {calculateTotalPrice()}₺
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontWeight: "light",
                  flex: 1,
                }}
              >
                <Person2Icon />
                Kerem
              </Typography>
            </Box>
          </Box>
        }
      />
    </Box>
  );
};
