import React from "react";
import './About.css';

export const About = () => {
    return(
        <div>
            <h1>Tech</h1>
            <div className="about">
            <div className="tech">
              <p className="blue">Development</p>
              <div className="tech"> React, Node.js, Fetch API, MySQl (Amazon RDS)</div><br />
              <img src="/img/react.jpg" alt="React" height="300px" />
                <img src="/img/node.jpg" alt="Node.js" height="300px" /><br/><br/>              
              <div className="tech">              
              <a rel="GitHub" href="https://github.com/A-Line-of-Code/MailBox.git" target="_blank">GitHub</a><br/>
              </div>
            </div>
            </div>
        </div>
        )
}