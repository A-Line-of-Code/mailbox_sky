import React from "react";
import '../About.css';
export const Tech = (props) => {
   
    return(
        <div className="tech">
        name = {props.name} <br />
        <img src = {props.img} alt="img" width="30%"/> <br />
        msg = {props.msg} <br />
        </div>
    )
    
}
