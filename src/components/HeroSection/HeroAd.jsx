import { useState } from "react";

import { Box, Stack, Typography } from "@mui/material";

import { CustomRedButton } from "../ui/CustomButtons";

import AdNowModal from "../modals/AdNowModal";

const HeroAd = () => {
  const [openAdNowModal, setOpenAdNowModal] = useState(false);

  const getItNowHandler = () => {
    setOpenAdNowModal(true);
  };

  return (
    <>
      <Box
        sx={{
          mx: "auto",
          py: 2,
          px: 5,
          backgroundColor: (theme) => theme.palette.brandOrange,
          maxWidth: 800,
          borderRadius: (theme) => theme.shape.borderRadius,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          textAlign={"center"}
        >
          <Typography variant="h1" fontSize={{ xs: 64, md: 96 }}>
            🙌🏻
          </Typography>
          <Stack maxWidth={400}>
            <Typography
              variant="h2"
              fontSize={{ xs: 24, md: 32 }}
              color="primary"
              gutterBottom
            >
              Get Outdoor Ad Today!
            </Typography>
            <Typography
              variant="body2"
              fontSize={{ xs: 14, md: 16 }}
              color="primary"
            >
              Make a bold impression! Elevate your brand with stunning outdoor
              advertising. Click to get started!
            </Typography>
          </Stack>
          <CustomRedButton
            buttonTitle="Get It Now !"
            onClickHandler={getItNowHandler}
          />
        </Stack>
      </Box>
      <AdNowModal open={openAdNowModal} setOpen={setOpenAdNowModal} />
    </>
  );
};

export default HeroAd;
