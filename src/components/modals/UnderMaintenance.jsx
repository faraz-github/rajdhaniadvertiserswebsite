import CustomModal from "../ui/CustomModal";
import { Box, Stack, Typography } from "@mui/material";

const UnderMaintenance = () => {
  return (
    <CustomModal
      width={{ xs: 375, sm: 500, md: 1000 }}
      height={{ xs: 500, sm: 400, md: 400 }}
      open={true}
      freeze
    >
      <Box
        sx={{
          maxHeight: "100%",
          overflow: "hidden",
          padding: 5,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          color="primary"
          fontSize={{ xs: 36, md: 40 }}
          gutterBottom
        >
          We&apos;re Almost There!
        </Typography>
        <Typography
          variant="h3"
          color="primary"
          fontSize={{ xs: 20, md: 24 }}
          gutterBottom
          mt={5}
        >
          Our new site is almost ready and we can&apos;t wait to share it with
          you!
        </Typography>
        <Typography
          variant="h5"
          color="primary"
          fontSize={{ xs: 14, md: 16 }}
          gutterBottom
        >
          We’ve been working hard to bring you a fresh, improved experience —
          and it&apos;s coming soon. Be the first to explore it all.
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
          mt={5}
        >
          <img
            src="/images/ra-full-logo.svg"
            alt="Logo"
            style={{
              maxWidth: 180,
              height: "auto",
            }}
          />
        </Stack>
      </Box>
    </CustomModal>
  );
};

export default UnderMaintenance;
