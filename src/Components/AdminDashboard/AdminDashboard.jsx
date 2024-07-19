import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './AdminDashboard.css';
import Header from './Header/Header';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Outlet /> 
      </div>
    </div>
  );
};

export default AdminDashboard;