import React from 'react';
import './Programs.css';
import face_det from '../../Assets/Face-Detection.webp'
import face_sec from '../../Assets/Second-pro.jpg'
import face_repo from '../../Assets/Report.jpg'
import { FaSmile, FaRegClock, FaChartLine } from 'react-icons/fa'; // Correct icon import

const Programs = () => {
  return (
    <div className="programs" id='programs'>
      <div className="program">
        <img
          src={face_det}
          alt="Liveness Detection"
        />
        <div className="caption">
          <FaSmile size={60} /> 
          <p>Liveness Detection</p>
        </div>
      </div>

      <div className="program">
        <img
          src={face_sec}
          alt="Real-time Attendance"
        />
        <div className="caption">
          <FaRegClock size={60} />
          <p>Real-time Attendance</p>
        </div>
      </div>

      <div className="program">
        <img
          src={face_repo}
          alt="Detailed Reporting"
        />
        <div className="caption">
          <FaChartLine size={60} />
          <p>Detailed Reporting</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;