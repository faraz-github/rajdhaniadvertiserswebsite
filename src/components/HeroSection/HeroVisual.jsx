import { Box, useMediaQuery } from "@mui/material";

const HeroVisual = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <img
        src="/images/hero-billboard-min.png"
        alt="Hero"
        style={{
          width: isMobile ? 250 : 300,
          height: "auto",
        }}
        className="billboard"
      />
    </Box>
  );
};

export default HeroVisual;

// TODO attribution
// https://www.svgrepo.com/svg/270083/billboard
