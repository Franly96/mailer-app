import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useContext } from "react";
import { Link, redirect } from "react-router-dom";
import UserContext from "../../authentication/UserContext";
import { logout } from "../../services/AuthService";
import "./navbar.css";

function Navbar() {
  const [ currentUser ] = useContext(UserContext);
  const handleLogout = function() {
    logout();
    redirect("/")
  };
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
          <Link to={"inbox"}>Inbox</Link>
        </li>
        <li>
          <Link to={"send"}>Send</Link>
        </li>
        <li>
          <Link to={"trash"}>Trash</Link>
        </li>
      </ul>
      <div className="user-name">{currentUser}</div>
      <div className="logout" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}

export default Navbar;
