import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ServiceCard from "./ServiceCard";

const ServicesSlider = () => {
  const isNotDesktop = useMediaQuery("(max-width:1200px)");
  return (
    <Box>
      <Container disableGutters={isNotDesktop ? false : true}>
        <Typography
          variant="h2"
          fontSize={{ xs: 24, md: 32 }}
          color="secondary"
          gutterBottom
        >
          Services we offer
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ xs: 14, md: 16 }}
          color="secondary"
          gutterBottom
        >
          Our services include billboards, transit ads, and custom signage
          designed to amplify your brand&apos;s presence.
        </Typography>
      </Container>
      <Container
        disableGutters={isNotDesktop ? false : true}
        sx={{ overflow: "hidden", overflowX: { xs: "scroll", md: "auto" } }}
      >
        <Stack
          direction={"row"}
          spacing={2}
          mt={2}
          justifyContent={"space-between"}
        >
          <ServiceCard
            imageURL="/images/hoarding-bg-min.jpg"
            title="Hoarding"
          />
          <ServiceCard imageURL="/images/signage-bg-min.jpg" title="Signage" />
          <ServiceCard
            imageURL="/images/wallad-bg-min.jpg"
            title="Transit Ad | Wall Ad"
          />
          <ServiceCard
            imageURL="/images/billboard-bg-min.jpg"
            title="Billboard"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesSlider;

// TODO attribution
// https://unsplash.com/photos/brown-and-white-concrete-building-under-blue-sky-during-daytime-AOLKavvbYM0   -   hoarding-bg-min.jpg
// https://unsplash.com/photos/stanley-building-signage-KmLBd1bY6pM   -   signage-bg-min.jpg
// https://unsplash.com/photos/charlies-round-the-corner-ice-cream-signage-TXlvDNMu2LI   -   wallad-bg-min.jpg
// https://unsplash.com/photos/architectural-photography-of-coca-cola-tarpaulin-60CpKQ7u-yE   -   billboard-bg-min.jpg
