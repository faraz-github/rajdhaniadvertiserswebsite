import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { Stack, Typography } from "@mui/material";

import OutdoorAdvertisingModal from "../modals/OutdoorAdvertisingModal";
import AboutUsModal from "../modals/AboutUsModal";
import AdNowModal from "../modals/AdNowModal";

const QuickLinks = () => {
  const [openOutdoorAdsModal, setOpenOutdoorAdsModal] = useState(false);
  const [openAboutUsModal, setOpenAboutUsModal] = useState(false);
  const [openAdNowModal, setOpenAdNowModal] = useState(false);

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
            variant="body2"
            color="primary.light"
            sx={{
              "&:hover": {
                color: "primary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setOpenAboutUsModal(true)}
          >
            About Us
          </Typography>
          <Typography
            component={HashLink}
            to={"#contact"}
            smooth
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
            variant="body2"
            color="primary.light"
            sx={{
              "&:hover": {
                color: "primary.dark",
                cursor: "pointer",
              },
            }}
            onClick={() => setOpenAdNowModal(true)}
          >
            Ad Now
          </Typography>
        </Stack>
      </Stack>
      <OutdoorAdvertisingModal
        open={openOutdoorAdsModal}
        setOpen={setOpenOutdoorAdsModal}
      />
      <AboutUsModal open={openAboutUsModal} setOpen={setOpenAboutUsModal} />
      <AdNowModal open={openAdNowModal} setOpen={setOpenAdNowModal} />
    </>
  );
};

export default QuickLinks;
