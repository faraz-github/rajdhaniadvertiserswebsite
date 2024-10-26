import { Box, Container, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

import HeroText from "./HeroText";
import HeroVisual from "./HeroVisual";
import HeroCTA from "./HeroCTA";
import ServicesSlider from "./ServicesSlider";
import HeroAd from "./HeroAd";

const HeroSection = () => {
  return (
    <Container disableGutters sx={{ mt: { xs: 5, md: 10 } }}>
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
      <Box mt={{ xs: 5, md: 0 }}>
        <ServicesSlider />
      </Box>
      <Box mt={5}>
        <HeroAd />
      </Box>
    </Container>
  );
};

export default HeroSection;
