import React, {useRef, useEffect, useState} from "react";
import FlipPage from "react-flip-page";
import {Bookpage} from "./components/bookpage"
import './Book.css';


export const Book = () => {
  console.log("render App");
  let flipPage = useRef(null);

  const onNext = () => {
    flipPage.gotoNextPage();
  };

  const onPrev = () => {
    flipPage.gotoPreviousPage();
  };

  const [page, setPage] = useState("");
  useEffect(() => {
      callApi()    
       .then(resp => setPage(resp))
  },[]);

   const callApi = async () => {       
      const response = await fetch('/api/page');
      const body = response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;      
    };

  return (
    <div id="magazine">
      <FlipPage
      className = "page"
        ref={component => {flipPage = component;}}
        orientation="horizontal"
        width="100%"
        animationDuration={300} 
        disableSwipe="true"        
        flipOnTouch="false"
        flipOnTouchZone="0"
        >        
        
        {page ? page.map(c=> {
            return(
              <article>
              <Bookpage key={c.id} id={c.id} img={c.img} msg={c.msg}/>
              </article>
            )
        }): ""}      
        
        
      </FlipPage>

      <button className="button1" onClick={onPrev}>&#8678;</button>
      <button className="button1" onClick={onNext}>&#8680;</button>
    </div>
  );
}


