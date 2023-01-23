import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { TabPanel } from "../Tabs";
import ListView from "./disputeDetails/ListView";

const DisputeDetails = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "inherit",
        marginRight: "2em",
        padding: "1.5em",
        border: `1px solid ${theme.palette.grey[300]}`,
      }}
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="List view"
          />
          <Tab
            sx={{
              fontSize: "1rem",
              textTransform: "none",
            }}
            label="Report view"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ListView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>Item Two</Box>
      </TabPanel>
    </Box>
  );
};

export default DisputeDetails;
