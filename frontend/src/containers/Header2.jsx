import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginFormPopup from "../components/loginFormPopUp";

function Header2() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          { text: "Home", link: "/" },
          { text: "Shop", link: "/shop" },
          { text: "About us", link: "/aboutUs" },
          { text: "Contact us", link: "/contactUs" },
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <header className="bg-magic flex justify-between w-screen md:justify-between items-center h-20 sticky px-3 sm:px-24 top-0 z-40">
      <div className="sm:hidden">
        <IconButton
          className="text-white"
          sx={{ color: "white" }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
      <h1 className="text-2xl flex text-nowrap md:text-3xl md:mx-0 text-white">
        Bea You.
      </h1>
      <div className="hidden sm:flex gap-5 text-white">
        <ul className="list-none flex gap-5 ">
          <li className="relative inline-block">
            <Link to="/" className="hover:after-underline">
              Home
            </Link>
          </li>
          <li className="relative inline-block">
            <Link to="/shop" className="hover:after-underline">
              Shop
            </Link>
          </li>
          <li className="relative inline-block">
            <Link to="/aboutUs" className="hover:after-underline">
              About us
            </Link>
          </li>
          <li className="relative inline-block">
            <Link to="/contactUs" className="hover:after-underline">
              Contact us
            </Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <LoginFormPopup />
        </div>
      </div>
    </header>
  );
}

export default Header2;
