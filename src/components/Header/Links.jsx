import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Stack, Typography } from "@mui/material";

import OutdoorAdvertisingModal from "../modals/OutdoorAdvertisingModal";
import AboutUsModal from "../modals/AboutUsModal";

const Links = ({ closeDrawerOnClick }) => {
  const [openOutdoorAdsModal, setOpenOutdoorAdsModal] = useState(false);
  const [openAboutUsModal, setOpenAboutUsModal] = useState(false);

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
      <OutdoorAdvertisingModal
        open={openOutdoorAdsModal}
        setOpen={setOpenOutdoorAdsModal}
      />
      <AboutUsModal open={openAboutUsModal} setOpen={setOpenAboutUsModal} />
    </>
  );
};

Links.propTypes = {
  closeDrawerOnClick: PropTypes.func,
};

export default Links;
