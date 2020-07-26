import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './App.css';

export const Home = () => {

  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()

  const submit = () => {     
      try {
        fetch("/api/read", {            
          method: "POST",          
          body: JSON.stringify({ 
              to: to, 
              password: password               
          }),             
          headers: { 
              "Content-type": "application/json; charset=UTF-8"
          } 
        }) 
       /* if(response.text()==="error"){
          alert("incorrect info");
        }
        else{*/
          history.push("/read")
        /*  }*/
        
      } catch (e) {
        alert(e.message);
      }
    }
    
    const about = () =>{history.push("/about")}
    
    return(
      
        <div className="App">
        <h1 className="app-title">Mail Box</h1>
        <form className="App-sender" onSubmit={submit}>
          From &nbsp;
          <input value={from} onChange={(event)=>setFrom(event.target.value)} type="text" /><br />          
          To &nbsp;
          <input value={to} onChange={(event)=>setTo(event.target.value)} type="text" /><br />
          PW &nbsp;
          <input value={password} onChange={(event)=>setPassword(event.target.value)}type="password" /><br />
          <input type="submit"/>    
          </form>
          
          <p onClick={about} className="test">
            ABOUT
          </p> 
        </div>  
    )    
}
