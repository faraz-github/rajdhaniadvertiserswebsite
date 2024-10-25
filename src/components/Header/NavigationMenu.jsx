import { useState } from "react";

import { Box, IconButton, Drawer } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";

import Links from "./Links";

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <IconButton size="large" onClick={toggleDrawer(true)}>
          <MenuRoundedIcon
            fontSize="large"
            sx={{ color: (theme) => theme.palette.brandRed }}
          />
        </IconButton>
      </Box>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw", // Full width
            height: "100vh", // Full height
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: (theme) => theme.palette.background.default,
          },
        }}
      >
        <IconButton
          color="secondary"
          size="large"
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 20, right: 20 }}
        >
          <CloseIcon
            fontSize="large"
            sx={{ color: (theme) => theme.palette.brandRed }}
          />
        </IconButton>
        <Links closeDrawerOnClick={closeDrawer} />
      </Drawer>
    </>
  );
};

export default NavigationMenu;
