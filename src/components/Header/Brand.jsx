import { Link } from "react-router-dom";

import { IconButton, Stack, Typography, useMediaQuery } from "@mui/material";

const Brand = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <IconButton component={Link} to={"/"} aria-label="logo">
        <img
          src="/images/ra-logo.svg"
          alt="Logo"
          style={{
            width: isMobile ? 30 : 40,
            height: "auto",
          }}
        />
      </IconButton>
      <Typography
        component={Link}
        to={"/"}
        variant="h3"
        sx={{
          background: (theme) =>
            `linear-gradient(to bottom, ${theme.palette.brandRed}, ${theme.palette.brandOrange})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          fontSize: {
            sm: 24,
            xs: 20,
          },
        }}
      >
        Rajdhani Advertisers
      </Typography>
    </Stack>
  );
};

export default Brand;
