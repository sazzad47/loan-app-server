import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import GetStarted from "./scoresignup/GetStarted";
import Signin from "./scoresignup/Signin";
import Signup from "./scoresignup/Signup";

const steps = ["Let's get you started", "Create an account", "Login"];

const ScoreSignup = (props, ref) => {
  const [open, setOpen] = useState(false);
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
              <Signin />
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => setActiveStep(2)}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    Don't have an account?
                  </Link>
                  |{" "}
                  <Link
                    href="#"
                    variant="body2"
                    /*   onClick={() => setActiveStep(2)} */
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    Forgot password
                  </Link>
                </Grid>
              </Grid>
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
                  <GetStarted />
                ) : activeStep === 2 ? (
                  <>
                    <Signup />
                    {activeStep === 2 && (
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid item>
                          <Link
                            href="#"
                            variant="body2"
                            onClick={() => setActiveStep(3)}
                            sx={{
                              textDecoration: "none",
                            }}
                          >
                            Already have an account? Sign in
                          </Link>
                        </Grid>
                      </Grid>
                    )}
                  </>
                ) : (
                  <Signin />
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
                    disabled={activeStep === steps.length}
                    sx={{
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

export default forwardRef(ScoreSignup);
