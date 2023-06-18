import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/about-img.png";
import "../styles/About.scss";
import Img2 from '../assets/about-img2.png'

const About = () => {
  return (
    <div className="about">
      <div className="first-about">
        <div className="text-content">
          <span>About Us</span>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tempore voluptate adipisci illum quidem magni veritatis
            reprehenderit iste eius, nihil est praesentium ducimus et quos,
            placeat repudiandae enim dolor animi?
          </p>
          <Link className="btn">See more</Link>
        </div>
        <img src={Img} alt="" />
      </div>
      <div className="second-about">
        <img src={Img2} alt="" />
        <div className="text-content">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tempore voluptate adipisci illum quidem magni veritatis
            reprehenderit iste eius, nihil est praesentium ducimus et quos,
            placeat repudiandae enim dolor animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            tempore voluptate adipisci illum quidem magni veritatis
            reprehenderit iste eius, nihil est praesentium ducimus et quos,
            placeat repudiandae enim dolor animi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
