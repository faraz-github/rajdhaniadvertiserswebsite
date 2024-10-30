import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Stack, Typography } from "@mui/material";

import OutdoorAdvertisingModal from "../modals/OutdoorAdvertisingModal";

const Links = ({ closeDrawerOnClick }) => {
  const [openOutdoorAdsModal, setOpenOutdoorAdsModal] = useState(false);

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
            "&:hover": {
              color: "primary.dark",
            },
          }}
          onClick={() => setOpenOutdoorAdsModal(true)}
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
      <OutdoorAdvertisingModal
        open={openOutdoorAdsModal}
        setOpen={setOpenOutdoorAdsModal}
      />
    </>
  );
};

Links.propTypes = {
  closeDrawerOnClick: PropTypes.func,
};

export default Links;
