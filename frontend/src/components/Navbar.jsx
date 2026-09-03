import React, { useContext } from "react";
import { Link } from 'react-router';

import AuthContext from "../contexts/Auth/AuthContext.js";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  // check user
  // 1. user null
  // 2. user = admin
  // 3. user => normal user

  if (!user) {
    return (
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
        <div className="flex items-center space-x-6">
          <Link to={'/'} className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
          <Link to="/register" className="hover:text-blue-400 transition-colors">Register</Link>
        </div>
      </div>
    );
  } 
  else if (user.role === "ADMIN") {
    return (
      <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
        <div className="flex items-center space-x-6">
          <Link to={'/'} className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to={'/profile'} className="hover:text-blue-400 transition-colors">Profile</Link>
          <Link to={'/'} className="hover:text-blue-400 transition-colors">Dashboard</Link>
          <Link to={'/'} className="hover:text-blue-400 transition-colors">Change PWD</Link>
          <Link to={'/admin/users'} className="hover:text-blue-400 transition-colors">Users</Link>
          <Link to={'/'} className="hover:text-blue-400 transition-colors">AdminDashboard</Link>
        </div>
        <button 
          onClick={logout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors cursor-pointer"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    // normal user
    <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="flex items-center space-x-6">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/profile" className="hover:text-blue-400 transition-colors">Profile</Link>
        <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
        <Link to="/" className="hover:text-blue-400 transition-colors">Change PWD</Link>
      </div>
      <button 
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-colors cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;