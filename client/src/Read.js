import React, { useState, useEffect } from "react";
import './components/comp.css';
import {Letter} from "./components/letter"

export const Read = () => {    
  const [letter, setLetter] = useState("");
  useEffect(() => {
      callApi()    
       .then(resp => setLetter(resp))
  },[]);

   const callApi = async () => {  
      const response = await fetch('/api/letter');
      const body = response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;      
    };

      return(
        <div>            
          {letter ? letter.map(c=> {
            return(
              <Letter key = {c.receiver} receiver={c.receiver} img={c.img} msg={c.msg} msg2={c.msg2} />
            )
            }): ""}
        </div>
        )    
}

