import React from "react";
import "../styles/Contact.scss";
import Img from "../assets/contact-img.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <img src={Img} alt="" />
      <div className="form">
        <span>Contact</span>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Your Subject" />
        <textarea placeholder="Write something..."></textarea>
        <button className="btn">Send</button>
        <div className="info">
          <div className="card">
            <i class="fa-solid fa-envelope fa-beat"></i>
            <p>Email</p>
            <span>example@gmail.com</span>
          </div>
          <div className="card">
            <i class="fa-sharp fa-solid fa-location-dot fa-beat"></i>
            <p>Location</p>
            <span>Karakalpakstan, Kanlikul IT Center</span>
          </div>
          <div className="card">
            <i class="fa-solid fa-phone fa-beat"></i>
            <p>Phone Number</p>
            <span>+998(97)240-85-81</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
