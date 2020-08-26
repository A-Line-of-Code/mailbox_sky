import React from "react";

export const Letter = (props) => {
   
    return(
        <div>
         <h2 className="dear">{props.receiver}</h2>
        <div className="container">
            <img class= "img" src = {props.img} alt="img" height="300px"/> <br />
            <div className="msg">        
                {props.msg}<br />{props.msg2}
                <br /><br />
                <div className="from">
                Kind regards, <br />
                Sky.
                </div>
            </div>
        </div>
        </div>
    )
    
}