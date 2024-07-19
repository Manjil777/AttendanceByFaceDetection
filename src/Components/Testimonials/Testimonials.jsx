import React, { useRef } from 'react';
import './Testimonials.css';
import nextIcon from '../../Assets/next-icon.png';
import backIcon from '../../Assets/back-icon.png';
import user1 from '../../Assets/user-1.png';
import user2 from '../../Assets/user-2.png';
import user3 from '../../Assets/user-3.png';
import user4 from '../../Assets/user-4.png';

const Testimonials = () => {
  const slider = useRef(null);
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) { // Adjusted to account for 4 slides
      tx -= 25; 
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  // Testimonial data (you can customize this further)
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      text: "This attendance system has been a game-changer for our school. It's incredibly accurate and saves us so much time.",
      image: user1,
    },
    {
      id: 2,
      name: 'David Lee',
      location: 'London, UK',
      text: "Implementing this face recognition attendance system has significantly improved our record-keeping and streamlined our operations.",
      image: user2, 
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Sydney, Australia',
      text: "The ease of use and reliability of this system are unmatched. It's made a noticeable difference in our daily routines.",
      image: user3, 
    },
    {
      id: 4,
      name: 'Michael Garcia',
      location: 'Madrid, Spain',
      text: "Highly recommend this attendance system to any institution looking for a modern, efficient, and accurate solution.",
      image: user4,
    },
  ];

  return (
    <div className="testimonials" id='testimonials'>
      <img src={nextIcon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={backIcon} alt="Back" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="slide-item"> 
              <div className="slide">
                <div className="user-info">
                  <img src={testimonial.image} alt={testimonial.name} className="user-img" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
                <p>{testimonial.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Testimonials;