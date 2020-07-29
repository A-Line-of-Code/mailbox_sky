import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './App.css';

export const Home = () => {

  const [to, setTo] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()  

  const submit = ()=> {      
    callApi2()  
    .then(resp => {
      if(resp.status===(200)){
        history.push("/read")
      }else{
      alert("incorrect")
      }
    })
  }

  const callApi2 = async () => {
    return await fetch("/api/read", {            
      method: "POST", 
      mode: 'cors',     
      headers: { 
          "Content-type": "application/json"
      },
      body: JSON.stringify({ 
        to: to, 
        password: password               
      })        
    })
  };

const about = () =>{history.push("/about")}
   return(
             
        <div className="App">
        <img src="img/mail1.jpg" width="10%" alt="mail"/>
        <h1 className="app-title">Mail Box</h1>
        <div className="App-sender" >
                   
          To &nbsp;
          <input value={to} onChange={(event)=>setTo(event.target.value)} type="text" /><br />
          PW &nbsp;
          <input value={password} onChange={(event)=>setPassword(event.target.value)}type="password" /><br />
          <button type="button" className="button" onClick={submit}>submit</button>   
          </div>          
          <p onClick={about} className="test">
            ABOUT
          </p> 
        </div>  
    )    
}