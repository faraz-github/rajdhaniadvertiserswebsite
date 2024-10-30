import PropTypes from "prop-types";
import { useState } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CustomModal from "../ui/CustomModal";

const slides = [
  {
    slideCover: "/images/hoarding3-bg-min.jpg",
    slideTitle: "Hoarding Advertising",
    slideSubTitle: "Maximize Your Visibility!",
    slideDescription:
      "Capture the attention of passersby with vibrant hoarding ads. Perfect for construction sites or event promotions, hoardings provide a large canvas for your brand to shine.",
    slideFeatures: [
      "High Traffic Exposure",
      "Customizable Designs",
      "Durable Materials",
    ],
  },
  {
    slideCover: "/images/signage-bg-min.jpg",
    slideTitle: "Signage Advertising",
    slideSubTitle: "Make Your Mark!",
    slideDescription:
      "Effective signage directs customers and enhances brand visibility. From storefronts to event signs, quality signage can create a lasting impression.",
    slideFeatures: [
      "Increased Brand Recognition",
      "Variety of Formats",
      "Eye-Catching Designs",
    ],
  },
  {
    slideCover: "/images/billboard2-bg-min.jpg",
    slideTitle: "Transit Advertising",
    slideSubTitle: "Audience on the Move!",
    slideDescription:
      "Transit advertising captures the attention of commuters through bus and train ads. Reach diverse audiences while they travel and elevate your brand presence.",
    slideFeatures: [
      "High Exposure Rates",
      "Targeted Demographics",
      "Engaging Visuals",
    ],
  },
  {
    slideCover: "/images/wallad-bg-min.jpg",
    slideTitle: "Wall Advertising",
    slideSubTitle: "Transform Your Space!",
    slideDescription:
      "Wall advertising utilizes large, flat surfaces to promote your brand. Ideal for urban areas, these ads can turn any wall into a dynamic advertising opportunity.",
    slideFeatures: [
      "Large Format Options",
      "Urban Engagement",
      "Creative Artwork Opportunities",
    ],
  },
  {
    slideCover: "/images/billboard-bg-min.jpg",
    slideTitle: "Billboard Advertising",
    slideSubTitle: "Get Noticed from Afar!",
    slideDescription:
      "Billboard advertising offers unbeatable visibility. Positioned strategically along highways and busy streets, they are perfect for capturing attention quickly.",
    slideFeatures: ["Massive Reach", "High Impact Visibility", "24/7 Exposure"],
  },
];

const OutdoorAdvertisingModal = ({ open, setOpen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };
  return (
    <div>
      <CustomModal
        width={{ xs: 375, sm: 500, md: 1000 }}
        height={{ xs: 700, sm: 650, md: 600 }}
        open={open}
        setOpen={setOpen}
      >
        <Box
          sx={{
            position: "relative",
            height: { xs: "50%", md: "100%" },
            backgroundImage: `url(${slides[currentSlide].slideCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            zIndex: 111,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "30%",
              backgroundColor: (theme) => theme.palette.brandPurpleLight,
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={1}
            >
              <IconButton color="secondary" onClick={prevSlide}>
                <ArrowBackIcon />
              </IconButton>
              <Stack maxWidth={"60%"} spacing={1}>
                <Typography variant="h1" color="secondary">
                  {slides[currentSlide].slideTitle}
                </Typography>
                <Typography variant="h2" color="secondary">
                  {slides[currentSlide].slideSubTitle}
                </Typography>
                <Typography variant="body2" color="secondary">
                  {slides[currentSlide].slideDescription}
                </Typography>
              </Stack>
              <Stack height={"100%"} spacing={1}>
                {slides[currentSlide].slideFeatures.map((feature, index) => (
                  <Stack
                    key={index}
                    direction={"row"}
                    spacing={1}
                    alignItems={"center"}
                  >
                    <StarIcon
                      sx={{ color: (theme) => theme.palette.brandOrange }}
                    />
                    <Typography variant="h5" color="secondary">
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <IconButton color="secondary" onClick={nextSlide}>
                <ArrowForwardIcon />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.brandPurpleLight,
            display: { xs: "block", md: "none" },
            p: 2,
          }}
        >
          <Stack spacing={1}>
            <Typography variant="h1" fontSize={32} color="secondary">
              {slides[currentSlide].slideTitle}
            </Typography>
            <Typography variant="h2" fontSize={20} color="secondary">
              {slides[currentSlide].slideSubTitle}
            </Typography>
            <Typography variant="body2" fontSize={14} color="secondary">
              {slides[currentSlide].slideDescription}
            </Typography>
          </Stack>
          <Stack spacing={1} mt={2}>
            {slides[currentSlide].slideFeatures.map((feature, index) => (
              <Stack
                key={index}
                direction={"row"}
                spacing={1}
                alignItems={"center"}
              >
                <StarIcon
                  sx={{ color: (theme) => theme.palette.brandOrange }}
                />
                <Typography variant="h5" fontSize={14} color="secondary">
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={2} justifyContent={"center"} mt={2}>
            <IconButton color="secondary" onClick={prevSlide}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton color="secondary" onClick={nextSlide}>
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </Box>
      </CustomModal>
    </div>
  );
};

OutdoorAdvertisingModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};

export default OutdoorAdvertisingModal;
