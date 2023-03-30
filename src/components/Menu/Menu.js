import React from "react";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ContactsIcon from "@mui/icons-material/Contacts";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  Box,
  List, Stack
} from "@mui/material";
import MenuElements from "./MenuElements";

const Menu = () => {
  const menuItems = [
    {
      id: "1",
      text: "Job tracker",
      icon: <WorkHistoryIcon />,
      link: "/b",
    },
    {
      id: "2",
      text: "Companies",
      icon: <BusinessIcon />,
      link: "/companies",
    },
    {
      id: "3",
      text: "Contacts",
      icon: <ContactsIcon />,
      link: "/a",
    },
    {
      id: "4",
      text: "Calendar / Events",
      icon: <CalendarMonthIcon />,
      link: "/events",
    },
  ];

  return (
    <div>
     
     <Box sx={{ width: '100%', height: 56,  bgcolor: 'grey' }}>
        <Stack direction="row" alignItems="center" style={{ color: "white" }}> 
   {/* <p style={{ color: "white", textAlign:'center' }}>Menu</p> */}
          {menuItems.map((menuItem) => {
            return (              
              <MenuElements
                // text={menuItem.text}
                icon={menuItem.icon}
                key={menuItem.id}
                link={menuItem.link}
              />
            );
          })}
        </Stack>
      </Box>
    </div>
  );
};

export default Menu;
