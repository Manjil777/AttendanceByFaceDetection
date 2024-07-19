import React, { useState, useEffect, useRef } from 'react';
import './LiveAttendance.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import userImage1 from '../../../Assets/user-1.png';
import userImage2 from '../../../Assets/user-2.png'; 
import userImage3 from '../../../Assets/user-3.png'; 
import userImage4 from '../../../Assets/user-4.png'; 

const LiveAttendance = () => {
  const [detectedStudents, setDetectedStudents] = useState([
    { rollNo: 7, studentName: 'Cameron Williamson', studentId: 'trungkienspktnd' },
    { rollNo: 8, studentName: 'Jenny Wilson', studentId: 'tienlapspktnd' },
    { rollNo: 3, studentName: 'Kristin Watson', studentId: 'binhan62B' },
    { rollNo: 1, studentName: 'Arlene McCoy', studentId: 'vuhaithuongnute' },
    { rollNo: 4, studentName: 'Annette Black', studentId: 'binhan62B' },
    { rollNo: 6, studentName: 'Bessie Cooper', studentId: 'manhhachk10' },
    { rollNo: 8, studentName: 'Brooklyn Simmons', studentId: 'thuhaang.nute' },
    { rollNo: 9, studentName: 'Esther Howard', studentId: 'danghoang87hi' },
    { rollNo: 5, studentName: 'Cody Fisher', studentId: 'tranthuy.nute' },
    { rollNo: 2, studentName: 'Ronald Richards', studentId: 'ckctm12' },
    { rollNo: 6, studentName: 'Darrell Steward', studentId: 'nvt.isst.nute' },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5; 
  const videoRef = useRef(null);

  const [selectedSem, setSelectedSem] = useState('Sem 1 A1');
  const [selectedSubject, setSelectedSubject] = useState('Web Development');

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // **Replace this placeholder with your face detection logic:**
        // For example, using face-api.js:
        // const detectedFaces = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors(); 
        // Process detectedFaces and update detectedStudents state
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCloseSem = () => {
    setSelectedSem('');
  };

  const handleCloseSubject = () => {
    setSelectedSubject('');
  };

  // Pagination Logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = detectedStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(detectedStudents.length / studentsPerPage)) {
      paginate(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="live-attendance">
      <h2>Live Attendance</h2> <br />
      <div className="live-attendance__container">
        <div className="live-video-section">
          <h3>Live Video</h3>
          <div className="video-controls">
            {selectedSem && (
              <div className="selected-item">
                <span>{selectedSem}</span>
                <button onClick={handleCloseSem}>×</button>
              </div>
            )}
            {selectedSubject && (
              <div className="selected-item">
                <span>{selectedSubject}</span>
                <button onClick={handleCloseSubject}>×</button>
              </div>
            )}
          </div>
          <div className="video-container">
            {/* Placeholder for video */}
            <div className="video-placeholder">
              {/* You can add a placeholder image or loading indicator here */}
              <p>Video Feed</p>
            </div>
          </div>
        </div>

        <div className="detected-students">
          <h3>Detected Student</h3>

          <div className="student-summary">
            <div className="summary-item">
              <h4>Total Detected:</h4>
              <p>{detectedStudents.length}</p>
            </div>
            <div className="summary-item">
              <h4>Latest Detected:</h4>
              <p>{detectedStudents.length > 0
                  ? detectedStudents[detectedStudents.length - 1].studentName
                  : 'None yet'}</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Roll No</th>
                <th>Student Name</th>
                <th>Student ID</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents.map((student, index) => (
                <tr key={student.rollNo}>
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
                  </td>
                  <td>{student.rollNo}</td>
                  <td>{student.studentName}</td>
                  <td className="student-id">{student.studentId}</td> 
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              <FaChevronLeft className="icon" /> Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(detectedStudents.length / studentsPerPage)}
            >
              Next <FaChevronRight className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveAttendance;