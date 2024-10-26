import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const ServiceCard = ({ imageURL, title }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        width: "fit-content",
        padding: 2,
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      mt={2}
    >
      <Box
        sx={{
          width: 250,
          height: 100,
          position: "relative",
          backgroundImage: `url("${imageURL}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 101,
          }}
        />
        <Typography
          variant="h4"
          sx={{
            color: (theme) => theme.palette.brandOrange,
            position: "relative",
            zIndex: 102,
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

ServiceCard.propTypes = {
  imageURL: PropTypes.string,
  title: PropTypes.string,
};

export default ServiceCard;
