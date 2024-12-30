import React from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">
          User Dashboard
        </Link>
        <Link to="/login" className="nav-link">
          Admin
        </Link>
        <Link to="/reports" className="nav-link">
          Reports
        </Link>
      </nav>
    </header>
  );
};

export default Header;
