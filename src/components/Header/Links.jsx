import PropTypes from "prop-types";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import { Stack, Typography } from "@mui/material";

import OutdoorAdvertisingModal from "../modals/OutdoorAdvertisingModal";
import AboutUsModal from "../modals/AboutUsModal";
import AdNowModal from "../modals/AdNowModal";

const Links = ({ closeDrawerOnClick }) => {
  const [openOutdoorAdsModal, setOpenOutdoorAdsModal] = useState(false);
  const [openAboutUsModal, setOpenAboutUsModal] = useState(false);
  const [openAdNowModal, setOpenAdNowModal] = useState(false);

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        spacing={3}
      >
        <Typography
          variant="body1"
          color="primary.light"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "primary.dark",
            },
          }}
          onClick={() => setOpenOutdoorAdsModal(true)}
        >
          Outdoor Advertising
        </Typography>
        <Typography
          variant="body1"
          color="primary.light"
          sx={{
            cursor: "pointer",
            "&:hover": {
              color: "primary.dark",
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
          variant="body1"
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
      <OutdoorAdvertisingModal
        open={openOutdoorAdsModal}
        setOpen={setOpenOutdoorAdsModal}
      />
      <AboutUsModal open={openAboutUsModal} setOpen={setOpenAboutUsModal} />
      <AdNowModal open={openAdNowModal} setOpen={setOpenAdNowModal} />
    </>
  );
};

Links.propTypes = {
  closeDrawerOnClick: PropTypes.func,
};

export default Links;
