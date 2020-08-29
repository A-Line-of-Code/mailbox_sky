
import React from "react";
import './About.css';

export const About = () => {
    return(
        <div>
            <h1>TECH</h1>
            <div className="about">
            <div className="tech">
              <h3 className="blue">Development</h3>
              <h3 className="tech"> React, Node.js, MySQL, AWS </h3>
              <h3> Responsive CSS, API </h3>
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