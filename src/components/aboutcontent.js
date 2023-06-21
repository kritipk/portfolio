import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import a1 from '../assets/a1.avif'
import a2 from '../assets/a2.avif'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Full-Stack Developer. I create 
                responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <bubtton className="btn">Contact</bubtton>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={a1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={a2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent