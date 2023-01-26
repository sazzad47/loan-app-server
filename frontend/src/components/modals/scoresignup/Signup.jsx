import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Logo from "../../../assets/chslogo.png";
import { registerUser } from "../../../state/features/Auth/authActions";
import { clearAuthMessages } from "../../../state/features/Auth/authSlice";
import Spinner from "../../utils/Spinner";

const initialValues = {
  email: "",
  password: "",
  password2: "",
  first_name: "",
  last_name: "",
  state: "",
  zip_code: "",
  city: "",
  phone: "",
  ss_number: "",
  dob: "",
};

const userSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("This field is required!"),
  first_name: yup.string().required("This field is required!"),
  last_name: yup.string().required("This field is required!"),
  state: yup.string().required("This field is required!"),
  zip_code: yup.string().required("This field is required!"),
  city: yup.string().required("This field is required!"),
  phone: yup.string().required("This field is required!"),
  ss_number: yup.string().required("This field is required!"),
  dob: yup.string().required("This field is required!"),
  password: yup.string().required("This field is required!"),
  password2: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});

export default function Signup() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [alertState, setAlertState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = alertState;

  const { loading, error, msg } = useSelector((store) => store.auth);

  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit(values) {
      const {
        email,
        password,
        first_name,
        last_name,
        state,
        zip_code,
        city,
        phone,
        ss_number,
        dob,
      } = values;
      dispatch(
        registerUser({
          email,
          password,
          first_name,
          last_name,
          state,
          zip_code,
          city,
          phone,
          ss_number,
          dob,
        })
      );
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
    }
  }, [alertState, error, msg]);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <img height={25} src={Logo} alt="logo" />
        </Box>
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
          Create & Share Your Credit Monitoring Account
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
                  id="first_name"
                  label="First name"
                  autoComplete="first_name"
                  variant="filled"
                  size="small"
                  {...getFieldProps("first_name")}
                  error={!!!!touched.first_name && !!errors.first_name}
                  helperText={touched.first_name && errors.first_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="last_name"
                  label="Last name"
                  autoComplete="last_name"
                  variant="filled"
                  size="small"
                  {...getFieldProps("last_name")}
                  error={!!!!touched.last_name && !!errors.last_name}
                  helperText={touched.last_name && errors.last_name}
                />
              </Grid>
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
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="ss_number"
                  label="Social security number"
                  autoComplete="ss_number"
                  variant="filled"
                  size="small"
                  {...getFieldProps("ss_number")}
                  error={!!!!touched.ss_number && !!errors.ss_number}
                  helperText={touched.ss_number && errors.ss_number}
                />
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  type="date"
                  required
                  fullWidth
                  id="dob"
                  label="Date of Birth"
                  variant="filled"
                  size="small"
                  {...getFieldProps("dob")}
                  error={!!!!touched.dob && !!errors.dob}
                  helperText={touched.dob && errors.dob}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoComplete="city"
                  variant="filled"
                  size="small"
                  {...getFieldProps("city")}
                  error={!!!!touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                />
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="state"
                  label="State"
                  variant="filled"
                  size="small"
                  {...getFieldProps("state")}
                  error={!!!!touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                />
              </Grid>
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="zip_code"
                  label="Zip Code"
                  variant="filled"
                  size="small"
                  {...getFieldProps("zip_code")}
                  error={!!!!touched.zip_code && !!errors.zip_code}
                  helperText={touched.zip_code && errors.zip_code}
                />
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  variant="filled"
                  size="small"
                  {...getFieldProps("phone")}
                  error={!!!!touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
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
              <Grid item xs={12}>
                <TextField
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                  fullWidth
                  label="Confirm password"
                  id="password2"
                  variant="filled"
                  size="small"
                  type={showPassword ? "text" : "password"}
                  {...getFieldProps("password2")}
                  error={!!!!touched.password2 && !!errors.password2}
                  helperText={touched.password2 && errors.password2}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
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
