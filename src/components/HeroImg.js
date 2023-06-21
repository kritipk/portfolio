import "./HeroImgstyles.css";
import React from 'react';
import IntroImg from "../assets/1.gif";
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
             <img className="intro-img" src={IntroImg} alt="IntroImg">
             </img>
        </div>
        <div className="content">
          <p>Kriti Pandey</p>
          <h1>Full-Stack Developer</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  );
};

export default HeroImg