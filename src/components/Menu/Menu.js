import React from "react";

import {
  Box,
  List, Stack
} from "@mui/material";
import MenuElements from "./MenuElements";
import menuItems from '../../db/Dummy_menu'

const Menu = () => {


  return (
    <div>
     {menuItems}
     <Box sx={{ width: '100%', height: 56,  bgcolor: 'grey' }}>
        <Stack direction="row" alignItems="center" style={{ color: "white" }}>    
          {menuItems.map((menuItem) => {
            return (              
              <MenuElements
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
