import React from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogTitle from "@mui/material/DialogTitle";

const PopupModel = ({ children, onClose, ...props }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...props}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

PopupModel.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

export default PopupModel;
