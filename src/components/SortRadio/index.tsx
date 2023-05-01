import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Radio from '@mui/material/Radio';

export default function SortRadio() {
  return (
    <FormControl sx={{ width: "250px", height: "200px", margin:"0px 30px 0px 30px"}}>
      <FormLabel id="demo-radio-buttons-group-label">SortBy</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        sx={{
            padding:"10px",
            backgroundColor:"#FFFFFF",
            boxShadow:
              "1px 0px 1px -1px rgba(0, 0, 0, 0.4), -1px 0px 1px -1px rgba(0, 0, 0, 0.4), 0px 4px 4px -2px rgba(0, 0, 0, 0.4)",
          }}
      >
        <FormControlLabel value="-createAt" control={<Radio />} label="Old to new" />
        <FormControlLabel value="createAt" control={<Radio />} label="New to old" />
        <FormControlLabel value="price" control={<Radio />} label="Price hight to low" />
        <FormControlLabel value="-price" control={<Radio />} label="Price low to high" />
      </RadioGroup>
    </FormControl>
  );
};