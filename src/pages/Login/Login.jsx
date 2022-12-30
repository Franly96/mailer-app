import React, { useContext, useState } from "react";
import { redirect } from "react-router-dom";
import UserContext from "../../authentication/UserContext";
import { login } from "../../services/AuthService";
import "./Login.css";

function Login() {
  const [, setCurrentUser] = useContext(UserContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentUser(email);
    login(email);
    redirect("/");
  };
  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="Mail Subject"
          id="subject"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
