import React from 'react';
import { ServicesItems } from '../Components/ServicesItems';
import '../styles/Services.scss';

const Services = () => {
  return (
    <div className='services'>
      <h1>Services</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, minus!</p>
      <div className="cards">
        {ServicesItems.map((item, index) => {
          return(
            <div className="card" key={index}>
              <i className={item.icon}></i>
              <h1>{item.title}</h1>
              <span>{item.desc}</span>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Services;