import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import AdminHeader from "../AdminHeader";
import { Link } from "react-router-dom";

const AdminOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/orders")
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
                  <th className="border border-black text-center" colSpan="11">
                    Orders Information
                  </th>
                </tr>
                <tr>
                  <th className="border border-white px-4 py-2">ID</th>
                  <th className="border border-white px-4 py-2">Customer Name</th>
                  <th className="border border-white px-4 py-2">Address</th>
                  <th className="border border-white px-4 py-2">Apartment</th>
                  <th className="border border-white px-4 py-2">City</th>
                  <th className="border border-white px-4 py-2">State</th>
                  <th className="border border-white px-4 py-2">Pincode</th>
                  <th className="border border-white px-4 py-2">Items</th>
                  <th className="border border-white px-4 py-2">Cart Total</th>
                  <th className="border border-white px-4 py-2">Quantity</th>
                  <th className="border border-white px-4 py-2">Created at</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-white px-4 py-2">{item.id}</td>
                    <td className="border border-white px-4 py-2">{item.customer_name}</td>
                    <td className="border border-white px-4 py-2">{item.address}</td>
                    <td className="border border-white px-4 py-2">{item.apartment}</td>
                    <td className="border border-white px-4 py-2">{item.city}</td>
                    <td className="border border-white px-4 py-2">{item.state}</td>
                    <td className="border border-white px-4 py-2">{item.postal_code}</td>
                    <td className="border border-white px-4 py-2">{item.item_name}</td>
                    <td className="border border-white px-4 py-2">{item.cart_total}</td>
                    <td className="border border-white px-4 py-2">{item.quantity_of_unique_items}</td>
                    <td className="border border-white px-4 py-2">{item.created_at}</td>
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

export default AdminOrders;
