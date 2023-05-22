import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Typography variant="body2">
        <Link href="#">Link</Link>
      </Typography>
      <Typography variant="h6">
        <Link color="secondary" href="#" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
};
