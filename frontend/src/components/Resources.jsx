import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { resources } from "../utils/data";

const Resources = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.grey[100]}`,
        paddingTop: "10px",
        paddingLeft: "20px",
      }}
    >
      <Typography variant="h5">Resources</Typography>
      <Typography
        variant="body1"
        sx={{ marginTop: "10px", marginBottom: "10px" }}
      >
        FTC Facts for Consumers
      </Typography>

      <>
        {resources.map((resource, i) => (
          <Box
            sx={{
              paddingRight: "20px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="body1"
              fontWeight={700}
              color={theme.palette.grey[700]}
            >
              {resource.heading}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px" }}>
              {resource.content}
            </Typography>
            <a
              href={`${resource.resourceLink}`}
              style={{
                textDecoration: "none",
                color: theme.palette.primary.light,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Download the Complete Document
              </Typography>
            </a>
          </Box>
        ))}
      </>
    </Box>
  );
};

export default Resources;
