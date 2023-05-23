import { Stack, CircularProgress, LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
export const MuiProgress = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={value} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={value} />
    </Stack>
  );
};
