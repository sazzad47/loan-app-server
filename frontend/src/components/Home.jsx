import LogoutIcon from "@mui/icons-material/Logout";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React from "react";
import FormCheckBox from "./FormCheckBox";
import FreezeAccount from "./modals/FreezeAccount";
import PhotoId from "./modals/PhotoId";
import PositiveAccount from "./modals/PositiveAccount";
import ProofAddress from "./modals/ProofAddress";
import ScoreSignup from "./modals/ScoreSignup";
import SignAgreement from "./modals/SignAgreement";

const checkBoxLabels = [
  {
    label: "Signup for Credit Hero Score and Share Login Details",
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
    label: "Sign Agreement",
    dialog: <SignAgreement />,
  },
  {
    label: "Freeze my account",
    dialog: <FreezeAccount />,
  },
  {
    label: "Positive account",
    dialog: <PositiveAccount />,
  },
];

const Home = () => {
  const theme = useTheme();

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
          marginBottom: "10px",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h4"
            color={theme.palette.grey[700]}
            sx={{
              fontSize: "1.5rem",
            }}
          >
            Welcome Mike Test
          </Typography>
          <Typography variant="body2" color={theme.palette.grey[700]}>
            Here are a few things we need you to complete.
          </Typography>
        </Box>
        <IconButton
          disableRipple
          sx={{
            background: theme.palette.error.dark,
            color: theme.palette.grey[100],
          }}
        >
          <LogoutIcon />
        </IconButton>
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
