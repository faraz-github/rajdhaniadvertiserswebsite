import PropTypes from "prop-types";
import { Box, Stack, Typography } from "@mui/material";

const FeedbackCard = ({ clientName, clientFeedback }) => {
  return (
    <Box
      padding={2}
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: (theme) => theme.shape.borderRadius,
        minHeight: 200,
        maxHeight: 200,
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h5" color="primary">
          {clientName}
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding={2}
          borderRadius={32}
          sx={{ backgroundColor: "primary.dark" }}
        >
          <img
            src="/images/client.svg"
            alt="Client"
            style={{
              width: 16,
              height: "auto",
            }}
          />
        </Box>
      </Stack>
      <Typography variant="body2" color="primary" fontSize={14} mt={2}>
        {clientFeedback}
      </Typography>
    </Box>
  );
};

FeedbackCard.propTypes = {
  clientName: PropTypes.string.isRequired,
  clientFeedback: PropTypes.string.isRequired,
};

export default FeedbackCard;
