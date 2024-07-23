import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './TeacherSidebar.css';
import { FaCalendarCheck, FaClock, FaSignOutAlt } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md'; // Import MdDashboard

const TeacherSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="sidebar"> 
      <div className="logo">
        A 
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/teacher/dashboard" className="nav-link">
            <MdDashboard className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher/attendance" className="nav-link">
            <FaCalendarCheck className="icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/teacher/scheduling" className="nav-link">
            <FaClock className="icon" />
          </NavLink>
        </li>
      </ul>
      <button onClick={handleLogout} className="logout-btn">
        <FaSignOutAlt className="icon" />
      </button>
    </div>
  );
};

export default TeacherSidebar;