import React from "react";

import "./App.css";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiTable } from "./components/MuiTable";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiList } from "./components/MuiList";
// import { MuiChip } from "./components/MuiChip";
// import { MuiTextField } from "./components/MuiTextField";
// import { MuiSelect } from "./components/MuiSelect";
// import { MuiRadioButton } from "./components/MuiRadioButton";
// import { MuiCheckbox } from "./components/MuiCheckbox";
// import { MuiRating } from "./components/MuiRating";
// import { MuiSwitch } from "./components/MuiSwitch";
// import { MuiAutocomplete } from "./components/MuiAutocomplete";
// import { MuiLayout } from "./components/MuiLayout";
// import { MuiCard } from "./components/MuiCard";
// import { MuiAccordion } from "./components/MuiAccordion";
// import { MuiImageList } from "./components/MuiImageList";
// import { MuiNavbar } from "./components/MuiNavbar";
// import { MuiLink } from "./components/MuiLink";
// import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs";
// import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiLoadingButton } from "./components/MuiLoadingButton";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiDatePicker } from "./components/MuiDatePicker";
// import { MuiDateRangePicker } from "./components/MuiDateRangePicker";
// import { MuiTabs } from "./components/MuiTabs";
// import { MuiTimeline } from "./components/MuiTimeline";
// import { MuiMasonry } from "./components/MuiMasonry";
// import { MuiResponsiveness } from "./components/MuiResponsiveness";
// import MuiButton from "./components/MuiButton";
// import MuiTypograpy from "./components/MuiTypograpy";

import { createTheme, colors, ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* ^^ THIS PROVIDES MUI WITH LOCALIZED DATES */}
        <div className="App">
          {/* <MuiTable /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiLink /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
