import React from "react";
import PropTypes from "prop-types";
import MuiButton from "@mui/material/Button";
import clsx from "clsx";
import "./button.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <MuiButton className={clsx(className && `${className}`)} {...props}>
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
