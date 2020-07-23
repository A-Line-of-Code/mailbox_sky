import React, {Component} from 'react';

class TOC extends Component{
    render() {      
      return (
        <form className="App-sender" action="/create_process" method="post"
         onSubmit={function(e){
           alert("create");
           e.preventDefault();
         }
         .bind(this)}>
        From &nbsp;
        <input type="text" /><br />
        To &nbsp;
        <input type="text" /><br />
        PW &nbsp;
        <input type="text" /><br />
        <input type="submit" />    
        </form>
      );
    }
  }

  export default TOC;