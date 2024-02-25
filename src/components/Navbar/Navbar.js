import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link to="/" className="logo">
          Claract.
        </Link>
      </div>
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <Link to="/about" className="nav-link">
            About
          </Link> */}
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>
        <Link to="/cart" className="nav-link-contact">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
