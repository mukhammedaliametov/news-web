import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="first-footer">
        <Link className="logo" to="/">
          <i class="fa-solid fa-globe"></i> IT.News
        </Link>
        <div className="pages-networks">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/#activity">Activity</Link>
          <div className="networks">
            <a href="">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="second-footer">All rights reserved &copy;2023</div>
    </div>
  );
};

export default Footer;
