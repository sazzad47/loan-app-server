import { Chip, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import React, { cloneElement, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const FormCheckBox = ({ label }) => {
  const theme = useTheme();
  const ref = useRef(null);
  const [check, setCheck] = useState(false);

  const { email } = useSelector((store) => store.auth);

  const checkRef = ref.current?.checked;

  const onChange = () => {
    setCheck((prev) => !prev);
  };

  useEffect(() => {
    if (checkRef) {
      onChange();
    } else {
      setCheck(false);
    }
  }, [checkRef]);

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
            control={
              <Checkbox checked={check} onChange={onChange} name="check-box" />
            }
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
            color={
              !email &&
              label.label !==
                "Signup for Credit Hero Score and Share Login Details"
                ? "default"
                : "primary"
            }
            component={Button}
            disabled={
              !email &&
              label.label !==
                "Signup for Credit Hero Score and Share Login Details"
            }
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
