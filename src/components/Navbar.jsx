// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

import photo from "../assets/ecoyaan.jpeg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={photo} alt="Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/about" className="nav-link">
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
