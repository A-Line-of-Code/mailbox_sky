import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import './App.css';



export const Home = () => {

    const [from, setFrom] = useState("")
  
    const submit = () =>{
    alert ("/api/read(get)")
    history.push("/read")}
    const history = useHistory()

    const about = () =>{
    history.push("/about")}
    

    return(
      
        <div className="App">
        <h1 className="app-title">Mail Box</h1>
        <form className="App-sender" onSubmit={submit}>
          From &nbsp;
          <input value={from} onChange={(event)=>setFrom(event.target.value)} type="text" /><br />          
          To &nbsp;
          <input type="text" /><br />
          PW &nbsp;
          <input type="text" /><br />
          <input type="submit"/>    
          </form>
          
          <p onClick={about} className="test">
            ABOUT
          </p>
          
        </div>
      
    )
        
}
