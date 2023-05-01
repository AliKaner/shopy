import { IFilterForm } from "./filterForm.types";
import { FC, useState } from "react";
import Box from "@mui/material/Box/Box";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";

const FilterForm: FC<IFilterForm> = ({ title,filter }) => {
  const [state, setState] = useState({
    Apple: true,
    Samsung: false,
    Huawei: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Apple, Samsung, Huawei } = state;
  return (
    <Box sx={{ width: "250px", height: "200px", margin:"30px"}}>
      <FormControl>
        <FormLabel sx={{color:"grey"}} component="legend">{title}</FormLabel>
      </FormControl>
      <FormGroup 
        sx={{
          padding:"10px",
          boxShadow:
            "1px 0px 1px -1px rgba(0, 0, 0, 0.4), -1px 0px 1px -1px rgba(0, 0, 0, 0.4), 0px 4px 4px -2px rgba(0, 0, 0, 0.4)",
        }}
      >
        <TextField
          placeholder="Search"
          variant="standard"
          id="search"
          InputProps={{
            startAdornment: (
              //searchIcon
              <></>
            ),
            disableUnderline: true,
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Apple}
              onChange={handleChange}
              name="Apple"
              value={"Apple"}
            />
          }
          label="Apple"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Samsung}
              onChange={handleChange}
              name="Samsung"
              value={"Samsung"}
            />
          }
          label="Samsung"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={Huawei}
              onChange={handleChange}
              name="Huawei"
              value={"Huawei"}
            />
          }
          label="Huawei"
        />
      </FormGroup>
    </Box>
  );
};

export default FilterForm;
