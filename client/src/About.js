import React from "react";
import './About.css';

export const About = () => {
    return(
        <div>
            <h1>Tech</h1>
            <div className="about">
            <div className="tech">
              <p className="title">Development</p>
              <div className="blue"> React, Node.js, Fetch API, MySQl (Amazon RDS)</div>
              <img src="img/client.png" alt="React" height="200px" />
                <img src="img/server.png" alt="Node.js" height="200px" /><br/>
              <p className="title">Deployment</p>
              <div className="blue"> 
              (1) hosting: AWS 
              (2) <a rel="GitHub" href="https://github.com/A-Line-of-Code/MailBox.git" target="_blank">Docker deployment files</a><br/>
              </div>
            </div>
            </div>
        </div>
        )
}
