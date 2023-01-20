import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import SignatureStyle from "./DigitalSignature/SignatureStyle";

const steps = [
  "Create a Signature",
  "Upload Photo ID",
  "Upload Proof of Address",
];

const DigitalSignature = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    checked: checked,
  }));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <Box sx={{ margin: "1.5em" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        <DialogContent>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {activeStep === 1 ? (
                  <SignatureStyle />
                ) : activeStep === 2 ? (
                  <>Step 2</>
                ) : (
                  <>Step 3</>
                )}
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
                    disabled={activeStep === 1}
                    onClick={handleBack}
                    sx={{
                      textTransform: "none",
                      background: theme.palette.grey[300],
                    }}
                  >
                    Back
                  </Button>

                  <Button
                    onClick={handleNext}
                    sx={{
                      textTransform: "none",
                      background: theme.palette.primary.main,
                      color: theme.palette.grey[100],
                      ":hover": {
                        background: theme.palette.primary.light,
                      },
                    }}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </DialogContent>
        {/*  <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default forwardRef(DigitalSignature);
