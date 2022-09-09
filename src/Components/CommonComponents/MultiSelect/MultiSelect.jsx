import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
// import clsx from "clsx";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormHelperText from "@mui/material/FormHelperText";

const MultiSelect = (props) => {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      },
    },
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          fullWidth={props.fullWidth && true}
          error={props.error}
          required={props.required}
          disabled={props.disabled}
        >
          <InputLabel>{props.label}</InputLabel>
          <Select
            className={props.className}
            label={props.label}
            onChange={props.onChange}
            input={<OutlinedInput label={props.label} />}
            renderValue={(selected) => selected.join(", ")}
            defaultValue={props.defaultValue}
            multiple
            MenuProps={MenuProps}
            {...props}
          >
            {props.item.map((v) => (
              <MenuItem value={v} key={v}>
                <Checkbox
                  checked={props.value && props.value.indexOf(v) > -1}
                />
                <ListItemText primary={v} />
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{props.helpertext}</FormHelperText>
        </FormControl>
      </Box>
    </>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  item: PropTypes.array,
  helpertext: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MultiSelect;
