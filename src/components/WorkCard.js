import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"
import p1 from "../assets/p1.gif"
import p2 from "../assets/p2.gif"
import p3 from "../assets/p3.gif"


const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="image" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to={props.source} className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard