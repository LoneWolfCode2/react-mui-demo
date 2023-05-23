import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));
export const MuiResponsiveness = () => {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xs: 100, //applies when viewport width is greater than 0
            sm: 200, //greater than 600
            md: 300, //greater than 900
            lg: 400, //greater than 1200
            xl: 500, //greater than 1536
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <StyledBox />
    </>
  );
};
