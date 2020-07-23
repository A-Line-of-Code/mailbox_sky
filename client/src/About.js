import React from "react";
import './App.css';
import {Tech} from "./components/tech"

export const About = () => {
      
    const tech = [
    {
        "name":"1", 
        "img" : "1",
        "msg" : "1"
    },
    {
        "name":"11", 
        "img" : "11",
        "msg" : "11"
    }
    ]
        
        
    return(
        <div>
            <h1>About</h1>
              {tech.map(c=> {
                  return(
                    <Tech name={c.name} img={c.img} msg={c.msg} />
                  )
              })}
        </div>
        )
}
