import React from 'react';
import '../styles/Testimonial.scss';
import { TestimonialItems } from '../Components/TestimonialItems';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <h1 className='section-title'>Testimonials</h1>
      <div className="testimonial-cards">
        {TestimonialItems.map((item, index) => {
          return(
            <div className="card" key={index}>
              <img src={item.img} alt="" />
              <h1>{item.name}</h1>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Testimonial;