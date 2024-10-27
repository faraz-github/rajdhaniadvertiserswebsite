import { Box, Container, Stack, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";

import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import HeroCTA from "./HeroCTA";
import ServicesSlider from "./ServicesSlider";
import HeroAd from "./HeroAd";

const HeroSection = () => {
  const isNotDesktop = useMediaQuery("(max-width:1200px)");

  return (
    <Container disableGutters sx={{ mt: { xs: 5, md: 10 } }}>
      <Container disableGutters={isNotDesktop ? false : true}>
        <Grid container spacing={{ xs: 5, md: 0 }}>
          <Grid size={{ xs: 12, md: 6 }} display={"flex"} alignItems={"center"}>
            <Stack spacing={4}>
              <HeroText />
              <HeroCTA />
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            display={"flex"}
            justifyContent={"center"}
          >
            <HeroVisual />
          </Grid>
        </Grid>
      </Container>
      <Box mt={{ xs: 5, md: 0 }}>
        <ServicesSlider />
      </Box>
      <Container disableGutters={isNotDesktop ? false : true} sx={{mt: 5}}>
        <HeroAd />
      </Container>
    </Container>
  );
};

export default HeroSection;
