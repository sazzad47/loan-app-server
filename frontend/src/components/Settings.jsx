import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormGroup, MenuItem, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { prepareDataForValidation } from "formik";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../state/api/api";

const providers = ["IdentifyIQ", "SmartCredit"];

const Settings = ({ setValue }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { email } = useSelector((store) => store.auth);

  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(false);
  const [provider, setProvider] = useState({
    report_provider: "",
    username: "",
    password: "",
    phone_no: "",
    security_word: "",
  });

  useEffect(() => {
    const checkProviders = async () => {
      const res = await api.get(`/provider/${email}`);

      if (res.data.length !== 0) {
        setProvider({
          ...provider,
          report_provider: res.data[0].report_provider,
          username: res.data[0].username,
          password: res.data[0].username,
          phone_no: res.data[0].phone_no,
          security_word: res.data[0].security_word,
        });
        setUpdate(true);
      }
    };
    checkProviders();
  }, [update, email]);
  const theme = useTheme();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e) => {
    setProvider({ ...provider, [e.target.name]: e.target.value }); // logs the selected report provider
  };

  const handleProviders = async () => {
    if (update) {
      const upd = await api.put(`/provider/${email}`, {
        email,
        username: provider.username,
        password: provider.password,
        phone_no: provider.phone_no,
        security_word: provider.security_word,
        report_provider: provider.report_provider,
      });
    } else {
      const hasEmptyData = Object.values(provider).includes("");
      if (hasEmptyData) {
        setError(true);
      } else {
        await api.post(`/provider`, {
          email,
          username: provider.username,
          password: provider.password,
          phone_no: provider.phone_no,
          security_word: provider.security_word,
          report_provider: provider.report_provider,
        });
        setError(false);
        setUpdate(true);
      }
    }

    setValue(0);
  };

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[100]}`,
        paddingTop: "10px",
        paddingLeft: "20px",
      }}
    >
      <Box
        sx={{
          padding: "10x",
        }}
      >
        <Typography
          variant="body1"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Complete the form below and submit credentials before proceeding
        </Typography>
      </Box>
      <Box
        component="form"
        maxWidth="md"
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        <FormGroup>
          <TextField
            name="report_provider"
            select
            label="Select Report provider"
            fullWidth
            size="small"
            onChange={(e) => handleChange(e)}
          >
            {providers.map((provider) => (
              <MenuItem key={provider} value={provider}>
                {provider}
              </MenuItem>
            ))}
          </TextField>

          {provider.report_provider && (
            <Box
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                border: "1px solid #666",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                Open account at this link and complete credentials below
              </Typography>
              <a
                href={
                  provider.report_provider === "IdentifyIQ"
                    ? "https://member.identityiq.com/sc-securemax.aspx?offercode=431270YT"
                    : "https://www.smartcredit.com/?PID=60610"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h4"
                  style={{ color: "blue", textAlign: "center" }}
                >
                  {provider.report_provider === "IdentifyIQ"
                    ? "https://member.identityiq.com/sc-securemax.aspx?offercode=431270YT"
                    : "https://www.smartcredit.com/?PID=60610"}
                </Typography>
              </a>
            </Box>
          )}
        </FormGroup>
        <FormGroup>
          <TextField
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Username"
            type="text"
            value={provider.username}
            placeholder="Username"
            size="small"
            name="username"
            fullWidth
            onChange={(e) => handleChange(e)}
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
            label="Password"
            id="password"
            name="password"
            value={provider.password}
            onChange={(e) => handleChange(e)}
            autoComplete="new-password"
            size="small"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
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
        </FormGroup>
        <FormGroup>
          <TextField
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Phone number"
            name="phone_no"
            value={provider.phone_no}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Phone number"
            size="small"
            fullWidth
          />
          <TextField
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            label="Security Word(If you created one)"
            name="security_word"
            value={provider.security_word}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Security Word(If you created one)"
            size="small"
            fullWidth
          />
        </FormGroup>
        {error && (
          <p style={{ color: "red" }}>
            Please fill out all fields before submitting.
          </p>
        )}
        <Button
          variant="contained"
          disableRipple
          sx={{ textTransform: "none" }}
          onClick={handleProviders}
        >
          {update ? "Update" : "Submit Credentials"}
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
