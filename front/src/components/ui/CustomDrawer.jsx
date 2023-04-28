import React from "react";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Groups2Icon from "@mui/icons-material/Groups2";

const drawerWidth = 260;

const CustomDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <Link to="/language">
          <IconButton aria-label="language">
            <LanguageIcon />
          </IconButton>
        </Link>
      </Toolbar>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/chat">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ChatBubbleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/community">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Groups2Icon />
              </ListItemIcon>
              <ListItemText primary="Community" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
