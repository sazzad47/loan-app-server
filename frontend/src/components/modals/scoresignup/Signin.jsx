import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import { FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { login } from "../../../state/features/Auth/authActions";
import { clearAuthMessages } from "../../../state/features/Auth/authSlice";
import Spinner from "../../utils/Spinner";
import Modal from "@mui/material/Modal";
import api from "../../../state/api/api";

import { useContext, useRef } from "react";
import axios from "axios";
import { RecoveryContext } from "../../../App";
console.log(process.env.REACT_APP_API_KEY);

const initialValues = {
  email: "",
  password: "",
  password2: "",
};

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("This field is required!"),
  password: yup.string().required("This field is required!"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Signin({ setValue }) {
  const { setEmaill, setPage, emaill, setOTP } = useContext(RecoveryContext);
  const [openn, setOpenn] = React.useState(false);
  const handleOpen = () => setOpenn(true);
  const handleCloses = () => setOpenn(false);

  const bodyRef = useRef(document.body);

  const handleClick = () => {
    const event = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    bodyRef.current.dispatchEvent(event);
  };

  function nagigateToOtp() {
    if (emaill) {
      const OTP = Math.floor(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
      // console.log(`${process.env.REACT_APP_API_KEY}send_recovery_email`);
      try {
        console.log("first");
        api
          .post(`/auth/send_recovery_email`, {
            // .post(`${process.env.REACT_APP_API_KEY}send_recovery_email`, {
            OTP,
            recipient_email: emaill,
          })
          .then(() => setPage("otp"))
          .then(() => handleCloses())
          .catch(console.log);
        console.log("seecond");

        return;
      } catch (err) {
        console.log(err);
        return alert("Please enter your email");
      }
    }
  }

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [alertState, setAlertState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = alertState;

  const { loading, error, msg } = useSelector((store) => store.auth);
  const { email } = useSelector((store) => store.auth);
  console.log("messsage", msg);
  useEffect(() => {
    if (msg === "Success Login") {
      setValue(3);
    }
  }, [msg]);

  const {
    photo_ID,
    proof_of_address,
    consumer_office_freeze,
    lexis_nexis_freeze,
    positive_account,
  } = useSelector((store) => store.docs);

  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit(values) {
      const { email, password } = values;
      dispatch(login({ email, password }));
    },
  });

  const { getFieldProps, touched, errors, handleSubmit } = formik;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setAlertState({ ...alertState, open: false });
    dispatch(clearAuthMessages());
  };

  useEffect(() => {
    if (error) {
      setAlertState({ ...alertState, open: true });
    }
    if (msg) {
      setAlertState({ ...alertState, open: true });
      handleClick();
    }
  }, [alertState, error, msg]);

  return (
    <Container maxWidth="xs">
      <Modal
        open={openn}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter registered email
          </Typography>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={emaill}
            onChange={(e) => setEmaill(e.target.value)}
          />
          <Button variant="contained" onClick={() => nagigateToOtp()}>
            Sent OTP
          </Button>
        </Box>
      </Modal>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Box>
          <img height={25} src={Logo} alt="logo" />
        </Box> */}
        <Typography
          variant="h5"
          textAlign="center"
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            mb: 3,
            mt: 1,
          }}
        >
          Please Share Your Login Details
        </Typography>
        {loading && <Spinner />}
        <FormikProvider value={formik}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  variant="filled"
                  size="small"
                  {...getFieldProps("email")}
                  error={!!!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                  variant="filled"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  {...getFieldProps("password")}
                  error={!!!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Link
              onClick={() => handleOpen()}
              variant="body2"
              sx={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </Box>
        </FormikProvider>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
    </Container>
  );
}
