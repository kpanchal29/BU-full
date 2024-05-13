import React from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  return (
    <div className="flex justify-around items-center bg-black text-white h-20 px-8">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold">Admin Panel</h1>
      </div>
      <Link to="/" className="px-4 py-2  bg-red-600 rounded-md hover:bg-red-700 text-white">Sign Out</Link>
    </div>
  );
};

export default AdminHeader;
