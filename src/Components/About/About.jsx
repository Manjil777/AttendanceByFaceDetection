import React from 'react';
import './About.css';
import about_img from '../../Assets/about.png';
import play_icon from '../../Assets/play-icon.png';

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>Revolutionizing Attendance with Cutting-Edge Technology</h3> {/* Title */}
        <h2>Effortless. Accurate. Secure.</h2> {/* Subtitle */}
        <p>
          Our state-of-the-art attendance system leverages the power of 
          facial recognition to provide a seamless and efficient solution
          for educational institutions and businesses alike.  
        </p>
        <p>
          Say goodbye to manual roll calls and unreliable time tracking. 
          Our system ensures accurate attendance records, freeing up 
          valuable time for educators and administrators to focus on what 
          matters most - student success.
        </p> 
      </div>
    </div>
  );
};

export default About;