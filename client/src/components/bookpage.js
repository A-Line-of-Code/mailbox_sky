import React from "react";

export const Bookpage = (props) => {
   
    return(
        <div>
            <div className="left">
                <div className="inside">
                <img src = {props.img} alt="img" height="350px"/>
                </div>
            </div>
            <div className="right">
                <div className="inside">        
                {props.msg}
                
                </div>
            </div>            
        </div>
    )
    
}
