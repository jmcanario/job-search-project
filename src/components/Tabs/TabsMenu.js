import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Phone } from "@mui/icons-material";
import ContactsIcon from "@mui/icons-material/Contacts";
import JobTracker from "../Job-Tracker/JobTracker";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const menuItems = [
  {
    id: "1",
    text: "Job tracker",
    icon: <WorkHistoryIcon />,
    link: "/b",
    content: <JobTracker />,
  },
  {
    id: "2",
    text: "Companies",
    icon: <BusinessIcon />,
    link: "/companies",
    content: "bbbb",
  },
  {
    id: "3",
    text: "Contacts",
    icon: <ContactsIcon />,
    link: "/a",
    content: "ccc",
  },
  {
    id: "4",
    text: "Calendar / Events",
    icon: <CalendarMonthIcon />,
    link: "/events",
    content: "",
  },
];

const TabsMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {menuItems.map((menuItem) => {
            return <Tab {...a11yProps(menuItem.id)} icon={menuItem.icon} key={menuItem.id}/>;
          })}
        </Tabs>
      </Box>

      {menuItems.map((menuItem) => {
        return (
          <TabPanel value={value} index={menuItem.id - 1} key={menuItem.id}>
            {menuItem.content}
          </TabPanel>
        );
      })}
    </Box>
  );
};

export default TabsMenu;
