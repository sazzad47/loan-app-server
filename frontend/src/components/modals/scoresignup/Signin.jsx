import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
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

export default function Signin() {
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
