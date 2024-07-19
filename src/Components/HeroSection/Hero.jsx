import React from 'react';
import { Link } from 'react-router-dom'; // Import Link 
import './Hero.css';
import dark_arrow from '../../Assets/dark-arrow.png';

const Hero = () => {
  return (
    <section className='hero container' id='hero'>
      <div className="hero-text">
        <h1>Effortless Attendance Tracking with Face Recognition</h1>
        <p>
          Simplify and automate your attendance management. Our advanced face recognition technology 
          accurately records attendance, saving you time and ensuring reliable records. 
          Ready to experience the future of attendance?
        </p>
        <Link to="/login" className='btn'> {/* Use Link component */}
          Get Started <img src={dark_arrow} alt="icon_login" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;