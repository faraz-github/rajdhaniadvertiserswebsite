import { Box, Typography } from "@mui/material";

const HeroText = () => {
  return (
    <Box textAlign={{ xs: "center", md: "left" }}>
      <Typography
        variant="h2"
        fontSize={{ xs: 24, md: 32 }}
        color="secondary"
        gutterBottom
      >
        Catch Eyes, Drive Engagement
      </Typography>
      <Typography
        variant="h1"
        fontSize={{ xs: 36, md: 40 }}
        color="secondary"
        gutterBottom
      >
        Transform Your Space with Impactful Outdoor Advertising
      </Typography>
      <Typography
        variant="body2"
        fontSize={{ xs: 14, md: 16 }}
        color="secondary"
        gutterBottom
      >
        Elevate your brand visibility with our creative and strategic outdoor
        solutions. Let us help you make a lasting impression in any environment.
      </Typography>
    </Box>
  );
};

export default HeroText;
