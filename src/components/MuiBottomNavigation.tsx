import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorites } from "./Favorites";
import { Home as HomeComponent } from "./Home";
import { Profile } from "./Profile";
import { Home, Favorite, Person } from "@mui/icons-material";
import { useState } from "react";

export const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      {value === 0 && <HomeComponent />}
      {value === 1 && <Favorites />}
      {value === 2 && <Profile />}
      <BottomNavigation
        sx={{ width: "100%", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<Home />} />
        <BottomNavigationAction label="Favorite" icon={<Favorite />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </>
  );
};
