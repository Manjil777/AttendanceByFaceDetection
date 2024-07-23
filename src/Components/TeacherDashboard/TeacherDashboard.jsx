import React from 'react';
import { Outlet } from 'react-router-dom';
import './TeacherDashboard.css';
import Header from '../AdminDashboard/Header/Header'; // Assuming you're reusing the Header
import TeacherSidebar from './TeacherSidebar/TeacherSidebar';

const TeacherDashboard = () => {
  return (
    <div className="teacher-dashboard">
      <TeacherSidebar />
      <div className="main-content">
        <Header head='Teacher'/>
        <Outlet /> 
      </div>
    </div>
  );
};

export default TeacherDashboard;