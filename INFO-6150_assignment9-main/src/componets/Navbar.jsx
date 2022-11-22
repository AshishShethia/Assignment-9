import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link to="/" className="navbar_element">
        Home
      </Link>
      <Link to="/about" className="navbar_element">
        About
      </Link>
      <Link to="/jobs" className="navbar_element">
        Jobs
      </Link>
      <Link to="/contact" className="navbar_element">
        Contact
      </Link>
      
    </div>
  );
};

export default Navbar;
