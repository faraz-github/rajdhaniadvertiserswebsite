import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";

const PortfolioPictureGridCard = ({ imageURL }) => {
  return (
    <Grid
      size={{ xs: 12, sm: 6, md: 4 }}
      sx={{
        height: 300,
        backgroundImage: `url("${imageURL}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
    ></Grid>
  );
};

PortfolioPictureGridCard.propTypes = {
  imageURL: PropTypes.string,
};

export default PortfolioPictureGridCard;
