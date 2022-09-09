import React from "react";
import TextField from "@mui/material/TextField";

import "./input.scss";

const inputBox = (props) => {
  return (
    <>
      <TextField
        fullWidth
        error={props.error}
        id={props.id}
        label={props.label}
        variant="outlined"
        onChange={props.onChange}
        required={props.required}
        value={props.value}
        helperText={props.helperText}
        
      />
    </>
  );
};

export default inputBox;
