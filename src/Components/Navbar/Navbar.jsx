import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Assets/Logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Main-Logo" className="logo" />
      </div>
      <ul>
        <li>
          <ScrollLink to="hero" smooth={true} offset={0} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="programs" smooth={true} offset={-260} duration={500}>
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} offset={-150} duration={500}>
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to="contact" smooth={true} offset={-260} duration={500}>
            Contact us
          </ScrollLink>
        </li>
        <li>
          <Link to="/login" className="get-started">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;