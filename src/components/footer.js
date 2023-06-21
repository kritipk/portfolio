import "./FooterStyles.css"

import React from 'react'
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginLeft:"2rem"}}/>
                    <div>
                        <p>Delhi, India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginLeft:"2rem"}}/>   +91-9319328637</h4>
                </div>
                <div className="gmail">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginLeft:"2rem"}}/>   unnatisamaiyar02@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>This is me Kriti Pandey, Full-Stack Developer. 
                    I enjoy exploring new opportunities in Computer science field.</p>
                <div className="social">
                    <FaFacebook
                    size={30}
                    style={{color:"#fff", marginRight:"1rem"}} />
                    <FaTwitter
                    size={30}
                    style={{color:"#fff", marginRight:"1rem"}} />
                    <FaLinkedin
                    size={30}
                    style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer