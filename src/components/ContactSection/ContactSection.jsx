import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import ContactFormVisual from "./ContactFormVisual";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <Container sx={{ py: { xs: 5, md: 10 } }}>
      <Typography
        variant="h2"
        color="secondary"
        fontSize={{ xs: 24, md: 32 }}
        textAlign="center"
        gutterBottom
      >
        Have Ideas or Questions? We&apos;re Here to Help!
      </Typography>
      <Box
        maxWidth={1000}
        sx={{
          backgroundColor: "secondary.main",
          borderRadius: (theme) => theme.shape.borderRadius,
          mx: "auto",
          mt: 5,
        }}
      >
        <Grid container>
          <Grid
            size={{ xs: 0, sm: 4 }}
            display={{ xs: "none", sm: "flex" }}
            padding={{ xs: 4, md: 5 }}
          >
            <ContactFormVisual />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 8 }}
            py={{ xs: 4, md: 5 }}
            pr={{ xs: 4, md: 5 }}
            pl={{ xs: 4, md: 0 }}
          >
            <ContactForm />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactSection;
