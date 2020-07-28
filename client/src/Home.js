import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import './App.css';

export const Home = () => {

  const [to, setTo] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()


  
  
  const read = () => {history.push("/read") }
  const error = () => {alert("Incorrect.");}

/*
  const submit = () => {
    return new Promise((resolve,reject)=>{
    fetch("/api/read", {            
        method: "POST", 
        mode: 'cors',     
        headers: { 
            "Content-type": "application/json"
        },
        body: JSON.stringify({ 
          to: to, 
          password: password               
      })        
    }).then(res => console.log(res)) 
  }) 
  }
*/
/*

const submit = e => {
  e. preventDefault()
 add()
  
}

  const add = () =>{
   axios({
      method: "post",
      url: "/api/read",
      data:{
        to: to, 
        password: password             
    }
    })
    .then((response) => { 
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
*/
/*
  const test=() => {
    e.preventDefault()
    submit()
        .then((response) => {
            console.log(response.data);
        })
  };
  

    const submit = async () => {     
      addCustomer = () => {
        const url = '/api/read';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
              "Content-type": "application/json;'
            }
        }
        return post(url, formData, config);
    }
      const response = await fetch("/api/read", {            
        method: "POST",          
        body: JSON.stringify({ 
            to: to, 
            password: password               
        }),             
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
      });
      
      return response.body
      
  }
  */

const submit = e=> {     
  e.preventDefault()
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
    .then((response) => {
            console.log(response.data);
        })
}


const about = () =>{history.push("/about")}


    return(
             
        <div className="App">
        <img src="img/mail1.jpg" width="10%" alt="mail"/>
        <h1 className="app-title">Mail Box</h1>
        <form className="App-sender" onSubmit={submit}>
                   
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