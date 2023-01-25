import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormGroup, MenuItem, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const providers = [
  "CreditHeroScore",
  "IdentifyIQ",
  "SmartCredit",
  "MyFreeScoreNow",
  "MyScoreIQ",
  "PrivacyGuard",
];

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        <Button
          variant="contained"
          disableRipple
          sx={{ textTransform: "none" }}
        >
          Change Password
        </Button>
        <Typography
          variant="body1"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Login Details for Credit Monitoring
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
            label="Report provider"
            fullWidth
            size="small"
          >
            <MenuItem value="">Select Report provider</MenuItem>
            {providers.map((provider) => (
              <MenuItem key={provider} value={provider}>
                {provider}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            sx={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
            type="text"
            placeholder="Enter other report provider name"
            size="small"
            fullWidth
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
            label="Username"
            type="text"
            placeholder="Username"
            size="small"
            fullWidth
          />
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            required
            fullWidth
            label="Password"
            id="password"
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
            type="text"
            placeholder="Security Word(If you created one)"
            size="small"
            fullWidth
          />
        </FormGroup>
        <Button
          variant="contained"
          disableRipple
          sx={{ textTransform: "none" }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
