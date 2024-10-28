import { Stack, Typography } from "@mui/material";

const CompanyDetails = () => {
  return (
    <Stack spacing={4}>
      <img
        src="/images/ra-full-logo.svg"
        alt="Logo"
        style={{
          maxWidth: 160,
          height: "auto",
        }}
      />
      <Stack spacing={1}>
        <Typography variant="h5" color="primary" gutterBottom>
          Rajdhani Advertisers
        </Typography>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <img
            src="/images/location-icon.svg"
            alt="Logo"
            style={{
              maxWidth: 20,
              height: "auto",
            }}
          />
          <Typography variant="body2" color="primary">
            Lucknow, Uttar Pradesh, India
          </Typography>
        </Stack>
        <Typography variant="body2" color="primary">
          226021
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CompanyDetails;
