import React from "react";
import './About.css';

export const About = () => {
    return(
        <div>
            <h1>Tech</h1>
            <div className="about">
            <div className="tech">
              <p className="blue">Development</p>
              <div className="title"> React, Node.js, Fetch API, MySQl (Amazon RDS)</div><br />
              <img src="/img/react.jpg" alt="React" height="350px" />
                <img src="/img/node.jpg" alt="Node.js" height="350px" /><br/>
              <p className="blue">Deployment</p>
              <div className="title">              
              <a rel="GitHub" href="https://github.com/A-Line-of-Code/MailBox.git" target="_blank">GitHub</a><br/>
              </div>
            </div>
            </div>
        </div>
        )
}