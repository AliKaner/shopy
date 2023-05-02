import { ChangeEvent, FC, useMemo, useState } from "react";
import Box from "@mui/material/Box/Box";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControl from "@mui/material/FormControl/FormControl";
import FormLabel from "@mui/material/FormLabel/FormLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import { Skeleton } from "@mui/material";
import { IOptionForm } from "./filterForm.types";
import SearchIcon from "@mui/icons-material/Search";
const OptionForm: FC<IOptionForm> = ({
  checked,
  title,
  options,
  isLoading,
  id,
  onCheckedChange,
}) => {
  const [search, setSearch] = useState<string>("");

  const currentOptions = useMemo(
    () => options.filter((f) => f.includes(search)),
    [options, search]
  );

  const onSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        width: "250px",
        height: "200px",
        margin: "30px 30px 100px 30px",
      }}
    >
      <FormControl>
        <FormLabel sx={{ color: "grey" }} component="legend">
          {title}
        </FormLabel>
      </FormControl>
      {isLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Box
          sx={{
            position: "relative",
          }}
        >
          <FormGroup
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "10px",
              boxShadow:
                "1px 0px 1px -1px rgba(0, 0, 0, 0.4), -1px 0px 1px -1px rgba(0, 0, 0, 0.4), 0px 4px 4px -2px rgba(0, 0, 0, 0.4)",
            }}
          >
            <TextField
              placeholder="Search"
              name="search"
              value={search}
              onChange={onSearchChange}
              variant="standard"
              id="Search"
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: "grey" }} />,
                disableUnderline: true,
              }}
            />
            <Box
              sx={{
                overflow: "auto",
                width: "240px",
                scrollbarWidth: "unset",
                scrollbarColor: "grey #f2f2f2",
                height: "200px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {isLoading
                ? [...Array(options.length)].map(() => (
                    <Skeleton
                      variant="rectangular"
                      width={210}
                      height={320}
                      sx={{ margin: 1 }}
                    />
                  ))
                : currentOptions?.map((option) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checked.includes(option)}
                          sx={{ color: "#2A59FE" }}
                          onChange={onCheckedChange}
                          name={id}
                          value={option}
                        />
                      }
                      label={option}
                    />
                  ))}
            </Box>
          </FormGroup>
        </Box>
      )}
    </Box>
  );
};

export default OptionForm;
