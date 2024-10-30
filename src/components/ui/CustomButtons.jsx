import PropTypes from "prop-types";
import { Button } from "@mui/material";

const CustomRedButton = ({
  buttonTitle,
  disableElevation,
  onClickHandler,
  disabled,
}) => {
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
      disabled={disabled}
    >
      {buttonTitle}
    </Button>
  );
};

const CustomRedOutlinedButton = ({ buttonTitle, onClickHandler, disabled }) => {
  return (
    <Button
      variant={"outlined"}
      sx={{
        borderColor: (theme) => theme.palette.brandRed,
        color: (theme) => theme.palette.brandRed,
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      onClick={onClickHandler}
      type="submit"
      disabled={disabled}
    >
      {buttonTitle}
    </Button>
  );
};

CustomRedButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  disableElevation: PropTypes.bool,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};
CustomRedOutlinedButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
};

export { CustomRedButton, CustomRedOutlinedButton };
