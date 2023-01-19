import { Chip, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { cloneElement, useRef } from "react";

const FormCheckBox = ({ label }) => {
  const theme = useTheme();
  const ref = useRef(null);

  return (
    <>
      <FormGroup>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                color: theme.palette.grey[700],
              },
              input: {
                border: "1px",
              },
            }}
            label={label.label}
          />
          <Chip
            color="primary"
            component={Button}
            disableRipple
            onClick={() => ref.current?.open()}
            size="small"
            label="Complete now"
            sx={{
              textTransform: "none",
              ":hover": {
                background: theme.palette.primary.light,
              },
            }}
          />
          {cloneElement(label.dialog, { ref })}
        </Box>
      </FormGroup>
    </>
  );
};

export default FormCheckBox;
