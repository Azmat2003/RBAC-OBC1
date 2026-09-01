import React, { useContext } from "react";
import AuthContext from "../contexts/Auth/AuthContext.js";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  // check user
  // 1. user null
  // 2. user = admin
  // 3. user => normal user

  if (!user) {
    return (
      <div>
        <Link>Home</Link>
        <Link>Login</Link>
        <Link>Register</Link>
      </div>
    );
  } else if (user.role === "ADMIN") {
    return (
      <div>
        <Link>Home</Link>
        <Link>Profile</Link>
        <Link>Dashboard</Link>
        <Link>Change PWD</Link>
        <Link>Users</Link>
        <Link>AdminDashboard</Link>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }
  return (
    // normal user
    <div>
      <Link>Home</Link>
      <Link>Profile</Link>
      <Link>Dashboard</Link>
      <Link>Change PWD</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
