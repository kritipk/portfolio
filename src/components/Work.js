import "./WorkCardStyles.css"
import React from 'react'
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import p1 from "../assets/p1.avif"
import p2 from "../assets/p2.avif"
import p3 from "../assets/p3.avif"


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work