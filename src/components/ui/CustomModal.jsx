import PropTypes from "prop-types";

import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ width, height, open, setOpen, freeze, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
          },
        },
      }}
    >
      <>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: width,
            height: height,
            bgcolor: "background.paper",
            p: 2,
          }}
        >
          <IconButton
            color="error"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: "8px",
              right: "8px",
              zIndex: 112,
              display: freeze ? "none" : "flex",
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          {children}
        </Box>
      </>
    </Modal>
  );
};

CustomModal.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  freeze: PropTypes.bool,
  children: PropTypes.node,
};

export default CustomModal;
