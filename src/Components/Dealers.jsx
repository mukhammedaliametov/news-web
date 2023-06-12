import React from "react";
import "../styles/Dealers.scss";
import Google from "../assets/dealers/Google.png";
import Netlify from "../assets/dealers/Netlify.png";
import GitHub from "../assets/dealers/GitHub.png";
import Vercel from "../assets/dealers/Vercel.png";
import Node from "../assets/dealers/Node.svg";
import Sanity from "../assets/dealers/sanity.svg";

const Dealers = () => {
  return (
    <div className="dealers">
      <h1 className="section-title">Our Dealers</h1>
      <div className="images">
        <img src={Google} alt="" />
        <img src={Netlify} alt="" />
        <img src={GitHub} alt="" />
        <img src={Vercel} alt="" />
        <img src={Node} alt="" />
        <img src={Sanity} alt="" />
      </div>
    </div>
  );
};

export default Dealers;
