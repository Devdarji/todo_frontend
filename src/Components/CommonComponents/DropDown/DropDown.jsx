import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
// import clsx from "clsx";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormHelperText from "@mui/material/FormHelperText";

const DropDown = (props) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth={props.fullWidth && true} error={props.error}>
          <InputLabel required={props.required}>{props.label}</InputLabel>
          <Select
            id={props.id}
            className={props.className}
            label={props.label}
            value={props.value}
            onChange={props.handleChange}
            MenuProps={MenuProps}
            {...props}
          >
            {props.item.map((v, key) => (
              <MenuItem value={typeof v === "object" ? v[0] : v} key={key}>
                {typeof v === "object" ? v[1] : v}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{props.helpertext}</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

DropDown.propTypes = {
  label: PropTypes.node.isRequired,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  item: PropTypes.array,
  helpertext: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  id: PropTypes.string,
};

export default DropDown;
