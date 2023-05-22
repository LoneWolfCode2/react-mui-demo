import { Stack, TextField, InputAdornment, Input } from "@mui/material";
import { useState } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  const [viewer, setViewer] = useState(false);
  const handleVisibility = () => {
    setViewer((prev) => !prev);
  };
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not shre your password with anyone"
          disabled
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="password"
          type={viewer ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick={handleVisibility}>
                {viewer ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      {/* new section */}
    </Stack>
  );
};
