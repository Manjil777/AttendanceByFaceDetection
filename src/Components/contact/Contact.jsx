import React from 'react';
import './contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', '3e4b2764-5ba6-4bbd-b7c7-98cd82eb1256');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        console.error('Error:', data);
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while submitting the form.');
    }
  };

  return (
    <section className="contact" id='contact'>
      <div className="contact-col top-col">
        <h3>
          Get in Touch{' '}
          <FaEnvelope style={{ marginLeft: '10px', fontSize: '29px' }} />
        </h3>
        <p>
          Have questions? Want to learn more about our effortless attendance
          tracking system? We're here to help!
        </p>

        <div className="contact-row"> 
          <FaEnvelope className="contact-icon" /> 
          <p>contact@youremail.com</p>
        </div>

        <div className="contact-row"> 
          <FaPhoneAlt className="contact-icon" /> 
          <p>+1-555-123-4567</p>
        </div>

        <div className="contact-row"> 
          <FaMapMarkerAlt className="contact-icon" /> 
          <p>123 Main Street, Anytown, USA</p>
        </div>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Phone Number"
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn dark-btn">
            Submit now <FaArrowRight style={{ marginLeft: '10px' }} />
          </button>
        </form>
        {result && <p className="form-result">{result}</p>} 
      </div>
    </section>
  );
};

export default Contact;