import React from 'react';
import './Header.css';
import { FaBell, FaUserCircle } from 'react-icons/fa'; // Import icons

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Admin</h2>
      </div>
      <div className="header-right">
        <FaBell className="iconx notification-icon" />
        <FaUserCircle className="iconx user-icon" />
      </div>
    </header>
  );
};

export default Header;