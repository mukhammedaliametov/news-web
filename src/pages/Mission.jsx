import React from "react";
import '../styles/Mission.scss'
import MissionImg from "../assets/mission.jpg";

const Mission = () => {
  return (
    <div className="mission">
      <img src={MissionImg} alt="" />
      <div className="titles">
        <span>Our Mission</span>
        <h1>Our first priority is to share daily IT news</h1>
        <div className="card">
          <p>
            <i class="fa-solid fa-check"></i> We only share quality news
          </p>
        </div>
        <div className="card">
          <p>
            <i class="fa-solid fa-check"></i> News is shared on the website 24/7
          </p>
        </div>
        <div className="card">
          <p>
            <i className="fas fa-close"></i> The website contains outdated news
          </p>
        </div>
        <div className="card">
          <p>
            <i class="fa-solid fa-check"></i> We do not share fake news
          </p>
        </div>
        <div className="card">
          <p>
            <i className="fas fa-close"></i> All our messages are unofficial
          </p>
        </div>
        <div className="card">
          <p>
            <i class="fa-solid fa-check"></i> Be the first to find IT news on our website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
