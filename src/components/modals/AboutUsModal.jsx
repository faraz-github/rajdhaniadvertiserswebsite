import PropTypes from "prop-types";
import CustomModal from "../ui/CustomModal";
import { Box, Stack, Typography } from "@mui/material";

const AboutUsModal = ({ open, setOpen }) => {
  return (
    <CustomModal
      width={{ xs: 375, sm: 500, md: 1000 }}
      height={{ xs: 700, sm: 650, md: 600 }}
      open={open}
      setOpen={setOpen}
    >
      <Box
        sx={{
          maxHeight: "100%",
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          fontSize={{ xs: 36, md: 40 }}
          gutterBottom
        >
          Who We Are
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          fontSize={{ xs: 20, md: 24 }}
          gutterBottom
        >
          At Rajdhani Advertisers, we specialize in creating impactful outdoor
          advertising solutions that connect brands with their audiences. With
          over 25 Years of industry experience, our dedicated team is committed
          to crafting compelling campaigns that drive results.
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          fontSize={{ xs: 20, md: 24 }}
          gutterBottom
          mt={5}
        >
          Our Mission
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontSize={{ xs: 14, md: 16 }}
          gutterBottom
        >
          Our mission is to transform outdoor advertising into a powerful
          storytelling medium. We help businesses enhance their visibility and
          achieve measurable success through innovative strategies.
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          fontSize={{ xs: 20, md: 24 }}
          gutterBottom
          mt={5}
        >
          We offer a range of outdoor advertising services, including:
        </Typography>
        <ul>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Hoardings Advertising
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Signage
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Transit Advertising
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Billboards & Digital Billboards
            </Typography>
          </li>
        </ul>
        <Typography
          variant="h3"
          color="primary"
          fontSize={{ xs: 20, md: 24 }}
          gutterBottom
          mt={5}
        >
          Why Choose Us?
        </Typography>
        <ul>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Expertise: A team with extensive experience across various
              industries.
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Innovation: We leverage the latest trends and technologies.
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Customer Focus: We collaborate closely with you to ensure your
              needs are met.
            </Typography>
          </li>
          <li>
            <Typography
              variant="h5"
              color="primary"
              fontSize={{ xs: 14, md: 16 }}
              gutterBottom
            >
              Results-Driven: We track performance to maximize impact.
            </Typography>
          </li>
        </ul>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={1}
          mt={5}
        >
          <Typography
            variant="h3"
            color="primary"
            fontSize={{ xs: 20, md: 24 }}
            gutterBottom
          >
            Rajdhani Advertisers is here to help you succeed.
          </Typography>
          <img
            src="/images/ra-full-logo.svg"
            alt="Logo"
            style={{
              maxWidth: 180,
              height: "auto",
            }}
          />
        </Stack>
      </Box>
    </CustomModal>
  );
};

AboutUsModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default AboutUsModal;
