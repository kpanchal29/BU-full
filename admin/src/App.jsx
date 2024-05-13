import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AdminMain from "./pages/AdminMain";
import AdminNL from "./pages/AdminNL";
import AdminOrders from "./pages/AdminOrders";
import AdminContact from "./pages/AdminContact";
import AdminLogin from "./AdminLogin";
import {  Routes, Route, Router } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin/>} />
        <Route path="/main" element={<AdminMain />} />
        <Route path="/newsletter" element={<AdminNL/>} />
        <Route path="/order" element={<AdminOrders/>} />
        <Route path="/contactus" element={<AdminContact/>} />
      </Routes>
    </>
  );
}

export default App;
