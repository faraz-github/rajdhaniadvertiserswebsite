import { Stack, Typography } from "@mui/material";

const LocationsCovered = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" gutterBottom>
        Locations Covered
      </Typography>
      <Stack spacing={1}>
        <Typography variant="body2" color="primary">
          Uttar Pradesh
        </Typography>
        <Typography variant="body2" color="primary">
          Madhya Pradesh
        </Typography>
        <Typography variant="body2" color="primary">
          Rajasthan
        </Typography>
        <Typography variant="body2" color="primary">
          Bihar
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LocationsCovered;
