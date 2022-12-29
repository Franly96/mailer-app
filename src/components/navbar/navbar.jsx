import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img src="/logo.png" className="logo" alt="logo" />
        </Link>
      </div>
      <div className="compose-new">
        <FontAwesomeIcon icon={faPen} />
        <Link to="compose">Compose</Link>
      </div>
      <ul>
        <li>
          <Link to="inbox">Inbox</Link>
        </li>
        <li>
          <Link href="send">Send</Link>
        </li>
        <li>
          <Link to="trash">Trash</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
