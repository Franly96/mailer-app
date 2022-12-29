import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import "./Root.css";

function Root() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
