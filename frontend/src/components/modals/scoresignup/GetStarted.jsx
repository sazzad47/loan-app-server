import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import reportsImg from "../../../assets/reports-scores-bg.png";

const GetStarted = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.grey[800],
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Let's Get Your Reports And Scores!
          </Typography>
          <Typography variant="body2" color={theme.palette.grey[700]}>
            To create a personalized credit repair plan for you, you'll need a
            credit monitoring <br />
            account that integrates with our software.
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.grey[800],
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            What is Credit Monitoring?
          </Typography>
          <Typography variant="body2" color={theme.palette.grey[700]}>
            Instant access to all 3 credit reports and scores, as well as tools
            to monitor and safeguard <br />
            your identity, boost your score and reach your goals. Getting
            monitoring won't hurt your
            <br />
            credit score.
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.grey[800],
              fontSize: "1.2rem",
              fontWeight: 700,
              marginBottom: "10px",
            }}
          >
            Why Do I Need it?
          </Typography>
          <Typography variant="body2" color={theme.palette.grey[700]}>
            Credit Monitoring is essential for credit repair because it's the
            only way to see real time
            <br /> changes to your reports and scores directly from all 3
            bureaus. If you ever choose to cancel,
            <br /> it just takes 1 click from within your credit monitoring
            account.
            <br />
            credit score.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          alignSelf: "center",
        }}
      >
        <img src={reportsImg} alt="reports-scores" />
      </Box>
    </Box>
  );
};

export default GetStarted;
