import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        // ^^  THIS WORKS BECUASE CONTINER BOX IS 250 PX
        SelectProps={{
          multiple: true,
        }}
        //   ^^ THIS CAUSES COMPONENT TO TAKE IN VALUE AS AN ARRAY OF STRINGS SO MULTIPLE OPTIONS CAN BE SELECTED
        size="small"
        color="secondary"
        helperText="Please Select your Country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
// fetch list of countries from api to generate a list of countries
