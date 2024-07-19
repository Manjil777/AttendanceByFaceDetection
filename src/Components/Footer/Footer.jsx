import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer"> {/* Changed to <footer> for semantic HTML */}
      <p>© 2024 Attendees. All rights reserved.</p> {/* Added copyright symbol */}
      <ul>
        <li>
          <a href="#terms">Terms of Service</a> {/* Added links */}
        </li>
        <li>
          <a href="#privacy">Privacy Policy</a> {/* Added links */}
        </li>
      </ul>
    </footer>
  );
};

export default Footer;