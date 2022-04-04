import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home">HOME</Link>
      <Link to="/review">REVIEW</Link>
      <Link to="/dashboard">DASHBOARD</Link>
      <Link to="/blogs">BLOGS</Link>
    </nav>
  );
};

export default Header;
