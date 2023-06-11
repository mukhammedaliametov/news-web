import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Navbar.scss";

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobile = () => setClick(false)

  return (
    <>
      <div className="header">
        <Link className="logo" to="/">
        <i class="fa-solid fa-globe"></i> IT.News 
        </Link>
        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <li onClick={closeMobile}>
              <i class="fa-solid fa-house"></i>
              <Link to="/">Home</Link>
            </li>
            <li onClick={closeMobile}>
              <i class="fa-solid fa-circle-info"></i>
              <Link to="/about">About</Link>
            </li>
            <li onClick={closeMobile}>
              <i class="fa-sharp fa-solid fa-server"></i>
              <Link to="/services">Services</Link>
            </li>
            <li onClick={closeMobile}>
              <i class="fa-solid fa-newspaper"></i>
              <Link to="/news">News</Link>
            </li>
            <li className="border-b" onClick={closeMobile}>
              <i class="fa-solid fa-address-book"></i>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="networks">
          <a href=""><i class="fa-brands fa-telegram"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
