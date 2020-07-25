import React, { useState, useEffect } from "react";
import './components/comp.css';
import {Letter} from "./components/letter"

export const Read = () => {

    
    const [letter, setLetter] = useState("");

    useEffect(() => {
        callApi()
         //.then(resp => resp.json())
         .then(resp => setLetter(resp))
    });

     const callApi = async () => {
        const response = await fetch('/api/read');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
      };

      return(
        <div>            
              {letter ? letter.map(c=> {
                  return(
                    <Letter key = {c.receiver} receiver={c.receiver} img={c.img} msg={c.msg} />
                  )
              }): ""}
        </div>
        )
    
}
