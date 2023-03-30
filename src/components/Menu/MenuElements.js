import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const MenuElements = ({ text, icon, link }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton to={link} alt={text}>
        <IconButton aria-label={text}>{icon}</IconButton>
      </ListItemButton>
    </ListItem>
  );
};

export default MenuElements;
