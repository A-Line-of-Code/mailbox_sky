import React from "react";
import './About.css';

export const About = () => {
    return(
        <div>
            <h1>TECH</h1>
            <div className="about">
            <div className="tech">
              <p className="blue">Development</p>
              <div className="tech"> React, Node.js, Fetch API, MySQL, AWS</div><br />
              <img class="img" src="/img/react.jpg" alt="React" height="300px" /> &nbsp;
                <img class="img" src="/img/node.jpg" alt="Node.js" height="300px" /><br/><br/>              
              <div className="tech">              
              <a rel="GitHub" href="https://github.com/A-Line-of-Code" target="_blank">GitHub</a> &nbsp;&nbsp;
              <a rel="Blog" href="https://portfoliosky.azurewebsites.net/" target="_blank">Portfolio</a><br/>
              </div>
            </div>
            </div>
        </div>
        )
}