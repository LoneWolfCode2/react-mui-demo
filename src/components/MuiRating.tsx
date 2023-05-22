import { Rating, Stack, Slider } from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorder fontSize="inherit" />}
        readOnly
        // highlightSelectedOnly
      />
    </Stack>
  );
};
