import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          个人网站
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              首页
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">
              简历
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;