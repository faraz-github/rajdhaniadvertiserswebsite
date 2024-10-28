import { Stack, Typography } from "@mui/material";

const PopularServices = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" color="primary" gutterBottom>
        Popular Services
      </Typography>
      <Stack spacing={1}>
        <Typography variant="body2" color="primary">
          Hoardings
        </Typography>
        <Typography variant="body2" color="primary">
          Signage
        </Typography>
        <Typography variant="body2" color="primary">
          Transit Ads | Walls
        </Typography>
        <Typography variant="body2" color="primary">
          Billboards
        </Typography>
        <Typography variant="body2" color="primary">
          Digital Billboards
        </Typography>
      </Stack>
    </Stack>
  );
};

export default PopularServices;
