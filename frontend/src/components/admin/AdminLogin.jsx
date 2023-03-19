import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Grid,
  TextField,
  IconButton,
} from "@mui/material";
import * as yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormikProvider, useFormik } from "formik";
import { login } from "../../state/features/Auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email } = useSelector((store) => store.auth);

  const formik = useFormik({
    initialValues,
    validationSchema: userSchema,
    onSubmit(values) {
      const { email, password } = values;
      console.log({ email, password });
      //dispatch
      dispatch(login({ email, password }));
    },
  });

  const { getFieldProps, touched, errors, handleSubmit } = formik;

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    if (email === "roxtaylor15@gmail.com") {
      navigate("/admin");
    }
  });
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
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
              Sign In
            </Button>

            {errors && <p style={{ color: "red" }}>Only Admins allowed!</p>}
          </Box>
        </FormikProvider>
      </Box>
    </Box>
  );
};

export default AdminLogin;
