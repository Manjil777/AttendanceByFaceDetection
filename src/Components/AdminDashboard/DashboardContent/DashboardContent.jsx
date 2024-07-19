import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js'; 
import './DashboardContent.css';
import { FaUserGraduate, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement  // Add LineElement here
);

const DashboardContent = () => {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Attendance',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#626ee3',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'],
    datasets: [
      {
        label: 'Total Students',
        data: [120, 190, 150, 180],
        backgroundColor: '#2b60ec', 
      },
    ],
  };

  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Attendance',
        data: [250, 50],
        backgroundColor: ['#28a745', '#dc3545'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="dashboard-content">
      <h2>Dashboard</h2>

      <div className="charts-container">
        <div className="chart-card">
          <h3>Attendance Trend</h3>
          <Line data={lineChartData} />
        </div>

        <div className="chart-card">
          <h3>Students by Semester</h3>
          <Bar data={barChartData} />
        </div>

        <div className="chart-card">
          <h3>Today's Attendance</h3>
          <Pie data={pieChartData} />
        </div>
      </div>

      <div className="data-summary">
        <div className="summary-card">
          <div className="icon blue-icon">
            <FaUserGraduate />
          </div>
          <div className="data">
            <h4>Total Students</h4>
            <p>540</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="icon green-icon">
            <FaChalkboardTeacher />
          </div>
          <div className="data">
            <h4>Average Attendance</h4>
            <p>85%</p>
          </div>
        </div>

        <div className="summary-card">
          <div className="icon purple-icon">
            <FaBook />
          </div>
          <div className="data">
            <h4>Subjects</h4>
            <p>12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;