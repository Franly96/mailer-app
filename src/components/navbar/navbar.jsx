import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src="/logo.png" className="logo" alt="logo"/>
      </div>
      <ul>
        <li>
          <a href="/inbox">Inbox</a>
        </li>
        <li>
          <a href="/send">Send</a>
        </li>
        <li>
          <a href="/trash">Trash</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
