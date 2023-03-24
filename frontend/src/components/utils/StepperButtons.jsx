import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";

const StepperButtons = ({ activeStep, handleBack, handleNext, steps }) => {
  const theme = useTheme();
  console.log(activeStep);

  return (
    <Box
      sx={{
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        pt: 2,
      }}
    >
      <Button
        color="inherit"
        disable={activeStep === 1}
        onClick={handleBack}
        sx={{
          display: `${activeStep === 1 ? "none" : "flex"}`,
          textTransform: "none",
          background: theme.palette.grey[300],
        }}
      >
        Back
      </Button>

      <Button
        onClick={handleNext}
        // disabled={activeStep === steps.length}
        sx={{
          display: `${activeStep === steps.length ? "none" : "flex"}`,
          textTransform: "none",
          background: theme.palette.primary.main,
          color: theme.palette.grey[100],
          ":hover": {
            background: theme.palette.primary.light,
          },
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default StepperButtons;
