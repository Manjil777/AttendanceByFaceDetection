import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AttendanceRecords.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AttendanceRecords = () => {
  const [attendanceData, setAttendanceData] = useState([
    { class: 'Sem 1 A1', subject: 'Web Development', time: '11:00 - 12:45', teacher: 'Niruta Hamal', total: 32, absent: 26, present: 6, date: '2024-06-22' },
    { class: 'Sem 1 A2', subject: 'Computer Programming', time: '11:00 - 12:30', teacher: 'Rajesh Hamal', total: 35, absent: 31, present: 3, date: '2024-06-22' },
    { class: 'Sem 2 A1', subject: 'AI Basics', time: '11:00 - 12:30', teacher: 'Biraj Bhatta', total: 43, absent: 35, present: 35, date: '2024-06-22' },
    { class: 'Sem 2 A2', subject: 'Machine Learning', time: '11:00 - 1:30', teacher: 'Nikhil Upreti', total: 37, absent: 29, present: 29, date: '2024-06-22' },
    { class: 'Sem 6 A3', subject: 'Cyber Security', time: '11:00 - 12:45', teacher: 'Man Bahadur Thakur', total: 30, absent: 30, present: 30, date: '2024-06-22' },
    { class: 'Sem 1 A1', subject: 'Data Science', time: '11:00 - 12:45', teacher: 'Shakti Kumar', total: 40, absent: 32, present: 32, date: '2024-06-22' },
    { class: 'Sem 1 A1', subject: 'Web Development', time: '11:00 - 12:45', teacher: 'Niruta Hamal', total: 32, absent: 26, present: 6, date: '2024-06-23' },
    { class: 'Sem 1 A2', subject: 'Computer Programming', time: '11:00 - 12:30', teacher: 'Rajesh Hamal', total: 35, absent: 31, present: 3, date: '2024-06-23' },
    { class: 'Sem 2 A1', subject: 'AI Basics', time: '11:00 - 12:30', teacher: 'Biraj Bhatta', total: 43, absent: 35, present: 35, date: '2024-06-23' },
    { class: 'Sem 2 A2', subject: 'Machine Learning', time: '11:00 - 1:30', teacher: 'Nikhil Upreti', total: 37, absent: 29, present: 29, date: '2024-06-23' },
    { class: 'Sem 6 A3', subject: 'Cyber Security', time: '11:00 - 12:45', teacher: 'Man Bahadur Thakur', total: 30, absent: 30, present: 30, date: '2024-06-23' },
    { class: 'Sem 1 A1', subject: 'Data Science', time: '11:00 - 12:45', teacher: 'Shakti Kumar', total: 40, absent: 32, present: 32, date: '2024-06-23' },
  ]);
  const [filteredData, setFilteredData] = useState(attendanceData);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [academicDate, setAcademicDate] = useState('');

  useEffect(() => {
    const filtered = attendanceData.filter((entry) => {
      const classMatch = selectedClass === '' || entry.class === selectedClass;
      const subjectMatch = selectedSubject === '' || entry.subject === selectedSubject;
      const dateMatch = academicDate === '' || entry.date === academicDate;
      return classMatch && subjectMatch && dateMatch;
    });
    setFilteredData(filtered);
    setCurrentPage(1); 
  }, [selectedClass, selectedSubject, academicDate, attendanceData]);

  const uniqueClasses = [...new Set(attendanceData.map((entry) => entry.class))];
  const uniqueSubjects = [...new Set(attendanceData.map((entry) => entry.subject))];

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleDateChange = (event) => {
    setAcademicDate(event.target.value);
  };

  return (
    <div className="attendance-container">
      <h2>Attendance</h2>

      <div className="attendance-controls">
        <div className="filter-class">
          <label htmlFor="filterClass">Filter by Class:</label>
          <select id="filterClass" value={selectedClass} onChange={handleClassChange}>
            <option value="">All Classes</option>
            {uniqueClasses.map((classItem) => (
              <option key={classItem} value={classItem}>
                {classItem}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-subject">
          <label htmlFor="filterSubject">Filter by Subject:</label>
          <select id="filterSubject" value={selectedSubject} onChange={handleSubjectChange}>
            <option value="">All Subjects</option>
            {uniqueSubjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <div className="academic-date">
          <label htmlFor="academicDate">Academic Date:</label>
          <input
            type="date"
            id="academicDate"
            value={academicDate}
            onChange={handleDateChange}
          />
          <button className="search-button">Search</button>
        </div>
      </div>

      <div className="attendance-tables">
        <div className="todays-attendance">
          <h3>Todays Attendance</h3>
          <table>
            <thead>
              <tr>
                <th>Class</th>
                <th>Subject</th>
                <th>Time</th>
                <th>Teacher</th>
                <th>Total</th>
                <th>Absent</th>
                <th>Present</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentEntries.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.class}</td>
                  <td>{entry.subject}</td>
                  <td>{entry.time}</td>
                  <td>{entry.teacher}</td>
                  <td>{entry.total}</td>
                  <td>{entry.absent}</td>
                  <td>{entry.present}</td>
                  <td>
                    <Link to={`/admin/attendance/${entry.class}/${entry.subject}`} className="details-button">
                      Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <p>
              Showing {indexOfFirstEntry + 1} to{' '}
              {indexOfLastEntry > filteredData.length ? filteredData.length : indexOfLastEntry} of{' '}
              {filteredData.length} entries
            </p>
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              <FaChevronLeft /> Previous
            </button>
            <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredData.length / entriesPerPage)}>
              Next <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="other-sections">
          <div className="todays-classes">
            <h3>Todays Classes</h3>
            <p>No classes scheduled for today.</p> 
          </div>

          <div className="add-subject">
            <h3>Add Subject</h3>
            <form>
              <div className="form-group">
                <label htmlFor="subjectName">Subject Name:</label>
                <input type="text" id="subjectName" />
              </div>

              <div className="form-group">
                <label htmlFor="class">Class:</label>
                <select id="class">
                  <option value="">Select the Class</option>
                  {/* Add class options here */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subjectCode">Subject Code:</label>
                <input type="text" id="subjectCode" />
              </div>

              <div className="form-group">
                <label htmlFor="teacherName">Teacher Name:</label>
                <select id="teacherName">
                  <option value="">Select the Teacher</option>
                  {/* Add teacher options here */}
                </select>
              </div>

              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceRecords;