import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import PortfolioPictureGridCard from "./PortfolioPictureGridCard";

const PortfolioSection = () => {
  const isNotDesktop = useMediaQuery("(max-width:1200px)");

  return (
    <Box sx={{ backgroundColor: "secondary.main", mt: { xs: 5, md: 10 } }}>
      <Container disableGutters sx={{ py: { xs: 5, md: 10 } }}>
        <Container disableGutters={isNotDesktop ? false : true}>
          <Typography
            variant="h2"
            color="primary"
            fontSize={{ xs: 24, md: 32 }}
            textAlign="center"
            gutterBottom
          >
            See Your Brand Shine Bright!
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            fontSize={{ xs: 14, md: 16 }}
            textAlign="center"
            gutterBottom
          >
            Imagine your brand front and center, catching eyes and sparking
            conversations. This is how your ad will look—bold, vibrant, and
            impossible to ignore!
          </Typography>

          <Grid container spacing={2} mt={5}>
            <PortfolioPictureGridCard
              imageURL={"/images/hoarding3-bg-min.jpg"}
            />
            <PortfolioPictureGridCard
              imageURL={"/images/billboard2-bg-min.jpg"}
            />
            <PortfolioPictureGridCard
              imageURL={"/images/hoarding2-bg-min.jpg"}
            />
            <PortfolioPictureGridCard
              imageURL={"/images/billboard-bg-min.jpg"}
            />
            <PortfolioPictureGridCard imageURL={"/images/signage-bg-min.jpg"} />
            <PortfolioPictureGridCard imageURL={"/images/wallad-bg-min.jpg"} />
          </Grid>
        </Container>
        <Typography
          variant="h2"
          color="primary"
          fontSize={{ xs: 24, md: 32 }}
          textAlign="center"
          gutterBottom
          marginTop={{ xs: 5, md: 10 }}
        >
          Our Happy Clients !
        </Typography>
        <Container
          disableGutters={isNotDesktop ? false : true}
          sx={{
            overflow: "hidden",
            overflowX: { xs: "scroll", md: "auto" },
          }}
        >
          <Stack
            direction={"row"}
            spacing={{ xs: 10, md: 5 }}
            mt={5}
            justifyContent={"space-between"}
          >
            <img
              src="/images/temp-client-logo-1.svg"
              alt="Logo"
              style={{
                width: 150,
                height: "auto",
              }}
            />
            <img
              src="/images/temp-client-logo-2.svg"
              alt="Logo"
              style={{
                width: 150,
                height: "auto",
              }}
            />
            <img
              src="/images/temp-client-logo-3.svg"
              alt="Logo"
              style={{
                width: 150,
                height: "auto",
              }}
            />
            <img
              src="/images/temp-client-logo-4.svg"
              alt="Logo"
              style={{
                width: 150,
                height: "auto",
              }}
            />
            <img
              src="/images/temp-client-logo-5.svg"
              alt="Logo"
              style={{
                width: 150,
                height: "auto",
                paddingRight: "16px",
              }}
            />
          </Stack>
        </Container>
      </Container>
    </Box>
  );
};

export default PortfolioSection;

// TODO attribution
// https://unsplash.com/photos/3-men-standing-beside-blue-and-white-building-during-daytime-nL_vJ82pTTo
// https://unsplash.com/photos/gray-flat-screen-television-0RpNG7OpWNM
// https://unsplash.com/photos/a-large-advertisement-on-the-side-of-a-building-v3QHk9RhTjU
// https://unsplash.com/photos/charlies-round-the-corner-ice-cream-signage-TXlvDNMu2LI
// https://unsplash.com/photos/architectural-photography-of-coca-cola-tarpaulin-60CpKQ7u-yE
// https://unsplash.com/photos/stanley-building-signage-KmLBd1bY6pM
