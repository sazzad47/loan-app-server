import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../state/features/Auth/authSlice";
import FormCheckBox from "./FormCheckBox";
import FreezeAccount from "./modals/FreezeAccount";
import PhotoId from "./modals/PhotoId";
import PositiveAccount from "./modals/PositiveAccount";
import ProofAddress from "./modals/ProofAddress";
import ScoreSignup from "./modals/ScoreSignup";

const checkBoxLabels = [
  {
    label: "Signup and Share Login Details",
    // label: "Sign Up / Sign In",
    dialog: <ScoreSignup />,
  },
  {
    label: "Upload Photo ID",
    dialog: <PhotoId />,
  },
  {
    label: "Upload proof of address",
    dialog: <ProofAddress />,
  },
  {
    label: "Positive account",
    dialog: <PositiveAccount />,
  },
  {
    label: "Freeze my account",
    dialog: <FreezeAccount />,
  },
];

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { email, first_name, last_name } = useSelector((store) => store.auth);

  return (
    <Box
      sx={{
        padding: "1.5em",
        border: `1px solid ${theme.palette.grey[300]}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          {email ? (
            <>
              <Typography
                variant="h4"
                color={theme.palette.grey[700]}
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                Welcome {first_name} {last_name}
              </Typography>
              <Typography variant="body2" color={theme.palette.grey[700]}>
                Here are a few things we need you to complete.
              </Typography>
            </>
          ) : (
            <>
              <Typography
                variant="h4"
                color={theme.palette.grey[700]}
                sx={{
                  fontSize: "1.5rem",
                }}
              >
                Please Sign In
              </Typography>
            </>
          )}
        </Box>
        <Box>
          {email && (
            <IconButton
              disableRipple
              onClick={() => dispatch(logoutUser())}
              sx={{
                background: theme.palette.error.dark,
                color: theme.palette.grey[100],
                marginLeft: "auto",
              }}
            >
              <LogoutIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Box>
        {checkBoxLabels.map((label, i) => (
          <FormCheckBox key={`${label.label}${i}`} label={label} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
