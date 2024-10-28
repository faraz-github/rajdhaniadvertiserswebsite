import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CompanyDetails from "./CompanyDetails";
import QuickLinks from "./QuickLinks";
import PopularServices from "./PopularServices";
import LocationsCovered from "./LocationsCovered";
import ContactDetails from "./ContactDetails";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", mt: { xs: 5, md: 10 } }}>
      <Container sx={{ py: { xs: 2, md: 5 } }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 8, md: 4, lg: 3 }}>
            <CompanyDetails />
          </Grid>
          <Grid size={{ xs: 4, md: 4, lg: 2 }}>
            <QuickLinks />
          </Grid>
          <Grid size={{ xs: 6, md: 4, lg: 2 }}>
            <PopularServices />
          </Grid>
          <Grid size={{ xs: 6, md: 4, lg: 2 }}>
            <LocationsCovered />
          </Grid>
          <Grid size={{ xs: 12, md: 8, lg: 3 }}>
            <ContactDetails />
          </Grid>
          <Grid size={12}>
            <Typography
              variant="body2"
              color="primary.light"
              textAlign={"center"}
              gutterBottom
              mt={2}
            >
              copyrights © 2024 Rajdhani Advertisers
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
