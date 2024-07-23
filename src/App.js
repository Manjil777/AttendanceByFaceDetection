import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/contact/Contact';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
// import Sidebar from './Components/AdminDashboard/Sidebar';
// import Header from './Components/AdminDashboard/Header';
import DashboardContent from './Components/AdminDashboard/DashboardContent/DashboardContent';
import AttendanceRecords from './Components/AdminDashboard/AttendanceRecords/AttendanceRecords';
import LiveAttendance from './Components/AdminDashboard/LiveAttendance/LiveAttendance';
import AttendanceDetails from './Components/AdminDashboard/AttendanceDetails/AttendanceDetails';
import TeacherDashboard from './Components/TeacherDashboard/TeacherDashboard';
// import TeacherSidebar from './Components/TeacherDashboard/TeacherSidebar';
import Scheduling from './Components/TeacherDashboard/Scheduling/Scheduling'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'admin' or 'teacher'

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <div className='container'>
              <Title subTitle='OUR SERVICES' title='What We Offer' />
              <Programs />
              <About />
              <Title subTitle='TESTIMONIALS' title='What Student Says' />
              <Testimonials />
              <Title subTitle='CONTACT US' title='Get In Touch' />
              <Contact />
              <Footer />
            </div>
          </>
        } />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes based on user type */}
        {isLoggedIn ? (
          userType === 'admin' ? (
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<DashboardContent />} />
              <Route path="dashboard" element={<DashboardContent />} />
              <Route path="attendance" element={<AttendanceRecords />} />
              <Route path="live-attendance" element={<LiveAttendance />} />
              <Route
                path="attendance/:classId/:subjectName"
                element={<AttendanceDetails />}
              />
            </Route>
          ) : userType === 'teacher' ? (
            <Route path="/teacher" element={<TeacherDashboard />}> 
              <Route index element={<DashboardContent />} /> {/* Reuse MainDashboard */}
              <Route path="dashboard" element={<DashboardContent />} /> {/* Reuse MainDashboard */}
              <Route path="attendance" element={<AttendanceRecords />} /> {/* Reuse Attendance */}
              <Route path="scheduling" element={<Scheduling />} /> {/* Teacher specific component */}
              <Route path="attendance/:classId/:subjectName" element={<AttendanceDetails />} /> {/* Added AttendanceDetails route for Teacher */}
            </Route>
          ) : null
        ) : (
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;