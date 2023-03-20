import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import CreditInfo from "./components/CreditInfo";
import DisputeDetails from "./components/DisputeDetails";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Settings from "./components/Settings";

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function PageTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "Home",
      component: <Home />,
    },
    {
      label: "Dispute Details",
      component: <DisputeDetails />,
    },
    {
      label: "Credit info",
      component: <CreditInfo />,
    },
    {
      label: "Resources",
      component: <Resources />,
    },
    {
      label: "Pull Credit Report",
      component: <Settings />,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          marginLeft: "1.5em",
          marginRight: "1.5em",
          borderBottom: 1,
          borderColor: "divider",
          background: theme.palette.primary.main,
        }}
      >
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: theme.palette.grey[100],
            },
          }}
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: theme.palette.grey[100],
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, i) => (
            <Tab
              sx={{
                textTransform: "none",
                color: theme.palette.grey[100],
              }}
              key={`${tab.label}-${i}`}
              label={tab.label}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, i) => (
        <TabPanel key={`${tab.label}-${i}`} value={value} index={i}>
          {tab.component}
        </TabPanel>
      ))}
    </Box>
  );
}
