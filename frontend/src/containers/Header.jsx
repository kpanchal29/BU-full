import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import LoginForm from "../components/loginForm";
import LoginFormPopup from "../components/loginFormPopUp";
import CartDrawer from "../components/CartDrawer";

function Header() {
  

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "Home" },
          { text: "Shop" },
          { text: "About us" },
          { text: "Contact us" },
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className=" bg-magic flex justify-center w-screen md:justify-between items-center h-20 sticky px-3 sm:px-24 top-0 z-40">
      <button className="text-white block sm:hidden sm:absolute">
        <IconButton sx={{ color: "white" }} onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </button>
      <h1 className="text-2xl flex text-nowrap mx-10 md:text-3xl md:mx-0 text-white">
        Bea You.
      </h1>
      <div className="flex gap-2 sm:gap-5 text-white">
        <div className="hidden sm:block">
          <ul className="list-none flex gap-5 ">
            <li className="relative inline-block">
              <Link to="/" className="hover:after-underline">
                Home
              </Link>
            </li>
            <li className="relative inline-block">
              <Link to="/shop" className="hover:after-underline">Shop</Link>
            </li>
            <li className="relative inline-block">
              <Link to="/aboutUs" className="hover:after-underline">About us</Link>
            </li>
            <li className="relative inline-block">
            <Link to="/contactUs" className="hover:after-underline">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="flex  gap-6">
          <LoginFormPopup />
          <CartDrawer/>
        </div>
      </div>
    </header>
  );
}

export default Header;
