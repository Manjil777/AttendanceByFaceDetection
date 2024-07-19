import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './AttendanceDetails.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import userImage1 from '../../../Assets/user-1.png';
import userImage2 from '../../../Assets/user-2.png';
import userImage3 from '../../../Assets/user-3.png';
import userImage4 from '../../../Assets/user-4.png';

const AttendanceDetails = () => {
  const { classId, subjectName } = useParams();
  const [attendanceDetails, setAttendanceDetails] = useState({
    subject: subjectName,
    subjectCode: 'CMP04558',
    teacher: 'Mahesh Pandey',
    duration: '2 Hours',
    time: '11:00 - 1:00',
    roomNo: '101B',
    students: [
      { rollNo: 1, studentName: 'Gishil Kumar Shah', mobNo: '6842018413', status: 'Absent', tAttd: '89%' },
      { rollNo: 2, studentName: 'Cameron Williamson', mobNo: '9800000000', status: 'Present', tAttd: '89%' },
      { rollNo: 3, studentName: 'Cody Fisher', mobNo: '2730175548', status: 'Present', tAttd: '89%' },
      { rollNo: 4, studentName: 'Brooklyn Simmons', mobNo: '5203696212', status: 'Present', tAttd: '89%' },
      { rollNo: 5, studentName: 'Dianne Russell', mobNo: '2377471239', status: 'Present', tAttd: '89%' },
      { rollNo: 6, studentName: 'Courtney Henry', mobNo: '6301937664', status: 'Absent', tAttd: '89%' },
      { rollNo: 7, studentName: 'Leslie Alexander', mobNo: '8527492206', status: 'Present', tAttd: '89%' },
      { rollNo: 8, studentName: 'Savannah Nguyen', mobNo: '0367821221', status: 'Present', tAttd: '89%' },
      { rollNo: 9, studentName: 'Albert Flores', mobNo: '5351022502', status: 'Present', tAttd: '89%' },
      { rollNo: 10, studentName: 'Arlene McCoy', mobNo: '7111924081', status: 'Present', tAttd: '89%' },
      { rollNo: 11, studentName: 'Kristin Watson', mobNo: '3954212189', status: 'Present', tAttd: '89%' },
      { rollNo: 12, studentName: 'Jerome Bell', mobNo: '15605015004', status: 'Absent', tAttd: '89%' },
    ],
  });
  const [filteredStudents, setFilteredStudents] = useState(attendanceDetails.students);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredStudents.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFilterChange = (status) => {
    if (status === 'All') {
      setFilteredStudents(attendanceDetails.students);
    } else {
      setFilteredStudents(attendanceDetails.students.filter(student => student.status === status));
    }
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Function to convert attendanceDetails.students to CSV format
  const handleDownloadCSV = () => {
    const csvData = attendanceDetails.students.map((student) => {
      // Removed Email from CSV data
      return `${student.rollNo},${student.studentName},${student.mobNo},${student.status},${student.tAttd}`;
    }).join('\n');

    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `attendance-${classId}-${subjectName}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="attendance-details-container">
      <div className="back-button">
        <Link to="/admin/attendance"> Back to Attendance </Link>
      </div>
      <h2>Attendance/ Details</h2>
      <div className="attendance-details__container">
        <div className="class-details">
          <h3>Class Details</h3>
          <p>Subject: {attendanceDetails.subject}</p>
          <p>Subject Code: {attendanceDetails.subjectCode}</p>
          <p>Teacher: {attendanceDetails.teacher}</p>
          <p>Duration: {attendanceDetails.duration}</p>
          <p>Time: {attendanceDetails.time}</p>
          <p>Room No: {attendanceDetails.roomNo}</p>
        </div>
        <div className="student-attendance">
          <h3>Student Attendance</h3>
          <div className="attendance-controls">
            <div className="filter-attendance">
              <button className="filter-btn active" onClick={() => handleFilterChange('All')}>
                All
              </button>
              <button className="filter-btn" onClick={() => handleFilterChange('Present')}>
                Present
              </button>
              <button className="filter-btn" onClick={() => handleFilterChange('Absent')}>
                Absent
              </button>
            </div>
            <button className="download-csv" onClick={handleDownloadCSV}>
              CSV
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Mob. Number</th>
                <th>Status</th>
                <th>T. Attd</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((student, index) => (
                <tr key={student.rollNo}>
                  <td>{student.rollNo}</td>
                  <td>
                    <img 
                      src={
                        index === 0 ? userImage1 : 
                        index === 1 ? userImage2 :
                        index === 2 ? userImage3 : 
                        userImage4 
                      } 
                      alt="User" 
                      className="user-image" 
                    />
                    {student.studentName}
                  </td>
                  <td>{student.mobNo}</td> 
                  <td>{student.status}</td>
                  <td>{student.tAttd}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <p>
              Showing {indexOfFirstEntry + 1} to{' '}
              {indexOfLastEntry > filteredStudents.length
                ? filteredStudents.length
                : indexOfLastEntry}{' '}
              of {filteredStudents.length} entries
            </p>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              <FaChevronLeft /> Previous
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredStudents.length / entriesPerPage)
              }
            >
              Next <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetails;