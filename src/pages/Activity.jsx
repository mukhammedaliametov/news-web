import React from "react";
import "../styles/Activity.scss";
import { ActivityItems } from "../Components/ActivityItmes";

const Activity = () => {
  return (
    <div className="activity" id="activity">
      <h1 className="section-title">Our Activity</h1>
      <div className="activitys">
        {ActivityItems.map((item, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-front">
                <img src={item.icon} alt="" />
                <h1>{item.title}</h1>
              </div>
              <div className="card-back">
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
