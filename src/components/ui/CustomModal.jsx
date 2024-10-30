import PropTypes from "prop-types";

import { Box, IconButton, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomModal = ({ width, height, open, setOpen, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
            sx={{ position: "absolute", top: "8px", right: "8px", zIndex: 112, }}
            
          >
            <CloseIcon />
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
  children: PropTypes.node,
};

export default CustomModal;
