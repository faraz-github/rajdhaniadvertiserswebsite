import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Stack, Typography } from "@mui/material";

const Links = ({ closeDrawerOnClick }) => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"center"}
      spacing={3}
    >
      <Typography
        component={Link}
        to={"/outdoor-advertising"}
        variant="body1"
        color="primary.light"
        sx={{
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={closeDrawerOnClick}
      >
        Outdoor Advertising
      </Typography>
      <Typography
        component={Link}
        to={"/about-us"}
        variant="body1"
        color="primary.light"
        sx={{
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={closeDrawerOnClick}
      >
        About Us
      </Typography>
      <Typography
        component={Link}
        to={"/contact-us"}
        variant="body1"
        color="primary.light"
        sx={{
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={closeDrawerOnClick}
      >
        Contact
      </Typography>
      <Typography
        component={Link}
        to={"/ad-now"}
        variant="body1"
        color="primary.light"
        sx={{
          "&:hover": {
            color: "primary.dark",
          },
        }}
        onClick={closeDrawerOnClick}
      >
        Ad Now
      </Typography>
    </Stack>
  );
};

Links.propTypes = {
  closeDrawerOnClick: PropTypes.func,
};

export default Links;
