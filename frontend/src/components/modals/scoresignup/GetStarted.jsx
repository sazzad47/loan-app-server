import { Typography, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import reportsImg from "../../../assets/reports-scores-bg.png";

const GetStarted = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              Welcome to TGIscaleme.com,
            </Typography>
            <Typography variant="body2" color={theme.palette.grey[700]}>
              your trusted partner in credit repair! If you're ready to take
              control of your credit and improve your financial future, follow
              these simple steps to get started:
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                Signup and Create an Account with TGIscaleme.com:
              </Typography>
              Signup and Create an Account with TGIscaleme.com: Visit our
              website at www.tgiscaleme.com and click on the "Sign Up" button to
              create an account. Provide your name, email address, and create a
              password.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Pull Your Credit:
              </Typography>
              Once you've created your account, you can request a free credit
              report from one of the major credit bureaus (Equifax, Experian, or
              TransUnion). This will give you a detailed overview of your credit
              history, including your credit score, outstanding debts, and any
              negative marks on your record.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Schedule a Meeting with a TGI Consultant for Quote:
              </Typography>
              After reviewing your credit report, you can schedule a meeting
              with one of our experienced credit consultants to discuss your
              goals and get a personalized quote for our services. Our
              consultants will work with you to develop a customized plan to
              improve your credit score and financial well-being.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Upload Photo:
              </Typography>
              To verify your identity and ensure the security of your personal
              information, we require a copy of your government-issued photo ID.
              This can be uploaded directly through your account dashboard.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Upload Proof of Address:
              </Typography>
              We also require proof of your current address, such as a utility
              bill or lease agreement. This can also be uploaded through your
              account dashboard.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Positive Accounts:
              </Typography>
              As part of our credit repair process, we work to identify and
              highlight any positive accounts on your credit report. This can
              help to offset any negative marks and improve your overall credit
              score.
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.grey[800],
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                Freeze Accounts:
              </Typography>
              We may also recommend that you freeze certain accounts or limit
              your credit utilization to prevent further damage to your credit
              score. Our consultants will provide guidance on the best
              strategies for your unique situation. By following these steps and
              working with our team of experts at TGIscaleme.com, you can take
              control of your credit and achieve your financial goals. Sign up
              today and get started on the path to financial freedom!
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
      </Box>
    </Box>
  );
};

export default GetStarted;
