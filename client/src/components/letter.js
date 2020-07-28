import React from "react";

export const Letter = (props) => {
   
    return(
        <div>
         <h2 className="dear">{props.receiver}</h2>
        <div className="container">
            <img src = {props.img} alt="img" width="30%"/> <br />
            <div className="msg">        
                {props.msg} <br /><br />
                <div className="from">
                Kind regards, <br />
                Sky.
                </div>
            </div>
        </div>
        </div>
    )
    
}