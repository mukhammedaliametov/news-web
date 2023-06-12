import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.jpg";
import "../styles/Home.scss";
import Dealers from "../Components/Dealers";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="titles">
          <h1>
            You can get information and news about IT through this website
          </h1>
          <p>
            Inavatcion technologies are developing day by day. Welcome to the
            website where you can get all the information about IT through this
            website!
          </p>
          <Link to="/news" className="btn">
            News
          </Link>
        </div>
        <img src={heroBg} alt="" />
      </div>
      <Dealers />
    </>
  );
};

export default Home;
