import React, { useState, useEffect } from "react";
import './App.css';
import {Tech} from "./components/tech"

export const About = () => {
  
    const [tech, setTech] = useState("");

    useEffect(() => {
        callApi()
         //.then(resp => resp.json())
         .then(resp => setTech(resp))
    });

     const callApi = async () => {
        const response = await fetch('/api/tech');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };

    return(
        <div>
            <h1>About</h1>
              {tech ? tech.map(c=> {
                  return(
                    <Tech key = {c.name} name={c.name} img={c.img} msg={c.msg} />
                  )
              }): ""}
        </div>
        )
}
