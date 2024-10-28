import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" gutterBottom>
        Quick Links
      </Typography>
      <Stack spacing={1}>
        <Typography
          component={Link}
          to={"/outdoor-advertising"}
          variant="body2"
          color="primary.light"
          sx={{
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          Outdoor Advertising
        </Typography>
        <Typography
          component={Link}
          to={"/about-us"}
          variant="body2"
          color="primary.light"
          sx={{
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          About Us
        </Typography>
        <Typography
          component={Link}
          to={"/contact-us"}
          variant="body2"
          color="primary.light"
          sx={{
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          Contact Us
        </Typography>
        <Typography
          component={Link}
          to={"/ad-now"}
          variant="body2"
          color="primary.light"
          sx={{
            "&:hover": {
              color: "primary.dark",
            },
          }}
        >
          Ad Now
        </Typography>
      </Stack>
    </Stack>
  );
};

export default QuickLinks;
