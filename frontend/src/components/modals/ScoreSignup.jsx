import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useSelector } from "react-redux";
import StepperButtons from "../utils/StepperButtons";
import GetStarted from "./scoresignup/GetStarted";
import Signin from "./scoresignup/Signin";
import Signup from "./scoresignup/Signup";

const steps = ["Let's get you started", "Create an account", "Login"];

const ScoreSignup = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const [checked, setChecked] = React.useState(false);

  const { email, msg } = useSelector((store) => store.auth);

  useEffect(() => {
    if (msg === "user saved successfully") {
      window.location.reload();
    }
  }, [msg]);

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

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          setOpen(true);
        },

        checked,
      };
    },
    [checked]
  );

  useEffect(() => {
    if (email) {
      setChecked(true);
      handleClose();
    } else {
      setChecked(false);
    }
  }, [email]);

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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                </Grid>
              </Grid>
              <StepperButtons
                steps={steps}
                handleBack={handleBack}
                handleNext={handleNext}
                activeStep={activeStep}
              />
            </Box>
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
                <StepperButtons
                  steps={steps}
                  handleBack={handleBack}
                  handleNext={handleNext}
                  activeStep={activeStep}
                />
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
