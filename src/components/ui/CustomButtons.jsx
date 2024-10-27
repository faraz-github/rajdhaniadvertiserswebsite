import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CustomRedButton = ({ buttonTitle, disableElevation, onClickHandler }) => {
  return (
    <Button
      variant={"contained"}
      disableElevation={disableElevation}
      sx={{
        background: (theme) => theme.palette.brandRed,
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      onClick={onClickHandler}
      type="submit"
    >
      {buttonTitle}
    </Button>
  );
};

const CustomRedOutlinedButton = ({ buttonTitle, onClickHandler }) => {
  return (
    <Button
      variant={"outlined"}
      sx={{
        borderColor: (theme) => theme.palette.brandRed,
        color: (theme) => theme.palette.brandRed,
        borderRadius: (theme) => theme.shape.borderRadius
      }}
      onClick={onClickHandler}
      type="submit"
    >
      {buttonTitle}
    </Button>
  );
};

CustomRedButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  disableElevation: PropTypes.bool,
  onClickHandler: PropTypes.func,
};
CustomRedOutlinedButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
};

export { CustomRedButton, CustomRedOutlinedButton };
