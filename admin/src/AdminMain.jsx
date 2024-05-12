import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import AdminHeader from "./AdminHeader";

const AdminMain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/signup")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    <AdminHeader/>
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
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Orders" />
          </ListItem>
        </List>
      </Drawer>
      <div className="flex-grow">
        <div className="overflow-auto"> {/* Add overflow-auto to enable scrolling */}
          <table className="border-collapse border border-black text-black w-full">
            <thead>
              <tr>
                <th className="border border-white px-4 py-2">ID</th>
                <th className="border border-white px-4 py-2">User Name</th>
                <th className="border border-white px-4 py-2">First Name</th>
                <th className="border border-white px-4 py-2">Last Name</th>
                <th className="border border-white px-4 py-2">Email</th>
                <th className="border border-white px-4 py-2">Phone</th>
                <th className="border border-white px-4 py-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-white px-4 py-2">{item.id}</td>
                  <td className="border border-white px-4 py-2">{item.userName}</td>
                  <td className="border border-white px-4 py-2">{item.firstName}</td>
                  <td className="border border-white px-4 py-2">{item.lastName}</td>
                  <td className="border border-white px-4 py-2">{item.email}</td>
                  <td className="border border-white px-4 py-2">{item.phone}</td>
                  <td className="border border-white px-4 py-2">{item.password}</td>
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

export default AdminMain;
