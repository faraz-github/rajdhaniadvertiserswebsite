import { useState } from "react";
import { Link } from "react-router-dom";

import { Stack, Typography } from "@mui/material";
import OutdoorAdvertisingModal from "../modals/OutdoorAdvertisingModal";

const QuickLinks = () => {
  const [openOutdoorAdsModal, setOpenOutdoorAdsModal] = useState(false);

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="h5" color="primary" gutterBottom>
          Quick Links
        </Typography>
        <Stack spacing={1}>
          <Typography
            variant="body2"
            color="primary.light"
            sx={{
              "&:hover": {
                color: "primary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setOpenOutdoorAdsModal(true)}
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
      <OutdoorAdvertisingModal
        open={openOutdoorAdsModal}
        setOpen={setOpenOutdoorAdsModal}
      />
    </>
  );
};

export default QuickLinks;