import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import AdminHeader from "../AdminHeader";
import { Link } from "react-router-dom";

const AdminNL = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/newsletter")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="flex h-screen">
        <Drawer
          variant="permanent"
          sx={{
            width: "15%", // Set drawer width to 1/4 of the screen
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: "15%", // Set drawer width to 1/4 of the screen
              backgroundColor: "black",
              color: "white",
              boxSizing: "border-box",
              paddingTop: "50px",
            },
          }}
        >
          <List>
            <ListItem button>
            <Link to="/main">
              <ListItemText primary="User Info" />
            </Link>
            </ListItem>
            <ListItem button>
            <Link to="/newsletter">
              <ListItemText primary="Newsletter Info" />
            </Link>
            </ListItem>
            <ListItem button>
            <Link to="/order">
              <ListItemText primary="Orders Info" />
            </Link>
            </ListItem>
            <ListItem button>
            <Link to="/contactus">
              <ListItemText primary="Contact Info" />
            </Link>
            </ListItem>
          </List>
        </Drawer>
        <div className="flex-grow">
          <div className="overflow-auto">
            {/* Add overflow-auto to enable scrolling */}
            <table className="border-collapse border border-black text-black w-full">
              <thead>
                <tr>
                  <th className="border border-black text-center" colSpan="7">
                    Newsletter Information
                  </th>
                </tr>
                <tr>
                  <th className="border border-white px-4 py-2">ID</th>
                  <th className="border border-white px-4 py-2">Name</th>
                  <th className="border border-white px-4 py-2">Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-white px-4 py-2">{item.id}</td>
                    <td className="border border-white px-4 py-2">{item.name}</td>
                    <td className="border border-white px-4 py-2">{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNL;
