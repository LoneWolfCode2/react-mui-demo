import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { Stack } from "@mui/material";

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
        Fetch Data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
        loading
      >
        Save
      </LoadingButton>
    </Stack>
  );
};
